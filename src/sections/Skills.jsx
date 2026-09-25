import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { skillsCategories } from '../data/skills';
import { Code2, Layout, Server, Database, Wrench, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Wrench: Wrench,
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Technical Competencies"
          title="Skills & Technologies"
          subtitle="Core programming languages, web frameworks, database systems, and engineering tooling."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Code2;
            return (
              <Card key={category.name} className="flex flex-col justify-between border-stone-800">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-3.5 mb-4 border-b border-stone-800">
                    <div className="p-2 rounded-lg bg-coral-500/10 text-coral-400 border border-coral-500/20">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-paper-100">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-stone-950/70 border border-stone-800/80 hover:border-stone-700 transition-colors flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-coral-400 shrink-0" />
                          <div>
                            <h4 className="text-xs font-semibold text-stone-200">
                              {skill.name}
                            </h4>
                            <p className="text-[10px] text-stone-400 font-mono">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-stone-900 text-coral-300 border border-stone-700 shrink-0">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};
