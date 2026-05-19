import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import projects from '../data/projectsData.js';
import PageTransition from '../components/PageTransition.jsx';

const categories = ['All', 'E-Commerce', 'AI', 'Portfolio', 'Productivity'];

function Projects() {
  const [active, setActive] = useState('All');

  const filteredProjects = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((project) => project.title.toLowerCase().includes(active.toLowerCase()));
  }, [active]);

  return (
    <PageTransition>
      <section className="space-y-12">
        <SectionHeading title="Projects" subtitle="Recent Work" />

        <div className="flex flex-wrap gap-3 rounded-3xl border border-slate-800/75 bg-slate-950/80 p-4 shadow-glow">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`rounded-full px-5 py-2 text-sm transition ${active === category ? 'bg-slate-100/10 text-white shadow-glow' : 'bg-slate-900/80 text-slate-400 hover:bg-slate-900/95'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 xl:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </section>
    </PageTransition>
  );
}

export default Projects;
