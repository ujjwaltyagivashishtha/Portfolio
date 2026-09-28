import React from 'react';

export const SectionHeading = ({ number, badge, title, subtitle, className = "" }) => {
  return (
    <div className={`flex flex-col items-start mb-12 sm:mb-16 border-b border-white/10 pb-6 ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        {number && (
          <span className="text-xs font-mono font-bold tracking-widest text-[#F95C4B] uppercase">
            {number}
          </span>
        )}
        {number && badge && <span className="text-xs font-mono text-zinc-600">/</span>}
        {badge && (
          <span className="text-xs font-mono font-medium tracking-wider text-zinc-400 uppercase">
            {badge}
          </span>
        )}
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100 font-display uppercase leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
