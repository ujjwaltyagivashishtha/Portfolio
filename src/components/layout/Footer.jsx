import React from 'react';
import { siteConfig } from '../../config/site';
import { MapPin, Mail, Phone, Code2, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#080808] border-t border-slate-200 dark:border-white/10 pt-14 pb-10 text-slate-600 dark:text-zinc-400 text-sm relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-200 dark:border-white/10">
          
          {/* Identity */}
          <div className="space-y-3">
            <h3 className="text-slate-900 dark:text-zinc-100 font-bold text-lg tracking-tight font-display">Ujjwal Tyagi</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed max-w-sm font-sans">
              Computer Science & Engineering Student | Full-Stack Developer specializing in React.js, Node.js, Express, MongoDB, REST APIs, and AI platform engineering.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#F95C4B] font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#F95C4B]" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-800 dark:text-zinc-300 font-semibold mb-3">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-mono">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#F95C4B] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-800 dark:text-zinc-300 font-semibold mb-3">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-slate-700 dark:text-zinc-300 hover:text-[#F95C4B] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#F95C4B]" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-slate-700 dark:text-zinc-300 hover:text-[#F95C4B] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F95C4B]" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-zinc-400 gap-4">
          <p>© {new Date().getFullYear()} Ujjwal Tyagi. Engineered with React & Tailwind CSS.</p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500 dark:text-zinc-400">
              <Code2 className="w-3.5 h-3.5 text-[#F95C4B]" />
              <span>Verified Technical Portfolio</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white dark:bg-[#121214] border border-slate-200 dark:border-white/10 hover:border-[#F95C4B] text-slate-700 dark:text-zinc-300 hover:text-[#F95C4B] transition-all flex items-center gap-1.5 font-mono text-xs shadow-sm"
              title="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
