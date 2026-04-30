import { useMemo, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { projectFilters, projects } from '../data/projects';
import type { ProjectCategory } from '../types';

type Filter = (typeof projectFilters)[number];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.categories.includes(activeFilter as ProjectCategory));
  }, [activeFilter]);

  return (
    <section id="projects" className="section-padding section-shell">
      <SectionHeader
        eyebrow="Projects"
        title="Selected demo projects"
        description="Mock project cards built to show the type of products I can design, structure, and ship. Replace links with real demos when ready."
      />

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`pill-btn px-3 py-1.5 text-xs ${activeFilter === filter ? 'pill-btn-primary' : 'pill-btn-ghost'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <motion.article
            layout
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            whileHover={{ y: -8, rotateX: 2.5, rotateY: -2.5 }}
            className="card-tilt glass-card group overflow-hidden rounded-[1.8rem] p-4 transition-all duration-300 hover:border-white/28 hover:bg-white/[0.055]"
          >
            <div className="relative mb-5 h-44 overflow-hidden rounded-[1.35rem] border border-white/10 bg-black">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.025))]" />
              <div className="absolute inset-4 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-sm">
                <div className="mb-4 h-3 w-24 rounded-full bg-white/35" />
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-full bg-white/18" />
                  <div className="h-2 w-2/3 rounded-full bg-white/12" />
                  <div className="h-2 w-5/6 rounded-full bg-white/10" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                  <span className="h-10 rounded-xl border border-white/10 bg-white/[0.045]" />
                  <span className="h-10 rounded-xl border border-white/10 bg-white/[0.035]" />
                  <span className="h-10 rounded-xl border border-white/10 bg-white/[0.025]" />
                </div>
              </div>
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </div>

            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/55">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-xs font-semibold text-white/55">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <a href={project.demoUrl} className="pill-btn pill-btn-secondary px-3 py-1.5 text-xs">
                View Demo <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a href={project.sourceUrl} className="pill-btn pill-btn-ghost px-3 py-1.5 text-xs">
                Source Code <Github className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
