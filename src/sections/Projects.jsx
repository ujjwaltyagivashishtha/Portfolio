import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { projectsData } from '../data/projects';
import { FolderGit2, Sparkles, CheckCircle2, ArrowUpRight, X, ShieldCheck, Filter } from 'lucide-react';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // Categories extracted from projects data
  const categories = ['All', ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  // Close modal on Escape key & manage body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-16 sm:py-24 relative bg-slate-50 dark:bg-[#080808] border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="03"
          badge="Featured Engineering Work"
          title="Software Projects"
          subtitle="Full-stack applications demonstrating real-time architectures, AI platform integration, and secure financial ledgers."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10 pb-2 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-1.5 mr-2 text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase font-semibold">
            <Filter className="w-3.5 h-3.5 text-[#F95C4B]" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeCategory === cat
                  ? 'bg-[#F95C4B] text-black font-bold shadow-md shadow-[#F95C4B]/20'
                  : 'bg-slate-200/80 dark:bg-[#121214] text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between group border-slate-200 dark:border-white/10 hover:border-[#F95C4B]/40 relative overflow-hidden bg-white dark:bg-[#121214]"
            >
              {/* Card Header & Category */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#F95C4B]/10 text-[#F95C4B] border border-[#F95C4B]/25">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#F95C4B] font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Featured</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100 group-hover:text-[#F95C4B] transition-colors font-display">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-zinc-400 mt-1 mb-4">
                  {project.subtitle}
                </p>

                <p className="text-slate-700 dark:text-zinc-300 text-sm leading-relaxed mb-6 font-sans">
                  {project.summary}
                </p>

                {/* Key Metric Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#080808]/80 border border-slate-200 dark:border-white/10 text-xs">
                      <span className="text-slate-500 dark:text-zinc-400 font-mono block text-[10px] uppercase tracking-wider font-semibold">{h.label}</span>
                      <span className="text-slate-800 dark:text-zinc-200 font-medium font-mono">{h.value}</span>
                    </div>
                  ))}
                </div>

                {/* Bullet Points */}
                <div className="space-y-2.5 mb-6">
                  {project.bulletPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-zinc-300 leading-normal font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F95C4B] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Badges & CTA */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-[#F95C4B] hover:text-[#FF6B5B] flex items-center gap-1 font-semibold group/btn"
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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-[#121214] border border-slate-200 dark:border-white/10 rounded-2xl max-w-2xl w-full p-5 sm:p-8 relative shadow-2xl space-y-5 sm:space-y-6 text-slate-900 dark:text-zinc-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#F95C4B] mb-1 font-semibold">
                <FolderGit2 className="w-4 h-4" />
                <span>{selectedProject.category} Project Breakdown</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">{selectedProject.title}</h3>
              <p className="text-xs font-mono text-slate-500 dark:text-zinc-400">{selectedProject.subtitle}</p>
            </div>

            <div className="space-y-3 border-t border-slate-200 dark:border-white/10 pt-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-semibold">
                Implementation & Architecture Details:
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-zinc-300">
                {selectedProject.bulletPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#080808] border border-slate-200 dark:border-white/10 font-sans">
                    <ShieldCheck className="w-4 h-4 text-[#F95C4B] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-200 dark:border-white/10 pt-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-semibold mb-2">
                Tech Stack & Components:
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
