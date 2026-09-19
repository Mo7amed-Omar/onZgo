import { gsap } from '../../../lib/animations/gsap';

export function animateBrandStory(
  container: HTMLElement | null,
  options: {
    heading?: HTMLElement | null;
    paragraphs?: (HTMLElement | null)[];
    quoteCard?: HTMLElement | null;
    pillars?: (HTMLElement | null)[];
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
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
  }

  if (options.paragraphs && options.paragraphs.length > 0) {
    tl.fromTo(
      options.paragraphs.filter(Boolean),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out' },
      '-=0.4'
    );
  }

  if (options.quoteCard) {
    tl.fromTo(
      options.quoteCard,
      { opacity: 0, scale: 0.95, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(1.2)' },
      '-=0.4'
    );
  }

  if (options.pillars && options.pillars.length > 0) {
    tl.fromTo(
      options.pillars.filter(Boolean),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' },
      '-=0.4'
    );
  }

  return tl;
}

