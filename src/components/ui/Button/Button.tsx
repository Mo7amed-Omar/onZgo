import React from 'react';
import { cn } from '../../../lib/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'turquoise' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'right',
      href,
      isExternal = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-sans font-bold tracking-tight rounded-full transition-all duration-300 select-none active:scale-95 disabled:opacity-50 disabled:pointer-events-none group';

    const variants = {
      primary:
        'bg-onzgo-orange text-white hover:bg-onzgo-orange-600 shadow-md hover:shadow-soft-glow hover:-translate-y-0.5',
      secondary:
        'bg-onzgo-cream-200 text-onzgo-espresso hover:bg-onzgo-cream-300 hover:text-onzgo-espresso-950',
      dark:
        'bg-onzgo-espresso text-white hover:bg-onzgo-espresso-950 shadow-md hover:shadow-card-warm hover:-translate-y-0.5',
      turquoise:
        'bg-onzgo-turquoise text-white hover:bg-onzgo-turquoise-600 shadow-md hover:shadow-turq-glow hover:-translate-y-0.5',
      outline:
        'border-2 border-onzgo-espresso/20 text-onzgo-espresso hover:border-onzgo-espresso hover:bg-onzgo-espresso hover:text-white',
      ghost:
        'text-onzgo-espresso hover:bg-onzgo-espresso/5 hover:text-onzgo-orange',
    };

    const sizes = {
      sm: 'text-xs px-4 py-2 gap-1.5',
      md: 'text-sm px-6 py-3 gap-2',
      lg: 'text-base px-8 py-4 gap-2.5',
      xl: 'text-lg px-10 py-5 gap-3',
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    const content = (
      <>
        {icon && iconPosition === 'left' && (
          <span className="shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={combinedClassName}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

