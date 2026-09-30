import React, { useState } from 'react';
import { personalInfo } from '../data/personalInfo';
import { siteConfig } from '../config/site';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ArrowRight, Github, Linkedin, Code, MapPin, GraduationCap, Briefcase, UserCheck, Copy } from 'lucide-react';

export const Hero = ({ onCopyEmail }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden bg-slate-50 dark:bg-[#080808] text-slate-900 dark:text-zinc-100 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-editorial-grid pointer-events-none opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-zinc-300 shadow-sm max-w-full">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F95C4B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F95C4B]"></span>
              </span>
              <span className="font-semibold tracking-wide truncate">Available for Software & Full-Stack Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-zinc-100 font-display tracking-tight leading-[1.1] sm:leading-[1.08]">
                Building <br />
                <span className="text-[#F95C4B]">Scalable Digital Systems</span> <br />
                & Real-Time Platforms.
              </h1>
              
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 text-xs font-mono text-slate-600 dark:text-zinc-400">
                <span className="text-slate-900 dark:text-zinc-100 font-bold text-sm">{personalInfo.name}</span>
                <span className="text-slate-400 dark:text-zinc-600">•</span>
                <span className="text-[#F95C4B] font-semibold">Full-Stack MERN Developer</span>
                <span className="text-slate-400 dark:text-zinc-600">•</span>
                <span>B.Tech CSE @ Quantum Univ</span>
              </div>
            </div>

            {/* Narrative Summary */}
            <p className="text-slate-700 dark:text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-sans font-normal">
              {personalInfo.heroDescription}
            </p>

            {/* Core Focus Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {(personalInfo.focusAreas || []).map((area) => (
                <Badge key={area} variant="secondary">
                  {area}
                </Badge>
              ))}
            </div>


            {/* Main CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <Button href="#projects" variant="primary" size="lg" className="rounded-xl justify-center sm:justify-start">
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <button
                onClick={onCopyEmail}
                className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 hover:border-[#F95C4B]/50 text-slate-800 dark:text-zinc-200 hover:text-[#F95C4B] font-mono text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Copy className="w-4 h-4 text-[#F95C4B]" />
                <span>Copy Email</span>
              </button>
            </div>

            {/* Verified Social Profile Buttons */}
            <div className="pt-6 flex flex-wrap items-center gap-2.5 sm:gap-3 border-t border-slate-200 dark:border-white/10">
              <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-widest font-semibold mr-1">
                Profiles:
              </span>
              
              <a
                href={siteConfig.socials.github.url}
                target="_blank"
                rel="noreferrer"
                className="px-3 sm:px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-zinc-200 hover:text-[#F95C4B] hover:border-[#F95C4B]/50 shadow-sm transition-all flex items-center gap-2 text-xs font-mono font-medium"
              >
                <Github className="w-4 h-4 text-[#F95C4B]" />
                <span>GitHub</span>
              </a>

              <a
                href={siteConfig.socials.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="px-3 sm:px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-zinc-200 hover:text-[#F95C4B] hover:border-[#F95C4B]/50 shadow-sm transition-all flex items-center gap-2 text-xs font-mono font-medium"
              >
                <Linkedin className="w-4 h-4 text-slate-600 dark:text-zinc-300" />
                <span>LinkedIn</span>
              </a>

              <a
                href={siteConfig.socials.leetcode.url}
                target="_blank"
                rel="noreferrer"
                className="px-3 sm:px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-zinc-200 hover:text-[#F95C4B] hover:border-[#F95C4B]/50 shadow-sm transition-all flex items-center gap-2 text-xs font-mono font-medium"
              >
                <Code className="w-4 h-4 text-[#F95C4B]" />
                <span>LeetCode</span>
              </a>
            </div>

          </div>

          {/* Right Column: Sleek Rounded Portrait & Engineering Specs Card */}
          <div className="lg:col-span-5 space-y-6 max-w-md mx-auto lg:max-w-none w-full">
            <div className="bg-white dark:bg-[#121214] border border-slate-200 dark:border-white/10 rounded-2xl p-4 sm:p-5 shadow-2xl hover:border-slate-300 dark:hover:border-zinc-700 transition-all group overflow-hidden">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-200 dark:border-white/10 text-xs font-mono">
                <span className="text-slate-800 dark:text-zinc-300 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F95C4B]"></span>
                  Software Engineer
                </span>
                <span className="text-slate-500 dark:text-zinc-400 font-mono text-[11px]">Saharanpur, UP, India</span>
              </div>

              {/* Portrait Frame */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-100 dark:bg-zinc-900 mb-4 flex items-center justify-center">
                {!imgError ? (
                  <img
                    src="./ujjwal-profile.jpg"
                    alt="Ujjwal Tyagi"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center space-y-3">
                    <div className="w-20 h-20 rounded-full bg-[#F95C4B]/20 border border-[#F95C4B]/40 flex items-center justify-center">
                      <UserCheck className="w-10 h-10 text-[#F95C4B]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white font-display">Ujjwal Tyagi</h3>
                      <p className="text-xs font-mono text-[#F95C4B]">Full-Stack Developer</p>
                    </div>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-transparent to-transparent opacity-70"></div>
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-xs text-zinc-100">
                  <span className="bg-slate-900/90 dark:bg-[#080808]/90 border border-white/20 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg font-bold backdrop-blur-md text-white text-[11px] sm:text-xs">
                    Ujjwal Tyagi
                  </span>
                  <span className="bg-slate-900/90 dark:bg-[#080808]/90 border border-white/20 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[#F95C4B] font-semibold backdrop-blur-md text-[11px] sm:text-xs">
                    MERN & AI Integrations
                  </span>
                </div>
              </div>

              {/* Key Specs */}
              <div className="space-y-2 font-mono text-xs pt-1 px-1">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300">
                  <span className="text-slate-500 dark:text-zinc-400 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#F95C4B]" />
                    Education
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-zinc-100 text-[11px] sm:text-xs">B.Tech CSE (7.99 CGPA)</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300">
                  <span className="text-slate-500 dark:text-zinc-400 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#F95C4B]" />
                    Experience
                  </span>
                  <span className="font-semibold text-[#F95C4B] text-[11px] sm:text-xs">Web Dev Intern @ 3Skill</span>
                </div>

                <div className="flex items-center justify-between py-1.5 text-slate-700 dark:text-zinc-300">
                  <span className="text-slate-500 dark:text-zinc-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F95C4B]" />
                    Location
                  </span>
                  <span className="font-medium text-slate-800 dark:text-zinc-200 text-[11px] sm:text-xs">{personalInfo.location}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
