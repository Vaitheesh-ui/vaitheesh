import { useState } from 'react';
import { motion } from 'framer-motion';

function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Sent successfully! I will get back to you soon.');
    event.currentTarget.reset();
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-[2rem] border border-slate-800/75 p-8 shadow-glow"
    >
      <div className="space-y-6">
        <div className="form-field relative">
          <input name="name" required className="input-glow w-full rounded-3xl border border-slate-700/80 bg-slate-900/70 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20" />
          <label className="label-float pointer-events-none absolute left-5 top-4 text-sm text-slate-400 transition-all">Name</label>
        </div>
        <div className="form-field relative">
          <input name="email" type="email" required className="input-glow w-full rounded-3xl border border-slate-700/80 bg-slate-900/70 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20" />
          <label className="label-float pointer-events-none absolute left-5 top-4 text-sm text-slate-400 transition-all">Email</label>
        </div>
        <div className="form-field relative">
          <textarea name="message" required rows="5" className="input-glow w-full rounded-3xl border border-slate-700/80 bg-slate-900/70 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20" />
          <label className="label-float pointer-events-none absolute left-5 top-4 text-sm text-slate-400 transition-all">Message</label>
        </div>
        <button type="submit" className="button-glow inline-flex rounded-3xl bg-gradient-to-r from-sky-400 to-indigo-500 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]">
          Send Message
        </button>
      </div>
      {status && <p className="mt-6 text-sm text-emerald-300">{status}</p>}
    </motion.form>
  );
}

export default ContactForm;
