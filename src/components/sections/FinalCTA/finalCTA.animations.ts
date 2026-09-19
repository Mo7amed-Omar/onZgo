import { gsap } from '../../../lib/animations/gsap';

export function animateFinalCTA(
  container: HTMLElement | null,
  card: HTMLElement | null,
  prefersReducedMotion: boolean = false
) {
  if (!container || !card || prefersReducedMotion) return null;

  return gsap.fromTo(
    card,
    { opacity: 0, scale: 0.95, y: 40 },
    {
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true,
      },
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
    }
  );
}

