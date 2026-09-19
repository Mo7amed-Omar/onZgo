import React from 'react';
import { cn } from '../../../lib/utils/cn';

interface LogoProps {
  variant?: 'dark' | 'light' | 'orange';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = false,
  className,
}) => {
  const sizeClasses = {
    sm: 'text-xl tracking-tighter',
    md: 'text-2xl sm:text-3xl tracking-tight',
    lg: 'text-4xl sm:text-5xl tracking-tight',
    xl: 'text-6xl sm:text-7xl tracking-tighter',
  };

  const textColors = {
    dark: 'text-onzgo-espresso',
    light: 'text-white',
    orange: 'text-onzgo-orange',
  };

  const dotColors = {
    dark: 'bg-onzgo-orange',
    light: 'bg-onzgo-orange',
    orange: 'bg-onzgo-turquoise',
  };

  return (
    <div className={cn('inline-flex flex-col items-start select-none group', className)}>
      <div className={cn('font-sans font-black flex items-center leading-none', sizeClasses[size], textColors[variant])}>
        <span className="font-extrabold tracking-tight">ONZ</span>
        <span className="text-onzgo-orange">GO</span>
        <span className={cn('inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ml-1.5 transition-transform duration-300 group-hover:scale-125', dotColors[variant])} />
      </div>
      {showTagline && (
        <span className={cn(
          'text-[0.6rem] sm:text-[0.7rem] font-mono tracking-widest uppercase mt-1 opacity-80',
          variant === 'light' ? 'text-white/80' : 'text-onzgo-espresso/70'
        )}>
          BREW • BITES • VIBES
        </span>
      )}
    </div>
  );
};

