import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { Container } from '../../ui/Container/Container';
import { Button } from '../../ui/Button/Button';
import { Badge } from '../../ui/Badge/Badge';

export const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const slides = t('hero.slides') as Array<{
    id: string;
    tagline: string;
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    image: string;
    badge: string;
  }>;

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide] || slides[0];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative pt-24 sm:pt-28 pb-10 bg-gradient-to-b from-onzgo-cream-100 to-white">
      <Container size="default">
        {/* Main Banner Card */}
        <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden bg-onzgo-espresso-950 text-white min-h-[460px] sm:min-h-[520px] flex flex-col justify-end shadow-2xl border border-onzgo-espresso/10">
          {/* Slide Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              key={slide.id}
              className="w-full h-full object-cover object-center animate-in fade-in zoom-in-105 duration-700"
            />
            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-onzgo-espresso-950 via-onzgo-espresso-950/60 to-transparent" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-2xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="orange" size="sm" icon={<Sparkles className="w-3.5 h-3.5 text-onzgo-orange" />}>
                {slide.badge}
              </Badge>
              <span className="text-xs font-mono uppercase tracking-widest text-onzgo-sand-200">
                {slide.tagline}
              </span>
            </div>

            <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.05] text-white">
              {slide.title}
            </h1>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl font-medium">
              {slide.description}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                href="#menu"
                variant="primary"
                size="md"
                icon={isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                className="shadow-md"
              >
                {slide.ctaPrimary}
              </Button>

              <Button
                href="#visit"
                variant="outline"
                size="md"
                className="border-white/30 text-white hover:bg-white hover:text-onzgo-espresso bg-black/20 backdrop-blur-xs"
              >
                {slide.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="absolute bottom-6 end-6 z-20 flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-onzgo-orange text-white flex items-center justify-center transition-colors"
            >
              {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-onzgo-orange text-white flex items-center justify-center transition-colors"
            >
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute top-6 end-6 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentSlide ? 'w-6 bg-onzgo-orange' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
