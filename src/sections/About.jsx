import React from 'react';
import { personalInfo } from '../data/personalInfo';

export const About = () => {
  return (
    <section id="about" className="py-24 sm:py-36 relative bg-[#080808] text-zinc-100 border-b border-white/5 overflow-hidden">
      {/* Editorial Grid Texture */}
      <div className="absolute inset-0 bg-editorial-grid pointer-events-none opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-28">
        
        {/* Top Header & Magazine Section Label */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 font-mono text-xs text-zinc-400 uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <span className="text-[#F95C4B] font-bold text-sm">01</span>
            <span className="text-zinc-600">/</span>
            <span>PROFILE</span>
          </div>
          <div className="hidden sm:block text-zinc-500">
            ENGINEERING EDITORIAL SPREAD
          </div>
        </div>

        {/* Hero Element: Large Editorial Statement (Occupying 50-60% Visual Attention) */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-display uppercase tracking-tight text-zinc-100 leading-[1.03] max-w-6xl">
            I BUILD SOFTWARE <br className="hidden sm:inline" />
            TO UNDERSTAND HOW <br className="hidden sm:inline" />
            <span className="text-[#F95C4B]">SYSTEMS ACTUALLY WORK.</span>
          </h2>
        </div>

        {/* Asymmetrical Editorial Composition: Introduction Narrative + Vertical Metadata Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Introduction Narrative (Narrower reading column) */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed font-sans font-normal border-l border-white/10 pl-6 sm:pl-8">
            <p>
              I am a Computer Science & Engineering student at Quantum University with a Minor in Data Analytics, specializing in full-stack web software engineering. I focus on software where backend structure, database efficiency, and user experience converge into a reliable whole.
            </p>
            <p>
              My approach to software engineering centers on practical systems. Rather than building isolated UI layers, I design end-to-end applications—from real-time collaborative development platforms integrated with Google Gemini AI and WebContainer APIs, to financial transaction systems engineered with immutable double-entry ledgers.
            </p>
            <p>
              Through my industry internship at 3Skill India, I gained practical grounding across the full software lifecycle—building responsive React frontends, designing RESTful APIs using Node.js and Express, and managing MongoDB database collections with Mongoose ORM.
            </p>
          </div>

          {/* Editorial Profile Data Column (Pure Typography & Separators, NO CARDS) */}
          <div className="lg:col-span-5 space-y-8 font-mono text-xs text-zinc-300 lg:pl-6">
            
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold pb-2 border-b border-white/20">
              PROFILE METADATA
            </div>

            {/* Item 1 */}
            <div className="space-y-1.5 pb-6 border-b border-white/10">
              <div className="text-[11px] text-[#F95C4B] uppercase tracking-wider font-semibold">
                DEGREE & INSTITUTION
              </div>
              <div className="text-sm font-bold text-zinc-100 font-display">
                B.Tech Computer Science & Engineering
              </div>
              <div className="text-zinc-400 font-sans">
                Quantum University · Minor in Data Analytics (CGPA 7.99)
              </div>
            </div>

            {/* Item 2 */}
            <div className="space-y-1.5 pb-6 border-b border-white/10">
              <div className="text-[11px] text-[#F95C4B] uppercase tracking-wider font-semibold">
                CORE FOCUS
              </div>
              <div className="text-sm font-bold text-zinc-100 font-display">
                Full-Stack Systems Engineering
              </div>
              <div className="text-zinc-400 font-sans">
                React.js · Node.js · Express.js · MongoDB
              </div>
            </div>

            {/* Item 3 */}
            <div className="space-y-1.5 pb-6 border-b border-white/10">
              <div className="text-[11px] text-[#F95C4B] uppercase tracking-wider font-semibold">
                INDUSTRY EXPERIENCE
              </div>
              <div className="text-sm font-bold text-zinc-100 font-display">
                Web Development Intern
              </div>
              <div className="text-zinc-400 font-sans">
                3Skill India · Jun. 2026 – Aug. 2026
              </div>
            </div>

            {/* Item 4 */}
            <div className="space-y-1.5">
              <div className="text-[11px] text-[#F95C4B] uppercase tracking-wider font-semibold">
                KEY PLATFORMS
              </div>
              <div className="text-sm font-bold text-zinc-100 font-display">
                Real-Time IDE & Transaction Ledgers
              </div>
              <div className="text-zinc-400 font-sans">
                Socket.io · Google Gemini AI API · WebContainer API
              </div>
            </div>

          </div>

        </div>

        {/* Editorial Pull Quote Element */}
        <div className="py-12 border-y border-white/10 my-12">
          <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display uppercase tracking-tight text-[#F95C4B] leading-tight max-w-4xl">
            "GOOD SOFTWARE ARCHITECTURE SHOULD MAKE COMPLEX SYSTEMS FEEL NATURAL AND OBVIOUS."
          </blockquote>
        </div>

        {/* "HOW I BUILD" Micro-Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 font-mono text-xs text-zinc-400 uppercase tracking-widest">
            <span className="text-[#F95C4B] font-bold">02</span>
            <span className="text-zinc-600">/</span>
            <span>HOW I BUILD</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            
            {/* Step 1 */}
            <div className="space-y-2 border-l border-white/10 pl-5">
              <div className="text-xs font-mono font-bold text-[#F95C4B]">01 / UNDERSTAND</div>
              <h4 className="text-base font-bold font-display text-zinc-100 uppercase">System Requirements</h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Deconstruct domain logic, data aggregations, and transaction rules before architecting backend or frontend modules.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-2 border-l border-white/10 pl-5">
              <div className="text-xs font-mono font-bold text-[#F95C4B]">02 / BUILD</div>
              <h4 className="text-base font-bold font-display text-zinc-100 uppercase">Modular Full-Stack</h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Implement performant React components, RESTful Node/Express endpoints, Mongoose ORM models, and real-time WebSockets.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-2 border-l border-white/10 pl-5">
              <div className="text-xs font-mono font-bold text-[#F95C4B]">03 / REFINE</div>
              <h4 className="text-base font-bold font-display text-zinc-100 uppercase">Security & Reliability</h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Validate idempotency, enforce double-entry ledger integrity, optimize MongoDB aggregation pipelines, and ensure error handling.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};





