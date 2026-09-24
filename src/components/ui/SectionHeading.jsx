import React from 'react';

export const SectionHeading = ({ badge, title, subtitle, className = "" }) => {
  return (
    <div className={`flex flex-col items-start mb-14 ${className}`}>
      {badge && (
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping"></span>
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-16 h-1.5 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 rounded-full mt-5 shadow-sm shadow-indigo-500/30"></div>
    </div>
  );
};
