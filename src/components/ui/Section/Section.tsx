import React from 'react';
import { cn } from '../../../lib/utils/cn';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  variant?: 'cream' | 'espresso' | 'orange' | 'sand' | 'white';
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  variant = 'cream',
  spacing = 'lg',
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    cream: 'bg-onzgo-cream-100 text-onzgo-espresso',
    espresso: 'bg-onzgo-espresso-900 text-white selection:bg-onzgo-orange selection:text-white',
    orange: 'bg-onzgo-orange text-white selection:bg-onzgo-espresso selection:text-white',
    sand: 'bg-onzgo-sand-100 text-onzgo-espresso',
    white: 'bg-white text-onzgo-espresso',
  };

  const spacingStyles = {
    none: 'py-0',
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-20 md:py-32',
    xl: 'py-24 md:py-40',
  };

  return (
    <section
      id={id}
      className={cn('relative w-full overflow-hidden transition-colors duration-500', variantStyles[variant], spacingStyles[spacing], className)}
      {...props}
    >
      {children}
    </section>
  );
};

