import React from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = ({ theme, toggleTheme, className = '' }) => {
  const isDark = theme === 'dark';

  const handleClick = (e) => {
    // Subtle, high-tech synthesized tactile pop using Web Audio API
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        // Upward pitch sweep when entering light mode, downward when entering dark mode
        const startFreq = isDark ? 680 : 880;
        const endFreq = isDark ? 920 : 540;
        osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + 0.035);
        gain.gain.setValueAtTime(0.035, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.035);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.04);
      }
    } catch {
      // AudioContext unavailable or restricted - fails silently
    }

    if (toggleTheme) {
      toggleTheme(e);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group relative inline-flex items-center justify-center w-8 h-8 rounded-xl border border-zinc-200/90 dark:border-white/[0.08] bg-zinc-100/70 dark:bg-white/[0.04] hover:bg-zinc-200/70 dark:hover:bg-white/[0.08] text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-all duration-300 ease-out active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 shadow-sm ${
        isDark 
          ? 'hover:border-amber-400/40 hover:shadow-[0_0_14px_rgba(251,191,36,0.22)]' 
          : 'hover:border-indigo-500/40 hover:shadow-[0_0_14px_rgba(99,102,241,0.2)]'
      } ${className}`}
      title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode (Press T)`}
      aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
    >
      {/* Icon Stage with Synchronized Rotation and Scaling */}
      <span className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
        {/* Sun Icon (Visible in Dark Mode) */}
        <Sun 
          className={`w-4 h-4 text-amber-400 absolute transition-all duration-300 ease-out transform ${
            isDark 
              ? 'scale-100 rotate-0 opacity-100' 
              : 'scale-0 -rotate-90 opacity-0 pointer-events-none'
          }`}
          aria-hidden="true"
        />

        {/* Moon Icon (Visible in Light Mode) */}
        <Moon 
          className={`w-4 h-4 text-zinc-700 dark:text-zinc-300 absolute transition-all duration-300 ease-out transform ${
            !isDark 
              ? 'scale-100 rotate-0 opacity-100' 
              : 'scale-0 rotate-90 opacity-0 pointer-events-none'
          }`}
          aria-hidden="true"
        />
      </span>
    </button>
  );
};
