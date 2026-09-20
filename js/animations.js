/**
 * ONZGO — Animations
 * ──────────────────────────────────────────────────────────────
 * IntersectionObserver reveal + squiggle stroke-draw + hero parallax.
 * All animations are disabled when prefers-reduced-motion is set.
 * Uses transform/opacity only for 60fps performance.
 * ──────────────────────────────────────────────────────────────
 */

(function () {
  'use strict';

  /* ── Reduced-motion guard ──────────────────────────────────── */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1. Scroll Reveal (IntersectionObserver) ─────────────────
     Adds .is-visible to .onz-reveal and .onz-reveal-group
     elements when they enter the viewport. Fires once.
  ──────────────────────────────────────────────────────────── */
  function initReveal() {
    if (prefersReduced) {
      /* Make everything visible immediately */
      document.querySelectorAll('.onz-reveal, .onz-reveal-group').forEach(el => {
        el.classList.add('is-visible');
      });
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.onz-reveal, .onz-reveal-group').forEach(el => {
      revealObserver.observe(el);
    });
  }

  /* ── 2. Squiggle Draw (SVG stroke-dashoffset) ────────────────
     Adds .is-drawn to .onz-squiggle-path when the parent
     strip enters the viewport. CSS handles the animation.
  ──────────────────────────────────────────────────────────── */
  function initSquiggleDraw() {
    const paths = document.querySelectorAll('.onz-squiggle-path');
    if (!paths.length) return;

    if (prefersReduced) {
      paths.forEach(p => {
        p.style.strokeDashoffset = '0';
      });
      return;
    }

    /* Compute each path's actual length for perfect draw */
    paths.forEach(path => {
      try {
        const len = path.getTotalLength ? path.getTotalLength() : 1200;
        path.style.strokeDasharray  = len;
        path.style.strokeDashoffset = len;
      } catch (_) {
        /* SVG path not in DOM yet — fall back to hardcoded value */
      }
    });

    const drawObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            /* Trigger draw for all paths inside this strip */
            entry.target.querySelectorAll('.onz-squiggle-path').forEach((p, i) => {
              setTimeout(() => p.classList.add('is-drawn'), i * 120);
            });
            drawObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('.onz-squiggle-strip, [data-squiggle-draw]').forEach(el => {
      drawObserver.observe(el);
    });
  }

  /* ── 3. Hero Parallax ─────────────────────────────────────────
     Moves the hero <img> up to 20px on scroll.
     requestAnimationFrame-gated for performance.
  ──────────────────────────────────────────────────────────── */
  function initHeroParallax() {
    if (prefersReduced) return;

    const heroImg = document.querySelector('.onz-hero__img');
    if (!heroImg) return;

    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          /* Only apply within hero height */
          const heroH   = document.querySelector('.onz-hero')?.offsetHeight || window.innerHeight;
          if (scrollY <= heroH) {
            const offset = Math.round(scrollY * 0.18); /* max ~20px at hero bottom */
            heroImg.style.transform = `translateY(${offset}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── 4. Header Solid-on-scroll ────────────────────────────────
     Adds .onz-header--solid once the user scrolls past ~80px.
  ──────────────────────────────────────────────────────────── */
  function initHeaderScroll() {
    const header = document.querySelector('.onz-header');
    if (!header) return;

    let ticking = false;

    function update() {
      header.classList.toggle('onz-header--solid', window.scrollY > 80);
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ── 5. Latte Art Entrance ────────────────────────────────────
     Triggers the IS-latte-visible class on [data-latte-trigger]
     when the brew section enters the viewport.
     Also computes getTotalLength() for the stream paths.
  ──────────────────────────────────────────────────────────── */
  function initLatteArt() {
    const wrap = document.querySelector('[data-latte-trigger]');
    if (!wrap) return;

    if (prefersReduced) {
      /* Reveal everything immediately without animation */
      wrap.classList.add('is-latte-visible');
      return;
    }

    /* Compute actual stream path lengths for pixel-perfect draw animation */
    const streamPaths = wrap.querySelectorAll('.onz-stream-main, .onz-stream-shine');
    streamPaths.forEach(path => {
      try {
        const len = path.getTotalLength ? Math.ceil(path.getTotalLength()) : 280;
        path.style.strokeDasharray  = len;
        path.style.strokeDashoffset = len;
      } catch (_) { /* SVG not in layout yet — CSS fallback (280) applies */ }
    });

    const latteObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-latte-visible');
            latteObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    latteObserver.observe(wrap);
  }

  /* ── Init ─────────────────────────────────────────────────── */
  function init() {
    initReveal();
    initSquiggleDraw();
    initHeroParallax();
    initHeaderScroll();
    initLatteArt();
  }

  /* Expose */
  window.ONZGO = window.ONZGO || {};
  window.ONZGO.animations = { init };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
