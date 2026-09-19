import React from 'react';
import { BrewStep } from '../../../types/experience';

interface BrewStepCardProps {
  step: BrewStep;
  index: number;
}

export const BrewStepCard: React.FC<BrewStepCardProps> = ({ step, index }) => {
  const isEven = index % 2 === 1;

  return (
    <div
      className={`brew-step-node relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-12 ${
        isEven ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Visual Image Column */}
      <div className="w-full lg:w-1/2">
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/10 group">
          <img
            src={step.image}
            alt={step.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-onzgo-espresso-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Floating Number Tag */}
          <div className="absolute top-4 left-4 bg-onzgo-espresso/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 font-mono text-xs font-bold text-white">
            PHASE {step.step}
          </div>
        </div>
      </div>

      {/* Story & Technical Details Column */}
      <div className="w-full lg:w-1/2 space-y-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-4xl sm:text-5xl font-black text-onzgo-orange/80">
            {step.step}
          </span>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-onzgo-sand-200 block">
              {step.subtitle}
            </span>
            <h3 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white">
              {step.name}
            </h3>
          </div>
        </div>

        <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
          {step.description}
        </p>

        {/* Technical Data Chips */}
        <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {step.details.origin && (
            <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
              <span className="text-[0.65rem] font-mono uppercase text-onzgo-orange block">
                TERROIR / ELEVATION
              </span>
              <span className="text-xs font-bold text-white">{step.details.origin}</span>
            </div>
          )}

          {step.details.temperature && (
            <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
              <span className="text-[0.65rem] font-mono uppercase text-onzgo-turquoise block">
                EXTRACTION TEMP
              </span>
              <span className="text-xs font-bold text-white">{step.details.temperature}</span>
            </div>
          )}

          {step.details.grindSize && (
            <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
              <span className="text-[0.65rem] font-mono uppercase text-onzgo-sand-200 block">
                BURR CALIBRATION
              </span>
              <span className="text-xs font-bold text-white">{step.details.grindSize}</span>
            </div>
          )}

          {step.details.ratio && (
            <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
              <span className="text-[0.65rem] font-mono uppercase text-onzgo-orange block">
                BREW PARAMETER
              </span>
              <span className="text-xs font-bold text-white">{step.details.ratio}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

