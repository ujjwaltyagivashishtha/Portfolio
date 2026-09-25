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
    <section id="contact" className="py-24 relative bg-stone-950/60">
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
            <Card className="flex items-center justify-between gap-4 border-stone-800">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-coral-500/10 text-coral-400 border border-coral-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-stone-400 uppercase tracking-wider font-semibold block">Email Address</span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base font-bold text-paper-100 hover:text-coral-400 transition-colors font-mono"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(siteConfig.email, 'email')}
                className="p-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-300 hover:text-coral-400 transition-all text-xs font-mono font-medium flex items-center gap-1.5 shadow-sm"
                title="Copy email to clipboard"
              >
                {copiedField === 'email' ? (
                  <>
                    <Check className="w-4 h-4 text-coral-400" />
                    <span className="text-coral-400 font-bold">Copied!</span>
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
            <Card className="flex items-center justify-between gap-4 border-stone-800">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-coral-500/10 text-coral-400 border border-coral-500/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-stone-400 uppercase tracking-wider font-semibold block">Phone Number</span>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-base font-bold text-paper-100 hover:text-coral-400 transition-colors font-mono"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(siteConfig.phone, 'phone')}
                className="p-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-300 hover:text-coral-400 transition-all text-xs font-mono font-medium flex items-center gap-1.5 shadow-sm"
                title="Copy phone to clipboard"
              >
                {copiedField === 'phone' ? (
                  <>
                    <Check className="w-4 h-4 text-coral-400" />
                    <span className="text-coral-400 font-bold">Copied!</span>
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
            <Card className="flex items-center gap-3.5 border-stone-800">
              <div className="p-3 rounded-xl bg-stone-500/15 text-stone-200 border border-stone-500/30">
                <MapPin className="w-6 h-6 text-coral-400" />
              </div>
              <div>
                <span className="text-xs font-mono text-stone-400 uppercase tracking-wider font-semibold block">Location</span>
                <span className="text-base font-bold text-paper-100 font-mono">
                  {siteConfig.location}
                </span>
              </div>
            </Card>

          </div>

          {/* Social Links Config Card */}
          <div className="lg:col-span-5">
            <Card className="border-stone-800 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-paper-100">Developer Profiles</h3>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                  Connect with me across GitHub, LinkedIn, and LeetCode. Configured in <code className="text-coral-300 bg-stone-950 px-1.5 py-0.5 rounded font-mono border border-stone-800">src/config/site.js</code>.
                </p>
              </div>

              <div className="space-y-3">
                {/* GitHub */}
                <a
                  href={siteConfig.socials.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800 hover:border-coral-500/45 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-stone-900 text-stone-200 group-hover:text-coral-400 transition-colors shadow-sm">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-paper-100">GitHub Profile</h4>
                      <p className="text-[11px] font-mono text-stone-400">{siteConfig.socials.github.url}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-coral-400 transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={siteConfig.socials.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800 hover:border-coral-500/45 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-stone-900 text-stone-200 group-hover:text-coral-400 transition-colors shadow-sm">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-paper-100">LinkedIn Profile</h4>
                      <p className="text-[11px] font-mono text-stone-400">{siteConfig.socials.linkedin.url}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-coral-400 transition-colors" />
                </a>

                {/* LeetCode */}
                <a
                  href={siteConfig.socials.leetcode.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800 hover:border-coral-500/45 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-stone-900 text-stone-200 group-hover:text-coral-400 transition-colors shadow-sm">
                      <Code className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-paper-100">LeetCode Profile</h4>
                      <p className="text-[11px] font-mono text-stone-400">{siteConfig.socials.leetcode.url}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-coral-400 transition-colors" />
                </a>
              </div>

              <div className="pt-2 border-t border-stone-900 text-center">
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
