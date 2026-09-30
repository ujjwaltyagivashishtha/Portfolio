import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { skillCategories, currentlyLearningSkills } from '../data/skills';
import { Code2, Server, Database, Layout, ShieldCheck, BookOpenCheck, Lock, Cpu, Wrench } from 'lucide-react';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="skills" className="py-16 sm:py-24 relative bg-slate-50 dark:bg-[#080808] border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="03"
          badge="Technical Competencies"
          title="Technical Skills"
          subtitle="Categorized breakdown of verified full-stack technologies, databases, real-time messaging, security practices, and tools."
        />

        {/* Tab Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-slate-200 dark:border-white/10 font-mono text-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-[#F95C4B] text-black shadow-sm'
                : 'bg-white dark:bg-[#121214] text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/10'
            }`}
          >
            All Categories
          </button>
          <button
            onClick={() => setActiveTab('learning')}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
              activeTab === 'learning'
                ? 'bg-[#F95C4B] text-black shadow-sm'
                : 'bg-white dark:bg-[#121214] text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/10'
            }`}
          >
            Currently Learning
          </button>
        </div>

        {activeTab === 'all' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => (
              <Card key={idx} className="bg-white dark:bg-[#121214] border-slate-200 dark:border-white/10 space-y-4 p-5">
                <div className="pb-3 border-b border-slate-200 dark:border-white/10">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 font-display flex items-center justify-between">
                    <span>{cat.title}</span>
                    <span className="w-2 h-2 rounded-full bg-[#F95C4B]"></span>
                  </h3>
                </div>
                <div className="space-y-2">
                  {cat.skills.map((s, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#080808] border border-slate-200 dark:border-white/10 text-xs space-y-0.5">
                      <span className="font-bold text-slate-900 dark:text-zinc-100 font-mono block text-[#F95C4B]">{s.name}</span>
                      <span className="text-[11px] text-slate-600 dark:text-zinc-400 font-sans block">{s.desc}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-zinc-400 flex items-center gap-2">
              <BookOpenCheck className="w-4 h-4 text-[#F95C4B] shrink-0" />
              <span>Technologies currently being actively learned and explored.</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-mono text-xs">
              {currentlyLearningSkills.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-[#121214] border border-slate-200 dark:border-white/10 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase block font-semibold">{item.category}</span>
                  <span className="text-slate-900 dark:text-zinc-100 font-bold block text-sm">{item.name}</span>
                  <span className="text-[10px] text-[#F95C4B] font-semibold">Currently Learning</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
