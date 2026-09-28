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

  const baseStyles = 'inline-flex items-center justify-center font-mono font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wider uppercase text-xs rounded-xl border';

  const variants = {
    primary: 'bg-[#F95C4B] text-black border-[#F95C4B] font-bold hover:bg-[#FF6B5B] hover:border-[#FF6B5B] shadow-md shadow-[#F95C4B]/20',
    secondary: 'bg-zinc-100 text-black border-zinc-100 font-bold hover:bg-white',
    outline: 'bg-transparent text-zinc-200 border-white/20 hover:border-[#F95C4B] hover:text-[#F95C4B]',
    ghost: 'bg-transparent text-zinc-400 border-transparent hover:text-zinc-100 hover:border-white/10',
  };

  const sizes = {
    sm: 'px-3.5 py-2 gap-1.5',
    md: 'px-5 py-2.5 gap-2',
    lg: 'px-6 py-3.5 gap-2.5 text-xs',
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
