import React from 'react';
import { cn } from '../../lib/utils';

export const Card = ({ children, className = "", hoverable = true, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-7 relative transition-all duration-300 border border-white/[0.08] text-zinc-100 bg-[#111115]/95 shadow-sm overflow-hidden",
        hoverable && "hover:border-teal-500/40 hover:shadow-[0_8px_30px_-10px_rgba(20,184,166,0.18)] hover:-translate-y-0.5 before:absolute before:inset-x-0 before:top-0 before:h-[1.5px] before:bg-gradient-to-r before:from-transparent before:via-teal-400/60 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
