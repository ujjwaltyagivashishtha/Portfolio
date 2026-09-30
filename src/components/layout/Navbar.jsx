import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../config/site';
import { Menu, X, Terminal, ArrowUpRight, Sun, Moon, Github, Linkedin, Code } from 'lucide-react';

export const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Core navigation links for desktop navbar
  const coreNavLinks = siteConfig.navLinks.filter(link => 
    ['#about', '#experience', '#projects', '#skills', '#contact'].includes(link.href)
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
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
      {/* Top Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-white/95 dark:bg-[#080808]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 py-3 shadow-md'
            : 'bg-white/90 dark:bg-[#080808]/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-slate-200/80 dark:border-white/10 md:border-transparent py-3.5 sm:py-5 shadow-sm md:shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="Ujjwal Tyagi Home"
            >
              <div className="w-8 h-8 rounded-lg bg-[#F95C4B]/10 border border-[#F95C4B]/30 flex items-center justify-center group-hover:border-[#F95C4B] group-hover:bg-[#F95C4B]/20 transition-all shadow-sm shrink-0">
                <Terminal className="w-4 h-4 text-[#F95C4B] group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-zinc-100 tracking-tight group-hover:text-[#F95C4B] transition-colors font-display">
                Ujjwal Tyagi
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-[#121214]/90 p-1.5 rounded-full border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-inner">
              {coreNavLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                      isActive
                        ? 'bg-[#F95C4B]/15 text-[#F95C4B] border border-[#F95C4B]/40 font-semibold shadow-sm'
                        : 'text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right Controls */}
            <div className="hidden md:flex items-center gap-2.5">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 hover:border-[#F95C4B]/40 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
              </button>

              <a
                href="#contact"
                className="px-3.5 py-1.5 rounded-xl bg-[#F95C4B] hover:bg-[#FF6B5B] text-black font-mono font-bold text-xs transition-all shadow-md shadow-[#F95C4B]/20 flex items-center gap-1.5"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Right Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-zinc-200 shadow-sm transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-zinc-200 shadow-sm focus:outline-none transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#F95C4B]" /> : <Menu className="w-5 h-5 text-slate-900 dark:text-zinc-100" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-[#080808] text-slate-900 dark:text-zinc-100 pt-20 pb-8 px-6 flex flex-col justify-between md:hidden overflow-y-auto animate-in fade-in duration-200">
          
          <div className="space-y-6">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-widest font-semibold pb-3 border-b border-slate-200 dark:border-white/10">
              <span>NAVIGATION MENU</span>
              <span className="text-[#F95C4B]">UJJWAL TYAGI</span>
            </div>

            <div className="flex flex-col space-y-2">
              {siteConfig.navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3.5 rounded-xl text-base font-mono transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-[#F95C4B]/15 text-[#F95C4B] border border-[#F95C4B]/30 font-bold'
                        : 'text-slate-800 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200/50 dark:border-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F95C4B]"></span>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-zinc-500" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-white/10 space-y-4">
            <div className="flex items-center justify-around gap-2 text-xs font-mono">
              <a
                href={siteConfig.socials.github.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-zinc-200 font-semibold"
              >
                <Github className="w-4 h-4 text-[#F95C4B]" />
                <span>GitHub</span>
              </a>
              <a
                href={siteConfig.socials.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-zinc-200 font-semibold"
              >
                <Linkedin className="w-4 h-4 text-[#F95C4B]" />
                <span>LinkedIn</span>
              </a>
              <a
                href={siteConfig.socials.leetcode.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-zinc-200 font-semibold"
              >
                <Code className="w-4 h-4 text-[#F95C4B]" />
                <span>LeetCode</span>
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#F95C4B] text-black font-bold text-sm font-mono shadow-lg hover:bg-[#FF6B5B] transition-colors"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      )}
    </>
  );
};
