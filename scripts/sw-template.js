/* Gerado por scripts/build-offline.py. Não editar sw.js manualmente. */
const CACHE_PREFIX = 'pnc54-app-';
const CACHE_NAME = CACHE_PREFIX + '__VERSION__';
const FILES = __FILES__;
const BASE = self.registration.scope;
const SHELL = new URL('index.html', BASE).href;
const ALLOWED = new Set(FILES.map(path => new URL(path, BASE).href));

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      // Verifica o HTML antes de salvar: nunca armazena redirecionamento de login.
      const response = await fetch(new Request(SHELL, { cache: 'reload' }));
      if (!response.ok || response.redirected || response.type !== 'basic' ||
          !response.headers.get('content-type')?.includes('text/html') ||
          !(await response.clone().text()).includes('name="application-name" content="PNC 54"')) {
        throw new Error('App indisponível para cache');
      }
      await cache.put(SHELL, response);
      // Sequencial: uma falha encerra antes da limpeza, sem escritas pendentes.
      for (const path of FILES.filter(path => path !== 'index.html')) {
        const url = new URL(path, BASE).href;
        const asset = await fetch(new Request(url, { cache: 'reload' }));
        if (!asset.ok || asset.redirected || asset.type !== 'basic' || asset.headers.get('content-type')?.includes('text/html')) {
          throw new Error('Recurso indisponível: ' + path);
        }
        await cache.put(url, asset);
      }
    } catch (error) { await caches.delete(CACHE_NAME); throw error; }
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) {
      if (name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME) await caches.delete(name);
    }
    await self.clients.claim();
  })());
});
self.addEventListener('message', event => {
  if (event.data?.type === 'ACTIVATE_UPDATE') event.waitUntil(self.skipWaiting());
  if (event.data?.type === 'CHECK_OFFLINE') event.source?.postMessage({ type: 'OFFLINE_READY' });
});
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== new URL(BASE).origin || url.search) return;
  const navigation = request.mode === 'navigate' && (url.href === BASE || url.href === SHELL);
  if (!navigation && !ALLOWED.has(url.href)) return;
  // Uma versão completa e coerente até o visitante aceitar a atualização.
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    return (await cache.match(navigation ? SHELL : request)) || fetch(request);
  })());
});
