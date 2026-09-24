import React from 'react';
import { cn } from '../../lib/utils';

export const Badge = ({ children, variant = "primary", className = "" }) => {
  const variants = {
    primary: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30 hover:border-indigo-400",
    secondary: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:border-emerald-400",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:border-cyan-400",
    purple: "bg-violet-500/10 text-violet-300 border-violet-500/30 hover:border-violet-400",
    outline: "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-indigo-500/40",
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
