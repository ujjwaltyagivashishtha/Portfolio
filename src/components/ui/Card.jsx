import React from 'react';
import { cn } from '../../lib/utils';

export const Card = ({ children, className = "", hoverable = true, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-7 relative transition-all duration-300 ease-out border border-white/[0.08] text-zinc-100 bg-[#111115]/95 shadow-sm overflow-hidden",
        hoverable && "hover:border-indigo-500/40 hover:shadow-lg dark:hover:shadow-[0_16px_32px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-1 before:absolute before:inset-x-0 before:top-0 before:h-[1.5px] before:bg-gradient-to-r before:from-transparent before:via-indigo-400/60 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
