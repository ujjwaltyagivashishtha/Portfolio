import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import { CommandPalette } from './components/ui/CommandPalette';
import { Toast } from './components/ui/Toast';
import { siteConfig } from './config/site';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isCmdOpen, setIsCmdOpen] = useState(false);
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

  // Toast trigger helper
  const triggerToast = (msg) => {
    setToast({ message: msg, isVisible: true });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    triggerToast(`Email copied: ${siteConfig.email}`);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(siteConfig.phone);
    triggerToast(`Phone copied: ${siteConfig.phone}`);
  };

  // Scroll position & keyboard listeners for Cmd+K
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
    <div className="min-h-screen bg-[#080808] dark:bg-[#080808] text-zinc-100 selection:bg-[#F95C4B]/25 selection:text-[#F95C4B] relative font-sans transition-colors duration-300">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#F95C4B] text-black font-bold font-mono text-xs rounded-xl shadow-xl"
      >
        Skip to main content
      </a>

      <Navbar
        onOpenCommandPalette={() => setIsCmdOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
        onCopyEmail={copyEmail}
      />

      <main id="main-content">
        <Hero
          onOpenCommandPalette={() => setIsCmdOpen(true)}
          onCopyEmail={copyEmail}
        />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      {/* Interactive Command Palette Modal (Cmd+K) */}
      <CommandPalette
        isOpen={isCmdOpen}
        onClose={() => setIsCmdOpen(false)}
        onCopyEmail={copyEmail}
        onCopyPhone={copyPhone}
        theme={theme}
        toggleTheme={toggleTheme}
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
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-[#121214]/90 border border-white/10 text-zinc-300 hover:text-[#F95C4B] hover:border-[#F95C4B] shadow-2xl backdrop-blur-md transition-all duration-300 group"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
}

