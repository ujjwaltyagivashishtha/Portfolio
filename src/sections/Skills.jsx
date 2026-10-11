import React from 'react';
import { useScrollReveal } from '../lib/useScrollReveal';
import { 
  Server, 
  Database, 
  Radio, 
  Code2, 
  Layers, 
  Wrench,
  BookOpen
} from 'lucide-react';

export const Skills = () => {
  const [headerRef, isHeaderVisible] = useScrollReveal();
  const [gridRef, isGridVisible] = useScrollReveal();
  const [csRef, isCsVisible] = useScrollReveal();

  const technicalCategories = [
    {
      id: "backend",
      category: "Backend & REST Architecture",
      icon: Server,
      skills: [
        { name: "Node.js", desc: "Runtime, Event Loop, Non-blocking asynchronous I/O" },
        { name: "Express.js", desc: "Modular REST routing, Custom middleware, Controllers" },
        { name: "API Security", desc: "JWT stateless auth, bcrypt password hashing, CORS guards" },
        { name: "Error Handling", desc: "Centralized error middleware & standardized envelopes" }
      ]
    },
    {
      id: "databases",
      category: "Databases & Persistence",
      icon: Database,
      skills: [
        { name: "MongoDB", desc: "Document modeling, Aggregation pipelines, Secondary indexes" },
        { name: "Mongoose ORM", desc: "Schema validation rules, Pre/post hooks, Population" },
        { name: "ACID Transactions", desc: "Session transactions, Rollback safety, Atomicity guarantees" },
        { name: "MySQL / SQL", desc: "Relational schemas, Primary/Foreign keys, Normalization" }
      ]
    },
    {
      id: "realtime-ai",
      category: "Real-Time & Applied AI",
      icon: Radio,
      skills: [
        { name: "Socket.io", desc: "Bi-directional WebSocket events, Project room isolation" },
        { name: "Google Gemini API", desc: "Structured system prompt engineering & JSON generation" },
        { name: "WebContainers", desc: "In-browser Node.js runtime process execution via WASM" }
      ]
    },
    {
      id: "languages",
      category: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Java", desc: "Data Structures & Algorithms, Object-Oriented Programming" },
        { name: "JavaScript (ES6+)", desc: "Async/await, Closures, Promises, Modern Web APIs" },
        { name: "Python", desc: "Scripting, Automation, Data Analytics foundations" },
        { name: "SQL", desc: "Relational queries, Multi-table joins, Grouping aggregations" }
      ]
    },
    {
      id: "frontend",
      category: "Client-Side Engineering",
      icon: Layers,
      skills: [
        { name: "React.js", desc: "Hooks, Controlled form state, Component lifecycle" },
        { name: "Tailwind CSS", desc: "Design tokens, Responsive layouts, Dark/light theming" },
        { name: "HTML5 & CSS3", desc: "Semantic markup, CSS Flexbox/Grid, Print media styles" }
      ]
    },
    {
      id: "tools",
      category: "Engineering Workflow & Tooling",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", desc: "Branching strategies, Semantic commits, PR collaboration" },
        { name: "Postman", desc: "API contract testing, Mocking, Automated collection runs" },
        { name: "Linux / CLI", desc: "Shell navigation, Environment configuration, Process management" },
        { name: "Vite & npm", desc: "Frontend build bundling, Package management, Module bundling" }
      ]
    }
  ];

  const computerScienceFoundations = [
    { name: "Data Structures & Algorithms", detail: "Arrays, LinkedLists, Trees, Graphs, HashMaps, asymptotic complexity analysis in Java." },
    { name: "Object-Oriented Programming", detail: "Encapsulation, Polymorphism, Inheritance, Abstraction, and modular software architecture." },
    { name: "Database Management Systems", detail: "ACID properties, Normalization (1NF–3NF), ER modeling, and transaction isolation." },
    { name: "Operating Systems & Networks", detail: "Process concurrency, Memory management, TCP/IP, HTTP/1.1, and WebSocket protocols." }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 sm:py-28 border-b border-zinc-200 dark:border-white/[0.08] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-16 pb-6 border-b border-zinc-200 dark:border-white/[0.08] reveal-init ${
            isHeaderVisible ? 'reveal-active' : ''
          }`}
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
              <span>03</span>
              <span>/</span>
              <span>TECHNICAL COMPETENCIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-zinc-950 dark:text-white">
              Verified Technical Matrix
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-md text-left sm:text-right">
            Technologies and concepts actively used across my projects, university studies, and internship.
          </p>
        </div>

        {/* 6 Category Matrix Divided by Clean Structural Rules */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 text-left reveal-init ${
            isGridVisible ? 'reveal-active' : ''
          }`}
        >
          {technicalCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="group space-y-4">
                
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-2.5 border-b border-zinc-200 dark:border-white/[0.08] transition-colors group-hover:border-emerald-500/40">
                  <Icon className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-zinc-900 dark:text-white">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill List */}
                <ul className="space-y-2.5 font-sans">
                  {cat.skills.map((skill, idx) => (
                    <li key={idx} className="space-y-0.5 transition-transform duration-150 hover:translate-x-1">
                      <div className="flex items-baseline justify-between font-mono text-xs">
                        <strong className="text-zinc-900 dark:text-white font-semibold">
                          {skill.name}
                        </strong>
                      </div>
                      <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-normal font-sans">
                        {skill.desc}
                      </p>
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}
        </div>

        {/* Computer Science Academic Rigor Banner */}
        <div 
          ref={csRef}
          className={`mt-16 pt-8 border-t border-zinc-200 dark:border-white/[0.08] text-left reveal-init ${
            isCsVisible ? 'reveal-active' : ''
          }`}
        >
          <div className="flex items-center gap-2 mb-6 font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold">
            <BookOpen className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
            <span>Computer Science Academic Rigor (Quantum University Coursework)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            {computerScienceFoundations.map((f, i) => (
              <div key={i} className="p-4 rounded bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] space-y-1.5 transition-colors hover:border-emerald-500/30">
                <strong className="text-zinc-900 dark:text-white block font-medium">
                  {f.name}
                </strong>
                <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
                  {f.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
