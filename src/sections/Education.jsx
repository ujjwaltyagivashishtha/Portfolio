import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { educationData } from '../data/education';
import { GraduationCap, MapPin, Award, BookOpen } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-slate-100/60 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Background"
          title="Education"
          subtitle="Formal computer science degree and secondary education academic history."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="flex flex-col justify-between border-slate-200 dark:border-slate-800">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.institution}</h3>
                      <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                        <MapPin className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-indigo-700 dark:text-indigo-400 border border-slate-200 dark:border-slate-800">
                    {edu.period}
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-2">
                  <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                    {edu.degree}
                  </h4>

                  {edu.minor && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20 text-xs font-mono font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      <span>{edu.minor}</span>
                    </div>
                  )}

                  {edu.cgpa && (
                    <div className="text-xs font-mono font-semibold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 px-3 py-1 rounded-lg w-fit">
                      CGPA: {edu.cgpa}
                    </div>
                  )}

                  <div className="pt-3 space-y-2">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {edu.expectedGraduation && (
                <div className="mt-6 pt-3 border-t border-slate-200 dark:border-slate-900 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Expected Graduation:</span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">{edu.expectedGraduation}</span>
                </div>
              )}
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
