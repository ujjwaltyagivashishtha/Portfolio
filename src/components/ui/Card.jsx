import React from 'react';
import { cn } from '../../lib/utils';

export const Card = ({ children, className = "", hoverable = true, ...props }) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden transition-all duration-300 border border-stone-800/80 text-paper-100 shadow-xl",
        hoverable && "hover:border-coral-500/45 hover:shadow-2xl hover:shadow-coral-500/15 hover:-translate-y-1.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
