import React, { useState, useEffect } from 'react';
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
import { siteConfig } from './config/site';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toast, setToast] = useState({ message: '', isVisible: false });
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
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

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    triggerToast(`Switched to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`);
  };

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
    <div className="min-h-screen bg-[#fafaf9] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 selection:bg-emerald-500 selection:text-zinc-950 relative font-sans transition-colors duration-200">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-emerald-600 text-white font-mono text-xs rounded shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenCmd={() => setIsCmdOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
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
          className="fixed bottom-6 right-6 z-30 p-2.5 rounded-full bg-white dark:bg-[#121215] border border-zinc-200 dark:border-white/[0.1] text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 shadow-lg backdrop-blur-md transition-all duration-200 active:scale-90 animate-modal-enter group"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </button>
      )}
    </div>
  );
}
