import React, { useEffect } from 'react';
import { X, Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ProjectCaseStudyModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div 
        className="bg-white dark:bg-[#121215] border border-zinc-200 dark:border-white/[0.08] rounded-lg max-w-3xl w-full max-h-[88vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative text-left text-zinc-900 dark:text-zinc-100 transition-colors animate-modal-enter"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-white/[0.08]">
          <div className="space-y-1">
            <span className="text-indigo-700 dark:text-indigo-400 font-mono text-xs uppercase tracking-wider font-semibold block">
              {project.category}
            </span>
            <h3 id="case-study-title" className="text-2xl sm:text-3xl font-bold font-display text-zinc-950 dark:text-white">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              {project.subtitle}
            </p>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-zinc-100 dark:hover:bg-white/[0.05] text-zinc-500 dark:text-zinc-400 transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Problem vs Solution Analysis */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.06] space-y-2">
            <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">
              The Problem Solved
            </h4>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.06] space-y-2">
            <h4 className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
              Architectural Solution
            </h4>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Engineering Challenges */}
        {project.engineeringChallenges && project.engineeringChallenges.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              Key Engineering Decisions:
            </h4>
            <div className="space-y-2">
              {project.engineeringChallenges.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.06]">
                  <span className="font-semibold text-xs font-mono text-zinc-900 dark:text-white block">
                    {item.title}
                  </span>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 font-sans mt-1 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Core System Features */}
        {project.features && project.features.length > 0 && (
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              Verified Technical Capabilities:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-zinc-700 dark:text-zinc-300">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-700 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies Badge Matrix */}
        <div className="pt-2 border-t border-zinc-200 dark:border-white/[0.08] space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block font-medium">
            Verified Technology Stack:
          </span>
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            {project.techStack.map((tech, i) => (
              <span key={i} className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] text-zinc-800 dark:text-zinc-200 text-[11px]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-zinc-200 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-4 py-2 rounded bg-zinc-900 dark:bg-white text-zinc-100 dark:text-zinc-950 font-bold transition-all duration-200 flex items-center gap-2 hover:bg-indigo-600 dark:hover:bg-indigo-400 active:scale-95"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Source</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded border border-zinc-300 dark:border-white/[0.1] text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors duration-200 active:scale-95"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
