import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { experienceData } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Work History"
          title="Professional Experience"
          subtitle="Hands-on software development experience gained in industry internship roles."
        />

        <div className="relative border-l-2 border-slate-300 dark:border-slate-800 ml-4 md:ml-6 space-y-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-indigo-600 dark:border-indigo-400 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-400 group-hover:scale-125 transition-all"></div>

              <Card className="border border-slate-200 dark:border-slate-800 group-hover:border-indigo-500/40 transition-all">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-slate-800/80 mb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.company}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-3 mb-6">
                  {exp.bulletPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-900 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-2 font-semibold">Technologies Used:</span>
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

              </Card>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
