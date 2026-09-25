import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../config/site';
import { Menu, X, Terminal } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = siteConfig.navLinks.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060606]/90 backdrop-blur-md border-b border-stone-800/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral-500/20 to-stone-400/20 border border-coral-500/35 flex items-center justify-center group-hover:border-coral-400 transition-colors shadow-sm">
              <Terminal className="w-5 h-5 text-coral-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-paper-100 tracking-tight leading-tight group-hover:text-coral-400 transition-colors">
                Ujjwal
              </span>
              <span className="text-[10px] font-mono text-stone-400 tracking-wider">
                SOFTWARE ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-stone-950/80 p-1.5 rounded-full border border-stone-800/80 backdrop-blur-sm shadow-sm">
            {siteConfig.navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-coral-500/15 text-coral-400 border border-coral-500/30 font-semibold shadow-sm'
                      : 'text-stone-300 hover:text-paper-100 hover:bg-stone-900/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="px-4 py-2 rounded-xl bg-coral-500/15 hover:bg-coral-500/25 text-coral-400 border border-coral-500/35 text-xs font-mono font-semibold transition-all shadow-sm hover:shadow-coral-500/20"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-300 hover:text-paper-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-950/98 border-b border-stone-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-in slide-in-from-top-5 shadow-lg">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-medium text-stone-300 hover:bg-stone-900 hover:text-coral-400"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-stone-900">
            <a
              href={`mailto:${siteConfig.email}`}
              className="block w-full text-center py-2.5 rounded-xl bg-coral-500 text-white font-semibold text-xs font-mono shadow-md"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
