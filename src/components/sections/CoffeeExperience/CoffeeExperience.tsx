import React, { useEffect, useRef } from 'react';
import { Sparkles, Flame, Droplets, Gauge } from 'lucide-react';
import { brewJourneySteps } from '../../../data/experience';
import { Section } from '../../ui/Section/Section';
import { Container } from '../../ui/Container/Container';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { BrewStepCard } from './BrewStepCard';
import { animateCoffeeJourney } from './coffeeExperience.animations';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import { gsap } from '../../../lib/animations/gsap';

export const CoffeeExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stepNodes = containerRef.current?.querySelectorAll<HTMLElement>('.brew-step-node');
      animateCoffeeJourney(
        containerRef.current,
        stepNodes ? Array.from(stepNodes) : [],
        prefersReducedMotion
      );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <Section id="experience" variant="espresso" spacing="xl">
      <Container size="default">
        <div ref={containerRef}>
          {/* Section Heading */}
          <SectionHeading
            eyebrow="BEAN • ROAST • GRIND • EXTRACT"
            eyebrowVariant="orange"
            theme="dark"
            title="THE SCIENCE OF EXCEPTIONAL EXTRACTION"
            subtitle="Great coffee is never an accident. It is the exact calculation of elevation, thermal curves, micron precision, and sensory passion."
            align="center"
          />

          {/* Quick Technical Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16 p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
            <div className="flex flex-col items-center">
              <Flame className="w-5 h-5 text-onzgo-orange mb-1" />
              <span className="font-black text-white text-lg">93.5°C</span>
              <span className="text-[0.65rem] font-mono text-white/50">STABLE WATER TEMP</span>
            </div>
            <div className="flex flex-col items-center">
              <Gauge className="w-5 h-5 text-onzgo-turquoise mb-1" />
              <span className="font-black text-white text-lg">9.0 BAR</span>
              <span className="text-[0.65rem] font-mono text-white/50">EXTRACTION PRESSURE</span>
            </div>
            <div className="flex flex-col items-center">
              <Droplets className="w-5 h-5 text-onzgo-orange mb-1" />
              <span className="font-black text-white text-lg">120 PPM</span>
              <span className="text-[0.65rem] font-mono text-white/50">MINERAL WATER TDS</span>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="w-5 h-5 text-onzgo-turquoise mb-1" />
              <span className="font-black text-white text-lg">±0.05g</span>
              <span className="text-[0.65rem] font-mono text-white/50">DOSE TOLERANCE</span>
            </div>
          </div>

          {/* Stepped Process List */}
          <div className="divide-y divide-white/10 space-y-4">
            {brewJourneySteps.map((step, idx) => (
              <BrewStepCard key={step.step} step={step} index={idx} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

