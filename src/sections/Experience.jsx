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

        <div className="relative border-l-2 border-stone-800 ml-4 md:ml-6 space-y-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-stone-950 border-2 border-coral-500 group-hover:bg-coral-500 group-hover:scale-125 transition-all"></div>

              <Card className="border border-stone-800 group-hover:border-coral-500/45 transition-all">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-800/80 mb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-coral-400 font-semibold flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-coral-400" />
                      {exp.company}
                    </span>
                    <h3 className="text-xl font-bold text-paper-100 mt-1">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-400">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950 border border-stone-800 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-coral-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-stone-400">
                      <MapPin className="w-3.5 h-3.5 text-stone-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-3 mb-6">
                  {exp.bulletPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-stone-300 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-coral-400 shrink-0 mt-1" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-stone-900 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-stone-400 uppercase tracking-wider mr-2 font-semibold">Technologies Used:</span>
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
