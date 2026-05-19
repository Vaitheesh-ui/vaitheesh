import { motion } from 'framer-motion';

function SkillCard({ category, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-3xl border border-slate-800/70 p-6 shadow-glow"
    >
      <h3 className="mb-6 text-lg font-semibold text-white">{category}</h3>
      <div className="space-y-5">
        {items.map((skill) => (
          <div key={skill.name} className="space-y-3">
            <div className="flex items-center justify-between text-sm text-slate-200">
              <span>{skill.name}</span>
              <span className="text-slate-400">{skill.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-900">
              <div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 transition-all" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCard;
