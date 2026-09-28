import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { experienceData } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#080808] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="02"
          badge="Work History"
          title="Professional Experience"
          subtitle="Hands-on software development experience gained in industry internship roles."
        />

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#080808] border-2 border-[#F95C4B] group-hover:bg-[#F95C4B] group-hover:scale-125 transition-all"></div>

              <Card className="border border-white/10 group-hover:border-[#F95C4B]/40 transition-all bg-[#121214]">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10 mb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#F95C4B] font-semibold flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#F95C4B]" />
                      {exp.company}
                    </span>
                    <h3 className="text-xl font-bold text-zinc-100 font-display mt-1">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#080808] border border-white/10 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#F95C4B]" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-zinc-400">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-3 mb-6">
                  {exp.bulletPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed font-sans">
                      <CheckCircle className="w-4 h-4 text-[#F95C4B] shrink-0 mt-1" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider mr-2 font-semibold">Technologies Used:</span>
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
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
