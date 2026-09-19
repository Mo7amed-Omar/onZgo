import React from 'react';
import { atmosphereHighlights } from '../../../data/experience';
import { Badge } from '../../ui/Badge/Badge';

export const AtmosphereGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
      {atmosphereHighlights.map((item, index) => {
        const isFeatured = index === 0;
        const colSpanClass = isFeatured
          ? 'lg:col-span-8'
          : index === 1
          ? 'lg:col-span-4'
          : index === 2
          ? 'lg:col-span-5'
          : 'lg:col-span-7';

        return (
          <div
            key={item.id}
            className={`atmosphere-item group relative rounded-3xl overflow-hidden bg-onzgo-espresso min-h-[300px] sm:min-h-[360px] ${colSpanClass} border border-onzgo-espresso/10 hover:border-onzgo-turquoise/50 transition-all duration-500 shadow-md`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-onzgo-espresso-950/90 via-onzgo-espresso-950/30 to-transparent pointer-events-none" />

            {/* Tag Badge */}
            <div className="absolute top-5 left-5">
              <Badge
                variant={index % 2 === 0 ? 'turquoise' : 'orange'}
                size="sm"
              >
                {item.tag}
              </Badge>
            </div>

            {/* Content Bottom */}
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
              <div className="text-[0.7rem] font-mono text-onzgo-sand-200 uppercase tracking-widest">
                {item.category}
              </div>
              <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 line-clamp-2 max-w-lg">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

