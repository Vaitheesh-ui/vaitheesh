import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800/90 bg-slate-950/80 py-10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-center sm:px-6 lg:px-10 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm text-slate-400">© 2026 Alex Carter. Crafted with React, Tailwind, and motion.</p>
        <div className="flex items-center justify-center gap-4 text-slate-300">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-sky-400">
            <FaGithub className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-sky-400">
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="transition hover:text-sky-400">
            <FaTwitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
