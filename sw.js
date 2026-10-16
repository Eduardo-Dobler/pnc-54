/* Gerado por scripts/build-offline.py. Não editar sw.js manualmente. */
const CACHE_PREFIX = 'pnc54-app-';
const CACHE_NAME = CACHE_PREFIX + '979599f30e4cf009';
const FILES = [
  "index.html",
  "styles.css",
  "pwa.css",
  "app.js",
  "data.js",
  "pwa.js",
  "manifest.webmanifest",
  "assets/OFL-Manrope.txt",
  "assets/app/apple-touch-icon.png",
  "assets/app/icon-192.png",
  "assets/app/icon-512.png",
  "assets/app/maskable-512.png",
  "assets/cidade.jpg",
  "assets/comunidade.jpg",
  "assets/educacao.jpg",
  "assets/favicon-cavalo.png",
  "assets/fonts.css",
  "assets/logo-pnc-cavalo.png",
  "assets/manrope-0.ttf",
  "assets/manrope-1.ttf",
  "assets/manrope-2.ttf",
  "assets/manrope-3.ttf",
  "assets/manrope-4.ttf",
  "assets/people/candidato-small.webp",
  "assets/people/candidato.webp",
  "assets/people/equipe-cavalo.webp",
  "assets/people/integrante-01-small.webp",
  "assets/people/integrante-01.webp",
  "assets/people/integrante-02-small.webp",
  "assets/people/integrante-02.webp",
  "assets/people/integrante-03-small.webp",
  "assets/people/integrante-03.webp",
  "assets/people/integrante-04-small.webp",
  "assets/people/integrante-04.webp",
  "assets/people/integrante-05-small.webp",
  "assets/people/integrante-05.webp",
  "assets/people/integrante-06-small.webp",
  "assets/people/integrante-06.webp",
  "assets/people/integrante-07-small.webp",
  "assets/people/integrante-07.webp",
  "assets/people/integrante-08-small.webp",
  "assets/people/integrante-08.webp",
  "assets/people/integrante-09-small.webp",
  "assets/people/integrante-09.webp",
  "assets/people/integrante-10-small.webp",
  "assets/people/integrante-10.webp",
  "assets/propostas-pnc.docx"
];
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
