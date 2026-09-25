import React from 'react';
import { cn } from '../../lib/utils';

export const Badge = ({ children, variant = "primary", className = "" }) => {
  const variants = {
    primary: "bg-coral-500/15 text-coral-300 border-coral-500/30 hover:border-coral-400",
    secondary: "bg-stone-500/15 text-stone-200 border-stone-500/30 hover:border-stone-300",
    paper: "bg-paper-100/10 text-paper-100 border-paper-100/25 hover:border-paper-200",
    stone: "bg-stone-500/15 text-stone-200 border-stone-500/30 hover:border-stone-300",
    cyan: "bg-paper-100/10 text-paper-100 border-paper-100/25 hover:border-paper-200",
    purple: "bg-coral-600/15 text-coral-200 border-coral-500/30 hover:border-coral-400",
    outline: "bg-stone-950/80 text-stone-300 border-stone-800 hover:border-coral-500/40",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium border transition-all duration-200 shadow-sm",
        variants[variant] || variants.primary,
        className
      )}
    >
      {children}
    </span>
  );
};
