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

  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 ease-out focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-xs rounded-xl border select-none hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]';

  const variants = {
    primary: 'bg-gradient-to-r from-indigo-500 via-indigo-400 to-violet-400 hover:from-indigo-400 hover:via-indigo-300 hover:to-violet-300 text-zinc-950 border-indigo-300/40 font-semibold shadow-[0_4px_14px_-4px_rgba(99,102,241,0.35)] hover:shadow-[0_8px_20px_-4px_rgba(99,102,241,0.5)]',
    secondary: 'bg-white/[0.04] hover:bg-white/[0.08] text-zinc-100 border-white/[0.09] hover:border-indigo-500/40 hover:shadow-sm font-medium',
    outline: 'bg-transparent text-zinc-300 border-white/[0.12] hover:border-indigo-400/50 hover:text-indigo-300 hover:bg-indigo-500/[0.06] hover:shadow-sm',
    ghost: 'bg-transparent text-zinc-400 border-transparent hover:text-zinc-100 hover:bg-white/[0.05]',
  };

  const sizes = {
    sm: 'px-3 py-1.5 gap-1.5 text-xs',
    md: 'px-4 py-2 gap-2 text-xs',
    lg: 'px-5 py-2.5 gap-2.5 text-sm',
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
