import React, { useEffect } from 'react';
import { X, ExternalLink, Mail, MapPin, GraduationCap, Briefcase, Code, Award } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import { educationData } from '../../data/education';
import { experienceData } from '../../data/experience';
import { projectsData } from '../../data/projects';
import { skillCategories } from '../../data/skills';
import { certificationsData } from '../../data/certifications';
import { siteConfig } from '../../config/site';

export const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 dark:bg-black/80 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div 
        className="bg-white dark:bg-[#111115] border border-slate-200 dark:border-white/[0.1] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl transition-colors animate-modal-enter"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#0c0c10]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
            <h3 id="resume-modal-title" className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-800 dark:text-zinc-200">
              Ujjwal Tyagi — Software Engineering Resume
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-500 dark:text-zinc-400 transition-colors"
              aria-label="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 font-sans text-slate-900 dark:text-zinc-100 bg-white dark:bg-[#0e0e12]">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-white/[0.08] pb-6 space-y-2">
            <h1 className="text-3xl font-bold font-display text-slate-900 dark:text-white">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-mono text-indigo-600 dark:text-indigo-400 font-medium">
              Software Developer — Backend & Systems Focus
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 dark:text-zinc-400 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1 hover:text-indigo-500 transition-colors">
                <Mail className="w-3.5 h-3.5 text-indigo-500" />
                {siteConfig.email}
              </a>
              <span>•</span>
              <a href={siteConfig.socials.github.url} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
                github.com/ujjwaltyagi/Portfolio
              </a>
              <span>•</span>
              <a href={siteConfig.socials.linkedin.url} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
                linkedin.com/in/ujjwal-tyagi
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                <div>
                  <strong className="text-slate-900 dark:text-white block font-semibold">
                    Quantum University, Roorkee
                  </strong>
                  <span className="text-slate-600 dark:text-zinc-400 text-xs">
                    Bachelor of Technology in Computer Science & Engineering (Minor in Data Analytics)
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-500 dark:text-zinc-400 sm:text-right mt-1 sm:mt-0">
                  2023 – Present (Expected 2027)
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </h2>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                  <div>
                    <strong className="text-slate-900 dark:text-white font-semibold">
                      {exp.role} — {exp.company}
                    </strong>
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                    {exp.period} • {exp.location}
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 dark:text-zinc-300 space-y-1 font-sans">
                  {exp.bulletPoints.map((bp, i) => (
                    <li key={i}>{bp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Key Software Projects</span>
            </h2>
            <div className="space-y-4">
              {projectsData.map((project) => (
                <div key={project.id} className="space-y-1.5 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <strong className="text-slate-900 dark:text-white text-sm font-semibold">
                      {project.title}
                    </strong>
                    <span className="font-mono text-[11px] text-slate-500 dark:text-zinc-400">
                      {project.techStack.join(' • ')}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-zinc-300 font-sans leading-relaxed">
                    {project.summary}
                  </p>
                  <p className="text-slate-600 dark:text-zinc-400 font-sans">
                    <strong>Key Architecture:</strong> {project.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div>
                <span className="text-slate-500 dark:text-zinc-400 block font-semibold mb-1">Languages:</span>
                <span className="text-slate-800 dark:text-zinc-200">Java (DSA), JavaScript (ES6+), SQL, HTML, CSS</span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-zinc-400 block font-semibold mb-1">Backend & Persistence:</span>
                <span className="text-slate-800 dark:text-zinc-200">Node.js, Express.js, MongoDB (ACID Sessions), Mongoose, Socket.io</span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-zinc-400 block font-semibold mb-1">Security & Real-Time:</span>
                <span className="text-slate-800 dark:text-zinc-200">JWT, bcrypt, WebSockets, Room Isolation, Google Gemini API</span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-zinc-400 block font-semibold mb-1">Tools & Core CS:</span>
                <span className="text-slate-800 dark:text-zinc-200">Git/GitHub, Postman, Linux CLI, OOP, DBMS, OS, Computer Networks</span>
              </div>
            </div>
          </div>

          {/* Verified Certifications */}
          <div className="space-y-2 border-t border-slate-200 dark:border-white/[0.08] pt-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Certifications</span>
            </h2>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-700 dark:text-zinc-300">
              {certificationsData.map((c, i) => (
                <span key={i}>
                  • <strong>{c.title}</strong> ({c.issuer})
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
