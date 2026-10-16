import React, { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { CommandPalette } from './components/ui/CommandPalette';
import { ResumeModal } from './components/ui/ResumeModal';
import { Toast } from './components/ui/Toast';
import { Preloader } from './components/ui/Preloader';
import { siteConfig } from './config/site';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toast, setToast] = useState({ message: '', isVisible: false });
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlParam = new URLSearchParams(window.location.search).get('theme');
      if (urlParam === 'light' || urlParam === 'dark') {
        return urlParam;
      }
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  // Handle Theme switching & root element class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (e) => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    // If browser doesn't support View Transitions or prefers reduced motion, fallback immediately
    const isReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || isReducedMotion) {
      setTheme(nextTheme);
      return;
    }

    // Determine circular ripple origin coordinate (from click or fallback to top-right)
    let x = window.innerWidth - 70;
    let y = 32;

    if (e && typeof e.clientX === 'number' && typeof e.clientY === 'number') {
      x = e.clientX;
      y = e.clientY;
    } else if (e?.currentTarget && typeof e.currentTarget.getBoundingClientRect === 'function') {
      const rect = e.currentTarget.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    }

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    document.documentElement.classList.add('theme-transitioning');

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
        const root = document.documentElement;
        if (nextTheme === 'dark') {
          root.classList.add('dark');
          root.classList.remove('light');
        } else {
          root.classList.add('light');
          root.classList.remove('dark');
        }
      });
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];

      const anim = document.documentElement.animate(
        {
          clipPath: clipPath
        },
        {
          duration: 450,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
          pseudoElement: '::view-transition-new(root)'
        }
      );

      anim.finished.finally(() => {
        document.documentElement.classList.remove('theme-transitioning');
      });
    }).catch(() => {
      document.documentElement.classList.remove('theme-transitioning');
    });
  };

  // Global Keyboard Shortcut: 'T' toggles color theme
  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeEl = document.activeElement;
      const isInput = 
        activeEl && 
        (activeEl.tagName === 'INPUT' || 
         activeEl.tagName === 'TEXTAREA' || 
         activeEl.isContentEditable);

      if (isInput || isCmdOpen || isResumeOpen) return;

      if ((e.key === 't' || e.key === 'T') && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        toggleTheme();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [theme, isCmdOpen, isResumeOpen]);

  const triggerToast = (msg) => {
    setToast({ message: msg, isVisible: true });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    triggerToast(`Email copied: ${siteConfig.email}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCmdOpen((prev) => !prev);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-[#fafaf9] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500 selection:text-white relative font-sans transition-colors duration-200 ${
      isLoading ? 'overflow-hidden max-h-screen' : ''
    }`}>
      {/* High-Tech System Boot Preloader */}
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-indigo-600 text-white font-mono text-xs rounded shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main id="main-content">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />

      {/* Interactive Command Palette Modal (Cmd+K) */}
      <CommandPalette
        isOpen={isCmdOpen}
        onClose={() => setIsCmdOpen(false)}
        onCopyEmail={copyEmail}
        onOpenResume={() => setIsResumeOpen(true)}
        onReplayPreloader={() => setIsLoading(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Verified Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating Toast Notification */}
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={() => setToast({ message: '', isVisible: false })}
      />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-white dark:bg-[#121215] border border-zinc-200 dark:border-white/[0.1] text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-lg hover:shadow-xl backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-1 active:translate-y-0 active:scale-90 animate-modal-enter group"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </button>
      )}
    </div>
  );
}
