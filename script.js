'use strict';
/* ================================================
   TESTI-TECH GLOBAL — Main Script
   ================================================ */

// ── THEME (runs immediately, before DOM) ─────────
const savedTheme = localStorage.getItem('tt-theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

/* ── DATA ─────────────────────────────────────── */
const PRODUCTS = [
  { id:1, name:'iPhone 15 Pro Max', brand:'Apple', category:'iphone', price:'₦1,150,000', storage:'256GB', condition:'New',  emoji:'📱', badge:'New' },
  { id:2, name:'iPhone 14 Pro',     brand:'Apple', category:'iphone', price:'₦780,000',  storage:'128GB', condition:'Used', emoji:'📱', badge:'Used' },
  { id:3, name:'iPhone 13',         brand:'Apple', category:'iphone', price:'₦520,000',  storage:'128GB', condition:'Used', emoji:'📱', badge:'Used' },
  { id:4, name:'iPhone 12 Mini',    brand:'Apple', category:'iphone', price:'₦350,000',  storage:'64GB',  condition:'Used', emoji:'📱', badge:'Used' },
  { id:5, name:'Samsung Galaxy S24 Ultra', brand:'Samsung', category:'android', price:'₦950,000', storage:'256GB', condition:'New',  emoji:'📲', badge:'New' },
  { id:6, name:'Samsung Galaxy A54', brand:'Samsung', category:'android', price:'₦280,000', storage:'128GB', condition:'New', emoji:'📲', badge:'New' },
  { id:7, name:'Tecno Phantom X2',   brand:'Tecno',   category:'android', price:'₦195,000', storage:'256GB', condition:'New', emoji:'📲', badge:'New' },
  { id:8, name:'Infinix Zero 30',    brand:'Infinix', category:'android', price:'₦145,000', storage:'128GB', condition:'New', emoji:'📲', badge:'New' },
  { id:9, name:'MacBook Air M2',     brand:'Apple',   category:'laptop', price:'₦980,000', storage:'256GB', condition:'New',  emoji:'💻', badge:'New' },
  { id:10, name:'HP Envy x360',      brand:'HP',      category:'laptop', price:'₦420,000', storage:'512GB', condition:'Used', emoji:'💻', badge:'Used' },
  { id:11, name:'Dell XPS 13',       brand:'Dell',    category:'laptop', price:'₦680,000', storage:'512GB', condition:'New',  emoji:'💻', badge:'New' },
  { id:12, name:'iPad Pro 12.9"',    brand:'Apple',   category:'tablet', price:'₦750,000', storage:'256GB', condition:'New',  emoji:'📟', badge:'New' },
  { id:13, name:'Samsung Tab S9',    brand:'Samsung', category:'tablet', price:'₦480,000', storage:'128GB', condition:'New',  emoji:'📟', badge:'New' },
];

const REVIEWS = [
  { name:'Emeka Okonkwo', service:'Bought iPhone 14 Pro', stars:5, text:'Got my iPhone 14 Pro here at a great price. They tested it with me, wiped it clean, and I walked out happy. Highly recommend!', avatar:'👨🏾' },
  { name:'Chioma Adeyemi', service:'iCloud Unlock', stars:5, text:'They unlocked my iCloud-locked iPhone 11 within 24 hours just as promised. Very professional. Will definitely come back.', avatar:'👩🏾' },
  { name:'David Osaghae', service:'Device Swap', stars:5, text:'Traded in my old Samsung for an iPhone 13 and paid a fair difference. The process was smooth and transparent. No wahala!', avatar:'👨🏿' },
  { name:'Blessing Nwachukwu', service:'Phone Flashing', stars:5, text:'My Android was completely bricked. They flashed it and it came back to life the same day. Super impressed with the expertise.', avatar:'👩🏿' },
  { name:'Tunde Fashola', service:'Bought Laptop', stars:5, text:'Bought a MacBook Air M2 from them. Came in sealed with all accessories. Price was much better than other shops in Benin.', avatar:'👨🏾' },
  { name:'Adaeze Ibe', service:'Apple ID Fix', stars:5, text:'Had a problem with my Apple ID not activating. Fixed within an hour. The staff are knowledgeable and patient. 10/10!', avatar:'👩🏾' },
];

/* ── DOM READY ────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  initPreloader();
  initCursorGlow();
  initTheme();
  initNavbar();
  initScrollSpy();
  initReveal();
  renderProducts();
  initShopFilters();
  renderReviews();
  initReviewCarousel();
  initSwapForm();
  initContactForm();
});

/* ── PRELOADER ─────────────────────────────────── */
function initPreloader() {
  const loader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('done'), 400);
  });
  // Fallback
  setTimeout(() => loader.classList.add('done'), 2500);
}

