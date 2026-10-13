import React from 'react';
import { experienceData } from '../data/experience';
import { useScrollReveal } from '../lib/useScrollReveal';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Briefcase 
} from 'lucide-react';

export const Experience = () => {
  const [headerRef, isHeaderVisible] = useScrollReveal();
  const [expRef, isExpVisible] = useScrollReveal();

  return (
    <section 
      id="experience" 
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
              <span>04</span>
              <span>/</span>
              <span>PROFESSIONAL TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-zinc-950 dark:text-white">
              Work Experience
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-md text-left sm:text-right">
            Industry internship delivering REST APIs, database models, and collaborative software engineering.
          </p>
        </div>

        {/* Chronological Editorial Timeline */}
        <div 
          ref={expRef}
          className={`max-w-4xl space-y-12 reveal-init ${
            isExpVisible ? 'reveal-active' : ''
          }`}
        >
          {experienceData.map((exp, index) => (
            <div key={index} className="p-6 sm:p-8 rounded-2xl bg-zinc-50/70 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] space-y-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_16px_32px_-12px_rgba(0,0,0,0.5)] hover:border-indigo-500/40">
              
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-zinc-200 dark:border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-mono font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                      {exp.company}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] text-zinc-700 dark:text-zinc-300">
                      Internship
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-950 dark:text-white">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex items-center gap-3 font-mono text-xs text-zinc-600 dark:text-zinc-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-700 dark:text-indigo-400" />
                    {exp.period}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-indigo-700 dark:text-indigo-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Role Context Narrative */}
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
                Contributed to web applications by developing modular RESTful endpoints in Node.js/Express, managing MongoDB data schemas with Mongoose ORM, and integrating responsive interfaces using Git collaborative practices.
              </p>

              {/* Responsibilities & Achievements */}
              <div className="space-y-2.5">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold block">
                  Core Engineering Contributions
                </span>
                <div className="space-y-2">
                  {exp.bulletPoints.map((point, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed transition-transform duration-150 hover:translate-x-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0 mt-2" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Technologies Used */}
              <div className="pt-4 flex flex-wrap items-center gap-1.5 font-mono text-xs">
                <span className="text-zinc-400 mr-2 text-[11px] uppercase tracking-wider">
                  Technologies:
                </span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] text-zinc-800 dark:text-zinc-200 transition-all duration-150 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:text-indigo-600 dark:hover:text-indigo-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
