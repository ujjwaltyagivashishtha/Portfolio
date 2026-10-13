import React from 'react';
import { educationData } from '../data/education';
import { certificationsData } from '../data/certifications';
import { useScrollReveal } from '../lib/useScrollReveal';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Award,
  BookOpen
} from 'lucide-react';

export const Education = () => {
  const [headerRef, isHeaderVisible] = useScrollReveal();
  const [eduRef, isEduVisible] = useScrollReveal();
  const [certRef, isCertVisible] = useScrollReveal();

  return (
    <section 
      id="education" 
      className="py-20 sm:py-28 border-b border-zinc-200 dark:border-white/[0.08] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-16 pb-6 border-b border-zinc-200 dark:border-white/[0.08] reveal-init ${
            isHeaderVisible ? 'reveal-active' : ''
          }`}
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
              <span>05</span>
              <span>/</span>
              <span>ACADEMIC BACKGROUND</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-zinc-950 dark:text-white">
              Education & Credentials
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-md text-left sm:text-right">
            Formal Computer Science engineering degree and verified technical credentials.
          </p>
        </div>

        {/* Two-Column Editorial Grid: Formal Education (7 cols) & Certifications (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Formal Degrees */}
          <div 
            ref={eduRef}
            className={`lg:col-span-7 space-y-10 reveal-init ${
              isEduVisible ? 'reveal-active' : ''
            }`}
          >
            <div className="pb-3 border-b border-zinc-200 dark:border-white/[0.08] flex items-center justify-between font-mono text-xs">
              <span className="font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-indigo-700 dark:text-indigo-400" />
                Formal Academic Education
              </span>
              <span className="text-zinc-500 text-[11px]">Degree & Secondary</span>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-zinc-50/70 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] space-y-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md dark:hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.5)] hover:border-zinc-300 dark:hover:border-white/[0.15]">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-zinc-950 dark:text-white">
                        {edu.institution}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-indigo-700 dark:text-indigo-400" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <div className="font-mono text-xs text-zinc-600 dark:text-zinc-400 shrink-0">
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-sans">
                    {edu.degree}
                  </p>

                  {/* Academic Metrics */}
                  {edu.minor && (
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs pt-1">
                      <span className="px-2.5 py-0.5 rounded-lg bg-zinc-100 dark:bg-white/[0.05] text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/[0.08]">
                        {edu.minor}
                      </span>
                    </div>
                  )}

                  {/* Coursework Focus */}
                  <div className="space-y-1.5 pt-2">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed transition-transform duration-150 hover:translate-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0 mt-1.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div 
            ref={certRef}
            className={`lg:col-span-5 space-y-8 reveal-init ${
              isCertVisible ? 'reveal-active' : ''
            }`}
          >
            <div className="pb-3 border-b border-zinc-200 dark:border-white/[0.08] flex items-center justify-between font-mono text-xs">
              <span className="font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-700 dark:text-indigo-400" />
                Verified Technical Certifications
              </span>
              <span className="text-zinc-500 text-[11px]">2 Credentials</span>
            </div>

            <div className="space-y-6">
              {certificationsData.map((cert, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] space-y-2.5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md dark:hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.5)] hover:border-indigo-500/40"
                >
                  <div className="flex items-baseline justify-between font-mono text-xs">
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider">
                      {cert.category}
                    </span>
                    <span className="text-indigo-700 dark:text-indigo-400 font-semibold text-[11px] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-display font-bold text-zinc-950 dark:text-white">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-mono text-indigo-800 dark:text-indigo-400 font-medium mt-0.5">
                      Issued by {cert.issuer}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed pt-2 border-t border-zinc-200 dark:border-white/[0.06]">
                    {cert.details}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
