/**
 * ONZGO — Main
 * ──────────────────────────────────────────────────────────────
 * Orchestrates: Bootstrap Offcanvas, smooth-scroll, menu PDF
 * button wiring, hero curtain reveal, video playback & headline.
 * Runs after DOM is ready.
 * ──────────────────────────────────────────────────────────────
 */

(function () {
  'use strict';

  /* ── DOMContentLoaded guard ─────────────────────────────────── */
  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  /* ── 1. Offcanvas Drawer (Standalone + Bootstrap compatible) ─ */
  function initOffcanvas() {
    const offcanvasEl = document.getElementById('onz-offcanvas');
    if (!offcanvasEl) return;

    let bsOffcanvas = null;
    if (typeof bootstrap !== 'undefined' && bootstrap.Offcanvas) {
      try {
        bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl, { scroll: false, backdrop: true });
      } catch (_) {}
    }

    function showMenu() {
      if (bsOffcanvas) {
        bsOffcanvas.show();
      } else {
        offcanvasEl.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
    }

    function hideMenu() {
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      } else {
        offcanvasEl.classList.remove('show');
        document.body.style.overflow = '';
      }
    }

    const hamburger = document.getElementById('hamburger-btn');
    if (hamburger) {
      hamburger.addEventListener('click', showMenu);
    }

    offcanvasEl.querySelectorAll('[data-bs-dismiss="offcanvas"], .btn-close, .onz-close-btn').forEach(btn => {
      btn.addEventListener('click', hideMenu);
    });

    /* Close + smooth-scroll on nav link click */
    offcanvasEl.querySelectorAll('[data-offcanvas-close]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          hideMenu();
          setTimeout(() => {
            const target = document.querySelector(href);
            if (target) {
              const headerH = parseInt(
                getComputedStyle(document.documentElement)
                  .getPropertyValue('--header-h') || '64',
                10
              );
              const y = target.getBoundingClientRect().top + window.scrollY - headerH;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }, 360);
        }
      });
    });
  }

  /* ── 2. Smooth Scroll for all anchor links ───────────────────
     Handles <a href="#section"> clicks outside the offcanvas.
  ──────────────────────────────────────────────────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      if (link.hasAttribute('data-offcanvas-close')) return;

      link.addEventListener('click', (e) => {
        const href   = link.getAttribute('href');
        const target = href === '#' ? null : document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const headerH = parseInt(
          getComputedStyle(document.documentElement)
            .getPropertyValue('--header-h') || '64',
          10
        );
        const y = target.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    });
  }

  /* ── 3. Menu PDF button wiring ─────────────────────────────── */
  function initMenuButtons() {
    document.querySelectorAll('[data-menu-pdf]').forEach(el => {
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });
  }

  /* ── 4. Inject SVG sprite into DOM (Skipped on file://) ─────── */
  async function injectSvgSprite() {
    if (window.location.protocol === 'file:') return;
    try {
      const resp = await fetch('assets/svg/squiggles.svg');
      if (!resp.ok) return;
      const text = await resp.text();
      const div  = document.createElement('div');
      div.setAttribute('aria-hidden', 'true');
      div.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;';
      div.innerHTML = text;
      document.body.insertAdjacentElement('afterbegin', div);
    } catch (_) {
      /* Fallback gracefully */
    }
  }

  /* ── 5. Hero Video Playback & Mobile Video Setup ───────────── */
  function initHeroSequence() {
    const video    = document.getElementById('onz-hero-video');
    const headline = document.querySelector('.onz-hero__headline');

    if (headline) {
      headline.classList.add('is-revealed');
    }

    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    /* Select mobile-optimized portrait video on small screens */
    if (window.innerWidth <= 767 && !video.currentSrc.includes('mobile')) {
      const mobileSrc = 'assets/video/hero-pour-mobile.mp4';
      if (video.src !== mobileSrc) {
        video.src = mobileSrc;
        video.load();
      }
    }

    const tryPlay = () => {
      const p = video.play();
      if (p !== undefined) {
        p.catch(() => {
          /* Autoplay blocked by power-saver or user settings — poster remains */
        });
      }
    };

    tryPlay();
    document.addEventListener('touchstart', tryPlay, { once: true });
    document.addEventListener('click', tryPlay, { once: true });
  }

  /* ── Init ─────────────────────────────────────────────────── */
  onReady(function () {
    initOffcanvas();
    initSmoothScroll();
    initMenuButtons();
    injectSvgSprite();
    initHeroSequence();
  });
})();
