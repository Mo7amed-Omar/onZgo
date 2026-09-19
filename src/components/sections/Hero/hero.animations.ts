import { gsap } from '../../../lib/animations/gsap';

export function animateHeroEntrance(
  container: HTMLElement | null,
  elements: {
    badge?: HTMLElement | null;
    titleLines?: (HTMLElement | null)[];
    subheadline?: HTMLElement | null;
    ctas?: HTMLElement | null;
    mediaCard?: HTMLElement | null;
    statsStrip?: HTMLElement | null;
  },
  prefersReducedMotion: boolean = false
) {
  if (!container) return null;

  if (prefersReducedMotion) {
    gsap.set(
      [
        elements.badge,
        ...(elements.titleLines || []),
        elements.subheadline,
        elements.ctas,
        elements.mediaCard,
        elements.statsStrip,
      ].filter(Boolean),
      { opacity: 1, y: 0, scale: 1 }
    );
    return null;
  }

  const tl = gsap.timeline({ delay: 0.2 });

  if (elements.badge) {
    tl.fromTo(
      elements.badge,
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' }
    );
  }

  if (elements.titleLines && elements.titleLines.length > 0) {
    tl.fromTo(
      elements.titleLines.filter(Boolean),
      { opacity: 0, y: 40, skewY: 2 },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power4.out',
      },
      '-=0.4'
    );
  }

  if (elements.subheadline) {
    tl.fromTo(
      elements.subheadline,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
      '-=0.5'
    );
  }

  if (elements.ctas) {
    tl.fromTo(
      elements.ctas,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.2)' },
      '-=0.4'
    );
  }

  if (elements.mediaCard) {
    tl.fromTo(
      elements.mediaCard,
      { opacity: 0, scale: 0.94, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: 'power3.out' },
      '-=0.8'
    );
  }

  if (elements.statsStrip) {
    tl.fromTo(
      elements.statsStrip,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
      '-=0.5'
    );
  }

  return tl;
}

