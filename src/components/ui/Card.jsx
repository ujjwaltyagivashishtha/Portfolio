import React from 'react';
import { cn } from '../../lib/utils';

export const Card = ({ children, className = "", hoverable = true, ...props }) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden transition-all duration-300 border border-white/10 text-zinc-100 shadow-xl",
        hoverable && "hover:border-[#F95C4B]/40 hover:shadow-2xl hover:shadow-[#F95C4B]/10 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
