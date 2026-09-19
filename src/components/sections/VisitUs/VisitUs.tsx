import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, Copy, Check } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { Container } from '../../ui/Container/Container';
import { Badge } from '../../ui/Badge/Badge';
import { Button } from '../../ui/Button/Button';

export const VisitUs: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(t('visit.address'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="visit" className="py-14 sm:py-20 bg-onzgo-cream-100">
      <Container size="default">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <Badge variant="orange" size="sm">
            {t('visit.eyebrow')}
          </Badge>
          <h2 className="font-sans font-black text-2xl sm:text-4xl uppercase tracking-tight text-onzgo-espresso">
            {t('visit.title')}
          </h2>
          <p className="text-xs sm:text-sm text-onzgo-espresso/70">
            {t('visit.subtitle')}
          </p>
        </div>

        {/* Location Card Grid */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-onzgo-espresso/10 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-emerald-700">
                  {t('nav.openStatus')}
                </span>
              </div>
              <h3 className="font-sans font-black text-2xl uppercase tracking-tight text-onzgo-espresso">
                {t('visit.branchName')}
              </h3>
            </div>

            {/* Address */}
            <div className="p-4 rounded-2xl bg-onzgo-cream-50 border border-onzgo-espresso/5 flex items-start justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-onzgo-orange shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-onzgo-espresso leading-snug">
                  {t('visit.address')}
                </span>
              </div>
              <button
                onClick={handleCopy}
                aria-label="Copy Address"
                className="p-1.5 rounded-lg bg-white text-onzgo-espresso/70 hover:text-onzgo-orange hover:shadow-2xs transition-all shrink-0"
                title={t('visit.copyAddress')}
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Working Hours */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-onzgo-orange/10 text-onzgo-espresso text-xs sm:text-sm font-bold">
              <Clock className="w-4 h-4 text-onzgo-orange shrink-0" />
              <span>{t('visit.hoursText')}</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                href="https://maps.google.com/?q=ONZGO+Coffee"
                isExternal
                variant="primary"
                size="md"
                className="flex-1 justify-center shadow-xs"
                icon={<Navigation className="w-4 h-4" />}
                iconPosition={isRTL ? 'left' : 'right'}
              >
                {t('visit.googleMaps')}
              </Button>

              <Button
                href={`tel:${t('visit.phone')}`}
                variant="outline"
                size="md"
                className="justify-center"
                icon={<Phone className="w-4 h-4" />}
                iconPosition={isRTL ? 'left' : 'right'}
              >
                {t('visit.phone')}
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md border-2 border-onzgo-cream-200">
            <img
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop"
              alt="Storefront"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
