import React from 'react';
import { useScrollReveal } from '../lib/useScrollReveal';
import { 
  Database, 
  Server, 
  Radio, 
  Code2,
  GraduationCap,
  Briefcase,
  CheckCircle2
} from 'lucide-react';

export const About = () => {
  const [sectionRef, isSectionVisible] = useScrollReveal();
  const [rightRef, isRightVisible] = useScrollReveal();

  const architecturalPrinciples = [
    {
      num: "01",
      title: "Data Consistency & Atomic Persistence",
      desc: "Financial balances and shared states demand strict atomicity. I model Mongoose schemas and enforce MongoDB session transactions (`session.withTransaction()`) so partial failures immediately roll back, preventing silent corruption."
    },
    {
      num: "02",
      title: "Deterministic REST API Contracts",
      desc: "Services must be predictable under stress. I structure Express routes with strict payload schema validation, unified JSON envelopes, proper HTTP status semantics, and centralized error handling middleware."
    },
    {
      num: "03",
      title: "Resilient Real-Time Event Synchronization",
      desc: "Interactive multi-user systems require decoupled communication channels. I utilize Socket.io rooms to isolate collaborative traffic, manage user join/leave lifecycles, and synchronize shared state across sessions."
    },
    {
      num: "04",
      title: "Algorithmic Grounding & Core Systems",
      desc: "Software design begins with data structures. Practicing algorithmic problem-solving in Java informs how I design time- and space-efficient backend services, manage memory, and structure clean modular code."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 sm:py-28 border-b border-zinc-200 dark:border-white/[0.08] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Label */}
        <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">
          <span>01</span>
          <span>/</span>
          <span>ENGINEERING MINDSET & BACKGROUND</span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Core Narrative (5 cols) */}
          <div 
            ref={sectionRef}
            className={`lg:col-span-5 space-y-6 text-left reveal-init ${
              isSectionVisible ? 'reveal-active' : ''
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.08]">
              Reliability is won or lost at the architecture level.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
              <p>
                I am an undergraduate in Computer Science & Engineering at <strong>Quantum University</strong> (Minor in Data Analytics). Rather than treating backend systems as simple database wrappers, I view them as state machines where data consistency, error handling, and latency matter.
              </p>
              <p>
                During my web development internship at <strong>3Skill India</strong>, I built modular REST APIs in Node.js/Express, managed schemas with Mongoose ORM, and collaborated using disciplined Git version control workflows.
              </p>
              <p>
                My projects reflect this mindset: from engineering double-entry audit ledgers in a banking backend to orchestrating real-time WebSockets and LLM file systems in browser-based runtimes.
              </p>
            </div>

            {/* Academic Credential Summary Box */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-zinc-400 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-sm hover:border-indigo-500/40">
              <div>
                <span className="text-zinc-400 block text-[11px]">DEGREE</span>
                <strong className="text-zinc-900 dark:text-white font-medium">B.Tech CSE (2023–2027)</strong>
              </div>
              <div>
                <span className="text-zinc-400 block text-[11px]">SPECIALIZATION</span>
                <strong className="text-indigo-700 dark:text-indigo-400 font-bold">Minor in Data Analytics</strong>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Architecture Principles Divided by Rules (7 cols) */}
          <div 
            ref={rightRef}
            className={`lg:col-span-7 space-y-2 reveal-init ${
              isRightVisible ? 'reveal-active' : ''
            }`}
          >
            {architecturalPrinciples.map((item) => (
              <div 
                key={item.num} 
                className="group p-5 rounded-xl border border-transparent hover:border-zinc-200/80 dark:hover:border-white/[0.06] space-y-2 text-left transition-all duration-200 ease-out hover:bg-zinc-100/60 dark:hover:bg-white/[0.02] hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="flex items-baseline justify-between font-mono text-xs">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold group-hover:translate-x-1 transition-transform duration-200 inline-block">{item.num}</span>
                  <span className="text-zinc-400 text-[11px] uppercase tracking-wider">CORE TENET</span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed pt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
