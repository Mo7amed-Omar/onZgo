import React from 'react';
import { Plus, Check } from 'lucide-react';
import { MenuItem } from '../../../types/menu';
import { Badge } from '../../ui/Badge/Badge';

interface ProductShowcaseProps {
  items: MenuItem[];
  gridRef: React.RefObject<HTMLDivElement>;
  onItemSelect?: (item: MenuItem) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ items, gridRef, onItemSelect }) => {
  const [addedIds, setAddedIds] = React.useState<Record<string, boolean>>({});

  const handleQuickAdd = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
    onItemSelect?.(item);
  };

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
    >
      {items.map((item) => {
        const isAdded = !!addedIds[item.id];

        return (
          <div
            key={item.id}
            onClick={() => onItemSelect?.(item)}
            className="menu-item-card group relative flex flex-col justify-between bg-white rounded-3xl p-5 border border-onzgo-espresso/10 hover:border-onzgo-orange/50 transition-all duration-300 hover:shadow-card-hover cursor-pointer"
          >
            <div>
              {/* Product Image Container */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-onzgo-cream-200 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Top Badge */}
                {item.tags && item.tags.length > 0 && (
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    <Badge
                      variant={item.tags[0] === 'Signature' ? 'orange' : 'espresso'}
                      size="sm"
                    >
                      {item.tags[0]}
                    </Badge>
                  </div>
                )}

                {/* Price Pill */}
                <div className="absolute bottom-3 right-3 bg-onzgo-espresso/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-mono font-bold">
                  {item.price}
                </div>
              </div>

              {/* Title & Calories */}
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h3 className="font-sans font-extrabold text-lg uppercase tracking-tight text-onzgo-espresso group-hover:text-onzgo-orange transition-colors line-clamp-1">
                  {item.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-onzgo-espresso/70 leading-relaxed line-clamp-2 mb-3">
                {item.description}
              </p>

              {/* Flavor Notes Chips */}
              {item.notes && item.notes.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.notes.map((note, idx) => (
                    <span
                      key={idx}
                      className="text-[0.65rem] font-mono px-2 py-0.5 rounded-md bg-onzgo-cream-200/80 text-onzgo-espresso-700 font-medium"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Card Footer */}
            <div className="pt-3 border-t border-onzgo-espresso/5 flex items-center justify-between">
              {item.calories ? (
                <span className="text-[0.7rem] font-mono text-onzgo-espresso/50">
                  {item.calories}
                </span>
              ) : (
                <span className="text-[0.7rem] font-mono text-onzgo-turquoise-800">
                  Specialty Cup
                </span>
              )}

              <button
                onClick={(e) => handleQuickAdd(e, item)}
                aria-label={`Order ${item.name}`}
                className={`inline-flex items-center gap-1 text-xs font-mono uppercase font-bold px-3 py-1.5 rounded-full transition-all duration-300 ${
                  isAdded
                    ? 'bg-onzgo-turquoise text-white'
                    : 'bg-onzgo-orange text-white hover:bg-onzgo-orange-600 shadow-xs'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" />
                    <span>Quick Order</span>
                  </>
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

