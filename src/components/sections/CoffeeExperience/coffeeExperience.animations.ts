import { gsap } from '../../../lib/animations/gsap';

export function animateCoffeeJourney(
  container: HTMLElement | null,
  steps: (HTMLElement | null)[],
  prefersReducedMotion: boolean = false
) {
  if (!container || prefersReducedMotion) return null;

  steps.forEach((step) => {
    if (!step) return;

    gsap.fromTo(
      step,
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: step,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }
    );
  });
}

