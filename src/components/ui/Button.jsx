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

  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-150 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-xs rounded-xl border select-none';

  const variants = {
    primary: 'bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:via-teal-300 hover:to-cyan-300 text-zinc-950 border-teal-300/40 font-semibold shadow-[0_0_20px_-4px_rgba(20,184,166,0.35)] hover:shadow-[0_0_28px_-2px_rgba(45,212,191,0.55)] active:scale-[0.98] transition-all duration-200',
    secondary: 'bg-white/[0.04] hover:bg-gradient-to-b hover:from-white/[0.09] hover:to-white/[0.03] text-zinc-100 border-white/[0.09] hover:border-teal-500/40 active:scale-[0.98] transition-all duration-200 font-medium',
    outline: 'bg-transparent text-zinc-300 border-white/[0.12] hover:border-teal-400/50 hover:text-teal-300 hover:bg-teal-500/[0.05] transition-all',
    ghost: 'bg-transparent text-zinc-400 border-transparent hover:text-zinc-100 hover:bg-white/[0.04] transition-all',
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
