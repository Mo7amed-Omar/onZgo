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

    /* Subpage video support */
    const subVideo = document.getElementById('onz-sub-video');
    if (subVideo) {
      subVideo.muted = true;
      subVideo.playsInline = true;
      const sp = subVideo.play();
      if (sp !== undefined) sp.catch(() => {});
    }

    tryPlay();
    document.addEventListener('touchstart', tryPlay, { once: true });
    document.addEventListener('click', tryPlay, { once: true });
  }

  /* ── 6. Vertical Theater Curtain Video Stage ──────────────── */
  function initVerticalTheater() {
    const theater = document.getElementById('onz-theater');
    const video   = document.getElementById('onz-theater-video');
    const replay  = document.getElementById('onz-theater-replay');
    if (!theater || !video) return;

    let hasOpened = false;

    function openCurtainsAndPlay() {
      theater.classList.remove('has-ended');
      theater.classList.add('is-open');
      hasOpened = true;

      if (window.innerWidth <= 767 && !video.currentSrc.includes('mobile')) {
        const mobileSrc = 'assets/video/hero-pour-mobile.mp4';
        if (video.src !== mobileSrc) {
          video.src = mobileSrc;
          video.load();
        }
      }

      video.currentTime = 0;
      const p = video.play();
      if (p !== undefined) {
        p.catch(() => {});
      }
    }

    function closeCurtains() {
      theater.classList.remove('is-open');
      theater.classList.add('has-ended');
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasOpened) {
            setTimeout(openCurtainsAndPlay, 300);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.35 });

      observer.observe(theater);
    } else {
      setTimeout(openCurtainsAndPlay, 1000);
    }

    video.addEventListener('ended', closeCurtains);

    if (replay) {
      replay.addEventListener('click', (e) => {
        e.stopPropagation();
        openCurtainsAndPlay();
      });
    }
  }

  /* ── Init ─────────────────────────────────────────────────── */
  onReady(function () {
    initOffcanvas();
    initSmoothScroll();
    initMenuButtons();
    injectSvgSprite();
    initHeroSequence();
    initVerticalTheater();
  });
})();
