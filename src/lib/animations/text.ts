import { gsap } from './gsap';

export function animateTextReveal(
  target: HTMLElement | string,
  trigger?: HTMLElement | string,
  delay: number = 0
) {
  return gsap.from(target, {
    scrollTrigger: trigger
      ? {
          trigger,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        }
      : undefined,
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.08,
    delay,
    ease: 'power4.out',
  });
}

