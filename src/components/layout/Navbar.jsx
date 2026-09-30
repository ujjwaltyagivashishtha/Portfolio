import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../config/site';
import { Menu, X, Terminal, ArrowUpRight, Search, Sun, Moon, Copy } from 'lucide-react';

export const Navbar = ({ onOpenCommandPalette, theme, toggleTheme, onCopyEmail }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

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
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#080808]/90 backdrop-blur-md border-b border-slate-200 dark:border-white/10 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Ujjwal Tyagi Home"
          >
            <div className="w-9 h-9 rounded-xl bg-[#F95C4B]/10 border border-[#F95C4B]/30 flex items-center justify-center group-hover:border-[#F95C4B] group-hover:bg-[#F95C4B]/20 transition-all shadow-sm">
              <Terminal className="w-4 h-4 text-[#F95C4B] group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base text-slate-900 dark:text-zinc-100 tracking-tight leading-tight group-hover:text-[#F95C4B] transition-colors font-display">
                Ujjwal Tyagi
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 tracking-wider uppercase">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-[#121214]/90 p-1.5 rounded-full border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-inner">
            {siteConfig.navLinks.map((link) => {
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

          {/* Right Action Bar */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 hover:border-[#F95C4B]/40 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white text-xs font-mono flex items-center gap-2 transition-all shadow-sm group"
              title="Open Command Palette (Cmd + K)"
            >
              <Search className="w-3.5 h-3.5 text-[#F95C4B] group-hover:scale-110 transition-transform" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 text-[10px] rounded bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-zinc-400 group-hover:text-slate-900 dark:group-hover:text-zinc-200">
                ⌘K
              </kbd>
            </button>

            {/* Quick Copy Email Button */}
            <button
              onClick={onCopyEmail}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 hover:border-[#F95C4B]/40 text-slate-700 dark:text-zinc-300 hover:text-[#F95C4B] text-xs font-mono flex items-center gap-1.5 transition-all shadow-sm"
              title="Copy Email Address"
            >
              <Copy className="w-3.5 h-3.5 text-[#F95C4B]" />
              <span>Copy Email</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 hover:border-[#F95C4B]/40 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Get in Touch CTA */}
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-xl bg-[#F95C4B]/15 hover:bg-[#F95C4B] hover:text-black text-[#F95C4B] border border-[#F95C4B]/40 text-xs font-mono font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu & Quick Triggers */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenCommandPalette}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white"
              title="Search"
            >
              <Search className="w-4 h-4 text-[#F95C4B]" />
            </button>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#F95C4B]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white/98 dark:bg-[#080808]/98 border-b border-slate-200 dark:border-white/10 px-4 pt-4 pb-8 space-y-3 backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-1">
            {siteConfig.navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-mono transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[#F95C4B]/15 text-[#F95C4B] border border-[#F95C4B]/30 font-bold'
                      : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#F95C4B]"></span>}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                onCopyEmail();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-zinc-200 font-mono text-xs font-semibold"
            >
              <Copy className="w-3.5 h-3.5 text-[#F95C4B]" />
              <span>Copy Email ({siteConfig.email})</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#F95C4B] text-black font-bold text-xs font-mono shadow-lg hover:bg-[#FF6B5B] transition-colors"
            >
              <span>Contact Ujjwal</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
