import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { engineeringPrinciples } from '../data/engineeringPrinciples';

export const HowIBuild = () => {
  return (
    <section id="how-i-build" className="py-16 sm:py-24 relative bg-white dark:bg-[#080808] border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="06"
          badge="Engineering Principles"
          title="How I Build"
          subtitle="Concise engineering principles guiding data modeling, API validation, error handling, and developer workflow design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringPrinciples.map((principle) => (
            <Card key={principle.num} className="bg-slate-50 dark:bg-[#121214] border-slate-200 dark:border-white/10 space-y-3 p-5">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2.5 font-mono text-xs">
                <span className="text-[#F95C4B] font-bold">{principle.num}</span>
                <span className="text-slate-400 dark:text-zinc-500 uppercase tracking-widest text-[10px]">PRINCIPLE</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 font-display">
                {principle.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-sans">
                {principle.desc}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
