import React from 'react';
import { cn } from '../../../lib/utils/cn';
import { Badge } from '../Badge/Badge';

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowVariant?: 'orange' | 'espresso' | 'turquoise' | 'outline' | 'sand';
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  eyebrowVariant = 'orange',
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className,
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const titleColor = theme === 'dark' ? 'text-white' : 'text-onzgo-espresso';
  const subtitleColor = theme === 'dark' ? 'text-onzgo-sand-200/80' : 'text-onzgo-espresso/70';

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12 sm:mb-16', alignClasses[align], className)}>
      {eyebrow && (
        <Badge variant={eyebrowVariant} size="md" className="mb-4">
          {eyebrow}
        </Badge>
      )}

      <h2
        className={cn(
          'font-sans font-black tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] uppercase',
          titleColor
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p className={cn('mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-normal leading-relaxed', subtitleColor)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

