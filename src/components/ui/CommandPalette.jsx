import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  User, 
  Briefcase, 
  FolderGit2, 
  Cpu, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Code, 
  Sun, 
  Moon, 
  X,
  Copy,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '../../config/site';

export const CommandPalette = ({ isOpen, onClose, onCopyEmail, onCopyPhone, theme, toggleTheme }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = [
    {
      id: 'about',
      title: 'Go to About Section',
      category: 'Navigation',
      icon: User,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'experience',
      title: 'Go to Experience & Internships',
      category: 'Navigation',
      icon: Briefcase,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'projects',
      title: 'Go to Software Projects',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'skills',
      title: 'Go to Technical Skills',
      category: 'Navigation',
      icon: Cpu,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'education',
      title: 'Go to Education',
      category: 'Navigation',
      icon: GraduationCap,
      action: () => {
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'certifications',
      title: 'Go to Certifications',
      category: 'Navigation',
      icon: Award,
      action: () => {
        document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'contact',
      title: 'Go to Contact Section',
      category: 'Navigation',
      icon: Mail,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'copy-email',
      title: `Copy Email (${siteConfig.email})`,
      category: 'Actions',
      icon: Copy,
      action: () => {
        onCopyEmail();
        onClose();
      }
    },
    {
      id: 'copy-phone',
      title: `Copy Phone (${siteConfig.phone})`,
      category: 'Actions',
      icon: Phone,
      action: () => {
        onCopyPhone();
        onClose();
      }
    },
    {
      id: 'toggle-theme',
      title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      category: 'Actions',
      icon: theme === 'dark' ? Sun : Moon,
      action: () => {
        toggleTheme();
        onClose();
      }
    },
    {
      id: 'github',
      title: 'Open GitHub Profile',
      category: 'Socials',
      icon: Github,
      action: () => {
        window.open(siteConfig.socials.github.url, '_blank');
        onClose();
      }
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Socials',
      icon: Linkedin,
      action: () => {
        window.open(siteConfig.socials.linkedin.url, '_blank');
        onClose();
      }
    },
    {
      id: 'leetcode',
      title: 'Open LeetCode Profile',
      category: 'Socials',
      icon: Code,
      action: () => {
        window.open(siteConfig.socials.leetcode.url, '_blank');
        onClose();
      }
    }
  ];

  const filteredActions = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredActions.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % (filteredActions.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white dark:bg-[#121214] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden text-slate-900 dark:text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#080808]/50">
          <Terminal className="w-5 h-5 text-[#F95C4B] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search (e.g. projects, github, email)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm font-mono text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1 font-mono text-xs">
          {filteredActions.length > 0 ? (
            filteredActions.map((item, idx) => {
              const IconComp = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#F95C4B]/15 text-[#F95C4B] border border-[#F95C4B]/30 font-semibold'
                      : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComp className={`w-4 h-4 ${isSelected ? 'text-[#F95C4B]' : 'text-slate-400 dark:text-zinc-400'}`} />
                    <span>{item.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase text-slate-500 dark:text-zinc-500 px-2 py-0.5 rounded bg-slate-100 dark:bg-[#080808] border border-slate-200 dark:border-white/10">
                      {item.category}
                    </span>
                    {isSelected && <ArrowRight className="w-3.5 h-3.5 text-[#F95C4B]" />}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center text-slate-500 dark:text-zinc-500 font-mono text-xs">
              No matching commands found.
            </div>
          )}
        </div>

        {/* Keyboard Shortcuts Hints Footer */}
        <div className="px-4 py-2.5 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#080808]/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-500">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-zinc-300">↑↓</kbd> navigate</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-zinc-300">↵</kbd> select</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-zinc-300">esc</kbd> close</span>
          </div>
          <span className="text-[#F95C4B]">Ujjwal Tyagi Portfolio</span>
        </div>

      </div>
    </div>
  );
};
