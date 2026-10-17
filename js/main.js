/* Nirmol Health Trust — demo site script (jQuery 3.7) */
$(function () {
  const esc = s => $('<div>').text(s ?? '').html();
  const params = new URLSearchParams(location.search);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const initials = n => n.replace(/\(.*?\)/g, '').replace(/^(Prof\.|Professor|Asst\.|Assist\.|Asso\.|Assoc\.|Lt\.|Col\.|Brig\.|Gen\.|Dr\.|\s)+/g, '')
    .split(/\s+/).filter(w => w && !/^(Dr\.|Md\.|Mohammad|Muhammad)$/i.test(w)).slice(0, 2).map(w => w[0]).join('').toUpperCase();

  /* ---------- Menu: dropdowns + mobile ---------- */
  const $menu = $('#menu');
  $menu.on('click', '.dd', function (e) {
    e.stopPropagation();
    const $li = $(this).parent();
    const open = !$li.hasClass('open');
    $menu.children('li').removeClass('open').find('.dd').attr('aria-expanded', false);
    $li.toggleClass('open', open);
    $(this).attr('aria-expanded', open);
  });
  // Hover opens dropdowns on desktop pointers
  $menu.children('li').on('mouseenter', function () {
    if (window.matchMedia('(hover: hover) and (min-width: 1181px)').matches && $(this).find('.drop').length) {
      $menu.children('li').removeClass('open');
      $(this).addClass('open').find('.dd').attr('aria-expanded', true);
    }
  }).on('mouseleave', function () {
    if (window.matchMedia('(hover: hover) and (min-width: 1181px)').matches) $(this).removeClass('open').find('.dd').attr('aria-expanded', false);
  });
  $(document).on('click', e => { if (!$(e.target).closest('#menu').length) $menu.children('li').removeClass('open'); });
  $('.burger').on('click', function () {
    const open = $menu.toggleClass('show').hasClass('show');
    $(this).attr('aria-expanded', open).text(open ? '✕' : '☰');
  });

  /* ---------- Back to top ---------- */
  const $top = $('.to-top');
  $(window).on('scroll', () => $top.prop('hidden', window.scrollY < 600));
  $top.on('click', () => $('html, body').animate({ scrollTop: 0 }, reduce ? 0 : 400));

  /* ---------- Doctor card ---------- */
  function doctorCard(d) {
    const u = unitOf(d.unit);
    // Demo avatar (replace d.photo with a real photo URL later)
    const photo = `<img src="${d.photo}" alt="${esc(d.name)}" loading="lazy" >`;
    return `<article class="doc-card">
      <div class="doc-photo">${photo}</div>
      <div class="doc-body">
        <h3>${esc(d.name)}</h3>
        <span class="doc-dept">${esc(d.dept)}</span>
        <span class="doc-unit">${esc(u.name)}</span>
        <a class="doc-call" href="tel:${(u.phone || '09610777888').replace(/[^0-9+]/g, '')}">Serial: ${esc(u.phone || '09610-777888')}</a>
      </div></article>`;
  }

  /* ---------- Home: slider ---------- */
  const $slider = $('.slider');
  if ($slider.length) {
    const $slides = $slider.find('.slides'), $dots = $slider.find('.sl-dots');
    SLIDES.forEach((s, k) => {
      const H = k === 0 ? 'h1' : 'h2';
      $slides.append(`<div class="slide" aria-roledescription="slide" aria-label="${k + 1} of ${SLIDES.length}">
        <img src="${s.img}" alt="" ${k ? 'loading="lazy"' : 'fetchpriority="high"'}>
        <div class="cap"><div class="wrap"><${H}>${s.title}</${H}><p>${s.text}</p>
          <div class="cap-btns"><a class="btn btn-gold" href="${s.cta[0]}">${s.cta[1]}</a><a class="btn btn-ghost" href="${s.cta2[0]}">${s.cta2[1]}</a></div></div></div></div>`);
      $dots.append(`<button type="button" aria-label="Slide ${k + 1}"></button>`);
    });
    const $s = $slides.children(), $d = $dots.children();
    let i = 0, timer;
    function go(n) {
      i = (n + $s.length) % $s.length;
      $s.removeClass('on').attr('aria-hidden', true).find('a').attr('tabindex', -1);
      $s.eq(i).addClass('on').attr('aria-hidden', false).find('a').attr('tabindex', 0);
      $d.removeAttr('aria-current').eq(i).attr('aria-current', 'true');
      start();
    }
    function start() { clearTimeout(timer); if (!reduce) timer = setTimeout(() => go(i + 1), 5000); }
    $slider.find('.sl-prev').on('click', () => go(i - 1));
    $slider.find('.sl-next').on('click', () => go(i + 1));
    $d.on('click', function () { go($(this).index()); });
    $slider.on('mouseenter', () => clearTimeout(timer)).on('mouseleave', start)
      .on('keydown', e => { if (e.key === 'ArrowLeft') go(i - 1); if (e.key === 'ArrowRight') go(i + 1); });
    let x0 = null;
    $slider.on('touchstart', e => { x0 = e.originalEvent.touches[0].clientX; })
      .on('touchend', e => {
        if (x0 === null) return;
        const dx = e.originalEvent.changedTouches[0].clientX - x0;
        if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
        x0 = null;
      });
    // Hide a slide whose image fails to load so the slider never shows a blank frame
    $s.find('img').on('error', function () { $(this).closest('.slide').remove(); });
    go(0);
  }

  /* ---------- Home: notice modal ---------- */
  const $notice = $('.notice-modal');
  $('.notice-open').on('click', () => { $notice.prop('hidden', false); $notice.find('.close').trigger('focus'); });
  $notice.on('click', function (e) { if (e.target === this || $(e.target).closest('.close').length) $notice.prop('hidden', true); });

  /* ---------- Home: quick tiles, doctor carousel, gallery ---------- */
  $('#quick').html(QUICK.map(q => `<a href="${q.url}"><img src="${q.icon}" alt="" loading="lazy">${q.name}</a>`).join(''));

  const $track = $('#doc-track');
  if ($track.length) {
    const featured = DOCTORS.filter((d, k) => k % 4 === 0).slice(0, 12);
    $track.html(featured.map(doctorCard).join(''));
    const step = () => $track.children().first().outerWidth(true) + 20;
    $('.car-next').on('click', () => {
      const atEnd = $track[0].scrollLeft + $track[0].clientWidth >= $track[0].scrollWidth - 5;
      $track[0].scrollTo({ left: atEnd ? 0 : $track[0].scrollLeft + step(), behavior: reduce ? 'auto' : 'smooth' });
    });
    $('.car-prev').on('click', () => $track[0].scrollBy({ left: -step(), behavior: reduce ? 'auto' : 'smooth' }));
  }

  const $gallery = $('#gallery');
  if ($gallery.length) {
    $gallery.html(GALLERY.map((g, k) => `<button type="button" data-k="${k}" aria-label="Open ${g.alt}"><img src="${g.src}" alt="${g.alt}" loading="lazy"></button>`).join(''));
    let cur = 0;
    const $lb = $(`<div class="lightbox" hidden role="dialog" aria-modal="true" aria-label="Photo viewer">
      <img alt=""><button class="lb-close" type="button" aria-label="Close">✕</button>
      <button class="lb-prev" type="button" aria-label="Previous photo">‹</button><button class="lb-next" type="button" aria-label="Next photo">›</button></div>`).appendTo('body');
    const show = k => { cur = (k + GALLERY.length) % GALLERY.length; $lb.find('img').attr({ src: GALLERY[cur].src, alt: GALLERY[cur].alt }); };
    $gallery.on('click', 'button', function () { show(+$(this).data('k')); $lb.prop('hidden', false); $lb.find('.lb-close').trigger('focus'); });
    $lb.on('click', e => { if (e.target === $lb[0] || $(e.target).is('.lb-close')) $lb.prop('hidden', true); });
    $lb.find('.lb-prev').on('click', () => show(cur - 1));
    $lb.find('.lb-next').on('click', () => show(cur + 1));
    $(document).on('keydown', e => {
      if ($lb.prop('hidden')) return;
      if (e.key === 'Escape') $lb.prop('hidden', true);
      if (e.key === 'ArrowLeft') show(cur - 1);
      if (e.key === 'ArrowRight') show(cur + 1);
    });
  }

  /* ---------- Find a doctor ---------- */
  const $res = $('#f-results');
  if ($res.length) {
    let view = params.get('view') || 'dept';
    $('#f-dept').append(DEPTS.map(d => `<option>${esc(d)}</option>`).join('')).val(params.get('dept') || '');
    const usedUnits = UNITS.filter(u => DOCTORS.some(d => d.unit === u.key));
    $('#f-unit').append(usedUnits.map(u => `<option value="${u.key}">${esc(u.name)}</option>`).join('')).val(params.get('unit') || '');
    $('#f-name').val(params.get('q') || '');

    function render() {
      const q = $('#f-name').val().trim().toLowerCase(), dept = $('#f-dept').val(), unit = $('#f-unit').val();
      const list = DOCTORS.filter(d => (!dept || d.dept === dept) && (!unit || d.unit === unit) && d.name.toLowerCase().includes(q));
      $('.finder .tabs button').attr('aria-selected', function () { return $(this).data('view') === view; });
      $('#f-count').text(`${list.length} doctor${list.length === 1 ? '' : 's'} found`);
      if (!list.length) {
        $res.html(`<div class="empty"><p>No doctor matches these filters.</p><p>Try another spelling, or call <a href="tel:+8809610777888">09610-777888</a> and we’ll help you find the right specialist.</p></div>`);
      } else if (view === 'name') {
        $res.html(`<div class="doc-grid">${list.slice().sort((a, b) => a.name.replace(/^.*?Dr\.\s*/, '').localeCompare(b.name.replace(/^.*?Dr\.\s*/, ''))).map(doctorCard).join('')}</div>`);
      } else {
        const key = view === 'branch' ? d => d.unit : d => d.dept;
        const label = view === 'branch' ? k => unitOf(k).name : k => k;
        const groups = {};
        list.forEach(d => (groups[key(d)] = groups[key(d)] || []).push(d));
        $res.html(Object.keys(groups).sort((a, b) => label(a).localeCompare(label(b))).map(k =>
          `<h2 class="group-title">${esc(label(k))}<small>${groups[k].length}</small></h2><div class="doc-grid">${groups[k].map(doctorCard).join('')}</div>`).join(''));
      }
      const u = new URLSearchParams({ view });
      if (q) u.set('q', q); if (dept) u.set('dept', dept); if (unit) u.set('unit', unit);
      history.replaceState(null, '', `${location.pathname}?${u}`);
    }
    $('.finder .tabs').on('click', 'button', function () { view = $(this).data('view'); render(); });
    $('#f-name').on('input', render);
    $('#f-dept, #f-unit').on('change', render);
    $('#f-clear').on('click', () => { $('#f-name').val(''); $('#f-dept, #f-unit').val(''); render(); });
    render();
  }

  /* ---------- Units ---------- */
  const $ug = $('#unit-grid');
  if ($ug.length) {
    let type = '';
    function renderUnits() {
      const q = $('#u-search').val().trim().toLowerCase();
      const list = UNITS.filter(u => (!type || u.type === type) && (u.name + ' ' + u.area).toLowerCase().includes(q));
      $('.finder .tabs button').attr('aria-selected', function () { return $(this).data('type') === type; });
      $('#u-count').text(`${list.length} unit${list.length === 1 ? '' : 's'}`);
      $ug.html(list.length ? list.map(u => {
        const docs = DOCTORS.filter(d => d.unit === u.key).length;
        return `<article class="unit" id="${u.key}">
          <span class="pill ${u.type.toLowerCase()}">${u.type}</span>
          <h3>${esc(u.name)}</h3><span class="area">${esc(u.area)}</span>
          <div class="meta">${u.phone ? `<a href="tel:${u.phone.replace(/[^0-9+]/g, '')}">${esc(u.phone)}</a>` : ''}
            ${docs ? `<a href="find-doctor.html?view=branch&unit=${u.key}">${docs} doctor${docs > 1 ? 's' : ''}</a>` : ''}
            ${u.site ? `<a href="${u.site}" target="_blank" rel="noopener">Website ↗</a>` : ''}</div></article>`;
      }).join('') : `<div class="empty" style="grid-column:1/-1">No unit in “${esc(q)}”. Try another area name.</div>`);
    }
    $('.finder .tabs').on('click', 'button', function () { type = $(this).data('type'); renderUnits(); });
    $('#u-search').on('input', renderUnits);
    renderUnits();
    if (location.hash) {
      const $t = $(location.hash);
      if ($t.length) { $t.css('outline', '3px solid var(--gold)'); $t[0].scrollIntoView({ block: 'center' }); }
    }
  }

  /* ---------- Contact form ---------- */
  $('#contact-form').on('submit', function (e) { e.preventDefault(); this.reset(); $(this).find('.ok').prop('hidden', false); });

  /* ---------- Site search (Ctrl+K) ---------- */
  const INDEX = [
    ...DOCTORS.map(d => ({ type: 'Doctor', title: d.name, sub: `${d.dept} · ${unitOf(d.unit).area}`, url: `find-doctor.html?view=name&q=${encodeURIComponent(d.name)}`, text: `${d.name} ${d.dept} ${unitOf(d.unit).area}` })),
    ...DEPTS.map(d => ({ type: 'Service', title: d, sub: `${DOCTORS.filter(x => x.dept === d).length} doctors`, url: `find-doctor.html?view=dept&dept=${encodeURIComponent(d)}`, text: `${d} department` })),
    ...UNITS.map(u => ({ type: 'Unit', title: u.name, sub: u.area, url: `units.html#${u.key}`, text: `${u.name} ${u.area} branch` })),
    ...SERVICES.map(s => ({ type: 'Service', title: s.name, sub: s.short, url: `services.html#${s.id}`, text: `${s.name} ${s.short} ${s.body.join(' ')}` })),
    { type: 'Page', title: 'About the Trust', sub: 'History, mission and quality', url: 'about.html', text: 'about history mission vision 1980' },
    { type: 'Page', title: 'Patient care', sub: 'Counters and amenities', url: 'patient-care.html', text: 'patient care billing pharmacy report delivery' },
    { type: 'Page', title: 'Contact us', sub: 'Hotline 09610-777888', url: 'contact.html', text: 'contact hotline address email map' },
  ];
  const $pal = $('.sp-backdrop'), $q = $pal.find('input'), $list = $pal.find('.sp-list');
  let hits = [], active = 0;
  const openSearch = () => { $pal.prop('hidden', false); $('body').css('overflow', 'hidden'); $q.val('').trigger('input').trigger('focus'); };
  const closeSearch = () => { $pal.prop('hidden', true); $('body').css('overflow', ''); };
  const paint = () => $list.find('a').removeClass('on').eq(active).addClass('on')[0]?.scrollIntoView({ block: 'nearest' });
  $q.on('input', function () {
    const t = this.value.trim().toLowerCase();
    hits = t ? INDEX.filter(it => it.text.toLowerCase().includes(t)).slice(0, 9) : [];
    active = 0;
    $pal.find('.sp-hint').prop('hidden', !!t);
    $pal.find('.sp-empty').prop('hidden', !(t && !hits.length)).text(`No results for “${this.value}”. Try a department, an area or a doctor’s name.`);
    $list.html(hits.map(h => `<li><a href="${h.url}"><span class="tag tag-${h.type.toLowerCase()}">${h.type}</span>
      <span><b>${esc(h.title)}</b><small>${esc(h.sub.length > 80 ? h.sub.slice(0, 80) + '…' : h.sub)}</small></span></a></li>`).join(''));
    paint();
  }).on('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(active + 1, hits.length - 1); paint(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); active = Math.max(active - 1, 0); paint(); }
    if (e.key === 'Enter' && hits[active]) location.href = hits[active].url;
  });
  $list.on('mouseenter', 'li', function () { active = $(this).index(); paint(); })
       .on('click', 'a', function () { if (this.pathname === location.pathname) { closeSearch(); setTimeout(() => location.reload(), 0); } });
  $pal.find('.sp-hint').on('click', 'button', function () { $q.val($(this).text()).trigger('input').trigger('focus'); });
  $('.search-open').on('click', openSearch);
  $pal.on('mousedown', e => { if (e.target === $pal[0]) closeSearch(); });
  $(document).on('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); }
    if (e.key === 'Escape') { if (!$pal.prop('hidden')) closeSearch(); $notice.prop('hidden', true); $menu.children('li').removeClass('open'); }
  });
});
