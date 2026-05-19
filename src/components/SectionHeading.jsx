function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-sky-300/80">{subtitle}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
    </div>
  );
}

export default SectionHeading;