/* ── CURSOR GLOW ───────────────────────────────── */
function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow || window.matchMedia('(hover: none)').matches) return;
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  }, { passive: true });
}

/* ── THEME ─────────────────────────────────────── */
function initTheme() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('tt-theme', next);
  });
}

/* ── NAVBAR ─────────────────────────────────────── */
function initNavbar() {
  const nav     = document.getElementById('main-nav');
  const burger  = document.getElementById('hamburger');
  const overlay = document.getElementById('nav-overlay');
  const header  = document.getElementById('navbar');

  // Scroll state
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile open/close
  const open  = () => { nav.classList.add('open'); burger.classList.add('open'); overlay.classList.add('visible'); burger.setAttribute('aria-expanded','true'); document.body.style.overflow='hidden'; };
  const close = () => { nav.classList.remove('open'); burger.classList.remove('open'); overlay.classList.remove('visible'); burger.setAttribute('aria-expanded','false'); document.body.style.overflow=''; };

  burger.addEventListener('click', () => nav.classList.contains('open') ? close() : open());
  overlay.addEventListener('click', close);
  document.addEventListener('keydown', e => e.key === 'Escape' && close());

  // Smooth scroll on nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior:'smooth' }); close(); }
    });
  });
}

/* ── SCROLL SPY ─────────────────────────────────── */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('#main-nav a[data-nav]');
  if (!sections.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.dataset.nav === e.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  sections.forEach(s => obs.observe(s));
}

/* ── REVEAL ON SCROLL ───────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

/* ── PRODUCTS ───────────────────────────────────── */
function renderProducts(filter = 'all') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  const items = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  grid.innerHTML = items.map(p => `
    <article class="product-card reveal" data-category="${p.category}" aria-label="${p.name}">
      <div class="product-img">
        <span aria-hidden="true" style="font-size:4rem">${p.emoji}</span>
        <div class="product-badge ${p.condition === 'Used' ? 'used' : ''}">${p.badge}</div>
      </div>
      <div class="product-body">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-specs">${p.storage} &nbsp;·&nbsp; ${p.condition}</div>
        <div class="product-footer">
          <div class="product-price">${p.price}</div>
          <a href="https://wa.me/2348149683390?text=Hi%2C+I%27m+interested+in+the+${encodeURIComponent(p.name)}" target="_blank" rel="noopener" class="product-cta">Enquire</a>
        </div>
      </div>
    </article>
  `).join('');

  // Re-observe reveals
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

function initShopFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.filter);
    });
  });
}

/* ── REVIEWS ─────────────────────────────────────── */
let currentPage = 0;
const perPage   = window.innerWidth < 900 ? 1 : 3;

function renderReviews() {
  const track = document.getElementById('reviews-track');
  const dots  = document.getElementById('rev-dots');
  if (!track) return;

  const pages = Math.ceil(REVIEWS.length / perPage);
  const start = currentPage * perPage;
  const slice = REVIEWS.slice(start, start + perPage);

  track.style.opacity = '0';
  setTimeout(() => {
    track.innerHTML = slice.map(r => `
      <article class="review-card">
        <div class="review-stars">${'★'.repeat(r.stars)}</div>
        <p class="review-text">${r.text}</p>
        <div class="review-author">
          <div class="review-avatar">${r.avatar}</div>
          <div>
            <div class="review-name">${r.name}</div>
            <div class="review-service">${r.service}</div>
          </div>
        </div>
      </article>
    `).join('');

    dots.innerHTML = Array.from({ length: pages }, (_, i) =>
      `<button class="rev-dot ${i === currentPage ? 'active' : ''}" aria-label="Page ${i+1}" data-page="${i}"></button>`
    ).join('');

    dots.querySelectorAll('.rev-dot').forEach(d => {
      d.addEventListener('click', () => { currentPage = +d.dataset.page; renderReviews(); });
    });
    track.style.opacity = '1';
  }, 200);
}

