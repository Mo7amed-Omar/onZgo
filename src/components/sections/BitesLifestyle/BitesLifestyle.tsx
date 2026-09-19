import React, { useEffect, useRef } from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { lifestyleMoments } from '../../../data/experience';
import { Section } from '../../ui/Section/Section';
import { Container } from '../../ui/Container/Container';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { Button } from '../../ui/Button/Button';
import { Badge } from '../../ui/Badge/Badge';
import { animateLifestyle } from './bitesLifestyle.animations';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import { gsap } from '../../../lib/animations/gsap';

export const BitesLifestyle: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll<HTMLElement>('.lifestyle-card');
      animateLifestyle(
        containerRef.current,
        cards ? Array.from(cards) : [],
        prefersReducedMotion
      );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <Section id="lifestyle" variant="sand" spacing="lg">
      <Container size="default">
        <div ref={containerRef}>
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="BITES & SOCIAL LIVING"
              eyebrowVariant="espresso"
              title="COFFEE IS ONLY HALF THE STORY"
              subtitle="Freshly baked artisan brioche, vibrant avocado sourdoughs, and sunlit mornings spent sharing food with good people."
              className="mb-0 max-w-2xl"
            />

            <Button
              href="#menu"
              variant="outline"
              size="md"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              See All Bakery Items
            </Button>
          </div>

          {/* Lifestyle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lifestyleMoments.map((moment) => (
              <div
                key={moment.id}
                className="lifestyle-card group relative bg-white rounded-3xl overflow-hidden border border-onzgo-espresso/10 hover:border-onzgo-orange/40 transition-all duration-300 hover:shadow-card-hover flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-onzgo-cream-200">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="espresso" size="sm">
                      {moment.tag}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans font-black text-xl uppercase tracking-tight text-onzgo-espresso mb-2 group-hover:text-onzgo-orange transition-colors">
                      {moment.title}
                    </h3>
                    <p className="text-sm text-onzgo-espresso/75 leading-relaxed">
                      {moment.caption}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-onzgo-espresso/5 flex items-center justify-between text-xs font-mono text-onzgo-espresso/50">
                    <span>#ONZGOlife</span>
                    <Sparkles className="w-3.5 h-3.5 text-onzgo-orange" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

