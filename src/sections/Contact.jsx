import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { useScrollReveal } from '../lib/useScrollReveal';
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Send, 
  ArrowUpRight,
  Clock,
  Globe
} from 'lucide-react';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isClientLaunching, setIsClientLaunching] = useState(false);

  const [headerRef, isHeaderVisible] = useScrollReveal();
  const [leftRef, isLeftVisible] = useScrollReveal();
  const [rightRef, isRightVisible] = useScrollReveal();

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(siteConfig.email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = siteConfig.email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsClientLaunching(true);

    const mailtoSubject = encodeURIComponent(
      formData.subject.trim() || `Engineering Inquiry from ${formData.name.trim() || 'Recruiter/Collaborator'}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open user's default email client
    window.location.href = `mailto:${siteConfig.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsClientLaunching(false);
    }, 4000);
  };

  return (
    <section 
      id="contact" 
      className="py-20 sm:py-28 border-b border-zinc-200 dark:border-white/[0.08] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-16 pb-6 border-b border-zinc-200 dark:border-white/[0.08] reveal-init ${
            isHeaderVisible ? 'reveal-active' : ''
          }`}
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
              <span>06</span>
              <span>/</span>
              <span>DIRECT INQUIRIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-zinc-950 dark:text-white">
              Get in Touch
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-md text-left sm:text-right">
            Open for software developer, backend engineer, and full-stack positions.
          </p>
        </div>

        {/* Editorial Contact Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Email & Pre-formatted Draft Helper (7 cols) */}
          <div 
            ref={leftRef}
            className={`lg:col-span-7 space-y-8 reveal-init ${
              isLeftVisible ? 'reveal-active' : ''
            }`}
          >
            
            {/* Primary Direct Inbox Callout */}
            <div className="p-6 sm:p-8 rounded bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] space-y-4 transition-colors hover:border-emerald-500/30">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold block">
                Direct Email Inbox
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xl sm:text-2xl font-display font-bold text-zinc-950 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-mono truncate"
                >
                  {siteConfig.email}
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-4 py-2 rounded bg-zinc-900 dark:bg-white text-zinc-100 dark:text-zinc-950 font-mono text-xs font-medium flex items-center gap-1.5 shrink-0 transition-all duration-200 active:scale-95 shadow-sm hover:bg-emerald-600 dark:hover:bg-emerald-400"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-3 border-t border-zinc-200 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Direct Access</span>
                <span>Response turnaround &lt; 24h</span>
              </div>
            </div>

            {/* Email Draft Helper Form */}
            <div className="space-y-4 pt-2">
              <div className="border-b border-zinc-200 dark:border-white/[0.08] pb-3">
                <h3 className="text-lg font-display font-bold text-zinc-950 dark:text-white">
                  Draft an Email Inquiry
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans mt-0.5">
                  Prepare your message to launch your default mail client with pre-filled fields.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-zinc-700 dark:text-zinc-300 mb-1 font-medium">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-3.5 py-2.5 rounded bg-white dark:bg-[#121215] border border-zinc-200 dark:border-white/[0.08] text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:border-zinc-950 dark:focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-zinc-700 dark:text-zinc-300 mb-1 font-medium">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded bg-white dark:bg-[#121215] border border-zinc-200 dark:border-white/[0.08] text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:border-zinc-950 dark:focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-zinc-700 dark:text-zinc-300 mb-1 font-medium">
                    Subject Line
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineering Role / Project Discussion"
                    className="w-full px-3.5 py-2.5 rounded bg-white dark:bg-[#121215] border border-zinc-200 dark:border-white/[0.08] text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:border-zinc-950 dark:focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-zinc-700 dark:text-zinc-300 mb-1 font-medium">
                    Message Body *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Ujjwal, we reviewed your backend portfolio and would love to discuss..."
                    className="w-full px-3.5 py-2.5 rounded bg-white dark:bg-[#121215] border border-zinc-200 dark:border-white/[0.08] text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:border-zinc-950 dark:focus:border-white focus:outline-none transition-colors resize-none font-sans"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="group px-5 py-3 rounded bg-zinc-900 dark:bg-white text-zinc-100 dark:text-zinc-950 font-mono text-xs font-bold hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto active:scale-95 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  <span>Launch Email Client with Message</span>
                </button>

                {isClientLaunching && (
                  <p className="text-xs font-mono text-emerald-700 dark:text-emerald-400">
                    Opening your default mail client with pre-filled details...
                  </p>
                )}
              </form>
            </div>

          </div>

          {/* Right Column: Location, Timezone, and Professional Profiles (5 cols) */}
          <div 
            ref={rightRef}
            className={`lg:col-span-5 space-y-8 reveal-init ${
              isRightVisible ? 'reveal-active' : ''
            }`}
          >
            
            {/* Availability Details */}
            <div className="space-y-4 pb-8 border-b border-zinc-200 dark:border-white/[0.08]">
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold block">
                Work Availability
              </span>

              <h4 className="text-xl font-display font-bold text-zinc-950 dark:text-white">
                Available for Software Engineering Roles
              </h4>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
                Open to Software Developer, Backend Engineer, and Full-Stack positions starting immediately or for graduating cohorts. Ready to contribute to reliable production systems.
              </p>

              <div className="space-y-2 pt-2 font-mono text-xs text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                  <span>Location: Saharanpur, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                  <span>Timezone: Indian Standard Time (IST, UTC+5:30)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                  <span>Arrangement: On-site, Hybrid & Remote Roles</span>
                </div>
              </div>
            </div>

            {/* Verified Profile Links */}
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold block">
                Verified Developer Profiles
              </span>

              <div className="space-y-2 font-mono text-xs">
                <a
                  href={siteConfig.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-950 dark:hover:border-white flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                    <div>
                      <strong className="text-zinc-900 dark:text-white block font-medium">GitHub</strong>
                      <span className="text-[11px] text-zinc-500">github.com/ujjwaltyagivashishtha</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>

                <a
                  href={siteConfig.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-950 dark:hover:border-white flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                    <div>
                      <strong className="text-zinc-900 dark:text-white block font-medium">LinkedIn</strong>
                      <span className="text-[11px] text-zinc-500">linkedin.com/in/ujjwal-tyagi</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
