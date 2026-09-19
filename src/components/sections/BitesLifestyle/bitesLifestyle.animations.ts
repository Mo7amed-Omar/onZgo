import { gsap } from '../../../lib/animations/gsap';

export function animateLifestyle(
  container: HTMLElement | null,
  cards: (HTMLElement | null)[],
  prefersReducedMotion: boolean = false
) {
  if (!container || prefersReducedMotion) return null;

  return gsap.fromTo(
    cards.filter(Boolean),
    { opacity: 0, y: 30, scale: 0.98 },
    {
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true,
      },
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power3.out',
    }
  );
}

