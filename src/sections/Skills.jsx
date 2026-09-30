import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { skillsCategories } from '../data/skills';
import { Code2, Layout, Server, Database, Wrench, CheckCircle2, Search } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Wrench: Wrench,
};

export const Skills = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = skillsCategories.map((cat) => {
    if (!searchQuery.trim()) return cat;
    const matchingSkills = cat.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.level.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, skills: matchingSkills };
  }).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-16 sm:py-24 relative bg-white dark:bg-[#080808] border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="04"
          badge="Technical Competencies"
          title="Skills & Technologies"
          subtitle="Core programming languages, web frameworks, database systems, and engineering tooling."
        />

        {/* Real-time Search Input */}
        <div className="mb-8 sm:mb-10 max-w-md w-full">
          <div className="relative">
            <Search className="w-4 h-4 text-[#F95C4B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technologies (e.g. React, MongoDB, Java, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 focus:border-[#F95C4B] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => {
              const IconComponent = iconMap[category.icon] || Code2;
              return (
                <Card key={category.name} className="flex flex-col justify-between border-slate-200 dark:border-white/10 bg-white dark:bg-[#121214]">
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 pb-3.5 mb-4 border-b border-slate-200 dark:border-white/10">
                      <div className="p-2 rounded-lg bg-[#F95C4B]/10 text-[#F95C4B] border border-[#F95C4B]/20">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 font-display">
                        {category.name}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-2.5 sm:space-y-3">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#080808]/70 border border-slate-200 dark:border-white/10 hover:border-[#F95C4B]/30 transition-colors flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F95C4B] shrink-0" />
                            <div>
                              <h4 className="text-xs font-semibold text-slate-800 dark:text-zinc-200">
                                {skill.name}
                              </h4>
                              <p className="text-[10px] text-slate-500 dark:text-zinc-400 font-mono">
                                {skill.description}
                              </p>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-[#121214] text-[#F95C4B] border border-slate-200 dark:border-white/10 shrink-0">
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
        ) : (
          <div className="p-8 sm:p-12 text-center bg-white dark:bg-[#121214] border border-slate-200 dark:border-white/10 rounded-2xl">
            <p className="text-sm font-mono text-slate-600 dark:text-zinc-400">
              No skills found matching "<span className="text-[#F95C4B]">{searchQuery}</span>"
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs font-mono text-[#F95C4B] underline"
            >
              Reset filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
