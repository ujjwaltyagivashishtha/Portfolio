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

  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-250 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide shadow-md active:scale-95';

  const variants = {
    primary: 'bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 text-white font-semibold hover:from-indigo-400 hover:to-violet-500 shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:shadow-lg',
    secondary: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold hover:from-emerald-400 hover:to-teal-500 shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:shadow-lg',
    outline: 'border border-slate-700 bg-slate-900/60 text-slate-200 hover:border-indigo-500/60 hover:bg-slate-800/80 hover:text-white',
    ghost: 'text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10',
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
