import React from 'react';
import profileDark from '../assets/ujjwal-profile-dark.jpg';
import profileLight from '../assets/ujjwal-profile-light.jpg';
import { 
  ArrowDown, 
  FileText,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { useMagnetic, useTilt } from '../lib/useMotionFx';

const HEADLINE_PRIMARY = 'Building Reliable Systems.';
const HEADLINE_SECONDARY = 'Engineering Scalable Backends.';

/* Word-cascade entrance: each word drifts up with its own delay, giving the
   headline a composed typographic reveal instead of one block fade */
const WordCascade = ({ text, baseDelay = 0, muted = false }) => (
  <span className={`inline-block font-display font-bold tracking-tighter leading-[0.98] text-5xl sm:text-7xl lg:text-8xl ${
    muted ? 'text-zinc-500 dark:text-zinc-400 font-normal' : 'text-zinc-950 dark:text-white'
  }`}>
    {text.split(' ').map((word, i) => (
      <React.Fragment key={i}>
        <span
          className="inline-block animate-fade-up"
          style={{ animationDelay: `${baseDelay + i * 50}ms` }}
        >
          {word}
        </span>{' '}
      </React.Fragment>
    ))}
  </span>
);

export const Hero = ({ onOpenResume }) => {
  const bgRef = React.useRef(null);
  const ctaRef = useMagnetic(0.3);
  const cardRef = useTilt(5);

  // Subtle scroll-linked parallax on the topology background (transform-only, GPU-composited,
  // requestAnimationFrame-throttled, and disabled for reduced-motion users)
  React.useEffect(() => {
    const el = bgRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId = null;
    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        el.style.transform = `translate3d(0, ${window.scrollY * 0.18}px, 0)`;
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-24 border-b border-zinc-200 dark:border-white/[0.08] transition-colors duration-200 overflow-hidden"
    >
      {/* Restrained Technical Architecture & Data Flow Background */}
      <div 
        ref={bgRef}
        className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-[0.2] dark:opacity-[0.25] will-change-transform"
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

            {/* Expressive Oversized Headline — cascading word reveal */}
            <h1 className="animate-fade-up text-5xl sm:text-7xl lg:text-8xl tracking-tighter">
              <WordCascade text={HEADLINE_PRIMARY} baseDelay={60} />
              <br />
              <WordCascade text={HEADLINE_SECONDARY} baseDelay={420} muted />
            </h1>

            {/* Concise Editorial Introduction - Staggered 160ms */}
            <p className="animate-fade-up delay-200 text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 font-sans max-w-3xl leading-relaxed">
              I am a software developer with a backend focus, currently pursuing Computer Science & Engineering at Quantum University. I design predictable RESTful APIs, enforce ACID transaction integrity in databases, and build real-time collaborative systems with Node.js, Express, and MongoDB.
            </p>

            {/* Dual Action CTAs - Responsive and Tactile - Staggered 240ms */}
            <div className="animate-fade-up delay-300 flex flex-wrap items-center gap-4 pt-2">
              <a
                ref={ctaRef}
                href="#projects"
                className="btn-sheen group px-6 py-3.5 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:bg-indigo-600 dark:hover:bg-indigo-500 font-mono text-xs font-bold tracking-wide transition-all duration-200 ease-out flex items-center gap-2 shadow-sm hover:shadow-md hover:shadow-indigo-500/20 active:scale-[0.98]"
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

          {/* Right Column: Minimal Editorial Identity Card (5 cols on lg, 4 on xl) */}
          <div ref={cardRef} className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
            <aside 
              aria-label="Engineer Identity Profile"
              className="w-full max-w-[360px] sm:max-w-[380px] rounded-2xl border border-zinc-200/90 dark:border-white/[0.08] bg-white dark:bg-[#111114] p-5 sm:p-6 shadow-lg shadow-zinc-200/40 dark:shadow-black/40 transition-colors duration-200 space-y-4 will-change-transform"
            >
              {/* Header: Eyebrow & Status Row */}
              <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-zinc-100 dark:border-white/[0.06]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold">
                  IDENTITY / VERIFIED
                </span>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
                  <span>Open to Opportunities</span>
                </div>
              </div>

              {/* Profile Image Area */}
              <div className="relative group/tile overflow-hidden rounded-xl aspect-[3/4] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-white/[0.06]">
                <img 
                  src={profileDark}
                  alt="Ujjwal Tyagi — Software Developer"
                  className="w-full h-full object-cover object-center filter contrast-[1.02] transition-transform duration-500 ease-out group-hover/tile:scale-[1.04] hidden dark:block"
                  loading="eager"
                />
                
                {/* Light Theme Portrait */}
                <img 
                  src={profileLight}
                  alt="Ujjwal Tyagi — Software Developer"
                  className="w-full h-full object-cover object-center filter contrast-[1.01] transition-transform duration-500 ease-out group-hover/tile:scale-[1.04] block dark:hidden"
                  loading="eager"
                />
              </div>

              {/* Primary Focal Point: Name & Role */}
              <div className="space-y-1">
                <h2 className="font-display font-bold text-2xl tracking-tight text-zinc-950 dark:text-white uppercase">
                  UJJWAL TYAGI
                </h2>
                <p className="font-sans text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                  Software Developer
                  <span className="text-zinc-400 dark:text-zinc-600 mx-2">·</span>
                  <span className="text-zinc-500 dark:text-zinc-400">Backend & Systems</span>
                </p>
              </div>

              {/* Compact Secondary Metadata: Location & Education */}
              <div className="pt-3 border-t border-zinc-100 dark:border-white/[0.06] space-y-1.5 font-mono text-xs text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 shrink-0" aria-hidden="true" />
                  <span>Saharanpur, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 shrink-0" aria-hidden="true" />
                  <span>Quantum University · CSE ’27</span>
                </div>
              </div>

              {/* Refined Technical Focus Tags */}
              <div className="pt-3 border-t border-zinc-100 dark:border-white/[0.06] space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold block">
                  Technical Focus
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-100 dark:bg-white/[0.04] text-zinc-800 dark:text-zinc-200 border border-zinc-200/70 dark:border-white/[0.06]">
                    Node.js · Express.js
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-100 dark:bg-white/[0.04] text-zinc-800 dark:text-zinc-200 border border-zinc-200/70 dark:border-white/[0.06]">
                    MongoDB · ACID Transactions
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-100 dark:bg-white/[0.04] text-zinc-800 dark:text-zinc-200 border border-zinc-200/70 dark:border-white/[0.06]">
                    Java · Data Structures & Algorithms
                  </span>
                </div>
              </div>
            </aside>
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
