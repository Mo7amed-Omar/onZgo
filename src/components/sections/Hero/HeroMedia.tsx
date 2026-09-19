import React from 'react';
import { Star, Award, Heart } from 'lucide-react';
import { Badge } from '../../ui/Badge/Badge';

interface HeroMediaProps {
  mediaCardRef: React.RefObject<HTMLDivElement>;
}

export const HeroMedia: React.FC<HeroMediaProps> = ({ mediaCardRef }) => {
  return (
    <div ref={mediaCardRef} className="relative w-full lg:w-[480px] xl:w-[540px] mt-8 lg:mt-0">
      {/* Decorative Brand Frame */}
      <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl bg-onzgo-espresso border-4 border-white/80 aspect-[4/5] sm:aspect-[3/4]">
        {/* Main Background Image - High-end specialty coffee & terrace */}
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"
          alt="ONZGO Coffee Bar and Terrace Atmosphere"
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
          loading="eager"
        />

        {/* Ambient Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-onzgo-espresso-950/80 via-transparent to-black/20 pointer-events-none" />

        {/* Top Floating Badge */}
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
          <Badge variant="espresso" size="sm" icon={<Star className="w-3.5 h-3.5 text-onzgo-orange fill-onzgo-orange" />}>
            TOP RATED ROASTERY
          </Badge>

          <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[0.7rem] font-mono font-bold text-onzgo-espresso shadow-xs">
            SINCE 2024
          </div>
        </div>

        {/* Bottom Hero Card Details */}
        <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-xl space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-onzgo-orange animate-ping" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-onzgo-espresso">
                TODAY'S SPECIALTY PULL
              </span>
            </div>
            <span className="text-xs font-bold text-onzgo-orange font-mono">$6.50</span>
          </div>

          <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-onzgo-espresso">
            ONZGO Citrus Cold Brew
          </h3>

          <p className="text-xs text-onzgo-espresso/70 line-clamp-1">
            18h Ethiopian Yirgacheffe • Organic Blood Orange • Tonic Fizz
          </p>

          <div className="flex items-center gap-2 pt-1 text-[0.7rem] font-mono text-onzgo-espresso/60">
            <span className="bg-onzgo-cream-200 px-2 py-0.5 rounded text-onzgo-espresso">Terroir Ethiopia</span>
            <span className="bg-onzgo-turquoise/15 px-2 py-0.5 rounded text-onzgo-turquoise-800">Fresh Brewed</span>
          </div>
        </div>
      </div>

      {/* Floating Accent Capsule - Left */}
      <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-onzgo-espresso text-white p-3.5 pr-5 rounded-2xl shadow-xl border border-white/15 animate-float-slow">
        <div className="w-10 h-10 rounded-xl bg-onzgo-orange flex items-center justify-center text-white shrink-0">
          <Award className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-mono text-onzgo-sand-200">100% ETHICAL</div>
          <div className="text-sm font-bold">Single-Origin Microlots</div>
        </div>
      </div>

      {/* Floating Accent Capsule - Top Right */}
      <div className="absolute -top-6 -right-6 hidden sm:flex items-center gap-2.5 bg-onzgo-turquoise text-white px-4 py-2.5 rounded-2xl shadow-xl border border-white/20">
        <Heart className="w-4 h-4 fill-white" />
        <span className="text-xs font-mono font-bold uppercase tracking-wider">Terrace Vibes</span>
      </div>
    </div>
  );
};

