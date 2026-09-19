import React from 'react';
import { cn } from '../../../lib/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'orange' | 'espresso' | 'turquoise' | 'outline' | 'sand';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'orange',
  size = 'md',
  icon,
  className,
}) => {
  const variantStyles = {
    orange: 'bg-onzgo-orange/10 text-onzgo-orange border border-onzgo-orange/25',
    espresso: 'bg-onzgo-espresso text-white border border-onzgo-espresso',
    turquoise: 'bg-onzgo-turquoise/15 text-onzgo-turquoise-700 border border-onzgo-turquoise/30',
    outline: 'bg-transparent text-onzgo-espresso/80 border border-onzgo-espresso/20',
    sand: 'bg-onzgo-sand-200 text-onzgo-espresso-700 border border-onzgo-sand-300',
  };

  const sizeStyles = {
    sm: 'text-[0.65rem] px-2.5 py-1 tracking-wider',
    md: 'text-xs px-3.5 py-1.5 tracking-widest',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-mono uppercase font-semibold transition-colors duration-200',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

