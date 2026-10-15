/* Navegação, carrossel, publicações e formulário. JavaScript puro, sem bibliotecas. */
(() => {
  'use strict';
  const data = window.PNC_DATA;
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));
  const escapeHTML = (value = '') => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // Os títulos do arquivo de conteúdo aceitam apenas <br> e <em>.
  const titleHTML = value => escapeHTML(value).replace(/&lt;br\s*\/?&gt;/gi, '<br>').replace(/&lt;(\/?)em&gt;/gi, '<$1em>');
  const textTitle = value => String(value).replace(/<br\s*\/?\s*>/gi, ' ').replace(/<\/?em>/gi, '');
  const normalized = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const safeAsset = value => /^assets\/[a-zA-Z0-9_./-]+$/.test(value) && !value.includes('..') ? value : 'assets/logo-pnc.png';
  const safePercent = value => /^\d+(\.\d+)?%$/.test(value) ? value : '50%';
  const iconPaths = {
    home: '<path d="m3 10 9-7 9 7v10H3Z"></path><path d="M9 20v-7h6v7"></path>',
    bus: '<rect x="5" y="3" width="14" height="17" rx="3"></rect><path d="M5 11h14M8 20v2m8-2v2M9 16h.01M15 16h.01"></path>',
    drop: '<path d="M12 2s-7 8-7 13a7 7 0 0 0 14 0c0-5-7-13-7-13Z"></path><path d="M8 15a4 4 0 0 0 4 4"></path>',
    factory: '<path d="M3 21V10l6 3V8l6 3V3h4v18ZM3 21h18M7 17h1m4 0h1m4 0h1"></path>',
    book: '<path d="M12 5c-3-2-6-2-10-1v15c4-1 7-1 10 1m0-15c3-2 6-2 10-1v15c-4-1-7-1-10 1Zm0 0v15"></path>',
    people: '<circle cx="9" cy="7" r="3"></circle><path d="M3 21v-3a6 6 0 0 1 12 0v3m2-17a3 3 0 0 1 0 6m2 11v-3a6 6 0 0 0-3-5"></path>',
    chart: '<path d="M3 3v18h18M7 16l4-5 4 2 6-7M17 6h4v4"></path>',
    dialogue: '<path d="M21 11a8 8 0 0 1-8 8H6l-4 3V11a8 8 0 0 1 8-8h3a8 8 0 0 1 8 8Z"></path><path d="M7 10h9M7 14h6"></path>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="3"></rect><path d="m2 6 10 7L22 6"></path>',
    phone: '<path d="m7 3-4 2c-1 8 8 17 16 16l2-4-5-3-2 2c-3-1-5-3-6-6l2-2Z"></path>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><path d="M17 7h.01"></path>'
  };
  const icon = name => `<svg aria-hidden="true" viewBox="0 0 24 24">${iconPaths[name] || iconPaths.dialogue}</svg>`;
  const iconBox = name => `<span class="proposal-icon">${icon(name)}</span>`;

  // Destaques com fotografias fornecidas pela equipe.
  $('#hero-slides').innerHTML = data.slides.map((slide, i) => `<article class="hero-slide${i === 0 ? ' is-active' : ''}" role="group" aria-roledescription="slide" aria-label="${i + 1} de ${data.slides.length}" aria-hidden="${i !== 0}" ${i ? 'inert' : ''}>
    <div class="hero-copy"><p class="eyebrow"><span class="hero-pill" aria-hidden="true"></span>${escapeHTML(slide.tag)}</p>
      <h1>${titleHTML(slide.titulo)}</h1><p>${escapeHTML(slide.texto)}</p>
      <div class="hero-actions"><a class="button button-gold" href="${escapeHTML(slide.destino)}">${escapeHTML(slide.botao)}<span aria-hidden="true">↗</span></a><a class="text-link" href="#sobre">Nossa visão <span aria-hidden="true">→</span></a></div>
    </div><div class="hero-art"><span class="art-coordinate" aria-hidden="true">PNC / NOVO CAMINHO</span><div class="hero-rings" aria-hidden="true"></div>
      <div class="hero-photo hero-photo--${slide.formato === 'team' ? 'team' : 'portrait'}"><img src="${safeAsset(slide.imagem)}" alt="${escapeHTML(slide.alt)}" width="1080" height="1440" ${i ? 'loading="lazy"' : 'fetchpriority="high"'} style="object-position:${safePercent(slide.x)} ${safePercent(slide.y)}"><span class="photo-number" aria-hidden="true">54</span></div>
      <div class="art-label glass"><p class="eyebrow">${escapeHTML(slide.detalhe)}</p><p>${titleHTML(slide.legenda)}</p></div>
    </div></article>`).join('');
  $('#slide-dots').innerHTML = data.slides.map((_, i) => `<button class="slide-dot" type="button" data-slide="${i}" aria-label="Ir para o destaque ${i + 1}" aria-pressed="${i === 0}"></button>`).join('');

  // Propostas e programa aprofundado usam a mesma fonte de conteúdo.
  $('#proposal-grid').innerHTML = data.propostas.map(p => `<article class="proposal-card glass"><div class="proposal-top">${iconBox(p.icone)}<span class="proposal-number">${escapeHTML(p.numero)}</span></div><h3>${titleHTML(p.titulo)}</h3><p>${escapeHTML(p.curto)}</p><button class="card-link" type="button" data-proposal="${escapeHTML(p.id)}">Explore a proposta<span class="sr-only">: ${escapeHTML(p.categoria.toLowerCase())}</span></button></article>`).join('');
  const proposalBody = p => `<div class="program-body"><p>${escapeHTML(p.descricao)}</p><h4>Como colocar em prática</h4><ul>${p.acoes.map(a => `<li>${escapeHTML(a)}</li>`).join('')}</ul><div class="program-details"><div><h4>Financiamento proposto</h4><p>${escapeHTML(p.financiamento)}</p></div><div><h4>O que acompanhar</h4><p>${escapeHTML(p.resultado)}</p></div></div></div>`;
  $('#program-list').innerHTML = data.propostas.map(p => `<details class="program-item glass" id="program-${escapeHTML(p.id)}"><summary><span class="program-no">${escapeHTML(p.numero)}</span>${iconBox(p.icone)}<h3>${escapeHTML(textTitle(p.titulo))}</h3><span class="program-toggle" aria-hidden="true">+</span></summary>${proposalBody(p)}</details>`).join('');
  $('#principle-grid').innerHTML = data.principios.map(p => `<article class="principle-card glass">${iconBox(p.icone)}<h3>${escapeHTML(p.titulo)}</h3><p>${escapeHTML(p.texto)}</p></article>`).join('');

  const avatar = (p, label, full = false) => `<div class="member-avatar"><img src="${safeAsset(full ? p.avatar : p.miniatura || p.avatar)}" alt="${escapeHTML(label)}" width="480" height="680" loading="lazy" style="object-position:${safePercent(p.x)} ${safePercent(p.y)}"></div>`;
  const candidate = data.candidato;
  $('#candidato').innerHTML = `${avatar(candidate, 'Retrato do candidato do PNC', true)}<div class="candidate-copy"><p class="eyebrow">CANDIDATURA · PNC 54</p><h2 id="candidate-title">${escapeHTML(candidate.nome)}</h2><p class="candidate-lead">Pessoas em primeiro lugar.<br>Desenvolvimento com propósito.</p><p>${escapeHTML(candidate.bio)}</p><a class="button button-gold" href="#sobre/programa">Conheça as propostas <span aria-hidden="true">↗</span></a></div><span class="candidate-number" aria-hidden="true">54</span>`;
  $('#member-grid').innerHTML = data.integrantes.map((p, i) => `<article class="member-card glass"><span aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>${avatar(p, `Retrato de ${p.nome}`)}<div class="member-copy"><p class="member-area">${escapeHTML(p.area)}</p><h2>${escapeHTML(p.nome)}</h2><p>${escapeHTML(p.cargo)}</p><p class="member-statement">${escapeHTML(p.resumo)}</p><button type="button" data-member="${i}" aria-label="Conhecer o perfil de ${escapeHTML(p.nome)}">Conhecer integrante <span aria-hidden="true">↗</span></button></div></article>`).join('');

  // Publicações e busca por categoria, título, resumo e conteúdo.
  const newsCard = item => `<article class="news-card"><div class="news-image"><img loading="lazy" src="${safeAsset(item.imagem)}" alt="${escapeHTML(item.alt)}" width="600" height="400"><span class="news-tag">${escapeHTML(item.categoria)}</span></div><div class="news-content"><div class="news-meta"><span>PUBLICAÇÃO DEMONSTRATIVA</span><span>${escapeHTML(item.leitura)} de leitura</span></div><h3>${escapeHTML(item.titulo)}</h3><p>${escapeHTML(item.resumo)}</p><button class="card-link" type="button" data-article="${escapeHTML(item.id)}">Ler publicação<span class="sr-only">: ${escapeHTML(item.titulo)}</span></button></div></article>`;
  $('#home-news').innerHTML = data.noticias.slice(0, 3).map(newsCard).join('');
  const categories = ['Todas', ...new Set(data.noticias.map(n => n.categoria))];
  let activeCategory = 'Todas';
  $('#news-filters').innerHTML = categories.map(c => `<button type="button" class="filter-button" data-category="${escapeHTML(c)}" aria-pressed="${c === activeCategory}">${escapeHTML(c)}</button>`).join('');
  function filterNews() {
    const term = normalized($('#news-search').value.trim());
    const results = data.noticias.filter(n => (activeCategory === 'Todas' || n.categoria === activeCategory) && normalized([n.titulo, n.resumo, n.categoria, ...n.paragrafos].join(' ')).includes(term));
    $('#news-results').innerHTML = results.map(newsCard).join('');
    $('#news-empty').hidden = results.length !== 0;
    $$('.filter-button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.category === activeCategory)));
  }
  $('#news-filters').addEventListener('click', e => { const b = e.target.closest('[data-category]'); if (b) { activeCategory = b.dataset.category; filterNews(); revealContent(); } });
  $('#news-search').addEventListener('input', () => { filterNews(); revealContent(); });
  filterNews();

  // Menu acessível para telas pequenas.
  const menu = $('#primary-nav');
  const menuButton = $('#menu-toggle');
  function closeMenu() { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Abrir menu'); }
  menuButton.addEventListener('click', () => {
    const opened = menuButton.getAttribute('aria-expanded') !== 'true';
    menu.classList.toggle('open', opened); menuButton.setAttribute('aria-expanded', String(opened)); menuButton.setAttribute('aria-label', opened ? 'Fechar menu' : 'Abrir menu');
  });
  document.addEventListener('click', e => { if (!e.target.closest('.site-header')) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
  window.addEventListener('resize', () => { if (window.innerWidth > 800) closeMenu(); });

  // Um único temporizador; pausa conserva o tempo restante e o progresso.
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const carousel = $('#hero-carousel');
  const slides = $$('.hero-slide');
  const progressFill = $('#carousel-progress-fill');
  const duration = Math.max(3000, Number(data.carrossel.intervalo) || 6000);
  carousel.style.setProperty('--slide-duration', `${duration}ms`);
  let slideIndex = 0;
  let timer = null;
  let startedAt = 0;
  let remaining = duration;
  let userPaused = false;
  let hovered = false;
  let focusInside = false;
  let carouselVisible = true;
  let currentPage = '';
  function stopTimer() {
    if (timer !== null) {
      remaining = Math.max(0, remaining - (performance.now() - startedAt));
      clearTimeout(timer);
      timer = null;
    }
  }
  function showSlide(index) {
    stopTimer();
    slideIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === slideIndex;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      slide.inert = !active;
    });
    $$('.slide-dot').forEach((b, i) => b.setAttribute('aria-pressed', String(i === slideIndex)));
    $('#slide-count').innerHTML = `${String(slideIndex + 1).padStart(2, '0')} <span>/ ${String(slides.length).padStart(2, '0')}</span>`;
    remaining = duration;
    progressFill.style.animationName = 'none';
    void progressFill.offsetWidth;
    progressFill.style.animationName = 'carousel-fill';
  }
  function syncCarousel() {
    stopTimer();
    const paused = userPaused || motion.matches;
    const running = !paused && !hovered && !focusInside && !document.hidden && carouselVisible && currentPage === 'inicio' && !$('#detail-dialog').open;
    $('#carousel-pause').textContent = paused ? '▷' : 'Ⅱ';
    $('#carousel-pause').setAttribute('aria-label', motion.matches ? 'Troca automática desativada por preferência de movimento reduzido' : (paused ? 'Retomar carrossel' : 'Pausar carrossel'));
    $('#carousel-pause').disabled = motion.matches;
    $('#hero-slides').setAttribute('aria-live', running ? 'off' : 'polite');
    $('#carousel-status').textContent = motion.matches ? 'Movimento reduzido · use as setas' : paused ? 'Carrossel pausado' : running ? `Troca automática · ${duration / 1000} segundos` : 'Pausa durante a interação';
    progressFill.style.animationPlayState = running ? 'running' : 'paused';
    if (running) {
      startedAt = performance.now();
      timer = setTimeout(() => { timer = null; showSlide(slideIndex + 1); syncCarousel(); }, remaining);
    }
  }
  function changeSlide(index) { showSlide(index); syncCarousel(); }
  $('#carousel-next').addEventListener('click', () => changeSlide(slideIndex + 1));
  $('#carousel-prev').addEventListener('click', () => changeSlide(slideIndex - 1));
  $('#carousel-pause').addEventListener('click', () => { userPaused = !userPaused; syncCarousel(); });
  $('#slide-dots').addEventListener('click', e => { const b = e.target.closest('[data-slide]'); if (b) changeSlide(Number(b.dataset.slide)); });
  carousel.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { hovered = true; syncCarousel(); } });
  carousel.addEventListener('pointerleave', () => { hovered = false; syncCarousel(); });
  carousel.addEventListener('focusin', () => { focusInside = true; syncCarousel(); });
  carousel.addEventListener('focusout', e => { focusInside = carousel.contains(e.relatedTarget); syncCarousel(); });
  carousel.addEventListener('keydown', e => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); changeSlide(slideIndex + (e.key === 'ArrowRight' ? 1 : -1)); } });
  let touchStart = null;
  carousel.addEventListener('touchstart', e => { touchStart = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY }; }, { passive: true });
  carousel.addEventListener('touchend', e => { if (!touchStart) return; const dx = e.changedTouches[0].clientX - touchStart.x; const dy = e.changedTouches[0].clientY - touchStart.y; if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) changeSlide(slideIndex + (dx < 0 ? 1 : -1)); touchStart = null; }, { passive: true });
  carousel.addEventListener('touchcancel', () => { touchStart = null; });
  document.addEventListener('visibilitychange', syncCarousel);
  motion.addEventListener('change', () => { showSlide(slideIndex); syncCarousel(); revealContent(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { carouselVisible = entries[0].isIntersecting; syncCarousel(); }, { threshold: 0.15 }).observe(carousel);
  }
  showSlide(0);

  // Revelações discretas, acionadas uma vez; conteúdo permanece disponível sem a API.
  const revealSelector = '.section-heading, .proposal-card, .manifesto-banner, .news-card, .participate, .candidate-feature, .team-banner, .member-card, .principle-card, .program-item, .process-grid article, .about-opening, .about-closing, .contact-info, .contact-form';
  const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); revealObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.08 }) : null;
  function revealContent() {
    if (!revealObserver || motion.matches) return;
    $$('.page:not([hidden])').forEach(page => {
      Array.from(page.querySelectorAll(revealSelector)).forEach((element, i) => {
        if (element.classList.contains('reveal')) return;
        element.classList.add('reveal');
        element.style.setProperty('--reveal-delay', `${(i % 4) * 55}ms`);
        revealObserver.observe(element);
      });
    });
  }
  document.addEventListener('focusin', e => e.target.closest('.reveal')?.classList.add('is-revealed'));

  // Diálogos nativos mantêm foco e podem ser fechados com Escape.
  const dialog = $('#detail-dialog');
  let dialogTrigger = null;
  function openDialog(html, trigger) {
    dialogTrigger = trigger || document.activeElement;
    $('#dialog-content').innerHTML = html;
    const heading = $('#dialog-content h2');
    if (heading) { heading.id = 'dialog-heading'; dialog.setAttribute('aria-labelledby', 'dialog-heading'); }
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('modal-open');
    $('#close-dialog').focus();
    syncCarousel();
  }
  function closeDialog() { if (dialog.open) dialog.close(); }
  dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); syncCarousel(); if (dialogTrigger && document.contains(dialogTrigger)) dialogTrigger.focus({ preventScroll: true }); });
  $('#close-dialog').addEventListener('click', closeDialog);
  dialog.addEventListener('click', e => { if (e.target === dialog) { const b = dialog.getBoundingClientRect(); if (e.clientX < b.left || e.clientX > b.right || e.clientY < b.top || e.clientY > b.bottom) closeDialog(); } });
  document.addEventListener('click', e => {
    const proposalButton = e.target.closest('[data-proposal]');
    if (proposalButton) {
      const p = data.propostas.find(x => x.id === proposalButton.dataset.proposal);
      if (p) openDialog(`<p class="eyebrow">PROPOSTA ${escapeHTML(p.numero)} · ${escapeHTML(p.categoria)}</p><h2>${titleHTML(p.titulo)}</h2>${proposalBody(p)}<a class="button button-gold" href="#sobre/${escapeHTML(p.id)}">Ver no programa completo ↗</a>`, proposalButton);
    }
    const memberButton = e.target.closest('[data-member]');
    if (memberButton) {
      const p = data.integrantes[Number(memberButton.dataset.member)];
      if (p) openDialog(`<div class="profile-modal">${avatar(p, `Retrato de ${p.nome}`, true)}<p class="eyebrow">${escapeHTML(p.area)}</p><h2>${escapeHTML(p.nome)}</h2><p class="profile-cargo">${escapeHTML(p.cargo)}</p><p>${escapeHTML(p.bio)}</p></div>`, memberButton);
    }
    const articleButton = e.target.closest('[data-article]');
    if (articleButton) {
      const n = data.noticias.find(x => x.id === articleButton.dataset.article);
      if (n) openDialog(`<p class="eyebrow">${escapeHTML(n.categoria)} · PUBLICAÇÃO DEMONSTRATIVA</p><h2>${escapeHTML(n.titulo)}</h2><img class="article-image" src="${safeAsset(n.imagem)}" alt="${escapeHTML(n.alt)}">${n.paragrafos.map(p => `<p>${escapeHTML(p)}</p>`).join('')}${n.proposta ? `<a class="button button-gold" href="#sobre/${escapeHTML(n.proposta)}">Conhecer a proposta ↗</a>` : '<a class="button button-gold" href="#sobre">Conhecer o PNC ↗</a>'}`, articleButton);
    }
    if (e.target.closest('#detail-dialog a[href^="#"]')) closeDialog();
  });
  $('#credits-button').addEventListener('click', e => openDialog('<p class="eyebrow">SOBRE ESTE PROJETO</p><h2>Feito para pensar<br>um novo caminho.</h2><p>Site de um partido fictício, criado para o projeto interdisciplinar do SENAC. Propostas baseadas no documento fornecido pela equipe. As publicações demonstrativas apresentam as propostas do projeto.</p><ul class="credit-list"><li>Identidade visual: logo fornecida pelo projeto.</li><li>Retratos do candidato, integrantes e fotografia da equipe: imagens fornecidas para o projeto.</li><li>Fotografias de ambientação: <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>.</li><li>Tipografia: Manrope, distribuída pelo Google Fonts.</li><li>Referência de organização: <a href="https://missao.org.br/" target="_blank" rel="noopener noreferrer">site Missão</a>. Conteúdo e identidade próprios do PNC.</li></ul>', e.currentTarget));

  // As abas possuem URLs próprias por hash e funcionam sem servidor.
  const pageTitles = { inicio: 'Início', integrantes: 'Integrantes', sobre: 'Sobre o partido', noticias: 'Notícias', contatos: 'Contatos' };
  function route(initial = false) {
    let parts;
    try { parts = decodeURIComponent(location.hash.slice(1)).split('/'); } catch { parts = ['inicio']; }
    const selected = Object.hasOwn(pageTitles, parts[0]) ? parts[0] : 'inicio';
    const changed = currentPage !== selected;
    currentPage = selected;
    $$('.page').forEach(page => { page.hidden = page.dataset.page !== selected; });
    $$('[data-route]').forEach(link => { if (link.dataset.route === selected) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current'); });
    document.title = `${pageTitles[selected]} · PNC 54 — Partido Novo Caminho`;
    closeMenu(); closeDialog(); syncCarousel(); revealContent();
    requestAnimationFrame(() => {
      let target = null;
      if (selected === 'inicio' && parts[1] === 'propostas') target = $('#propostas');
      if (selected === 'integrantes' && parts[1] === 'candidato') target = $('#candidato');
      if (selected === 'sobre') {
        if (parts[1] === 'programa') target = $('#programa');
        else if (data.propostas.some(p => p.id === parts[1])) { target = $(`#program-${parts[1]}`); target.open = true; }
      }
      if (target) target.scrollIntoView({ behavior: initial || motion.matches ? 'instant' : 'smooth', block: 'start' });
      else if (changed && !initial) window.scrollTo({ top: 0, behavior: 'instant' });
      if (changed && !initial) $('#main').focus({ preventScroll: true });
    });
  }
  window.addEventListener('hashchange', () => route());
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (a && a.getAttribute('href') === '#main') { e.preventDefault(); $('#main').focus(); $('#main').scrollIntoView({ block: 'start' }); }
    else if (a && a.getAttribute('href') === location.hash) { e.preventDefault(); route(); }
  });

  // Contatos configuráveis; nenhum dado é enviado ou armazenado automaticamente.
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contatos.email) ? data.contatos.email : '';
  const digits = String(data.contatos.whatsapp).replace(/\D/g, '');
  const whatsapp = /^\d{10,15}$/.test(digits) ? digits : '';
  const instagram = /^https:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9_.]+\/?$/.test(data.contatos.instagram) ? data.contatos.instagram : '';
  const channels = [
    { titulo: 'E-mail', tipo: 'mail', valor: email, href: email ? `mailto:${email}` : '' },
    { titulo: 'WhatsApp', tipo: 'phone', valor: whatsapp ? `+${whatsapp}` : '', href: whatsapp ? `https://wa.me/${whatsapp}` : '' },
    { titulo: 'Instagram', tipo: 'instagram', valor: instagram ? `@${instagram.split('/')[3]}` : '', href: instagram }
  ];
  $('#contact-channels').innerHTML = channels.map(c => `<div class="contact-channel">${iconBox(c.tipo)}<div><small>${c.titulo}</small>${c.valor ? `<a href="${escapeHTML(c.href)}" ${c.tipo !== 'mail' ? 'target="_blank" rel="noopener noreferrer"' : ''}><strong>${escapeHTML(c.valor)}</strong></a>` : '<strong class="not-configured">Em breve · canal oficial</strong>'}</div></div>`).join('');
  if (email) $('#form-mode').textContent = 'Prepare sua mensagem e revise antes de abri-la no seu aplicativo de e-mail. O envio acontece no aplicativo que você utiliza.';
  let preparedMessage = '';
  let downloadURL = '';
  $('#contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    preparedMessage = `MENSAGEM PARA O PARTIDO NOVO CAMINHO — PNC 54\n\nNome: ${values.get('nome').trim()}\nE-mail: ${values.get('email').trim()}\nBairro/cidade: ${values.get('bairro').trim() || 'Não informado'}\nAssunto: ${values.get('assunto')}\n\n${values.get('mensagem').trim()}`;
    if (downloadURL) URL.revokeObjectURL(downloadURL);
    downloadURL = URL.createObjectURL(new Blob([preparedMessage], { type: 'text/plain;charset=utf-8' }));
    const mailURL = email ? `mailto:${email}?subject=${encodeURIComponent(`PNC — ${values.get('assunto')}`)}&body=${encodeURIComponent(preparedMessage)}` : '';
    $('#contact-result').innerHTML = `<strong>Mensagem preparada para revisão.</strong><p>${email ? 'Revise o texto e abra seu aplicativo de e-mail para enviar.' : 'Modo demonstração: nenhuma mensagem foi enviada. Você pode baixar ou copiar o texto.'}</p><div class="message-preview"></div><div class="result-actions"><a class="button button-quiet" href="${downloadURL}" download="mensagem-para-pnc.txt">Baixar mensagem ↓</a><button class="button button-quiet" type="button" id="copy-message">Copiar texto</button>${mailURL ? `<a class="button button-gold" href="${escapeHTML(mailURL)}">Abrir no e-mail ↗</a>` : ''}</div>`;
    $('#contact-result .message-preview').textContent = preparedMessage;
    $('#contact-result').hidden = false;
    $('#copy-message').addEventListener('click', async e => {
      const button = e.currentTarget;
      try { await navigator.clipboard.writeText(preparedMessage); button.textContent = 'Texto copiado ✓'; }
      catch { button.textContent = 'Use “Baixar mensagem”'; }
    });
  });
  window.addEventListener('beforeunload', () => { if (downloadURL) URL.revokeObjectURL(downloadURL); });
  route(true);
})();
