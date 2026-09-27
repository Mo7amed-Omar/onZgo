/**
 * ONZGO — i18n / Language Switch
 * ──────────────────────────────────────────────────────────────
 * Handles: lang attribute, dir attribute, Bootstrap CSS swap,
 *          data-i18n text replacement, data-i18n-html replacement,
 *          data-i18n-attr attribute updates,
 *          localStorage persistence, default = AR.
 * ──────────────────────────────────────────────────────────────
 */

(function () {
  'use strict';

  /* ── Bootstrap CDN CSS switcher ─────────────────────────────── */
  const BS_VERSION = '5.3.3';
  const BS_BASE    = `https://cdn.jsdelivr.net/npm/bootstrap@${BS_VERSION}/dist/css/`;
  const BS_LTR     = `${BS_BASE}bootstrap.min.css`;
  const BS_RTL     = `${BS_BASE}bootstrap.rtl.min.css`;

  /* ── Resolve saved/default language ────────────────────────── */
  function getSavedLang() {
    try {
      return localStorage.getItem('onzgo-lang') || 'ar';
    } catch (_) {
      return 'ar';
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem('onzgo-lang', lang);
    } catch (_) { /* storage blocked — degrade gracefully */ }
  }

  /* ── Apply language to document ─────────────────────────────── */
  function applyLang(lang) {
    const { CONTENT, CONFIG, isPlaceholder, getMapsUrl, getWhatsAppUrl } = window.ONZGO;
    const t   = CONTENT[lang];
    const dir = lang === 'ar' ? 'rtl' : 'ltr';

    /* 1. html element */
    document.documentElement.lang = lang;
    document.documentElement.dir  = dir;

    /* 2. Page title */
    document.title = t.pageTitle;

    /* 3. Bootstrap CSS */
    const bsLink = document.getElementById('bs-css');
    if (bsLink) {
      const target = dir === 'rtl' ? BS_RTL : BS_LTR;
      if (bsLink.href !== target) bsLink.href = target;
    }

    /* 4. data-i18n text / html nodes */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (typeof t[key] === 'string' && t[key].includes('<')) {
          el.innerHTML = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    /* 5. data-i18n-attr — set arbitrary attributes */
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const pairs = el.getAttribute('data-i18n-attr').split(';');
      pairs.forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (attr && key && t[key] !== undefined) {
          el.setAttribute(attr, t[key]);
        }
      });
    });

    /* 6. Menu PDF links — update href for current lang */
    const menuPdf = CONFIG.menuPdf[lang];
    document.querySelectorAll('[data-menu-pdf]').forEach(el => {
      el.href = menuPdf;
    });

    /* 7. Maps link */
    const mapsUrl = getMapsUrl();
    document.querySelectorAll('[data-maps-link]').forEach(el => {
      el.href = mapsUrl;
    });

    /* 8. WhatsApp FAB — show/hide based on config */
    const waUrl = getWhatsAppUrl();
    const fab   = document.querySelector('.onz-fab');
    if (fab) {
      if (waUrl) {
        fab.href = waUrl;
        fab.removeAttribute('hidden');
        fab.setAttribute('aria-label', t.fabAria);
      } else {
        fab.setAttribute('hidden', '');
      }
    }

    /* 9. Social links — show/hide based on config */
    const ig = document.querySelector('[data-social="instagram"]');
    const fb = document.querySelector('[data-social="facebook"]');
    if (ig) ig.parentElement.hidden = isPlaceholder(CONFIG.instagram);
    if (fb) fb.parentElement.hidden = isPlaceholder(CONFIG.facebook);
    if (ig) ig.href = isPlaceholder(CONFIG.instagram) ? '#' : CONFIG.instagram;
    if (fb) fb.href = isPlaceholder(CONFIG.facebook)  ? '#' : CONFIG.facebook;

    /* 10. Footer links */
    const footerNavEl = document.getElementById('footer-nav');
    if (footerNavEl) {
      footerNavEl.innerHTML = '';
      t.footerLinks.forEach(link => {
        const a = document.createElement('a');
        a.href       = link.href;
        a.className  = 'onz-footer__link';
        a.textContent = link.label;
        footerNavEl.appendChild(a);
      });
    }

    /* 11. Lang toggle label */
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      toggleBtn.textContent  = t.langLabel;
      toggleBtn.setAttribute('aria-label', t.langLabelAria);
    }

    /* 12. Placeholder spans — mark visually */
    document.querySelectorAll('[data-placeholder]').forEach(el => {
      const cfg = el.getAttribute('data-placeholder');
      const val = CONFIG[cfg];
      if (val !== undefined) {
        const isph = isPlaceholder(val);
        el.textContent = val;
        el.classList.toggle('onz-placeholder', isph);
      }
    });

    /* 13. Toggle .onz-placeholder on visit info spans (address/hours/phone) */
    const visitKeyToConfig = {
      visitAddress: 'address',
      visitHours:   'hours',
      visitPhone:   'phone',
    };
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (visitKeyToConfig[key]) {
        const configVal = CONFIG[visitKeyToConfig[key]];
        el.classList.toggle('onz-placeholder', isPlaceholder(configVal));
      }
    });

    /* 14. Store current lang for use by main.js */
    window.ONZGO.currentLang = lang;
  }

  /* ── Public: switch language ─────────────────────────────────── */
  function switchLang() {
    const current = window.ONZGO.currentLang || getSavedLang();
    const next    = current === 'ar' ? 'en' : 'ar';
    saveLang(next);
    applyLang(next);
  }

  /* ── Init ───────────────────────────────────────────────────── */
  function init() {
    const saved = getSavedLang();
    applyLang(saved);

    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', switchLang);
    }
  }

  /* Expose for main.js */
  window.ONZGO = window.ONZGO || {};
  window.ONZGO.i18n = { init, applyLang, switchLang };

  /* Auto-init when DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
