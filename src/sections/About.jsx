import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { personalInfo } from '../data/personalInfo';
import { User, GraduationCap, Briefcase, Code2, Database, Cpu, Sparkles } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 relative bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Engineering Profile"
          title="About Me"
          subtitle="Computer Science & Engineering student focused on building resilient full-stack applications, real-time collaboration engines, and database systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7">
            <Card className="h-full space-y-6 border-stone-800">
              <div className="flex items-center gap-3 text-coral-400 font-mono text-sm font-semibold border-b border-stone-800/80 pb-4">
                <div className="p-2 rounded-lg bg-coral-500/10 text-coral-400 border border-coral-500/20">
                  <User className="w-5 h-5" />
                </div>
                <span>Background & Full-Stack Focus</span>
              </div>
              
              <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
                {personalInfo.aboutSummary.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-5 border-t border-stone-800/80">
                <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400 font-semibold mb-4">
                  Core Engineering Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  
                  <div className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-coral-500/10 text-coral-400 shrink-0">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-paper-100">Full-Stack MERN</h5>
                      <p className="text-[11px] text-stone-400 mt-0.5">React.js, Node.js, Express.js & MongoDB</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-stone-400/15 text-stone-200 shrink-0">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-paper-100">Database & Ledger</h5>
                      <p className="text-[11px] text-stone-400 mt-0.5">MongoDB Aggregation & Double-entry ledgers</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-coral-500/10 text-coral-400 shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-paper-100">AI & Real-Time</h5>
                      <p className="text-[11px] text-stone-400 mt-0.5">Google Gemini API & Socket.io chat</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-stone-500/15 text-stone-300 shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-paper-100">Data Analytics Minor</h5>
                      <p className="text-[11px] text-stone-400 mt-0.5">Quantum University (2023–2027)</p>
                    </div>
                  </div>

                </div>
              </div>
            </Card>
          </div>

          {/* Academic & Internship Highlights Sidebar */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            
            {/* Academic Snapshot */}
            <Card className="bg-stone-950/90 border-coral-500/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-coral-400 font-semibold flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Education
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-coral-500/10 text-coral-300 border border-coral-500/30 font-semibold">
                  CGPA: 7.99
                </span>
              </div>
              <h3 className="text-lg font-bold text-paper-100">B.Tech in Computer Science & Engineering</h3>
              <p className="text-xs text-stone-400 mt-1 font-mono">Quantum University, Roorkee (2023 – 2027)</p>
              <div className="mt-3 pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-coral-300 font-medium">Minor in Data Analytics</span>
                <span className="text-stone-400">Expected 2027</span>
              </div>
            </Card>

            {/* Internship Snapshot */}
            <Card className="bg-stone-950/90 border-stone-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-200 font-semibold flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-coral-400" />
                  Work Experience
                </span>
                <span className="text-xs font-mono text-stone-400">
                  Jun 2026 – Aug 2026
                </span>
              </div>
              <h3 className="text-lg font-bold text-paper-100">Web Dev Intern</h3>
              <p className="text-xs text-stone-400 mt-1 font-mono">3Skill India</p>
              <p className="text-xs text-stone-300 mt-2.5 leading-relaxed">
                Developed responsive React.js frontends, engineered RESTful APIs with Node.js/Express, and managed MongoDB collections using Mongoose ORM.
              </p>
            </Card>

            {/* Summary Pill */}
            <div className="p-4 rounded-xl glass-card border border-stone-800 flex items-center justify-between text-xs font-mono text-stone-400">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-coral-400" />
                <span className="text-stone-300 font-medium">{personalInfo.location}</span>
              </div>
              <span className="text-coral-400 font-semibold">MERN Stack Developer</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
