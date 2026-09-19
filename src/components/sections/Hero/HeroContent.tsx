import React from 'react';
import { ArrowUpRight, Sparkles, MapPin, Coffee } from 'lucide-react';
import { brandData } from '../../../data/brand';
import { locationData } from '../../../data/locations';
import { Button } from '../../ui/Button/Button';
import { Badge } from '../../ui/Badge/Badge';
import { MagneticButton } from '../../ui/MagneticButton/MagneticButton';

interface HeroContentProps {
  badgeRef: React.RefObject<HTMLDivElement>;
  titleLine1Ref: React.RefObject<HTMLHeadingElement>;
  titleLine2Ref: React.RefObject<HTMLHeadingElement>;
  titleLine3Ref: React.RefObject<HTMLHeadingElement>;
  subheadlineRef: React.RefObject<HTMLParagraphElement>;
  ctasRef: React.RefObject<HTMLDivElement>;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  badgeRef,
  titleLine1Ref,
  titleLine2Ref,
  titleLine3Ref,
  subheadlineRef,
  ctasRef,
}) => {
  return (
    <div className="flex flex-col items-start max-w-2xl z-10">
      {/* Top Pill / Status */}
      <div ref={badgeRef} className="flex flex-wrap items-center gap-2.5 mb-6">
        <Badge variant="orange" size="md" icon={<Sparkles className="w-3.5 h-3.5 text-onzgo-orange" />}>
          FLAGSHIP OPEN • SUNLIT TERRACE
        </Badge>
        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-onzgo-espresso/60 bg-white/60 backdrop-blur-xs px-3 py-1 rounded-full border border-onzgo-espresso/5">
          <MapPin className="w-3 h-3 text-onzgo-orange" />
          <span>{locationData.address.district}</span>
        </span>
      </div>

      {/* Main Massive Editorial Headline */}
      <div className="space-y-1 mb-6 select-none">
        <h1
          ref={titleLine1Ref}
          className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tightest leading-[0.9] text-onzgo-espresso flex items-center"
        >
          <span>BREW</span>
          <span className="text-onzgo-orange ml-2 text-4xl sm:text-6xl lg:text-7xl">.</span>
        </h1>
        <h1
          ref={titleLine2Ref}
          className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tightest leading-[0.9] text-onzgo-espresso flex items-center"
        >
          <span>BITES</span>
          <span className="text-onzgo-turquoise ml-2 text-4xl sm:text-6xl lg:text-7xl">.</span>
        </h1>
        <h1
          ref={titleLine3Ref}
          className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tightest leading-[0.9] text-onzgo-orange flex items-center"
        >
          <span>VIBES</span>
          <span className="text-onzgo-espresso ml-2 text-4xl sm:text-6xl lg:text-7xl">.</span>
        </h1>
      </div>

      {/* Brand Subheadline */}
      <p
        ref={subheadlineRef}
        className="text-base sm:text-lg lg:text-xl text-onzgo-espresso/75 leading-relaxed font-normal max-w-xl mb-8"
      >
        {brandData.subheadline}
      </p>

      {/* CTA Button Group */}
      <div ref={ctasRef} className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
        <MagneticButton strength={0.3}>
          <Button
            href="#menu"
            variant="primary"
            size="lg"
            icon={<ArrowUpRight className="w-5 h-5" />}
            className="w-full sm:w-auto shadow-lg shadow-onzgo-orange/20"
          >
            Explore Menu & Brews
          </Button>
        </MagneticButton>

        <Button
          href="#visit"
          variant="outline"
          size="lg"
          icon={<Coffee className="w-4 h-4" />}
          iconPosition="left"
          className="w-full sm:w-auto bg-white/50 backdrop-blur-xs"
        >
          Find Our Terrace
        </Button>
      </div>
    </div>
  );
};

