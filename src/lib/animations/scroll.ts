import { gsap, ScrollTrigger } from './gsap';

export interface FadeUpOptions {
  trigger: HTMLElement | string;
  targets: gsap.TweenTarget;
  start?: string;
  delay?: number;
  stagger?: number;
  y?: number;
  duration?: number;
}

export function createFadeUpAnimation({
  trigger,
  targets,
  start = 'top 85%',
  delay = 0,
  stagger = 0.1,
  y = 40,
  duration = 0.9,
}: FadeUpOptions): gsap.core.Tween {
  return gsap.from(targets, {
    scrollTrigger: {
      trigger,
      start,
      toggleActions: 'play none none none',
      once: true,
    },
    y,
    opacity: 0,
    duration,
    stagger,
    delay,
    ease: 'power3.out',
  });
}

export function createParallax({
  trigger,
  target,
  speed = 0.2,
  start = 'top bottom',
  end = 'bottom top',
}: {
  trigger: HTMLElement | string;
  target: HTMLElement | string;
  speed?: number;
  start?: string;
  end?: string;
}) {
  return gsap.to(target, {
    scrollTrigger: {
      trigger,
      start,
      end,
      scrub: 1,
    },
    yPercent: speed * 100,
    ease: 'none',
  });
}

export function refreshScrollTrigger() {
  ScrollTrigger.refresh();
}

