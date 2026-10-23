import React, { useState, useEffect, useRef } from 'react';
import profileDark from '../../assets/ujjwal-profile-dark.jpg';
import profileLight from '../../assets/ujjwal-profile-light.jpg';
import { siteConfig } from '../../config/site';
import { ThemeToggle } from '../ui/ThemeToggle';
import { 
  Menu, 
  X, 
  ArrowUpRight 
} from 'lucide-react';

export const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const progressBarRef = useRef(null);

  const coreNavLinks = siteConfig.navLinks;

  useEffect(() => {
    let rafId = null;

    const updateScrollMetrics = () => {
      const scrollY = window.scrollY;

      // Butter-smooth GPU-accelerated Reading Progress Bar (no reflows or transition latency)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? Math.min(1, Math.max(0, scrollY / totalHeight)) : 0;
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }

      // Only update Navbar state when the scroll threshold flips
      const nextScrolled = scrollY > 20;
      setIsScrolled((prev) => (prev !== nextScrolled ? nextScrolled : prev));

      // Active Section detection
      const sections = ['hero', ...siteConfig.navLinks.map((link) => link.href.substring(1))];
      const scrollPosition = scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && scrollPosition >= sectionEl.offsetTop) {
          setActiveSection((prev) => (prev !== sections[i] ? sections[i] : prev));
          break;
        }
      }
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(() => {
          updateScrollMetrics();
          rafId = null;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollMetrics();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
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
      {/* Butter-Smooth GPU-Accelerated Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-black/10 dark:bg-white/[0.04] backdrop-blur-[1px] pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div 
          ref={progressBarRef}
          className="h-full w-full origin-left bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-400 shadow-[0_0_10px_rgba(99,102,241,0.7),0_0_3px_rgba(129,140,248,0.9)] will-change-transform"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>
      {/* Editorial Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-[#fafaf9]/90 dark:bg-[#09090b]/90 backdrop-blur-md border-zinc-200 dark:border-white/[0.08] py-3 shadow-xs'
            : 'bg-[#fafaf9]/75 dark:bg-[#09090b]/75 backdrop-blur-md border-zinc-200/50 dark:border-white/[0.05] py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Wordmark & Avatar */}
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="Ujjwal Tyagi - Home"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-zinc-200 dark:border-white/10 shrink-0 ring-2 ring-indigo-500/20 group-hover:ring-indigo-500/50 transition-all duration-200 bg-zinc-100 dark:bg-zinc-900">
                <img 
                  src={profileDark} 
                  alt="Ujjwal Tyagi" 
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300 hidden dark:block"
                />
                <img 
                  src={profileLight} 
                  alt="Ujjwal Tyagi" 
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300 block dark:hidden"
                />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold text-base sm:text-lg tracking-tight text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  UJJWAL TYAGI
                </span>
                <span className="hidden sm:inline font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                  / Backend & Systems
                </span>
              </div>
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
                    className={`group relative py-1 transition-colors duration-200 ${
                      isActive
                        ? 'text-zinc-900 dark:text-white font-semibold'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-indigo-600 dark:bg-indigo-400 transition-all duration-200" />
                    ) : (
                      <span className="absolute bottom-0 left-1/2 right-1/2 h-[1.5px] bg-zinc-300 dark:bg-zinc-700 opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:right-0 transition-all duration-200" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Action Controls */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

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
          className="fixed inset-0 z-30 bg-[#fafaf9] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 pt-24 pb-8 px-6 flex flex-col justify-between md:hidden overflow-y-auto animate-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pb-3 border-b border-zinc-200 dark:border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full overflow-hidden border border-zinc-200 dark:border-white/10 shrink-0 bg-zinc-100 dark:bg-zinc-900">
                  <img src={profileDark} alt="Ujjwal Tyagi" className="w-full h-full object-cover object-top hidden dark:block" />
                  <img src={profileLight} alt="Ujjwal Tyagi" className="w-full h-full object-cover object-top block dark:hidden" />
                </div>
                <span className="font-semibold text-zinc-900 dark:text-white">UJJWAL TYAGI</span>
              </div>
              <span>INDEX</span>
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
                    style={{ animationDelay: `${120 + idx * 60}ms` }}
                    className="flex items-baseline justify-between py-2 border-b border-zinc-200/60 dark:border-white/[0.05] animate-modal-enter"
                  >
                    <span className="font-mono text-xs text-zinc-400">0{idx + 1}</span>
                    <span className={`text-xl font-display font-bold ${
                      isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-zinc-900 dark:text-white'
                    }`}>
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-zinc-200 dark:border-white/[0.08]">
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
          </div>
        </div>
      )}
    </>
  );
};
