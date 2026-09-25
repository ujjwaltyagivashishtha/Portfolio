import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { educationData } from '../data/education';
import { GraduationCap, MapPin, Award, BookOpen } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Background"
          title="Education"
          subtitle="Formal computer science degree and secondary education academic history."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="flex flex-col justify-between border-stone-800">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-coral-500/10 text-coral-400 border border-coral-500/20">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-paper-100">{edu.institution}</h3>
                      <div className="flex items-center gap-1 text-xs text-stone-400 font-mono">
                        <MapPin className="w-3 h-3 text-stone-500" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-stone-950 text-coral-300 border border-stone-800">
                    {edu.period}
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-stone-800/80 space-y-2">
                  <h4 className="text-base font-semibold text-stone-200">
                    {edu.degree}
                  </h4>

                  {edu.minor && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-900 text-stone-200 border border-stone-700 text-xs font-mono font-semibold">
                      <Award className="w-3.5 h-3.5 text-coral-400" />
                      <span>{edu.minor}</span>
                    </div>
                  )}

                  {edu.cgpa && (
                    <div className="text-xs font-mono font-semibold text-coral-300 bg-coral-500/10 border border-coral-500/20 px-3 py-1 rounded-lg w-fit">
                      CGPA: {edu.cgpa}
                    </div>
                  )}

                  <div className="pt-3 space-y-2">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-stone-300">
                        <BookOpen className="w-3.5 h-3.5 text-coral-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {edu.expectedGraduation && (
                <div className="mt-6 pt-3 border-t border-stone-900 text-[11px] font-mono text-stone-400 flex items-center justify-between">
                  <span>Expected Graduation:</span>
                  <span className="text-coral-400 font-bold">{edu.expectedGraduation}</span>
                </div>
              )}
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
