import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { certificationsData } from '../data/certifications';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-16 sm:py-24 relative bg-slate-50 dark:bg-[#080808] border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="06"
          badge="Verified Credentials"
          title="Certifications"
          subtitle="Specialized technical credentials in Artificial Intelligence and Database Engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <Card key={index} className="flex flex-col justify-between border-slate-200 dark:border-white/10 bg-white dark:bg-[#121214]">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-[#080808] text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-white/10">
                    {cert.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-[#F95C4B] font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{cert.badge}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 my-2">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#080808] border border-slate-200 dark:border-white/10 text-[#F95C4B] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100 font-display">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-[#F95C4B] font-semibold mt-0.5">
                      Issued by {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed mt-3 pt-3 border-t border-slate-200 dark:border-white/10 font-sans">
                  {cert.details}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-zinc-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F95C4B]" />
                <span>Resume verified completion</span>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
