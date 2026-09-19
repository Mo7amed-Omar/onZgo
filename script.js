/* ═══════════════════════════════════════════════════════
   ONZGO — script.js
   Bilingual content · Language toggle · Menu · Scroll fx
   ═══════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────
   CONTENT — All bilingual text in ONE object.
   Client: edit both 'ar' and 'en' values in this single block.
   All placeholders clearly indicated with [BRACKETS].
   ───────────────────────────────────────────────── */
const CONTENT = {
  ar: {
    langToggle: 'EN',
    // Navigation
    navBrew:  'قهوتنا',
    navBites: 'أكلنا',
    navVibes: 'أجواؤنا',
    navVisit: 'زورونا',
    // 2. Hero
    heroHeadline: '[العنوان الرئيسي]',
    heroCta: 'اطلب الآن',
    // 4. Brew block
    brewTitle: '[عنوان القهوة]',
    brewText: '[جملة واحدة قصيرة تصف القهوة]',
    brewCta: 'شوف القهوة',
    // 5. Bites block
    bitesTitle: '[عنوان الأكل]',
    bitesText: '[جملة واحدة قصيرة تصف الأكل]',
    bitesCta: 'شوف الأكل',
    // 6. Vibes block
    vibesTitle: '[عنوان الأجواء]',
    vibesText: '[جملة واحدة قصيرة تصف الأجواء]',
    // 7. Visit us block
    visitTitle: '[عنوان الزيارة]',
    visitAddrLabel: 'العنوان',
    visitAddr: '[العنوان]',
    visitHoursLabel: 'مواعيد العمل',
    visitHours: '[مواعيد العمل]',
    visitPhoneLabel: 'اتصل بنا',
    visitPhone: '[رقم الهاتف]',
    visitMapCta: 'الاتجاهات',
    // 8. Footer
    footerLegal: '© ONZGO — جميع الحقوق محفوظة\nBREW • BITES • VIBES',
    // 9. Floating button
    floatWaLabel: 'واتساب',
  },

  en: {
    langToggle: 'AR',
    // Navigation
    navBrew:  'Brew',
    navBites: 'Bites',
    navVibes: 'Vibes',
    navVisit: 'Visit',
    // 2. Hero
    heroHeadline: '[HEADLINE]',
    heroCta: 'Order now',
    // 4. Brew block
    brewTitle: '[BREW TITLE]',
    brewText: '[One short sentence describing the coffee]',
    brewCta: 'See the coffee',
    // 5. Bites block
    bitesTitle: '[BITES TITLE]',
    bitesText: '[One short sentence describing the food]',
    bitesCta: 'See the bites',
    // 6. Vibes block
    vibesTitle: '[VIBES TITLE]',
    vibesText: '[One short sentence describing the atmosphere]',
    // 7. Visit us block
    visitTitle: '[VISIT TITLE]',
    visitAddrLabel: 'Address',
    visitAddr: '[ADDRESS]',
    visitHoursLabel: 'Opening hours',
    visitHours: '[OPENING HOURS]',
    visitPhoneLabel: 'Call us',
    visitPhone: '[PHONE]',
    visitMapCta: 'Get directions',
    // 8. Footer
    footerLegal: '© ONZGO — All rights reserved\nBREW • BITES • VIBES',
    // 9. Floating button
    floatWaLabel: 'WhatsApp',
  }
};

/* ─────────────────────────────────────────────────
   LANGUAGE SYSTEM (Instant switch, LocalStorage try/catch)
   ───────────────────────────────────────────────── */
let currentLang = 'ar';
try {
  const saved = localStorage.getItem('onzgo-lang');
  if (saved === 'ar' || saved === 'en') {
    currentLang = saved;
  }
} catch (e) {
  currentLang = 'ar';
}

function setLang(lang) {
  currentLang = lang;
  try {
    localStorage.setItem('onzgo-lang', lang);
  } catch (e) {
    // LocalStorage unavailable (e.g. private browsing)
  }

  const html = document.documentElement;
  html.lang = lang;
  html.dir  = lang === 'ar' ? 'rtl' : 'ltr';

  const t = CONTENT[lang];

  // 1. Update text for all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.innerHTML = t[key].replace(/\n/g, '<br>');
    }
  });

  // 2. Update aria-labels for data-i18n-aria elements
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (t[key] !== undefined) {
      el.setAttribute('aria-label', t[key]);
    }
  });

  // 3. Mirror pill button arrows (← for RTL Arabic, → for LTR English)
  const arrowChar = lang === 'ar' ? '←' : '→';
  document.querySelectorAll('.pill .arrow').forEach(el => {
    el.textContent = arrowChar;
  });

  // 4. Rebuild overlay navigation links in current language
  buildOverlayNav();
}

/* ─────────────────────────────────────────────────
   HAMBURGER / OVERLAY MENU
   ───────────────────────────────────────────────── */
const burger  = document.getElementById('burger');
const overlay = document.getElementById('overlay');

function buildOverlayNav() {
  const t = CONTENT[currentLang];
  const navEl = document.getElementById('overlay-nav');
  if (!navEl) return;

  const links = [
    { href: '#brew',  label: t.navBrew },
    { href: '#bites', label: t.navBites },
    { href: '#vibes', label: t.navVibes },
    { href: '#visit', label: t.navVisit },
  ];

  navEl.innerHTML = links
    .map(link => `<a href="${link.href}">${link.label}</a>`)
    .join('');

  navEl.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });
}

function openMenu() {
  burger.classList.add('open');
  overlay.classList.add('open');
  burger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  burger.classList.remove('open');
  overlay.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

if (burger) {
  burger.addEventListener('click', () => {
    overlay.classList.contains('open') ? closeMenu() : openMenu();
  });
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

/* ─────────────────────────────────────────────────
   LANGUAGE TOGGLE
   ───────────────────────────────────────────────── */
const langBtn = document.getElementById('lang-btn');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    setLang(currentLang === 'ar' ? 'en' : 'ar');
  });
}

/* ─────────────────────────────────────────────────
   HEADER SCROLL BLUR
   ───────────────────────────────────────────────── */
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ─────────────────────────────────────────────────
   MOTION (Respects prefers-reduced-motion)
   ───────────────────────────────────────────────── */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 1. Scroll reveal for text & elements
if (!prefersReducedMotion) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}

// 2. Hand-drawn squiggles stroke-draw animation (SVG stroke-dashoffset)
document.querySelectorAll('.squig-draw').forEach(path => {
  const len = path.getTotalLength ? path.getTotalLength() : 800;
  path.style.setProperty('--path-len', len);
  path.style.strokeDasharray = len;
  path.style.strokeDashoffset = len;
});

if (!prefersReducedMotion) {
  const squigObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('drawn');
        squigObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.squig-draw').forEach(el => squigObserver.observe(el));
} else {
  document.querySelectorAll('.squig-draw').forEach(el => el.classList.add('drawn'));
}

// 3. Subtle cup parallax on scroll (max ~20px)
if (!prefersReducedMotion) {
  const cupWrap = document.querySelector('#hero .cup-wrap');
  const heroSection = document.getElementById('hero');

  if (cupWrap && heroSection) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = heroSection.getBoundingClientRect();
          const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
          const offset = progress * 20; // max ~20px
          const isRTL = document.documentElement.dir === 'rtl';
          cupWrap.style.transform = isRTL
            ? `translateX(50%) translateY(-${offset}px)`
            : `translateX(-50%) translateY(-${offset}px)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
}

/* ─────────────────────────────────────────────────
   INITIALIZE
   ───────────────────────────────────────────────── */
setLang(currentLang);
