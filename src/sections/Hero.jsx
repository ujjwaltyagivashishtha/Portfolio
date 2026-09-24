import React from 'react';
import { personalInfo } from '../data/personalInfo';
import { siteConfig } from '../config/site';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { MapPin, Mail, ArrowRight, Github, Linkedin, Code, Terminal, Sparkles, CheckCircle2, Layers } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden">
      {/* Ambient Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern bg-repeat opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-indigo-500/30 text-xs font-mono text-indigo-300 backdrop-blur-xl shadow-lg shadow-indigo-500/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-semibold tracking-wide">Available for Full-Stack & Software Engineering Roles</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                Engineered for <br className="hidden sm:inline" />
                <span className="text-gradient">Performance & Scalability</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-300 tracking-tight flex items-center gap-3 pt-1">
                <span>{personalInfo.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                <span className="text-indigo-400 font-mono text-base sm:text-lg font-semibold">Full-Stack MERN Developer</span>
              </h2>
            </div>

            {/* Location & Academic Tag */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800 text-emerald-400 font-medium">
                <Layers className="w-4 h-4" />
                <span>Quantum Univ (B.Tech CSE, 7.99 CGPA)</span>
              </div>
            </div>

            {/* Hero Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {personalInfo.heroDescription}
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {personalInfo.focusAreas.map((area, idx) => (
                <Badge key={area} variant={idx % 2 === 0 ? "primary" : "cyan"}>
                  {area}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Button href="#projects" variant="primary" size="lg">
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href={`mailto:${siteConfig.email}`} variant="outline" size="lg">
                <Mail className="w-4 h-4 text-indigo-400" />
                Direct Email
              </Button>
            </div>

            {/* Verified Social Profile Buttons */}
            <div className="pt-6 flex flex-wrap items-center gap-3 border-t border-white/10">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-semibold mr-1">
                Profiles:
              </span>
              
              <a
                href={siteConfig.socials.github.url}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-indigo-400 hover:border-indigo-500/50 shadow-sm transition-all flex items-center gap-2 text-xs font-mono font-medium"
              >
                <Github className="w-4 h-4 text-indigo-400" />
                <span>GitHub</span>
              </a>

              <a
                href={siteConfig.socials.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-indigo-400 hover:border-indigo-500/50 shadow-sm transition-all flex items-center gap-2 text-xs font-mono font-medium"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={siteConfig.socials.leetcode.url}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-indigo-400 hover:border-indigo-500/50 shadow-sm transition-all flex items-center gap-2 text-xs font-mono font-medium"
              >
                <Code className="w-4 h-4 text-emerald-400" />
                <span>LeetCode</span>
              </a>
            </div>

          </div>

          {/* Right Visual Feature: Developer IDE Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card rounded-2xl p-6 border border-white/10 bg-slate-950 text-slate-100 shadow-2xl relative overflow-hidden">
              
              {/* Window Controls */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/90"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/90"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90"></div>
                </div>
                <div className="text-xs font-mono text-indigo-400 flex items-center gap-2 bg-indigo-500/10 px-3 py-1 rounded-md border border-indigo-500/20">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>ujjwal.stack.ts</span>
                </div>
              </div>

              {/* Code Snippet with Rich Syntax Colors */}
              <div className="font-mono text-xs space-y-2 text-slate-300 overflow-x-auto leading-relaxed">
                <p className="text-slate-500">// Software Engineering Profile</p>
                <p><span className="text-violet-400">interface</span> <span className="text-sky-300">SoftwareEngineer</span> &#123;</p>
                <p className="pl-4"><span className="text-indigo-400">name</span>: <span className="text-emerald-300">string</span>;</p>
                <p className="pl-4"><span className="text-indigo-400">education</span>: <span className="text-emerald-300">string</span>;</p>
                <p className="pl-4"><span className="text-indigo-400">internship</span>: <span className="text-emerald-300">string</span>;</p>
                <p className="pl-4"><span className="text-indigo-400">keyProjects</span>: <span className="text-emerald-300">string[]</span>;</p>
                <p>&#125;</p>
                <br />
                <p><span className="text-violet-400">export const</span> <span className="text-sky-300">engineer</span>: <span className="text-sky-300">SoftwareEngineer</span> = &#123;</p>
                <p className="pl-4"><span className="text-indigo-400">name</span>: <span className="text-amber-300">"{personalInfo.name}"</span>,</p>
                <p className="pl-4"><span className="text-indigo-400">education</span>: <span className="text-amber-300">"Quantum University (B.Tech CSE)"</span>,</p>
                <p className="pl-4"><span className="text-indigo-400">internship</span>: <span className="text-amber-300">"Web Dev Intern @ 3Skill India"</span>,</p>
                <p className="pl-4"><span className="text-indigo-400">keyProjects</span>: [</p>
                <p className="pl-8 text-cyan-300">"Fusion AI Studio (Real-Time Collaborative AI IDE)",</p>
                <p className="pl-8 text-cyan-300">"Bank Transaction System (Immutable Ledger)"</p>
                <p className="pl-4">]</p>
                <p>&#125;;</p>
              </div>

              {/* Card Footer Badge */}
              <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Resume Verified Facts</span>
                </div>
                <div className="flex items-center gap-1 text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Saharanpur, UP, India</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
