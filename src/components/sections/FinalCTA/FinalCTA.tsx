import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Coffee, Sparkles } from 'lucide-react';
import { Section } from '../../ui/Section/Section';
import { Container } from '../../ui/Container/Container';
import { Button } from '../../ui/Button/Button';
import { MagneticButton } from '../../ui/MagneticButton/MagneticButton';
import { Badge } from '../../ui/Badge/Badge';
import { animateFinalCTA } from './finalCTA.animations';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import { gsap } from '../../../lib/animations/gsap';

export const FinalCTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      animateFinalCTA(containerRef.current, cardRef.current, prefersReducedMotion);
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <Section id="cta" variant="cream" spacing="lg">
      <Container size="default">
        <div ref={containerRef}>
          <div
            ref={cardRef}
            className="relative rounded-4xl sm:rounded-5xl overflow-hidden bg-gradient-to-br from-onzgo-orange via-onzgo-orange to-onzgo-orange-700 text-white p-8 sm:p-16 lg:p-20 shadow-2xl text-center flex flex-col items-center justify-center select-none"
          >
            {/* Background Graphic Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-3xl flex flex-col items-center">
              <Badge
                variant="espresso"
                size="md"
                icon={<Sparkles className="w-3.5 h-3.5 text-onzgo-orange" />}
                className="mb-6"
              >
                YOUR EVERYDAY RITUAL
              </Badge>

              <h2 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tightest leading-[0.95] mb-6 text-white">
                SEE YOU AT ONZGO.
              </h2>

              <p className="text-base sm:text-xl text-white/90 leading-relaxed max-w-xl mb-10 font-medium">
                Fresh coffee, warm bites, and sunny terrace tables are waiting for you today.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
                <MagneticButton strength={0.35}>
                  <Button
                    href="#menu"
                    variant="dark"
                    size="xl"
                    icon={<ArrowUpRight className="w-5 h-5" />}
                    className="w-full sm:w-auto shadow-2xl"
                  >
                    Explore Full Menu
                  </Button>
                </MagneticButton>

                <Button
                  href="#visit"
                  variant="secondary"
                  size="xl"
                  icon={<Coffee className="w-5 h-5" />}
                  iconPosition="left"
                  className="w-full sm:w-auto bg-white text-onzgo-espresso hover:bg-onzgo-cream-100"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

