import React from 'react';
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
            className="text-indigo-500/40 animate-data-pulse"
          />
          <path
            d="M 180 520 C 420 520, 560 360, 800 360 C 1040 360, 1180 480, 1380 480"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-zinc-400 dark:text-indigo-400/30 animate-data-pulse"
            style={{ animationDelay: '1.5s' }}
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

          {/* Node 1 */}
          <g transform="translate(120, 180)">
            <circle r="4" fill="#6366f1" className="animate-node-breathe" />
            <circle r="1.5" fill="#ffffff" />
          </g>

          {/* Node 2 */}
          <g transform="translate(720, 320)">
            <circle r="4" fill="#6366f1" className="animate-node-breathe" style={{ animationDelay: '1s' }} />
            <circle r="1.5" fill="#ffffff" />
          </g>

          {/* Node 3 */}
          <g transform="translate(1340, 220)">
            <circle r="4" fill="#6366f1" className="animate-node-breathe" style={{ animationDelay: '2s' }} />
            <circle r="1.5" fill="#ffffff" />
          </g>

          {/* Node 4 */}
          <g transform="translate(800, 360)">
            <circle r="3.5" fill="#6366f1" className="animate-node-breathe" style={{ animationDelay: '0.5s' }} />
            <circle r="1.5" fill="#ffffff" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header Block */}
        <div className="space-y-8 max-w-5xl">
          
          {/* Eyebrow Label & Current Availability - Staggered 0ms */}
          <div className="animate-fade-up flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] text-zinc-900 dark:text-zinc-200 font-medium transition-all hover:border-indigo-500/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for Software Roles
            </span>
            <span>•</span>
            <span className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">Based in Saharanpur, UP, India</span>
          </div>

          {/* Expressive Oversized Headline - Staggered 100ms */}
          <h1 className="animate-fade-up delay-100 text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-zinc-950 dark:text-white leading-[0.98]">
            Building Reliable Systems.<br />
            <span className="text-zinc-500 dark:text-zinc-400 font-normal">
              Engineering Scalable Backends.
            </span>
          </h1>

          {/* Concise Editorial Introduction - Staggered 200ms */}
          <p className="animate-fade-up delay-200 text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 font-sans max-w-3xl leading-relaxed">
            I am a software developer with a backend focus, currently pursuing Computer Science & Engineering at Quantum University. I design predictable RESTful APIs, enforce ACID transaction integrity in databases, and build real-time collaborative systems with Node.js, Express, and MongoDB.
          </p>

          {/* Dual Action CTAs - Staggered 300ms */}
          <div className="animate-fade-up delay-300 flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="group px-6 py-3.5 rounded bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:bg-indigo-600 dark:hover:bg-indigo-500 font-mono text-xs font-bold tracking-wide transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              <span>Explore Selected Projects</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-200" />
            </a>

            <button
              type="button"
              onClick={onOpenResume}
              className="group px-6 py-3.5 rounded border border-zinc-300 dark:border-white/[0.15] hover:border-zinc-950 dark:hover:border-white hover:bg-zinc-100/50 dark:hover:bg-white/[0.04] text-zinc-900 dark:text-white font-mono text-xs font-medium transition-all duration-200 flex items-center gap-2 active:scale-[0.98]"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-200" />
              <span>Review Verified Resume</span>
            </button>
          </div>

        </div>

        {/* Structural Architecture Signature Strip - Staggered 400ms */}
        <div className="animate-fade-up delay-400 mt-16 sm:mt-24 pt-8 border-t border-zinc-200 dark:border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
          <div className="space-y-1 group">
            <span className="text-zinc-400 text-[11px] block uppercase tracking-wider group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">01 / PERSISTENCE</span>
            <strong className="text-zinc-900 dark:text-white block font-medium">MongoDB ACID Sessions</strong>
            <span className="text-zinc-600 dark:text-zinc-400 text-[11px] block">Multi-document atomicity</span>
          </div>

          <div className="space-y-1 group">
            <span className="text-zinc-400 text-[11px] block uppercase tracking-wider group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">02 / PROTOCOLS</span>
            <strong className="text-zinc-900 dark:text-white block font-medium">Express & REST Contracts</strong>
            <span className="text-zinc-600 dark:text-zinc-400 text-[11px] block">Deterministic JSON envelopes</span>
          </div>

          <div className="space-y-1 group">
            <span className="text-zinc-400 text-[11px] block uppercase tracking-wider group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">03 / REAL-TIME</span>
            <strong className="text-zinc-900 dark:text-white block font-medium">Socket.io Event Rooms</strong>
            <span className="text-zinc-600 dark:text-zinc-400 text-[11px] block">Isolated multi-tenant channels</span>
          </div>

          <div className="space-y-1 group">
            <span className="text-zinc-400 text-[11px] block uppercase tracking-wider group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">04 / ALGORITHMS</span>
            <strong className="text-zinc-900 dark:text-white block font-medium">Java DSA Core</strong>
            <span className="text-zinc-600 dark:text-zinc-400 text-[11px] block">Algorithmic complexity rigor</span>
          </div>
        </div>

      </div>
    </section>
  );
};
