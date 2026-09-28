import React from 'react';
import { cn } from '../../lib/utils';

export const Badge = ({ children, variant = "primary", className = "" }) => {
  const variants = {
    primary: "bg-[#F95C4B]/10 text-[#F95C4B] border-[#F95C4B]/25 font-semibold",
    secondary: "bg-zinc-900/90 text-zinc-300 border-zinc-800",
    paper: "bg-zinc-800 text-zinc-200 border-zinc-700",
    outline: "bg-transparent text-zinc-400 border-white/10 hover:border-white/25",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono rounded-lg border tracking-wider transition-all duration-200",
        variants[variant] || variants.primary,
        className
      )}
    >
      {children}
    </span>
  );
};
