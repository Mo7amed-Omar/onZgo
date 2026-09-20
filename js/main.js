/**
 * ONZGO — Main
 * ──────────────────────────────────────────────────────────────
 * Orchestrates: Bootstrap Offcanvas, smooth-scroll, menu PDF
 * button wiring. Runs after DOM is ready.
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

  /* ── 1. Bootstrap Offcanvas ──────────────────────────────────
     Opens the full-screen nav. Closes when a nav link is clicked
     (smooth-scroll to the section happens after close).
  ──────────────────────────────────────────────────────────── */
  function initOffcanvas() {
    const offcanvasEl = document.getElementById('onz-offcanvas');
    if (!offcanvasEl || typeof bootstrap === 'undefined') return;

    const bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl, {
      scroll: false,
      backdrop: true,
    });

    /* Open on hamburger click */
    const hamburger = document.getElementById('hamburger-btn');
    if (hamburger) {
      hamburger.addEventListener('click', () => bsOffcanvas.show());
    }

    /* Close + smooth-scroll on nav link click */
    offcanvasEl.querySelectorAll('[data-offcanvas-close]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          bsOffcanvas.hide();
          /* Scroll after offcanvas closes (350ms transition) */
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
      /* Skip offcanvas links (already handled above) */
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

  /* ── 3. Menu PDF button wiring ───────────────────────────────
     All [data-menu-pdf] links are updated by i18n.js.
     This just ensures they open in a new tab and don't
     break if the PDF is missing.
  ──────────────────────────────────────────────────────────── */
  function initMenuButtons() {
    document.querySelectorAll('[data-menu-pdf]').forEach(el => {
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });
  }

  /* ── 4. Inject SVG sprite into DOM ─────────────────────────── */
  async function injectSvgSprite() {
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
      /* Fetch failed (e.g., file:// protocol) — inline SVGs still render */
    }
  }

  /* ── 5. Hero video — play once, freeze on last frame ────────────
     No autoplay attribute in HTML (avoids browser restrictions).
     JS plays it only if prefers-reduced-motion is off.
     On error or blocked autoplay: poster stays visible — no glitch.
  ──────────────────────────────────────────────────────────── */
  function initHeroVideo() {
    const video = document.getElementById('onz-hero-video');
    if (!video) return;

    /* Respect reduced-motion: leave video paused (poster visible) */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    /* Attempt autoplay — browsers may still block it (e.g. low-power) */
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(function () {
        /* Autoplay blocked: poster remains visible — no action needed */
      });
    }

    /* No `loop` attribute → video stops naturally at the last frame.
       Nothing to do on 'ended'. */
  }

  /* ── Init ─────────────────────────────────────────────────── */
  onReady(function () {
    initOffcanvas();
    initSmoothScroll();
    initMenuButtons();
    injectSvgSprite();
    initHeroVideo();
  });
})();
