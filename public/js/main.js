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

    // Debug event logging as required
    video.addEventListener('loadeddata', () => {
      console.log('[Theater Video] loadeddata: readyState =', video.readyState, 'src =', video.currentSrc);
    });
    video.addEventListener('play', () => {
      console.log('[Theater Video] play event fired! Video is now playing:', video.currentSrc);
    });
    video.addEventListener('error', () => {
      console.error('[Theater Video] error event fired! Code =', video.error ? video.error.code : 'unknown', video.error ? video.error.message : '');
    });

    video.muted = true;
    video.playsInline = true;

    function openCurtainsAndPlay() {
      if (hasOpened && theater.classList.contains('is-open')) return;
      hasOpened = true;
      theater.classList.remove('has-ended');
      theater.classList.add('is-open');

      const p = video.play();
      if (p !== undefined) {
        p.catch(err => {
          console.warn('[Theater Video] play() blocked or deferred:', err);
        });
      }
    }

    function closeCurtains() {
      theater.classList.remove('is-open');
      theater.classList.add('has-ended');
    }

    function checkInView() {
      const rect = theater.getBoundingClientRect();
      if (rect.top < window.innerHeight + 80 && rect.bottom > -80) {
        openCurtainsAndPlay();
      }
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasOpened) {
            openCurtainsAndPlay();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '100px 0px' });

      observer.observe(theater);
    } else {
      openCurtainsAndPlay();
    }

    // Scroll listener fallback for reliable opening on mobile
    window.addEventListener('scroll', () => {
      if (!hasOpened) checkInView();
    }, { passive: true });

    // Initial check in case theater is in view on load
    checkInView();

    video.addEventListener('ended', closeCurtains);

    if (replay) {
      replay.addEventListener('click', (e) => {
        e.stopPropagation();
        video.currentTime = 0;
        openCurtainsAndPlay();
      });
    }

    // User gesture fallback for mobile browsers requiring interaction
    const triggerPlay = () => {
      if (hasOpened && video.paused) {
        video.play().catch(() => {});
      }
    };
    document.addEventListener('touchstart', triggerPlay, { once: true });
    document.addEventListener('click', triggerPlay, { once: true });
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
