import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import navLinks from '../data/navLinks.js';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${scrolled ? 'backdrop-blur-xl bg-slate-950/80 shadow-slate-950/40 shadow-xl' : 'bg-transparent'} `}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <Link to="/" className="text-lg font-semibold uppercase tracking-[0.2em] text-slate-100/90 hover:text-white">
          AlexC.
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="relative text-sm text-slate-200 transition-all duration-300 hover:text-white">
              <span className="after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-sky-400 after:to-indigo-500 after:transition-all after:duration-300 hover:after:w-full">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <button type="button" onClick={() => setOpen(!open)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70 text-slate-100 shadow-glow transition-all duration-300 hover:border-sky-400/60 hover:text-white md:hidden">
          {open ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="border-t border-slate-800/80 bg-slate-950/95 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 sm:px-6">
              {navLinks.map((link) => (
                <Link key={link.href} to={link.href} className="rounded-2xl px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-slate-900/80 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
