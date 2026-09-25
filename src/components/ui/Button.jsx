import React from 'react';
import { cn } from '../../lib/utils';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as = 'button',
  href,
  target,
  rel,
  ...props
}) => {
  const Component = href ? 'a' : as;

  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-250 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral-400/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide shadow-md active:scale-95';

  const variants = {
    primary: 'bg-gradient-to-r from-coral-500 via-coral-600 to-coral-700 text-white font-semibold hover:from-coral-400 hover:to-coral-600 shadow-coral-500/25 hover:shadow-coral-500/40 hover:shadow-lg',
    secondary: 'bg-stone-200 text-stone-950 font-bold hover:bg-paper-100 hover:text-black shadow-stone-200/20 hover:shadow-stone-200/35 hover:shadow-lg',
    outline: 'border border-stone-800 bg-stone-950/80 text-paper-100 hover:border-coral-500/60 hover:bg-stone-900/90 hover:text-coral-300',
    ghost: 'text-stone-300 hover:text-coral-400 hover:bg-coral-500/10',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-3 font-semibold',
  };

  return (
    <Component
      href={href}
      target={target}
      rel={rel}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
