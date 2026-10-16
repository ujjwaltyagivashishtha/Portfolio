import React, { useState, useEffect } from 'react';
import { Terminal, Cpu } from 'lucide-react';

const BOOT_STEPS = [
  { threshold: 0, text: 'BOOTSTRAPPING DISTRIBUTED KERNEL...' },
  { threshold: 24, text: 'ESTABLISHING MONGO ACID SESSIONS...' },
  { threshold: 48, text: 'VALIDATING REST API SCHEMA CONTRACTS...' },
  { threshold: 72, text: 'SYNCHRONIZING REAL-TIME SOCKET ROOMS...' },
  { threshold: 92, text: 'SYSTEM VERIFIED // MOUNTING INTERFACE...' },
  { threshold: 100, text: 'SYSTEM ONLINE // WELCOME' },
];

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    // Check if user has already seen preloader in this session for snappy return navigation
    const hasSeenLoader = sessionStorage.getItem('hasSeenPreloader');
    const targetDuration = hasSeenLoader ? 900 : 1600; // Snappier if returning
    const intervalTime = 25;
    const totalSteps = targetDuration / intervalTime;
    const stepIncrement = 100 / totalSteps;

    let currentProgress = 0;

    const timer = setInterval(() => {
      // Non-linear realistic progress feel (rapid start, brief verification cadence, snappy finish)
      const factor = currentProgress < 30 ? 1.4 : currentProgress < 75 ? 0.9 : 1.5;
      currentProgress = Math.min(100, currentProgress + stepIncrement * factor);
      
      const rounded = Math.floor(currentProgress);
      setProgress(rounded);

      // Update telemetry step based on progress
      const stepIdx = BOOT_STEPS.slice().reverse().findIndex(s => rounded >= s.threshold);
      if (stepIdx !== -1) {
        setCurrentStepIndex(BOOT_STEPS.length - 1 - stepIdx);
      }

      if (currentProgress >= 100) {
        clearInterval(timer);
        sessionStorage.setItem('hasSeenPreloader', 'true');
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 650);
        }, 150);
      }
    }, intervalTime);

    // Keyboard shortcut (ESC) to skip loader
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        clearInterval(timer);
        setIsExiting(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 300);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 300);
  };

  const currentStep = BOOT_STEPS[currentStepIndex] || BOOT_STEPS[0];
  const strokeDashoffset = 283 - (283 * progress) / 100;

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between p-6 sm:p-10 bg-[#fafaf9] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 select-none overflow-hidden transition-all duration-700 ease-out ${
        isExiting ? 'opacity-0 scale-105 blur-sm pointer-events-none' : 'opacity-100 scale-100'
      }`}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Loading portfolio"
      onClick={handleSkip}
    >
      {/* Ambient Radial Backlight Glow */}
      <div 
        className="pointer-events-none absolute -inset-20 opacity-40 dark:opacity-50 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-indigo-500/20 via-violet-500/10 to-indigo-500/0 blur-3xl" />
      </div>

      {/* Top Telemetry Header */}
      <div className="w-full max-w-5xl flex items-center justify-between font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
          </span>
          <span className="tracking-wider uppercase font-semibold text-zinc-800 dark:text-zinc-200">
            SYSTEM // BOOT_SEQ
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-zinc-400 dark:text-zinc-500">
            LOC: 29.96° N, 77.55° E
          </span>
          <span className="px-2 py-0.5 rounded bg-zinc-200/60 dark:bg-white/[0.06] text-zinc-700 dark:text-zinc-300 border border-zinc-300/60 dark:border-white/[0.08]">
            v2.4.0
          </span>
        </div>
      </div>

      {/* Centerpiece: Holographic Tech Crest & Progress */}
      <div className="flex flex-col items-center justify-center space-y-8 my-auto w-full max-w-md text-center">
        
        {/* Animated Concentric Orbital Glyph */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
          
          {/* Subtle Outer Pulsing Ring */}
          <div className="absolute inset-0 rounded-full border border-indigo-500/20 dark:border-indigo-400/20 animate-ping opacity-25" />
          
          {/* Outer Dashed Rotating Track */}
          <svg 
            className="absolute inset-0 w-full h-full animate-spin-slow" 
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 6"
              className="text-zinc-300 dark:text-zinc-700/60"
            />
          </svg>

          {/* Calibrated SVG Circular Progress Meter */}
          <svg 
            className="w-full h-full -rotate-90 origin-center" 
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            {/* Background Track */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-zinc-200/80 dark:text-zinc-800/80"
            />
            {/* Glowing Active Progress Stroke */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#preloader-gradient)"
              strokeWidth="2.5"
              strokeDasharray="283"
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-75 ease-out"
            />
            <defs>
              <linearGradient id="preloader-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central Monogram Crest */}
          <div className="absolute inset-3 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/80 dark:border-white/10 flex flex-col items-center justify-center shadow-inner group">
            <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-tighter bg-gradient-to-br from-zinc-950 via-zinc-800 to-indigo-600 dark:from-white dark:via-zinc-200 dark:to-indigo-400 bg-clip-text text-transparent">
              UT
            </span>
            <span className="font-mono text-[9px] tracking-widest text-indigo-600 dark:text-indigo-400 uppercase -mt-1 font-semibold">
              DEV
            </span>
          </div>
        </div>

        {/* Brand Wordmark & Percentage Readout */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-lg sm:text-xl tracking-tight text-zinc-900 dark:text-white">
            UJJWAL TYAGI
          </h1>
          <div className="flex items-center justify-center gap-1.5 font-mono text-2xl sm:text-3xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
            <span>{String(progress).padStart(3, '0')}</span>
            <span className="text-base sm:text-lg text-zinc-400">%</span>
          </div>
        </div>

        {/* Progress Bar & Telemetry Line */}
        <div className="w-64 sm:w-80 space-y-3">
          {/* Dual Layer Glowing Progress Bar */}
          <div className="h-1.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-800/80 p-0.5 overflow-hidden backdrop-blur-sm border border-zinc-300/40 dark:border-white/[0.08]">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-400 shadow-[0_0_12px_rgba(99,102,241,0.8)] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Live Step Status Log */}
          <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 truncate">
            <Terminal className="w-3.5 h-3.5 text-indigo-500 shrink-0 animate-pulse" />
            <span className="truncate">{currentStep.text}</span>
          </div>
        </div>

      </div>

      {/* Bottom Telemetry Footer & Skip Indicator */}
      <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] text-zinc-500 dark:text-zinc-400 pt-4 border-t border-zinc-200 dark:border-white/[0.06]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-indigo-500" />
            <span>NODE_ENV: PRODUCTION</span>
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">STACK: MERN + JAVA DSA</span>
        </div>

        <button
          type="button"
          onClick={handleSkip}
          className="text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors uppercase tracking-wider hover:underline focus:outline-none"
        >
          [ Click anywhere or press ESC to skip ]
        </button>
      </div>

    </div>
  );
};
