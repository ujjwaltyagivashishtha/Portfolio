import React from 'react';
import profilePhoto from '../assets/ujjwal-profile.jpg';
import { personalInfo } from '../data/personalInfo';
import { siteConfig } from '../config/site';
import { 
  ArrowDown, 
  FileText, 
  ArrowUpRight,
  Database,
  Server,
  Layers,
  Radio
} from 'lucide-react';

export const Hero = ({ onOpenResume }) => {
  return (
    <section 
      id="hero" 
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 border-b border-zinc-200 dark:border-white/[0.08] transition-colors duration-200 overflow-hidden"
    >
      {/* Restrained Technical Architecture & Data Flow Background */}
      <div 
        className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-[0.2] dark:opacity-[0.25]"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Subtle Grid Coordinates */}
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-zinc-300 dark:text-zinc-800" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" opacity="0.35" />

          {/* Distributed Topology Connection Lines */}
          <path
            d="M 120 180 C 340 180, 480 320, 720 320 C 960 320, 1100 220, 1340 220"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-indigo-500/30 dark:text-indigo-400/25"
          />
          <path
            d="M 180 520 C 420 520, 560 360, 800 360 C 1040 360, 1180 480, 1380 480"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-zinc-300 dark:text-indigo-400/20"
          />
          <path
            d="M 320 100 L 320 400 L 640 400"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="text-zinc-300 dark:text-zinc-700/60"
          />
          <path
            d="M 980 200 L 980 500 L 1260 500"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="text-zinc-300 dark:text-zinc-700/60"
          />

          {/* Topology Node Indicators */}
          <g transform="translate(120, 180)">
            <circle r="4" fill="#6366f1" fillOpacity="0.85" />
            <circle r="1.5" fill="#ffffff" />
          </g>

          <g transform="translate(720, 320)">
            <circle r="4" fill="#6366f1" fillOpacity="0.85" />
            <circle r="1.5" fill="#ffffff" />
          </g>

          <g transform="translate(1340, 220)">
            <circle r="4" fill="#6366f1" fillOpacity="0.85" />
            <circle r="1.5" fill="#ffffff" />
          </g>

          <g transform="translate(800, 360)">
            <circle r="3.5" fill="#6366f1" fillOpacity="0.85" />
            <circle r="1.5" fill="#ffffff" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header & Visual Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Actions (7 cols on lg, 8 on xl) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            
            {/* Eyebrow Label & Current Availability - Staggered 0ms */}
            <div className="animate-fade-up flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] text-zinc-900 dark:text-zinc-200 font-medium transition-all duration-200 hover:border-indigo-500/40 hover:-translate-y-0.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400/50"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.8)]"></span>
                </span>
                Available for Software Roles
              </span>
              <span>•</span>
              <span className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">Based in Saharanpur, UP, India</span>
            </div>

            {/* Expressive Oversized Headline - Staggered 80ms */}
            <h1 className="animate-fade-up delay-100 text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-zinc-950 dark:text-white leading-[0.98]">
              Building Reliable Systems.<br />
              <span className="text-zinc-500 dark:text-zinc-400 font-normal">
                Engineering Scalable Backends.
              </span>
            </h1>

            {/* Concise Editorial Introduction - Staggered 160ms */}
            <p className="animate-fade-up delay-200 text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 font-sans max-w-3xl leading-relaxed">
              I am a software developer with a backend focus, currently pursuing Computer Science & Engineering at Quantum University. I design predictable RESTful APIs, enforce ACID transaction integrity in databases, and build real-time collaborative systems with Node.js, Express, and MongoDB.
            </p>

            {/* Dual Action CTAs - Responsive and Tactile - Staggered 240ms */}
            <div className="animate-fade-up delay-300 flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group px-6 py-3.5 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:bg-indigo-600 dark:hover:bg-indigo-500 font-mono text-xs font-bold tracking-wide transition-all duration-200 ease-out flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                <span>Explore Selected Projects</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-200" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="group px-6 py-3.5 rounded-xl border border-zinc-300 dark:border-white/[0.15] hover:border-zinc-950 dark:hover:border-white hover:bg-zinc-100/50 dark:hover:bg-white/[0.04] text-zinc-900 dark:text-white font-mono text-xs font-medium transition-all duration-200 ease-out flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 active:scale-[0.98]"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-200" />
                <span>Review Verified Resume</span>
              </button>
            </div>

          </div>

          {/* Right Column: High-Tech Identity Portrait (5 cols on lg, 4 on xl) */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end animate-fade-up delay-200">
            <div className="relative group max-w-[320px] sm:max-w-[350px] w-full">
              {/* Subtle ambient backlight glow */}
              <div 
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-500/25 via-violet-500/15 to-transparent blur-2xl opacity-60 dark:opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                aria-hidden="true"
              />

              {/* Framed Card Container */}
              <div className="relative rounded-3xl p-3 sm:p-3.5 bg-gradient-to-b from-white/95 via-zinc-50/90 to-zinc-100/90 dark:from-zinc-900/90 dark:via-zinc-900/80 dark:to-zinc-950/95 border border-zinc-200/90 dark:border-white/[0.12] shadow-2xl backdrop-blur-md">
                
                {/* Top System Status Bar */}
                <div className="flex items-center justify-between px-1.5 pb-2.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                    </span>
                    <span className="font-semibold tracking-wider uppercase text-zinc-800 dark:text-zinc-200 text-[10px]">
                      IDENTITY // VERIFIED
                    </span>
                  </div>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500">
                    CSE '27
                  </span>
                </div>

                {/* Main Photo Frame */}
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-zinc-950 border border-zinc-200/60 dark:border-white/[0.08] shadow-inner">
                  <img 
                    src={profilePhoto} 
                    alt="Ujjwal Tyagi — Software Developer" 
                    className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Atmospheric Bottom Gradient Overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pointer-events-none" 
                    aria-hidden="true"
                  />

                  {/* Floating Location Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white/90 flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    <span>Saharanpur, IN</span>
                  </div>

                  {/* Floating Identity & Role Card */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/65 backdrop-blur-md border border-white/10 text-white shadow-lg">
                    <div className="flex items-center justify-between font-mono text-[10px] text-zinc-300 mb-0.5">
                      <span>UJJWAL TYAGI</span>
                      <span className="text-indigo-300 font-medium">Quantum Univ</span>
                    </div>
                    <div className="text-xs font-bold text-white tracking-tight">
                      Software Developer
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-zinc-300">
                      <span>Backend & Systems</span>
                      <span className="text-emerald-400 font-medium">● Open to roles</span>
                    </div>
                  </div>
                </div>

                {/* Technical Stack Micro-Badges */}
                <div className="mt-3 pt-2.5 border-t border-zinc-200/80 dark:border-white/[0.08] grid grid-cols-3 gap-1.5 text-center font-mono text-[10px]">
                  <div className="px-1.5 py-1 rounded-md bg-zinc-100 dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 font-medium truncate">
                    Node / Express
                  </div>
                  <div className="px-1.5 py-1 rounded-md bg-zinc-100 dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 font-medium truncate">
                    MongoDB ACID
                  </div>
                  <div className="px-1.5 py-1 rounded-md bg-zinc-100 dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 font-medium truncate">
                    Java DSA
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Structural Architecture Signature Strip - Staggered 320ms */}
        <div className="animate-fade-up delay-400 mt-16 sm:mt-24 pt-8 border-t border-zinc-200 dark:border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
          <div className="p-3 rounded-xl space-y-1 group transition-all duration-200 ease-out hover:bg-zinc-100/60 dark:hover:bg-white/[0.03] hover:-translate-y-0.5">
            <span className="text-zinc-400 text-[11px] block uppercase tracking-wider group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">01 / PERSISTENCE</span>
            <strong className="text-zinc-900 dark:text-white block font-medium">MongoDB ACID Sessions</strong>
            <span className="text-zinc-600 dark:text-zinc-400 text-[11px] block">Multi-document atomicity</span>
          </div>

          <div className="p-3 rounded-xl space-y-1 group transition-all duration-200 ease-out hover:bg-zinc-100/60 dark:hover:bg-white/[0.03] hover:-translate-y-0.5">
            <span className="text-zinc-400 text-[11px] block uppercase tracking-wider group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">02 / PROTOCOLS</span>
            <strong className="text-zinc-900 dark:text-white block font-medium">Express & REST Contracts</strong>
            <span className="text-zinc-600 dark:text-zinc-400 text-[11px] block">Deterministic JSON envelopes</span>
          </div>

          <div className="p-3 rounded-xl space-y-1 group transition-all duration-200 ease-out hover:bg-zinc-100/60 dark:hover:bg-white/[0.03] hover:-translate-y-0.5">
            <span className="text-zinc-400 text-[11px] block uppercase tracking-wider group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">03 / REAL-TIME</span>
            <strong className="text-zinc-900 dark:text-white block font-medium">Socket.io Event Rooms</strong>
            <span className="text-zinc-600 dark:text-zinc-400 text-[11px] block">Isolated multi-tenant channels</span>
          </div>

          <div className="p-3 rounded-xl space-y-1 group transition-all duration-200 ease-out hover:bg-zinc-100/60 dark:hover:bg-white/[0.03] hover:-translate-y-0.5">
            <span className="text-zinc-400 text-[11px] block uppercase tracking-wider group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">04 / ALGORITHMS</span>
            <strong className="text-zinc-900 dark:text-white block font-medium">Java DSA Core</strong>
            <span className="text-zinc-600 dark:text-zinc-400 text-[11px] block">Algorithmic complexity rigor</span>
          </div>
        </div>

      </div>
    </section>
  );
};
