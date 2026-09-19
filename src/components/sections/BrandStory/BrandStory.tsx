import React from 'react';
import { Sparkles, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { Container } from '../../ui/Container/Container';
import { Badge } from '../../ui/Badge/Badge';

export const BrandStory: React.FC = () => {
  const { t } = useLanguage();
  const pillars = t('story.pillars') as Array<{
    title: string;
    desc: string;
  }>;

  return (
    <section id="story" className="py-14 sm:py-20 bg-onzgo-sand-50 border-y border-onzgo-espresso/10">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Image Side */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border-4 border-white bg-onzgo-espresso">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=900&auto=format&fit=crop"
                alt="ONZGO Coffee Barista Brewing"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating Brand Capsule */}
            <div className="absolute -bottom-4 start-6 bg-onzgo-orange text-white px-4 py-2 rounded-full shadow-lg text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>BREW • BITES • VIBES</span>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 space-y-4">
            <Badge variant="orange" size="sm">
              {t('story.eyebrow')}
            </Badge>

            <h2 className="font-sans font-black text-2xl sm:text-4xl uppercase tracking-tight text-onzgo-espresso">
              {t('story.title')}
            </h2>

            <p className="text-sm sm:text-base text-onzgo-espresso/80 leading-relaxed">
              {t('story.p1')}
            </p>

            <p className="text-sm sm:text-base text-onzgo-espresso/80 leading-relaxed">
              {t('story.p2')}
            </p>

            {/* 3 Value Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-2xl border border-onzgo-espresso/10 flex items-start gap-3 shadow-2xs"
                >
                  <div className="p-2 rounded-xl bg-onzgo-orange/10 text-onzgo-orange shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-onzgo-espresso">
                      {pillar.title}
                    </h4>
                    <p className="text-[0.7rem] text-onzgo-espresso/60 mt-0.5">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
