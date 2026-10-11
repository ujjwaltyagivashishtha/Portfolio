import React from 'react';
import { siteConfig } from '../../config/site';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#fafaf9] dark:bg-[#09090b] text-zinc-500 font-mono text-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Wordmark & Navigation Links */}
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-white/[0.08]">
          <div className="space-y-1 text-left">
            <span className="font-display font-bold text-sm text-zinc-950 dark:text-white tracking-tight block">
              UJJWAL TYAGI
            </span>
            <span className="text-[11px] text-zinc-500 block">
              Software Developer — Backend & Systems Focus
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Row: Colophon, Socials & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p className="text-zinc-500">
            © {currentYear} Ujjwal Tyagi. Built with React & Tailwind CSS.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={siteConfig.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={siteConfig.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Email
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="group hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1 font-medium ml-2 active:scale-95"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
