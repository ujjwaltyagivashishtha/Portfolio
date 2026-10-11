import React, { useState } from 'react';
import { ProjectCaseStudyModal } from '../components/ui/ProjectCaseStudyModal';
import { projectsData } from '../data/projects';
import { genAiSectionData } from '../data/genAI';
import { useScrollReveal } from '../lib/useScrollReveal';
import { 
  ArrowUpRight, 
  Github, 
  CheckCircle2, 
  Layers, 
  Database,
  Radio, 
  Cpu, 
  FileText, 
  ShieldCheck, 
  Maximize2 
} from 'lucide-react';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const [headerRef, isHeaderVisible] = useScrollReveal();
  const [proj1Ref, isProj1Visible] = useScrollReveal();
  const [proj2Ref, isProj2Visible] = useScrollReveal();
  const [proj3Ref, isProj3Visible] = useScrollReveal();

  const bankProject = projectsData.find(p => p.id === 'bank-transaction-system') || projectsData[0];
  const fusionProject = projectsData.find(p => p.id === 'fusion-ai-studio') || projectsData[1];
  const resumeProject = projectsData.find(p => p.id === 'resume-builder') || projectsData[2];

  return (
    <section 
      id="projects" 
      className="py-20 sm:py-28 border-b border-zinc-200 dark:border-white/[0.08] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-16 pb-6 border-b border-zinc-200 dark:border-white/[0.08] reveal-init ${
            isHeaderVisible ? 'reveal-active' : ''
          }`}
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
              <span>02</span>
              <span>/</span>
              <span>ENGINEERING SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-zinc-950 dark:text-white">
              Selected Systems & Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-md text-left sm:text-right">
            Case studies demonstrating atomic transaction ledgers, real-time WebSockets, and document engines.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PROJECT 01: BANK TRANSACTION SYSTEM (FINANCIAL LEDGER ARCHITECTURE) */}
        {/* ========================================================================= */}
        <article 
          ref={proj1Ref}
          className={`mb-24 pb-20 border-b border-zinc-200 dark:border-white/[0.08] text-left reveal-init ${
            isProj1Visible ? 'reveal-active' : ''
          }`}
        >
          
          {/* Project Meta Bar */}
          <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-white/[0.08] font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold font-display text-zinc-400">01</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                Financial Backend & Persistence
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={bankProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
              <button
                type="button"
                onClick={() => setSelectedProject(bankProject)}
                className="group inline-flex items-center gap-1.5 text-zinc-950 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold transition-colors active:scale-95"
              >
                <Maximize2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-200" />
                <span>Case Study</span>
              </button>
            </div>
          </div>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 items-start">
            <div className="lg:col-span-8 space-y-3">
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-zinc-950 dark:text-white tracking-tight">
                {bankProject.title}
              </h3>
              <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
                {bankProject.summary}
              </p>
            </div>
            <div className="lg:col-span-4 space-y-2">
              <span className="text-zinc-400 font-mono text-[11px] block uppercase tracking-wider">
                Technology Stack
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {bankProject.techStack.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] text-zinc-800 dark:text-zinc-200 transition-colors hover:border-emerald-500/30">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Deep Dive: Problem vs Architectural Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="p-6 rounded-lg bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] space-y-3 transition-colors hover:border-zinc-300 dark:hover:border-white/[0.15]">
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold block">
                The Problem
              </span>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
                {bankProject.problem}
              </p>
            </div>

            <div className="p-6 rounded-lg bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] space-y-3 transition-colors hover:border-emerald-500/30">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold block">
                The Architectural Solution
              </span>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
                {bankProject.solution}
              </p>
            </div>
          </div>

          {/* Key Engineering Invariants */}
          <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
            {bankProject.engineeringChallenges.map((ec, i) => (
              <div key={i} className="space-y-1.5">
                <strong className="text-zinc-900 dark:text-white block font-semibold">
                  {ec.title}
                </strong>
                <p className="text-zinc-600 dark:text-zinc-400 text-[11px] font-sans leading-relaxed">
                  {ec.detail}
                </p>
              </div>
            ))}
          </div>

        </article>

        {/* ========================================================================= */}
        {/* PROJECT 02: FUSION AI STUDIO (REAL-TIME COLLABORATIVE AI IDE PLATFORM)    */}
        {/* MERGED: Includes the 5-Stage LLM Orchestration & WebContainer Architecture*/}
        {/* ========================================================================= */}
        <article 
          ref={proj2Ref}
          className={`mb-24 pb-20 border-b border-zinc-200 dark:border-white/[0.08] text-left reveal-init ${
            isProj2Visible ? 'reveal-active' : ''
          }`}
        >
          
          {/* Project Meta Bar */}
          <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-white/[0.08] font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold font-display text-zinc-400">02</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                Real-Time Systems & In-Browser Runtimes
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={fusionProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
              <button
                type="button"
                onClick={() => setSelectedProject(fusionProject)}
                className="group inline-flex items-center gap-1.5 text-zinc-950 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold transition-colors active:scale-95"
              >
                <Maximize2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-200" />
                <span>Case Study</span>
              </button>
            </div>
          </div>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 items-start">
            <div className="lg:col-span-8 space-y-3">
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-zinc-950 dark:text-white tracking-tight">
                {fusionProject.title}
              </h3>
              <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
                {fusionProject.summary}
              </p>
            </div>
            <div className="lg:col-span-4 space-y-2">
              <span className="text-zinc-400 font-mono text-[11px] block uppercase tracking-wider">
                Technology Stack
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {fusionProject.techStack.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] text-zinc-800 dark:text-zinc-200 transition-colors hover:border-emerald-500/30">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Integrated 5-Step Architecture Pipeline */}
          <div className="py-6 border-y border-zinc-200 dark:border-white/[0.08] space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">
                Deterministic LLM Orchestration & Execution Flow
              </span>
              <span className="text-emerald-700 dark:text-emerald-400 text-[11px]">
                End-to-End Pipeline
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3 font-mono text-xs">
              {genAiSectionData.architectureFlow.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-3.5 rounded bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] space-y-1.5 transition-colors hover:border-emerald-500/30"
                >
                  <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold block">
                    STAGE 0{idx + 1}
                  </span>
                  <strong className="text-xs text-zinc-900 dark:text-white block font-medium">
                    {item.step}
                  </strong>
                  <p className="text-[11px] font-sans text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Challenges Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
            {fusionProject.engineeringChallenges.map((ec, i) => (
              <div key={i} className="space-y-1.5">
                <strong className="text-zinc-900 dark:text-white block font-semibold">
                  {ec.title}
                </strong>
                <p className="text-zinc-600 dark:text-zinc-400 text-[11px] font-sans leading-relaxed">
                  {ec.detail}
                </p>
              </div>
            ))}
          </div>

        </article>

        {/* ========================================================================= */}
        {/* PROJECT 03: INTERACTIVE RESUME BUILDER (DOCUMENT ENGINE)                  */}
        {/* ========================================================================= */}
        <article 
          ref={proj3Ref}
          className={`text-left reveal-init ${
            isProj3Visible ? 'reveal-active' : ''
          }`}
        >
          
          {/* Project Meta Bar */}
          <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-white/[0.08] font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold font-display text-zinc-400">03</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                Document Engineering & State Architecture
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={resumeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
              <button
                type="button"
                onClick={() => setSelectedProject(resumeProject)}
                className="group inline-flex items-center gap-1.5 text-zinc-950 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold transition-colors active:scale-95"
              >
                <Maximize2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-200" />
                <span>Case Study</span>
              </button>
            </div>
          </div>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 items-start">
            <div className="lg:col-span-8 space-y-3">
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-zinc-950 dark:text-white tracking-tight">
                {resumeProject.title}
              </h3>
              <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
                {resumeProject.summary}
              </p>
            </div>
            <div className="lg:col-span-4 space-y-2">
              <span className="text-zinc-400 font-mono text-[11px] block uppercase tracking-wider">
                Technology Stack
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {resumeProject.techStack.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] text-zinc-800 dark:text-zinc-200 transition-colors hover:border-emerald-500/30">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Decisions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            {resumeProject.engineeringChallenges.map((ec, i) => (
              <div key={i} className="p-6 rounded-lg bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] space-y-2 transition-colors hover:border-emerald-500/30">
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold block">
                  {ec.title}
                </span>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
                  {ec.detail}
                </p>
              </div>
            ))}
          </div>

        </article>

      </div>

      {/* Deep Inspection Modal */}
      {selectedProject && (
        <ProjectCaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
