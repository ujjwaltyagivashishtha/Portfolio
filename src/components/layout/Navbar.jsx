import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../config/site';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  FileText,
  ArrowUpRight 
} from 'lucide-react';

export const Navbar = ({ theme, toggleTheme, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const coreNavLinks = siteConfig.navLinks;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate Reading Progress Indicator
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }

      const sections = ['hero', ...siteConfig.navLinks.map((link) => link.href.substring(1))];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll lock & Escape key closing for mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Unobtrusive Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent pointer-events-none"
        aria-hidden="true"
      >
        <div 
          className="h-full bg-emerald-500 transition-all duration-100 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      {/* Editorial Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-[#fafaf9]/90 dark:bg-[#09090b]/90 backdrop-blur-md border-zinc-200 dark:border-white/[0.08] py-3.5'
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Wordmark */}
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-baseline gap-2.5 group focus:outline-none"
              aria-label="Ujjwal Tyagi - Home"
            >
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                UJJWAL TYAGI
              </span>
              <span className="hidden sm:inline font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                / Backend & Systems
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav 
              className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wide"
              aria-label="Main Navigation"
            >
              {coreNavLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative py-1 transition-colors duration-200 ${
                      isActive
                        ? 'text-zinc-900 dark:text-white font-semibold'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-emerald-600 dark:bg-emerald-400 transition-all duration-200" />
                    ) : (
                      <span className="absolute bottom-0 left-1/2 right-1/2 h-[1.5px] bg-zinc-300 dark:bg-zinc-700 opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:right-0 transition-all duration-200" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Action Controls */}
            <div className="hidden md:flex items-center gap-3">

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-1.5 rounded hover:bg-zinc-100 dark:hover:bg-white/[0.05] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all duration-200 hover:rotate-12 active:scale-90"
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                aria-label="Toggle color theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-zinc-700" />
                )}
              </button>

              {/* Resume CTA */}
              <button
                type="button"
                onClick={onOpenResume}
                className="px-3.5 py-1.5 rounded bg-zinc-900 dark:bg-white text-zinc-100 dark:text-zinc-950 hover:bg-emerald-700 dark:hover:bg-emerald-400 font-mono text-xs font-medium transition-all duration-200 flex items-center gap-1.5 active:scale-95 shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 text-zinc-700 dark:text-zinc-300 transition-transform duration-200 hover:rotate-12 active:scale-90"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-900 dark:text-white focus:outline-none transition-transform duration-150 active:scale-90"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Editorial Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-[#fafaf9] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 pt-24 pb-8 px-6 flex flex-col justify-between md:hidden overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pb-3 border-b border-zinc-200 dark:border-white/[0.08]">
              <span>INDEX</span>
              <span className="font-semibold text-zinc-900 dark:text-white">UJJWAL TYAGI</span>
            </div>

            <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
              {coreNavLinks.map((link, idx) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-baseline justify-between py-2 border-b border-zinc-200/60 dark:border-white/[0.05]"
                  >
                    <span className="font-mono text-xs text-zinc-400">0{idx + 1}</span>
                    <span className={`text-xl font-display font-bold ${
                      isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-900 dark:text-white'
                    }`}>
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-zinc-200 dark:border-white/[0.08] space-y-3">
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 text-center rounded border border-zinc-200 dark:border-white/[0.08] text-xs font-mono text-zinc-800 dark:text-zinc-200"
              >
                GitHub
              </a>
              <a
                href={siteConfig.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 text-center rounded border border-zinc-200 dark:border-white/[0.08] text-xs font-mono text-zinc-800 dark:text-zinc-200"
              >
                LinkedIn
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 rounded bg-zinc-900 dark:bg-white text-zinc-100 dark:text-zinc-950 font-mono text-xs font-medium text-center"
            >
              View Resume
            </button>
          </div>
        </div>
      )}
    </>
  );
};
