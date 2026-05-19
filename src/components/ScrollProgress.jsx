import { useEffect, useState } from 'react';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-slate-950/0">
      <div className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 transition-all duration-150" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default ScrollProgress;
