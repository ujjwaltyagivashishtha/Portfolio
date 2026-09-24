import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { projectsData } from '../data/projects';
import { FolderGit2, Sparkles, CheckCircle2, ArrowUpRight, X, ShieldCheck } from 'lucide-react';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative bg-slate-100/60 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Featured Engineering Work"
          title="Software Projects"
          subtitle="Full-stack applications demonstrating real-time architectures, AI platform integration, and secure financial ledgers."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between group border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 relative overflow-hidden"
            >
              {/* Card Header & Category */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Featured</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 mb-4">
                  {project.subtitle}
                </p>

                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Key Metric Highlights Grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs">
                      <span className="text-slate-500 dark:text-slate-400 font-mono block text-[10px] uppercase tracking-wider font-semibold">{h.label}</span>
                      <span className="text-slate-900 dark:text-slate-200 font-medium font-mono">{h.value}</span>
                    </div>
                  ))}
                </div>

                {/* Bullet Points */}
                <div className="space-y-2.5 mb-6">
                  {project.bulletPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Badges & CTA */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-900">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 font-semibold group/btn"
                  >
                    <span>View Architecture Breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

            </Card>
          ))}
        </div>

      </div>

      {/* Detailed Architecture Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6 text-slate-900 dark:text-slate-100">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-1 font-semibold">
                <FolderGit2 className="w-4 h-4" />
                <span>{selectedProject.category} Project Breakdown</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{selectedProject.title}</h3>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400">{selectedProject.subtitle}</p>
            </div>

            <div className="space-y-3 border-t border-slate-200 dark:border-slate-800 pt-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                Resume-Supported Implementation Details:
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {selectedProject.bulletPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2">
                Tech Stack Components:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <Badge key={tech} variant="primary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-2 text-right">
              <Button onClick={() => setSelectedProject(null)} variant="outline" size="sm">
                Close Breakdown
              </Button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
