/* ===========================================================
   Sistemas Operacionais — 2026.2 — Prof. Thiago Lopes
   Motor de navegação compartilhado pelos decks.

   Cada aula define no <body>:
     data-aula="02"  data-data="17.08.2026"  data-titulo="..."
   A barra de status é montada automaticamente.
   =========================================================== */
(function () {
  var body = document.body;
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  if (!slides.length) return;

  var aula = body.dataset.aula || '01';
  var total = body.dataset.total || '17';

  /* ---------- monta a barra de status ---------- */
  var status = document.createElement('div');
  status.className = 'status';
  status.innerHTML =
    '<div class="bar" id="bar"></div>' +
    '<div class="row">' +
      '<div><a class="home" href="index.html">&#8962; MENU</a> &nbsp;<b>AULA ' + aula + '</b>' +
        '<span class="hide-sm"> / ' + total + '</span></div>' +
      '<div class="hide-sm">SO 2026.2 &middot; THIAGO LOPES &middot; UNOPAR ADS</div>' +
      '<div class="nav">' +
        '<span style="margin-right:8px"><b id="cur">01</b> / <span id="tot">00</span></span>' +
        '<button id="fs" aria-label="Entrar em tela cheia" title="Tela cheia (F)">&#9974;<span class="fs-lbl"> TELA CHEIA</span></button>' +
        '<button id="prev" aria-label="Slide anterior">&larr;</button>' +
        '<button id="next" aria-label="Pr&oacute;ximo slide">&rarr;</button>' +
      '</div>' +
    '</div>';
  body.appendChild(status);

  var bar = document.getElementById('bar');
  var cur = document.getElementById('cur');
  document.getElementById('tot').textContent = String(slides.length).padStart(2, '0');

  var i = 0;
  function show(n) {
    i = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach(function (s, k) { s.classList.toggle('on', k === i); });
    slides[i].scrollTop = 0;
    bar.style.width = ((i + 1) / slides.length * 100) + '%';
    cur.textContent = String(i + 1).padStart(2, '0');
    if (location.hash !== '#' + (i + 1)) history.replaceState(null, '', '#' + (i + 1));
  }

  document.getElementById('next').addEventListener('click', function () { show(i + 1); });
  document.getElementById('prev').addEventListener('click', function () { show(i - 1); });

  /* ---------- tela cheia ---------- */
  var fsBtn = document.getElementById('fs');
  var root = document.documentElement;
  function isFull() { return !!(document.fullscreenElement || document.webkitFullscreenElement); }
  function toggleFull() {
    if (!isFull()) { var go = root.requestFullscreen || root.webkitRequestFullscreen; if (go) go.call(root); }
    else { var out = document.exitFullscreen || document.webkitExitFullscreen; if (out) out.call(document); }
  }
  function syncFull() {
    var on = isFull();
    fsBtn.classList.toggle('active', on);
    fsBtn.setAttribute('aria-label', on ? 'Sair da tela cheia' : 'Entrar em tela cheia');
    fsBtn.title = on ? 'Sair da tela cheia (F ou Esc)' : 'Tela cheia (F)';
    fsBtn.innerHTML = on ? '\u26F6<span class="fs-lbl"> SAIR</span>' : '\u26F6<span class="fs-lbl"> TELA CHEIA</span>';
  }
  fsBtn.addEventListener('click', toggleFull);
  document.addEventListener('fullscreenchange', syncFull);
  document.addEventListener('webkitfullscreenchange', syncFull);
  if (!(root.requestFullscreen || root.webkitRequestFullscreen)) fsBtn.style.display = 'none';

  /* ---------- teclado ---------- */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); show(i + 1); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); show(i - 1); }
    else if (e.key === 'Home') { show(0); }
    else if (e.key === 'End') { show(slides.length - 1); }
    else if (e.key === 'f' || e.key === 'F') { e.preventDefault(); toggleFull(); }
    else if (e.key === 'Escape' && !isFull()) { location.href = 'index.html'; }
  });

  /* ---------- toque ---------- */
  var x0 = null;
  document.addEventListener('touchstart', function (e) { x0 = e.changedTouches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var d = e.changedTouches[0].clientX - x0;
    if (Math.abs(d) > 60) show(d < 0 ? i + 1 : i - 1);
    x0 = null;
  }, { passive: true });

  var start = parseInt((location.hash || '').replace('#', ''), 10);
  show(isNaN(start) ? 0 : start - 1);
})();