function initReviewCarousel() {
  document.getElementById('rev-prev')?.addEventListener('click', () => {
    currentPage = (currentPage - 1 + Math.ceil(REVIEWS.length / perPage)) % Math.ceil(REVIEWS.length / perPage);
    renderReviews();
  });
  document.getElementById('rev-next')?.addEventListener('click', () => {
    currentPage = (currentPage + 1) % Math.ceil(REVIEWS.length / perPage);
    renderReviews();
  });
  // Auto-advance
  setInterval(() => {
    currentPage = (currentPage + 1) % Math.ceil(REVIEWS.length / perPage);
    renderReviews();
  }, 6000);
}

/* ── SWAP FORM ──────────────────────────────────── */
function initSwapForm() {
  const form = document.getElementById('swap-form');
  if (!form) return;
  const btn      = form.querySelector('button[type="submit"]');
  const feedback = document.getElementById('swap-feedback');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    let ok = true;

    if (!data.deviceType) { ok = false; }
    if (!data.brand?.trim()) { ok = false; }
    if (!data.name?.trim())  { ok = false; }
    if (!data.phone?.trim()) { ok = false; }

    if (!ok) {
      feedback.className = 'error';
      feedback.textContent = '⚠️ Please fill in all required fields.';
      return;
    }

    btn.classList.add('loading'); btn.disabled = true;

    // Compose WhatsApp message
    const msg = `Hi Testi-Tech! I'd like a trade-in quote.\n\nDevice: ${data.brand}\nType: ${data.deviceType}\nStorage: ${data.storage || 'N/A'}\nCondition: ${data.condition}\nUpgrade to: ${data.upgradeTo || 'TBD'}\n\nName: ${data.name}\nPhone: ${data.phone}`;

    setTimeout(() => {
      btn.classList.remove('loading'); btn.disabled = false;
      feedback.className = 'success';
      feedback.textContent = '✓ Great! We\'re redirecting you to WhatsApp to complete your request.';
      form.reset();
      setTimeout(() => {
        window.open(`https://wa.me/2348149683390?text=${encodeURIComponent(msg)}`, '_blank');
      }, 1000);
    }, 1200);
  });
}

/* ── CONTACT FORM ───────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const btn      = document.getElementById('contact-submit');
  const feedback = document.getElementById('contact-feedback');

  const setErr = (id, msg) => {
    document.getElementById(id)?.classList.toggle('error', !!msg);
    const err = document.getElementById(id + '-err');
    if (err) err.textContent = msg || '';
  };

  form.addEventListener('submit', async e => {
    e.preventDefault();
    // Clear
    ['c-name','c-email','c-message'].forEach(id => setErr(id, ''));
    feedback.className = ''; feedback.textContent = '';

    const name    = form.querySelector('#c-name').value.trim();
    const email   = form.querySelector('#c-email').value.trim();
    const phone   = form.querySelector('#c-phone').value.trim();
    const subject = form.querySelector('#c-subject').value;
    const message = form.querySelector('#c-message').value.trim();

    let valid = true;
    if (!name)  { setErr('c-name', 'Name is required.'); valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErr('c-email', 'Enter a valid email.'); valid = false; }
    if (message.length < 5) { setErr('c-message', 'Please enter a message.'); valid = false; }
    if (!valid) return;

    btn.classList.add('loading'); btn.disabled = true;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        feedback.className = 'success';
        feedback.textContent = '✓ Message sent! We\'ll be in touch within the hour.';
        form.reset();
      } else {
        throw new Error(data.message || 'Server error');
      }
    } catch (err) {
      // Fallback: open WhatsApp
      feedback.className = 'error';
      feedback.textContent = 'Could not send right now — opening WhatsApp instead…';
      const waMsg = `Hi Testi-Tech!\n\nName: ${name}\nEmail: ${email}\n${phone ? 'Phone: '+phone+'\n' : ''}Subject: ${subject || 'General'}\n\n${message}`;
      setTimeout(() => window.open(`https://wa.me/2348149683390?text=${encodeURIComponent(waMsg)}`, '_blank'), 1200);
    } finally {
      btn.classList.remove('loading'); btn.disabled = false;
    }
  });
}

/* ── SERVICE PRE-FILL HELPER ────────────────────── */
window.prefillService = function() {
  const sel = document.getElementById('c-subject');
  if (sel) sel.value = 'Repair / Service';
};
