import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { siteConfig } from '../config/site';
import { Mail, Phone, MapPin, Copy, Check, Github, Linkedin, Code, ExternalLink, Send, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-white dark:bg-[#080808] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="07"
          badge="Get In Touch"
          title="Contact & Developer Profiles"
          subtitle="Direct contact details, interactive messaging, and verified profile links."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Direct Contact Cards & Interactive Form */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Email Card */}
            <Card className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-slate-200 dark:border-white/10 bg-white dark:bg-[#121214]">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#F95C4B]/10 text-[#F95C4B] border border-[#F95C4B]/20 shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider font-semibold block">Email Address</span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-xs sm:text-base font-bold text-slate-900 dark:text-zinc-100 hover:text-[#F95C4B] transition-colors font-mono truncate block"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(siteConfig.email, 'email')}
                className="p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-[#080808] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:text-[#F95C4B] transition-all text-xs font-mono font-medium flex items-center justify-center gap-1.5 shadow-sm shrink-0"
                title="Copy email to clipboard"
              >
                {copiedField === 'email' ? (
                  <>
                    <Check className="w-4 h-4 text-[#F95C4B]" />
                    <span className="text-[#F95C4B] font-bold">Copied!</span>
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
            <Card className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-slate-200 dark:border-white/10 bg-white dark:bg-[#121214]">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#F95C4B]/10 text-[#F95C4B] border border-[#F95C4B]/20 shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider font-semibold block">Phone Number</span>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-xs sm:text-base font-bold text-slate-900 dark:text-zinc-100 hover:text-[#F95C4B] transition-colors font-mono truncate block"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(siteConfig.phone, 'phone')}
                className="p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-[#080808] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:text-[#F95C4B] transition-all text-xs font-mono font-medium flex items-center justify-center gap-1.5 shadow-sm shrink-0"
                title="Copy phone to clipboard"
              >
                {copiedField === 'phone' ? (
                  <>
                    <Check className="w-4 h-4 text-[#F95C4B]" />
                    <span className="text-[#F95C4B] font-bold">Copied!</span>
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
            <Card className="flex items-center gap-3.5 border-slate-200 dark:border-white/10 bg-white dark:bg-[#121214]">
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-200 border border-slate-200 dark:border-white/10 shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#F95C4B]" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider font-semibold block">Location</span>
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-zinc-100 font-mono">
                  {siteConfig.location}
                </span>
              </div>
            </Card>

            {/* Quick Message Form */}
            <Card className="border-slate-200 dark:border-white/10 bg-white dark:bg-[#121214] space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-white/10">
                <MessageSquare className="w-5 h-5 text-[#F95C4B]" />
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display">Send a Quick Message</h3>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-3 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-600 dark:text-zinc-400 mb-1 font-semibold">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#080808] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-zinc-100 focus:border-[#F95C4B] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-zinc-400 mb-1 font-semibold">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#080808] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-zinc-100 focus:border-[#F95C4B] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 dark:text-zinc-400 mb-1 font-semibold">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Software Engineering Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#080808] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-zinc-100 focus:border-[#F95C4B] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-600 dark:text-zinc-400 mb-1 font-semibold">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Ujjwal, I would like to discuss..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#080808] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-zinc-100 focus:border-[#F95C4B] focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full rounded-xl py-3 text-xs justify-center">
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </Button>

                {submitted && (
                  <p className="text-xs text-[#F95C4B] text-center font-bold pt-1">
                    Opening your default email client with pre-filled message...
                  </p>
                )}
              </form>
            </Card>

          </div>

          {/* Social Links Config Card */}
          <div className="lg:col-span-5">
            <Card className="border-slate-200 dark:border-white/10 bg-white dark:bg-[#121214] space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-zinc-100 font-display">Developer Profiles</h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1 leading-relaxed font-sans">
                  Connect with me across GitHub, LinkedIn, and LeetCode. Configured in <code className="text-[#F95C4B] bg-slate-100 dark:bg-[#080808] px-1.5 py-0.5 rounded font-mono border border-slate-200 dark:border-white/10">src/config/site.js</code>.
                </p>
              </div>

              <div className="space-y-3">
                {/* GitHub */}
                <a
                  href={siteConfig.socials.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-[#080808] border border-slate-200 dark:border-white/10 hover:border-[#F95C4B]/40 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-white dark:bg-[#121214] text-slate-800 dark:text-zinc-200 group-hover:text-[#F95C4B] transition-colors shadow-sm shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-zinc-100">GitHub Profile</h4>
                      <p className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 truncate">{siteConfig.socials.github.url}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 dark:text-zinc-400 group-hover:text-[#F95C4B] transition-colors shrink-0 ml-2" />
                </a>

                {/* LinkedIn */}
                <a
                  href={siteConfig.socials.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-[#080808] border border-slate-200 dark:border-white/10 hover:border-[#F95C4B]/40 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-white dark:bg-[#121214] text-slate-800 dark:text-zinc-200 group-hover:text-[#F95C4B] transition-colors shadow-sm shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-zinc-100">LinkedIn Profile</h4>
                      <p className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 truncate">{siteConfig.socials.linkedin.url}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 dark:text-zinc-400 group-hover:text-[#F95C4B] transition-colors shrink-0 ml-2" />
                </a>

                {/* LeetCode */}
                <a
                  href={siteConfig.socials.leetcode.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-[#080808] border border-slate-200 dark:border-white/10 hover:border-[#F95C4B]/40 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-white dark:bg-[#121214] text-slate-800 dark:text-zinc-200 group-hover:text-[#F95C4B] transition-colors shadow-sm shrink-0">
                      <Code className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-zinc-100">LeetCode Profile</h4>
                      <p className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 truncate">{siteConfig.socials.leetcode.url}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 dark:text-zinc-400 group-hover:text-[#F95C4B] transition-colors shrink-0 ml-2" />
                </a>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-white/10 text-center">
                <Button href={`mailto:${siteConfig.email}`} variant="primary" className="w-full rounded-xl justify-center">
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
