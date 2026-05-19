import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-950/90 shadow-glow"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative space-y-6 p-8">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-2xl bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-[0.25em] text-sky-300">Featured</span>
          <div className="flex flex-wrap gap-2 text-[0.72rem] text-slate-400">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full border border-slate-800/90 bg-slate-900/70 px-3 py-1">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
          <p className="text-slate-300">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          <a href={project.demo} className="button-glow inline-flex items-center rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5" target="_blank" rel="noreferrer">
            Live Demo
            <FaExternalLinkAlt className="ml-2 h-3.5 w-3.5" />
          </a>
          <a href={project.repo} className="button-glow inline-flex items-center rounded-full border border-slate-700/90 bg-slate-900/80 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-400 hover:text-white" target="_blank" rel="noreferrer">
            GitHub
            <FaGithub className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
