import { gsap } from '../../../lib/animations/gsap';

export function animateMenuEntrance(
  container: HTMLElement | null,
  elements: {
    heading?: HTMLElement | null;
    tabs?: HTMLElement | null;
    grid?: HTMLElement | null;
  },
  prefersReducedMotion: boolean = false
) {
  if (!container || prefersReducedMotion) return null;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top 80%',
      toggleActions: 'play none none none',
      once: true,
    },
  });

  if (elements.heading) {
    tl.fromTo(
      elements.heading,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
    );
  }

  if (elements.tabs) {
    tl.fromTo(
      elements.tabs,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.3'
    );
  }

  if (elements.grid) {
    const cards = elements.grid.querySelectorAll('.menu-item-card');
    if (cards.length > 0) {
      tl.fromTo(
        cards,
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
        },
        '-=0.2'
      );
    }
  }

  return tl;
}

export function animateTabTransition(grid: HTMLElement | null) {
  if (!grid) return;
  const cards = grid.querySelectorAll('.menu-item-card');
  gsap.fromTo(
    cards,
    { opacity: 0, y: 15, scale: 0.98 },
    { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
  );
}

