import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import { timeline, stats } from '../data/experienceData.js';
import PageTransition from '../components/PageTransition.jsx';

function About() {
  return (
    <PageTransition>
      <section className="space-y-12">
        <SectionHeading title="About Me" subtitle="Who I am" />

        <div className="grid gap-8 xl:grid-cols-[1.5fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-[2rem] border border-slate-800/75 bg-slate-950/80 p-8 shadow-glow"
          >
            <p className="mb-6 text-slate-300 sm:text-lg">
              Passionate frontend developer specializing in React.js and modern web animations. I love building responsive and interactive digital experiences with clean UI and smooth user experiences.
            </p>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6">
                <h3 className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/80">Education</h3>
                <p className="text-slate-300">B.S. in Computer Science with a focus on web technologies and design systems.</p>
              </div>
              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6">
                <h3 className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/80">Experience</h3>
                <p className="text-slate-300">Working with teams that value polished products, fast performance, and delightful interactions.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {timeline.map((item) => (
              <div key={item.year} className="relative overflow-hidden rounded-[2rem] border border-slate-800/75 bg-slate-950/80 p-6 shadow-glow">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-sky-400 to-indigo-500" />
                <div className="ml-6 space-y-2">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{item.year}</p>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-slate-400">{item.org}</p>
                  <p className="text-slate-300">{item.details}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-[2rem] border border-slate-800/75 p-6 text-center shadow-glow"
            >
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

export default About;
