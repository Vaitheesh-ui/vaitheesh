import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiFigma } from 'react-icons/si';
import PageTransition from '../components/PageTransition.jsx';

function Home() {
  const roles = ['Frontend Developer', 'React.js Developer', 'UI/UX Designer', 'Creative Coder'];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    let timer;

    if (!isDeleting && text === current) {
      timer = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setText((prev) =>
          isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
        );
      }, isDeleting ? 60 : 100);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, roles]);

  return (
    <PageTransition>
      <section className="relative overflow-hidden rounded-[3rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl sm:p-12">
        <div className="absolute inset-0 bg-hero-gradient opacity-70" />
        <div className="absolute left-[-80px] top-16 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-[-80px] bottom-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-[1.25fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-sky-500/20 bg-slate-900/70 px-4 py-2 text-sm text-sky-300 shadow-lg shadow-sky-500/5">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              Premium animated portfolio experience
            </div>
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Hello, I&#39;m Alex Carter</p>
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                <span className="block">I build modern, animated web experiences.</span>
                <span className="block text-sky-300">
                  {text}
                  <span className="inline-block animate-pulse">|</span>
                </span>
              </h1>
              <p className="max-w-2xl text-slate-300 sm:text-lg">
                I create modern, animated, and user-friendly web experiences with premium design, responsive layouts, and buttery smooth motion.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="button-glow inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
                View Projects
              </Link>
              <Link to="/contact" className="button-glow inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/75 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-white">
                Contact Me
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-800/90 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/40">
              <div className="flex h-full flex-col items-center justify-center gap-6 rounded-[2rem] bg-slate-950/80 p-8 text-center">
                <div className="relative mx-auto h-48 w-48 rounded-full border-4 border-sky-500/25 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 p-1 shadow-glow">
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.35),transparent_55%)] blur-2xl" />
                  <div className="relative flex h-full items-center justify-center rounded-full bg-slate-950 text-slate-100">
                    <span className="text-6xl font-black text-slate-200">AC</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Featured Skills</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[FaReact, SiTailwindcss, FaNodeJs, SiFigma, FaAws].map((Icon, idx) => (
                      <div key={idx} className="flex h-14 w-14 items-center justify-center rounded-3xl border border-slate-800/80 bg-slate-900/75 text-sky-300 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-sky-400/60">
                        <Icon className="h-7 w-7" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Home;
