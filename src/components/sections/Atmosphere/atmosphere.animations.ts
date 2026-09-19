import { gsap } from '../../../lib/animations/gsap';

export function animateAtmosphere(
  container: HTMLElement | null,
  items: (HTMLElement | null)[],
  prefersReducedMotion: boolean = false
) {
  if (!container || prefersReducedMotion) return null;

  return gsap.fromTo(
    items.filter(Boolean),
    { opacity: 0, scale: 0.95, y: 30 },
    {
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true,
      },
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
    }
  );
}

