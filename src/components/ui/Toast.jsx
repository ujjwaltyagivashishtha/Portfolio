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
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-modal-enter">
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-950 dark:bg-[#111115] border border-indigo-500/30 text-white shadow-2xl backdrop-blur-md text-xs font-mono">
        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
        <span className="font-semibold">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Dismiss notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
