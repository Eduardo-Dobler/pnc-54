(() => {
  'use strict';
  const button = document.querySelector('#install-app');
  const dialog = document.querySelector('#install-dialog');
  const hint = document.querySelector('#install-hint');
  const status = document.querySelector('#app-status');
  const update = document.querySelector('#update-app');
  const standalone = matchMedia('(display-mode: standalone)');
  let promptEvent = null;
  let registration = null;
  let offlineReady = false;
  let updating = false;
  const isInstalled = () => standalone.matches || navigator.standalone === true;
  const showInstall = () => { button.hidden = isInstalled(); };
  const showStatus = () => {
    status.textContent = navigator.onLine
      ? (offlineReady ? 'Pronto para consultar sem internet.' : '')
      : (offlineReady ? 'Sem internet · exibindo conteúdo salvo.' : 'Sem conexão. Conecte-se para preparar o acesso offline.');
  };
  showInstall();
  showStatus();
  standalone.addEventListener?.('change', showInstall);
  window.addEventListener('online', showStatus);
  window.addEventListener('offline', showStatus);
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    promptEvent = event;
    showInstall();
  });
  window.addEventListener('appinstalled', () => {
    promptEvent = null;
    button.hidden = true;
    dialog.close();
  });
  button.addEventListener('click', async () => {
    if (promptEvent) {
      const pending = promptEvent;
      promptEvent = null;
      try { await pending.prompt(); await pending.userChoice; }
      catch { hint.textContent = 'Abra o menu do navegador e procure Instalar app ou Adicionar à tela inicial.'; dialog.showModal(); }
      return;
    }
    hint.textContent = location.protocol === 'file:'
      ? 'Para instalar, abra o endereço publicado do PNC com conexão à internet. O arquivo local permite apenas visualizar o site.'
      : 'No Android, abra o menu do navegador e procure Instalar app ou Adicionar à tela inicial. No iPhone, abra no Safari, toque em Compartilhar e em Adicionar à Tela de Início. Se aparecer, ative Abrir como App da Web.';
    dialog.showModal();
  });
  document.querySelector('#close-install').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => button.focus({ preventScroll: true }));
  update.addEventListener('click', () => {
    if (!registration?.waiting) return;
    updating = true;
    update.disabled = true;
    update.textContent = 'Atualizando…';
    registration.waiting.postMessage({ type: 'ACTIVATE_UPDATE' });
  });
  if (!('serviceWorker' in navigator) || !window.isSecureContext || location.protocol === 'file:') return;
  navigator.serviceWorker.addEventListener('message', event => {
    if (event.data?.type === 'OFFLINE_READY') { offlineReady = true; showStatus(); }
  });
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (updating) { location.reload(); return; }
    navigator.serviceWorker.controller?.postMessage({ type: 'CHECK_OFFLINE' });
  });
  navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' }).then(reg => {
    registration = reg;
    const checkUpdate = () => { update.hidden = !reg.waiting; };
    checkUpdate();
    reg.addEventListener('updatefound', () => {
      const worker = reg.installing;
      worker?.addEventListener('statechange', () => {
        if (worker.state === 'installed') checkUpdate();
      });
    });
    navigator.serviceWorker.ready.then(() => {
      navigator.serviceWorker.controller?.postMessage({ type: 'CHECK_OFFLINE' });
    });
  }).catch(() => {
    status.textContent = 'Acesso offline indisponível neste navegador. Você pode continuar usando o site online.';
  });
})();
