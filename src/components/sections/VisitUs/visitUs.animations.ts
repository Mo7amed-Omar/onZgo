import { gsap } from '../../../lib/animations/gsap';

export function animateVisitUs(
  container: HTMLElement | null,
  options: {
    heading?: HTMLElement | null;
    leftCol?: HTMLElement | null;
    rightCol?: HTMLElement | null;
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

  if (options.heading) {
    tl.fromTo(
      options.heading,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
    );
  }

  if (options.leftCol) {
    tl.fromTo(
      options.leftCol,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );
  }

  if (options.rightCol) {
    tl.fromTo(
      options.rightCol,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    );
  }

  return tl;
}

