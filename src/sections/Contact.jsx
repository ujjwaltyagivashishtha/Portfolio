import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { siteConfig } from '../config/site';
import { Mail, Phone, MapPin, Copy, Check, Github, Linkedin, Code, ExternalLink, Send } from 'lucide-react';

export const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-100/60 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Get In Touch"
          title="Contact & Social Profiles"
          subtitle="Direct contact details and verified developer profile links."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Email Card */}
            <Card className="flex items-center justify-between gap-4 border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold block">Email Address</span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-mono"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(siteConfig.email, 'email')}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all text-xs font-mono font-medium flex items-center gap-1.5 shadow-sm"
                title="Copy email to clipboard"
              >
                {copiedField === 'email' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </Card>

            {/* Phone Card */}
            <Card className="flex items-center justify-between gap-4 border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold block">Phone Number</span>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-base font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-mono"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(siteConfig.phone, 'phone')}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all text-xs font-mono font-medium flex items-center gap-1.5 shadow-sm"
                title="Copy phone to clipboard"
              >
                {copiedField === 'phone' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </Card>

            {/* Location Card */}
            <Card className="flex items-center gap-3.5 border-slate-200 dark:border-slate-800">
              <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold block">Location</span>
                <span className="text-base font-bold text-slate-900 dark:text-white font-mono">
                  {siteConfig.location}
                </span>
              </div>
            </Card>

          </div>

          {/* Social Links Config Card */}
          <div className="lg:col-span-5">
            <Card className="border-slate-200 dark:border-slate-800 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Developer Profiles</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Connect with me across GitHub, LinkedIn, and LeetCode. Configured in <code className="text-indigo-600 dark:text-indigo-300 bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded font-mono">src/config/site.js</code>.
                </p>
              </div>

              <div className="space-y-3">
                {/* GitHub */}
                <a
                  href={siteConfig.socials.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors shadow-sm">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white">GitHub Profile</h4>
                      <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{siteConfig.socials.github.url}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={siteConfig.socials.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors shadow-sm">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white">LinkedIn Profile</h4>
                      <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{siteConfig.socials.linkedin.url}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                </a>

                {/* LeetCode */}
                <a
                  href={siteConfig.socials.leetcode.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors shadow-sm">
                      <Code className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white">LeetCode Profile</h4>
                      <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{siteConfig.socials.leetcode.url}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                </a>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-900 text-center">
                <Button href={`mailto:${siteConfig.email}`} variant="primary" className="w-full">
                  <Send className="w-4 h-4" />
                  Send Direct Email
                </Button>
              </div>

            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
