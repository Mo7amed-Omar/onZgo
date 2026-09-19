import React, { useState } from 'react';
import { ShoppingBag, Check, Plus, X } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { Container } from '../../ui/Container/Container';
import { Badge } from '../../ui/Badge/Badge';
import { Button } from '../../ui/Button/Button';
import { cn } from '../../../lib/utils/cn';

export const SignatureMenu: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const categories = [
    { key: 'all', label: t('menu.categories.all') },
    { key: 'hotCoffee', label: t('menu.categories.hotCoffee') },
    { key: 'icedCoffee', label: t('menu.categories.icedCoffee') },
    { key: 'bakery', label: t('menu.categories.bakery') },
    { key: 'refreshers', label: t('menu.categories.refreshers') },
  ];

  const items = t('menu.items') as Array<{
    id: string;
    name: string;
    category: string;
    price: string;
    description: string;
    image: string;
    tag: string;
  }>;

  const filteredItems =
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.category === activeCategory);

  const handleQuickAdd = (e: React.MouseEvent, item: any) => {
    e.stopPropagation();
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <section id="menu" className="py-14 sm:py-20 bg-onzgo-cream-100">
      <Container size="default">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <Badge variant="orange" size="sm">
            {t('menu.eyebrow')}
          </Badge>
          <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-onzgo-espresso">
            {t('menu.title')}
          </h2>
          <p className="text-sm sm:text-base text-onzgo-espresso/70">
            {t('menu.subtitle')}
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  'px-5 py-2 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 select-none shadow-2xs',
                  isActive
                    ? 'bg-onzgo-orange text-white shadow-sm scale-105'
                    : 'bg-white text-onzgo-espresso/80 hover:bg-onzgo-cream-200 border border-onzgo-espresso/10'
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const isAdded = !!addedIds[item.id];

            return (
              <div
                key={item.id}
                onClick={() => setSelectedProduct(item)}
                className="group relative flex flex-col justify-between bg-white rounded-3xl p-4 sm:p-5 border border-onzgo-espresso/10 hover:border-onzgo-orange/50 transition-all duration-300 hover:shadow-card-hover cursor-pointer"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-onzgo-cream-200 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    <div className="absolute top-2.5 start-2.5">
                      <Badge variant="espresso" size="sm">
                        {item.tag}
                      </Badge>
                    </div>

                    <div className="absolute bottom-2.5 end-2.5 bg-onzgo-espresso/90 backdrop-blur-xs text-white px-3 py-1 rounded-full text-xs font-mono font-bold">
                      {item.price} {t('menu.egp')}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-sans font-extrabold text-lg uppercase tracking-tight text-onzgo-espresso group-hover:text-onzgo-orange transition-colors line-clamp-1 mb-1.5">
                    {item.name}
                  </h3>
                  <p className="text-xs text-onzgo-espresso/70 line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Order Button */}
                <div className="pt-3 border-t border-onzgo-espresso/5 flex items-center justify-between">
                  <span className="text-xs font-bold text-onzgo-orange font-mono">
                    {item.price} {t('menu.egp')}
                  </span>

                  <button
                    onClick={(e) => handleQuickAdd(e, item)}
                    className={cn(
                      'inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-200',
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-onzgo-orange text-white hover:bg-onzgo-orange-600'
                    )}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>{t('menu.added')}</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>{t('menu.quickOrder')}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      {/* Item Inspection Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-onzgo-espresso/10 space-y-4">
            <button
              onClick={() => setSelectedProduct(null)}
              aria-label="Close"
              className="absolute top-4 end-4 p-2 rounded-full bg-onzgo-espresso/5 hover:bg-onzgo-orange hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-onzgo-cream-200">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2">
              <Badge variant="orange" size="sm">
                {selectedProduct.tag}
              </Badge>
              <h3 className="font-sans font-black text-2xl uppercase tracking-tight text-onzgo-espresso">
                {selectedProduct.name}
              </h3>
              <div className="text-xl font-black text-onzgo-orange font-mono">
                {selectedProduct.price} {t('menu.egp')}
              </div>
              <p className="text-sm text-onzgo-espresso/75 leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>

            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => {
                alert(`${selectedProduct.name} - ${t('menu.added')}`);
                setSelectedProduct(null);
              }}
              icon={<ShoppingBag className="w-4 h-4" />}
              iconPosition={isRTL ? 'left' : 'right'}
            >
              {t('nav.orderOnline')} • {selectedProduct.price} {t('menu.egp')}
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};
