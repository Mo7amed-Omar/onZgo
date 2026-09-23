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
     This ensures they open in a new tab and don't
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

  /* ── 5. Hero Curtain Reveal, Video Playback & Badge ──────────
     Sequence:
      1. Page loads → poster is ready behind the curtain panels
      2. ~200ms delay → curtain panels slide apart (800ms ease-out)
      3. Exactly as curtains finish opening (~1000ms) → video.play() & badge drops in
      4. Video ends (or 4.5s fallback) → headline reveals
  ──────────────────────────────────────────────────────────── */
  function initHeroSequence() {
    const video    = document.getElementById('onz-hero-video');
    const curtain  = document.querySelector('.onz-hero-curtain');
    const badge    = document.querySelector('.onz-hero__badge');
    const headline = document.querySelector('.onz-hero__headline');

    function revealHeadline() {
      if (headline) {
        headline.classList.add('is-revealed');
      }
    }

    function revealBadge() {
      if (badge) {
        badge.classList.add('is-visible');
      }
    }

    /* Fallback timer: ensure headline appears after 5.5s regardless */
    const fallbackTimer = setTimeout(revealHeadline, 5500);

    /* If prefers-reduced-motion is active */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      clearTimeout(fallbackTimer);
      if (curtain) curtain.classList.add('is-open');
      revealBadge();
      revealHeadline();
      return;
    }

    if (video) {
      video.muted = true;

      /* When video ends naturally, reveal headline */
      video.addEventListener('ended', function () {
        clearTimeout(fallbackTimer);
        revealHeadline();
      }, { once: true });

      /* Handle video error fallback */
      video.addEventListener('error', function () {
        clearTimeout(fallbackTimer);
        revealHeadline();
      }, { once: true });
    } else {
      revealHeadline();
    }

    /* Start curtain opening after short delay (200ms) */
    setTimeout(function () {
      if (curtain) {
        curtain.classList.add('is-open');
      }

      /* Exactly when curtain finishes opening (200ms + 800ms = 1000ms from load) */
      setTimeout(function () {
        revealBadge();

        if (video) {
          try {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(function () {
                /* Autoplay blocked by browser policy — reveal headline gracefully */
                clearTimeout(fallbackTimer);
                revealHeadline();
              });
            }
          } catch (_) {
            clearTimeout(fallbackTimer);
            revealHeadline();
          }
        }
      }, 800);
    }, 200);
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
