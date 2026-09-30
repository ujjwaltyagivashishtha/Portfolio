import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { genAiSectionData } from '../data/genAI';
import { Bot, Sparkles, BookOpenCheck, ArrowRight, Layers } from 'lucide-react';

export const GenAI = () => {
  return (
    <section id="genai" className="py-16 sm:py-24 relative bg-slate-50 dark:bg-[#080808] border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="04"
          badge="AI & LLM Extension"
          title="Generative AI & AI Engineering"
          subtitle="Building AI-powered full-stack applications by integrating LLM APIs, prompt engineering, and structured outputs."
        />

        {/* Part 1: Architecture Flow Visualization */}
        <div className="mb-12 p-6 rounded-2xl bg-white dark:bg-[#121214] border border-slate-200 dark:border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#F95C4B] font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4 text-[#F95C4B]" />
            <span>AI + Full-Stack Architecture Pipeline</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 font-mono text-xs">
            {genAiSectionData.architectureFlow.map((flow, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-[#080808] border border-slate-200 dark:border-white/10 space-y-1">
                <span className="text-[#F95C4B] font-bold block">{i + 1}. {flow.step}</span>
                <span className="text-[11px] text-slate-600 dark:text-zinc-400 font-sans block leading-tight">{flow.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Verified Capabilities vs Currently Exploring */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Column 1: Verified Capabilities */}
          <Card className="bg-white dark:bg-[#121214] border-slate-200 dark:border-white/10 space-y-4 p-5 sm:p-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2 text-[#F95C4B] font-mono text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#F95C4B]" />
                <span>Verified LLM Capabilities</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F95C4B]/10 text-[#F95C4B] border border-[#F95C4B]/20 font-bold">
                Supported
              </span>
            </div>

            <div className="space-y-2.5">
              {genAiSectionData.verifiedCapabilities.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-[#080808] border border-slate-200 dark:border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-900 dark:text-zinc-100">{item.title}</span>
                    <span className="text-[9px] font-mono text-slate-500 dark:text-zinc-400">{item.status}</span>
                  </div>
                  <p className="text-xs font-sans text-slate-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Column 2: Currently Exploring (Visually Separate) */}
          <Card className="bg-white dark:bg-[#121214] border-slate-200 dark:border-white/10 space-y-4 p-5 sm:p-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2 text-slate-700 dark:text-zinc-300 font-mono text-xs font-bold uppercase tracking-wider">
                <BookOpenCheck className="w-4 h-4 text-[#F95C4B]" />
                <span>Currently Exploring</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-zinc-300 font-bold">
                Learning
              </span>
            </div>

            <div className="space-y-2.5">
              {genAiSectionData.currentlyExploring.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-[#080808] border border-slate-200 dark:border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-900 dark:text-zinc-100">{item.title}</span>
                    <span className="text-[9px] font-mono text-slate-500 dark:text-zinc-400">{item.tag}</span>
                  </div>
                  <p className="text-xs font-sans text-slate-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Card>

        </div>

      </div>
    </section>
  );
};
