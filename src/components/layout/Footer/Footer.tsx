import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { Logo } from '../../ui/Logo/Logo';

export const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-onzgo-espresso-950 text-white pt-14 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="md" showTagline />
            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              {t('story.p1')}
            </p>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-onzgo-sand-200">
              {t('footer.about')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li>
                <a href="#story" className="hover:text-onzgo-orange transition-colors">
                  {t('footer.storyLink')}
                </a>
              </li>
              <li>
                <a href="#coffee" className="hover:text-onzgo-orange transition-colors">
                  {t('footer.coffeeLink')}
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-onzgo-orange transition-colors">
                  {t('footer.menuLink')}
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-onzgo-orange transition-colors">
                  {t('footer.branches')}
                </a>
              </li>
            </ul>
          </div>

          {/* Food & Allergens */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-onzgo-sand-200">
              {t('footer.nutrition')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li>
                <span className="hover:text-onzgo-orange transition-colors cursor-pointer">
                  {t('footer.allergens')}
                </span>
              </li>
              <li>
                <span className="hover:text-onzgo-orange transition-colors cursor-pointer">
                  {t('footer.terms')}
                </span>
              </li>
              <li>
                <span className="hover:text-onzgo-orange transition-colors cursor-pointer">
                  {t('footer.privacy')}
                </span>
              </li>
            </ul>
          </div>

          {/* Socials & Back to Top */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-onzgo-sand-200">
              {t('footer.contactUs')}
            </h4>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm text-white/70">
              <a
                href="https://instagram.com/onzgo.cafe"
                target="_blank"
                rel="noreferrer"
                className="hover:text-onzgo-orange transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com/@onzgo.cafe"
                target="_blank"
                rel="noreferrer"
                className="hover:text-onzgo-orange transition-colors"
              >
                TikTok
              </a>
              <a
                href="https://maps.google.com/?q=ONZGO+Coffee"
                target="_blank"
                rel="noreferrer"
                className="hover:text-onzgo-orange transition-colors"
              >
                Google Maps
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-onzgo-orange hover:text-white transition-colors"
            >
              <span>{isRTL ? 'الرجوع للأعلى' : 'Back to top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>{t('footer.copyright')}</p>
          <p className="font-mono text-onzgo-orange font-bold">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
};
