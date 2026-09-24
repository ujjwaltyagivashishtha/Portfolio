import React from 'react';
import { cn } from '../../lib/utils';

export const Card = ({ children, className = "", hoverable = true, ...props }) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden transition-all duration-300 border border-white/10 text-slate-100 shadow-xl",
        hoverable && "hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
