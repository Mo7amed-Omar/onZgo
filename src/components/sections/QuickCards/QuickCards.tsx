import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { Container } from '../../ui/Container/Container';
import { Badge } from '../../ui/Badge/Badge';

export const QuickCards: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const items = t('quickCards.items') as Array<{
    id: string;
    title: string;
    desc: string;
    linkText: string;
    href: string;
    image: string;
    tag: string;
  }>;

  return (
    <section id="coffee" className="py-12 bg-white">
      <Container size="default">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <Badge variant="orange" size="sm" className="mb-2">
              {t('quickCards.eyebrow')}
            </Badge>
            <h2 className="font-sans font-black text-2xl sm:text-4xl uppercase tracking-tight text-onzgo-espresso">
              {t('quickCards.title')}
            </h2>
          </div>
        </div>

        {/* 4 Cards Grid - Costa Coffee Egypt Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="group relative flex flex-col justify-between bg-onzgo-cream-50 rounded-3xl overflow-hidden border border-onzgo-espresso/10 hover:border-onzgo-orange/50 transition-all duration-300 hover:shadow-card-hover"
            >
              <div>
                {/* Card Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-onzgo-cream-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-3 start-3">
                    <Badge variant="espresso" size="sm">
                      {item.tag}
                    </Badge>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-5 space-y-2">
                  <h3 className="font-sans font-extrabold text-xl uppercase tracking-tight text-onzgo-espresso group-hover:text-onzgo-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-onzgo-espresso/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs font-bold text-onzgo-orange group-hover:underline">
                <span>{item.linkText}</span>
                <div className="w-8 h-8 rounded-full bg-onzgo-orange/10 group-hover:bg-onzgo-orange group-hover:text-white text-onzgo-orange flex items-center justify-center transition-colors">
                  {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

