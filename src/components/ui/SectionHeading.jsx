import React from 'react';

export const SectionHeading = ({ badge, title, subtitle, className = "" }) => {
  return (
    <div className={`mb-12 sm:mb-16 text-left ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-indigo-500/15 via-violet-500/10 to-purple-500/15 border border-indigo-500/30 text-indigo-300 font-mono text-[11px] font-medium tracking-wider uppercase mb-3.5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100 font-display">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
