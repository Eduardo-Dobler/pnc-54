const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
function worker(base = 'https://pnc.test/', login = false) {
  const handlers = {}, stores = new Map();
  let online = true, activated = false;
  const key = request => typeof request === 'string' ? request : request.url;
  const caches = {
    async open(name) {
      if (!stores.has(name)) stores.set(name, new Map());
      const store = stores.get(name);
      return { put: async (request, response) => store.set(key(request), response), match: async request => store.get(key(request)) };
    },
    keys: async () => [...stores.keys()],
    delete: async name => stores.delete(name)
  };
  const self = {
    registration: { scope: base }, clients: { claim: async () => {} },
    addEventListener: (event, handler) => { handlers[event] = handler; },
    skipWaiting: async () => { activated = true; }
  };
  const fetch = async request => {
    if (!online) throw new Error('offline');
    const name = new URL(key(request)).pathname.slice(new URL(base).pathname.length);
    assert.ok(fs.existsSync(path.join(root, name)), name);
    const text = fs.readFileSync(path.join(root, name));
    const response = new Response(text, { headers: { 'content-type': name.endsWith('.html') ? 'text/html' : 'application/octet-stream' } });
    Object.defineProperty(response, 'type', { value: 'basic' });
    Object.defineProperty(response, 'redirected', { value: login });
    return response;
  };
  vm.runInNewContext(source, { self, caches, fetch, Request, URL, Set, Error });
  return {
    caches, stores, get activated() { return activated; }, offline() { online = false; },
    async event(name, extra = {}) { let task; handlers[name]({ waitUntil: value => { task = value; }, ...extra }); await task; },
    request(url, mode = 'navigate', method = 'GET') { let result; handlers.fetch({ request: { url, mode, method }, respondWith: promise => { result = promise; } }); return result; }
  };
}
test('instala e abre todas as abas e recursos offline, inclusive em subdiretório', async () => {
  for (const base of ['https://pnc.test/', 'https://pnc.test/projeto/']) {
    const w = worker(base);
    await w.event('install'); await w.event('activate'); w.offline();
    const html = await (await w.request(base)).text();
    for (const page of ['inicio', 'integrantes', 'sobre', 'noticias', 'contatos']) assert.ok(html.includes('data-page="' + page + '"'));
    for (const file of ['data.js', 'app.js', 'pwa.js', 'assets/people/equipe-cavalo.webp', 'assets/propostas-pnc.docx']) {
      assert.ok(await w.request(base + file, 'cors'));
    }
    assert.ok(await w.request(base + 'index.html'));
    assert.equal(w.request(base + 'login'), undefined);
    assert.equal(w.request(base + '?token=secret'), undefined);
    assert.equal(w.request('https://other.test/index.html'), undefined);
    assert.equal(w.request(base, 'navigate', 'POST'), undefined);
  }
});
test('não armazena login redirecionado nem deixa cache incompleto', async () => {
  const w = worker('https://pnc.test/', true);
  await assert.rejects(w.event('install'), /indisponível/);
  assert.equal(w.stores.size, 0);
});
test('ativação limpa apenas versões do PNC e atualização exige mensagem explícita', async () => {
  const w = worker();
  await w.caches.open('pnc54-app-antigo'); await w.caches.open('outro-app');
  await w.event('install'); assert.equal(w.activated, false);
  await w.event('activate');
  assert.ok(w.stores.has('outro-app')); assert.ok(!w.stores.has('pnc54-app-antigo'));
  let message;
  await w.event('message', { data: { type: 'CHECK_OFFLINE' }, source: { postMessage: value => { message = value; } } });
  assert.equal(message.type, 'OFFLINE_READY');
  await w.event('message', { data: { type: 'ACTIVATE_UPDATE' } }); assert.equal(w.activated, true);
});
test('manifesto aponta para ícones PNG com dimensões corretas', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.webmanifest')));
  assert.equal(manifest.display, 'standalone');
  assert.equal(manifest.scope, './');
  for (const icon of manifest.icons) {
    const image = fs.readFileSync(path.join(root, icon.src));
    assert.equal(image.subarray(1, 4).toString(), 'PNG');
    assert.equal(image.readUInt32BE(16) + 'x' + image.readUInt32BE(20), icon.sizes);
  }
});
