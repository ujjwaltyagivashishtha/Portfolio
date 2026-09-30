import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { educationData } from '../data/education';
import { GraduationCap, MapPin, Award, BookOpen } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-24 relative bg-white dark:bg-[#080808] border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="05"
          badge="Academic Background"
          title="Education"
          subtitle="Formal computer science degree and secondary education academic history."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="flex flex-col justify-between border-slate-200 dark:border-white/10 bg-white dark:bg-[#121214]">
              <div>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#F95C4B]/10 text-[#F95C4B] border border-[#F95C4B]/20 shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100 font-display">{edu.institution}</h3>
                      <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-zinc-400 font-mono">
                        <MapPin className="w-3 h-3 text-slate-400 dark:text-zinc-500" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#080808] text-[#F95C4B] border border-slate-200 dark:border-white/10">
                    {edu.period}
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 space-y-2">
                  <h4 className="text-sm sm:text-base font-semibold text-slate-800 dark:text-zinc-200">
                    {edu.degree}
                  </h4>

                  {edu.minor && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#080808] text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-white/10 text-xs font-mono font-semibold max-w-full truncate">
                      <Award className="w-3.5 h-3.5 text-[#F95C4B] shrink-0" />
                      <span className="truncate">{edu.minor}</span>
                    </div>
                  )}

                  {edu.cgpa && (
                    <div className="text-xs font-mono font-semibold text-[#F95C4B] bg-[#F95C4B]/10 border border-[#F95C4B]/20 px-3 py-1 rounded-lg w-fit">
                      CGPA: {edu.cgpa}
                    </div>
                  )}

                  <div className="pt-3 space-y-2">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-zinc-300 font-sans">
                        <BookOpen className="w-3.5 h-3.5 text-[#F95C4B] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {edu.expectedGraduation && (
                <div className="mt-6 pt-3 border-t border-slate-200 dark:border-white/10 text-[11px] font-mono text-slate-500 dark:text-zinc-400 flex items-center justify-between">
                  <span>Expected Graduation:</span>
                  <span className="text-[#F95C4B] font-bold">{edu.expectedGraduation}</span>
                </div>
              )}
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
