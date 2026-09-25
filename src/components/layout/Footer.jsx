import React from 'react';
import { siteConfig } from '../../config/site';
import { MapPin, Mail, Phone, Code2 } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-900 pt-14 pb-10 text-stone-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-stone-900">
          {/* Identity */}
          <div className="space-y-3">
            <h3 className="text-paper-100 font-bold text-lg tracking-tight">Ujjwal</h3>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Computer Science & Engineering Student | Full-Stack Developer specializing in React.js, Node.js, Express, MongoDB, REST APIs, and AI platform engineering.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-coral-400 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-coral-400" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-300 font-semibold mb-3">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-coral-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-300 font-semibold mb-3">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-stone-300 hover:text-coral-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-coral-400" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-stone-300 hover:text-coral-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-coral-400" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Ujjwal. Engineered with React & Tailwind CSS.</p>
          <div className="flex items-center gap-2 font-mono text-[11px] text-stone-400">
            <Code2 className="w-3.5 h-3.5 text-coral-400" />
            <span>Strictly resume-verified technical portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
