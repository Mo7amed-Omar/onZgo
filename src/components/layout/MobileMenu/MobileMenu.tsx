import React, { useEffect } from 'react';
import { X, Globe, ShoppingBag, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { Logo } from '../../ui/Logo/Logo';
import { Button } from '../../ui/Button/Button';
import { Badge } from '../../ui/Badge/Badge';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
  onToggleLang: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  links,
  onToggleLang,
}) => {
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-onzgo-espresso-950 text-white overflow-y-auto animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <Logo variant="light" size="md" showTagline />
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold hover:bg-onzgo-orange transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{t('nav.languageSwitch')}</span>
          </button>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-full bg-white/10 text-white hover:bg-onzgo-orange transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Nav links */}
      <div className="flex-1 px-6 py-8 flex flex-col justify-between">
        <nav className="flex flex-col space-y-3">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={onClose}
              className="py-3 border-b border-white/5 text-xl font-bold text-white hover:text-onzgo-orange transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="text-xs text-white/40 font-mono">0{idx + 1}</span>
            </a>
          ))}
        </nav>

        {/* Store snapshot & quick actions */}
        <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-onzgo-sand-200">
                <Clock className="w-4 h-4 text-onzgo-orange" />
                <span>{t('visit.hoursText')}</span>
              </div>
              <Badge variant="turquoise" size="sm">
                {t('nav.openStatus')}
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="w-4 h-4 text-onzgo-orange shrink-0" />
              <span>{t('visit.address')}</span>
            </div>
          </div>

          <Button
            href="#menu"
            variant="primary"
            size="lg"
            className="w-full justify-center"
            onClick={onClose}
            icon={<ShoppingBag className="w-5 h-5" />}
            iconPosition={isRTL ? 'left' : 'right'}
          >
            {t('nav.orderOnline')}
          </Button>
        </div>
      </div>
    </div>
  );
};
