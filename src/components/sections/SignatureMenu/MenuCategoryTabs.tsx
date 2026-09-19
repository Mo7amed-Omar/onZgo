import React from 'react';
import { menuCategories } from '../../../data/menu';
import { MenuCategoryKey } from '../../../types/menu';
import { cn } from '../../../lib/utils/cn';

interface MenuCategoryTabsProps {
  activeCategory: MenuCategoryKey;
  onSelectCategory: (key: MenuCategoryKey) => void;
  className?: string;
}

export const MenuCategoryTabs: React.FC<MenuCategoryTabsProps> = ({
  activeCategory,
  onSelectCategory,
  className,
}) => {
  return (
    <div className={cn('flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar', className)}>
      {menuCategories.map((cat) => {
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={cn(
              'px-5 py-2.5 rounded-full font-sans font-extrabold text-xs uppercase tracking-wider transition-all duration-300 whitespace-nowrap flex items-center gap-2 select-none active:scale-95',
              isActive
                ? 'bg-onzgo-orange text-white shadow-md shadow-onzgo-orange/25 scale-105'
                : 'bg-white text-onzgo-espresso/70 hover:text-onzgo-espresso hover:bg-onzgo-cream-200 border border-onzgo-espresso/10'
            )}
          >
            <span>{cat.name}</span>
            <span
              className={cn(
                'text-[0.65rem] font-mono px-1.5 py-0.2 rounded-full',
                isActive ? 'bg-white/20 text-white' : 'bg-onzgo-espresso/5 text-onzgo-espresso/60'
              )}
            >
              {cat.count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

