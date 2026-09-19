import React from 'react';
import { Coffee, Utensils, Sparkles, CheckCircle2 } from 'lucide-react';
import { brandData } from '../../../data/brand';
import { BrandPillar } from '../../../types/brand';

const iconMap: Record<string, React.ReactNode> = {
  Coffee: <Coffee className="w-6 h-6" />,
  Utensils: <Utensils className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
};

interface BrandPillarsProps {
  pillarsRef?: React.RefObject<HTMLDivElement>;
}

export const BrandPillars: React.FC<BrandPillarsProps> = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 sm:mt-20">
      {brandData.pillars.map((pillar: BrandPillar, index: number) => {
        const isOrange = pillar.id === 'brew';
        const isDark = pillar.id === 'bites';

        return (
          <div
            key={pillar.id}
            className={`pillar-card relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
              isOrange
                ? 'bg-gradient-to-br from-onzgo-orange to-onzgo-orange-600 text-white shadow-lg shadow-onzgo-orange/20'
                : isDark
                ? 'bg-onzgo-espresso text-white shadow-lg shadow-onzgo-espresso/30'
                : 'bg-white text-onzgo-espresso border border-onzgo-espresso/10 shadow-sm hover:border-onzgo-turquoise/40'
            }`}
          >
            <div>
              {/* Pillar Tag & Icon */}
              <div className="flex items-center justify-between mb-8">
                <span
                  className={`text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full ${
                    isOrange
                      ? 'bg-white/20 text-white'
                      : isDark
                      ? 'bg-white/15 text-onzgo-sand-200'
                      : 'bg-onzgo-turquoise/15 text-onzgo-turquoise-800'
                  }`}
                >
                  {pillar.tag}
                </span>

                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    isOrange
                      ? 'bg-white/20 text-white'
                      : isDark
                      ? 'bg-onzgo-orange text-white'
                      : 'bg-onzgo-turquoise text-white'
                  }`}
                >
                  {iconMap[pillar.iconName] || <Sparkles className="w-6 h-6" />}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-sans font-black text-2xl uppercase tracking-tight mb-3">
                {pillar.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  isOrange ? 'text-white/90' : isDark ? 'text-white/75' : 'text-onzgo-espresso/70'
                }`}
              >
                {pillar.description}
              </p>
            </div>

            {/* Bottom Number */}
            <div className="mt-8 pt-4 border-t border-current/10 flex items-center justify-between text-xs font-mono opacity-60">
              <span>PILLAR 0{index + 1}</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

