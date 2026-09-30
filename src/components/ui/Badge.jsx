import React from 'react';
import { cn } from '../../lib/utils';

export const Badge = ({ children, variant = "primary", className = "" }) => {
  const variants = {
    primary: "bg-[#F95C4B]/10 text-[#F95C4B] border-[#F95C4B]/25 font-semibold",
    secondary: "bg-slate-200 dark:bg-zinc-900/90 text-slate-700 dark:text-zinc-300 border-slate-300 dark:border-zinc-800",
    paper: "bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 border-slate-300 dark:border-zinc-700",
    outline: "bg-transparent text-slate-600 dark:text-zinc-400 border-slate-300 dark:border-white/10 hover:border-[#F95C4B]",
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
