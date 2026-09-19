import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../../../lib/animations/gsap';
import { Logo } from '../../ui/Logo/Logo';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsDone(true);
      onComplete?.();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsDone(true);
          onComplete?.();
        },
      });

      // Rapid initial entrance
      tl.fromTo(
        logoWrapperRef.current,
        { scale: 0.85, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.4)' }
      )
        .fromTo(
          textRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
          '-=0.2'
        )
        .fromTo(
          progressLineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: 'power3.inOut' },
          '-=0.2'
        )
        // Elegant curtain exit upward
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.7,
          ease: 'power4.inOut',
          delay: 0.1,
        });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete, prefersReducedMotion]);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-onzgo-espresso text-white select-none pointer-events-none"
    >
      <div className="flex flex-col items-center text-center px-4 max-w-sm">
        <div ref={logoWrapperRef}>
          <Logo variant="light" size="xl" showTagline={false} />
        </div>

        <p
          ref={textRef}
          className="mt-4 text-xs font-mono tracking-widest-2xl text-onzgo-sand-200 uppercase"
        >
          BREW • BITES • VIBES
        </p>

        {/* Minimal loading bar */}
        <div className="w-40 h-[2px] bg-white/10 rounded-full mt-6 overflow-hidden">
          <div
            ref={progressLineRef}
            className="w-full h-full bg-onzgo-orange origin-left"
          />
        </div>
      </div>
    </div>
  );
};

