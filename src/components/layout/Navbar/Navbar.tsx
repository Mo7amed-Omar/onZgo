import React, { useState, useEffect } from 'react';
import { Menu, Globe, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { Logo } from '../../ui/Logo/Logo';
import { Button } from '../../ui/Button/Button';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { cn } from '../../../lib/utils/cn';

export const Navbar: React.FC = () => {
  const { lang, setLang, t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  const navLinks = [
    { label: t('nav.coffee'), href: '#coffee' },
    { label: t('nav.menu'), href: '#menu' },
    { label: t('nav.atmosphere'), href: '#atmosphere' },
    { label: t('nav.story'), href: '#story' },
    { label: t('nav.branches'), href: '#visit' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'py-3 bg-white/95 backdrop-blur-md shadow-xs border-b border-onzgo-espresso/10'
            : 'py-4 sm:py-5 bg-white/80 backdrop-blur-xs border-b border-onzgo-espresso/5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 focus:outline-none" aria-label="ONZGO Home">
            <Logo variant="dark" size="md" showTagline />
          </a>

          {/* Desktop Navigation Links - Costa Style */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="px-3.5 py-2 text-sm font-bold text-onzgo-espresso-800 hover:text-onzgo-orange hover:bg-onzgo-orange/5 rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Area: Language Switcher + Store Status + Order CTA */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Live Status Pill */}
            <div className="hidden md:flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200/60 px-3 py-1.5 rounded-full text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t('nav.openStatus')}</span>
              <span className="text-emerald-700/60">• {t('nav.closesAt')}</span>
            </div>

            {/* Language Switcher Button (AR / EN) */}
            <button
              onClick={toggleLanguage}
              aria-label="Switch Language"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-onzgo-cream-200 text-onzgo-espresso text-xs font-bold hover:bg-onzgo-orange hover:text-white transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t('nav.languageSwitch')}</span>
            </button>

            {/* Order Online CTA */}
            <Button
              href="#menu"
              variant="primary"
              size="sm"
              icon={<ShoppingBag className="w-4 h-4" />}
              iconPosition={isRTL ? 'left' : 'right'}
              className="hidden sm:inline-flex shadow-xs"
            >
              {t('nav.orderOnline')}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="p-2.5 rounded-full bg-onzgo-cream-200 text-onzgo-espresso hover:bg-onzgo-orange hover:text-white transition-colors lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
        onToggleLang={toggleLanguage}
      />
    </>
  );
};
