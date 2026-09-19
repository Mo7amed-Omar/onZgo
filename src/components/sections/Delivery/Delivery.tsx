import React from 'react';
import { ArrowRight, ArrowLeft, Bike, Store, Zap } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { Container } from '../../ui/Container/Container';
import { Button } from '../../ui/Button/Button';

export const Delivery: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const partners = t('delivery.partners') as Array<{
    name: string;
    badge: string;
  }>;

  return (
    <section className="py-12 bg-white">
      <Container size="default">
        <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden bg-gradient-to-br from-onzgo-espresso-900 via-onzgo-espresso-950 to-black text-white p-8 sm:p-12 shadow-xl border border-white/10">
          {/* Subtle Orange & Turquoise Glow */}
          <div className="absolute top-0 end-0 w-80 h-80 bg-onzgo-orange/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 start-0 w-80 h-80 bg-onzgo-turquoise/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-3 text-center lg:text-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-onzgo-orange/20 text-onzgo-orange text-xs font-bold font-mono">
                <Bike className="w-3.5 h-3.5" />
                <span>DELIVERY & PICK-UP</span>
              </div>
              <h2 className="font-sans font-black text-2xl sm:text-4xl uppercase tracking-tight leading-tight">
                {t('delivery.title')}
              </h2>
              <p className="text-sm text-white/75 leading-relaxed">
                {t('delivery.subtitle')}
              </p>
            </div>

            {/* Partners List & Action */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                {partners.map((partner, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 text-xs font-bold"
                  >
                    {idx === 0 && <Bike className="w-4 h-4 text-onzgo-orange" />}
                    {idx === 1 && <Zap className="w-4 h-4 text-onzgo-turquoise" />}
                    {idx === 2 && <Store className="w-4 h-4 text-onzgo-sand-200" />}
                    <span>{partner.name}</span>
                  </div>
                ))}
              </div>

              <Button
                href="#visit"
                variant="primary"
                size="md"
                className="w-full sm:w-auto shadow-lg shrink-0"
                icon={isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              >
                {t('delivery.cta')}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

