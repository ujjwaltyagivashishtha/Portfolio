import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-5">
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-[#121214] border border-[#F95C4B]/50 text-slate-900 dark:text-zinc-100 shadow-2xl backdrop-blur-md text-xs font-mono">
        <CheckCircle2 className="w-4 h-4 text-[#F95C4B] shrink-0" />
        <span className="font-semibold">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-slate-400 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
