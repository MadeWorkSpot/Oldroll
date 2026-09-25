export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-24 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(65%_55%_at_50%_0%,rgba(23,23,23,0.06),transparent_70%)]"
      />

      <div className="relative w-full max-w-3xl text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-medium tracking-tight leading-[1.05] text-neutral-900 text-balance">
          Engineering experiences, from code to reality.
        </h1>
        <p className="text-lg text-neutral-500 leading-relaxed">
          We build software, electronics, and interactive products that bring technology into the
          real world.
        </p>
        <div className="pt-2">
          <a
            href="#gallery"
            className="inline-block px-6 py-3 bg-neutral-900 text-white text-base font-medium rounded-sm hover:bg-neutral-800 transition-colors"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
