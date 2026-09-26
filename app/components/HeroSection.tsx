import { ArrowRight } from "lucide-react";

const capabilities = [
  "Software",
  "Electronics",
  "Hardware",
  "VR Gaming",
  "Photo Booths",
  "Creative Design",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-24 pb-20 overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-lines mask-fade-b" />
        <div className="animate-drift absolute -top-1/4 left-1/2 h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(23,23,23,0.09),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative w-full max-w-4xl text-center">
        <p
          className="animate-rise-in text-xs font-medium uppercase tracking-[0.28em] text-neutral-400"
          style={{ animationDelay: "60ms" }}
        >
          Oldroll
        </p>

        <h1
          className="animate-rise-in mt-6 text-5xl sm:text-6xl md:text-8xl font-medium tracking-tight leading-[1.03] text-neutral-900 text-balance"
          style={{ animationDelay: "140ms" }}
        >
          Engineering experiences, from code to reality.
        </h1>

        <p
          className="animate-rise-in mx-auto mt-7 max-w-2xl text-lg text-neutral-500 leading-relaxed text-balance"
          style={{ animationDelay: "240ms" }}
        >
          We build software, electronics, and interactive products that bring technology into the
          real world.
        </p>

        <div
          className="animate-rise-in mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3"
          style={{ animationDelay: "340ms" }}
        >
          <a
            href="#gallery"
            className="group inline-flex items-center justify-center gap-2 rounded-sm bg-neutral-900 px-7 py-3.5 text-base font-medium text-white transition-all duration-300 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            View Our Work
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-sm border border-neutral-200 bg-white/60 px-7 py-3.5 text-base font-medium text-neutral-900 backdrop-blur transition-colors duration-300 hover:border-neutral-400"
          >
            What We Do
          </a>
        </div>

        <ul
          className="animate-rise-in mx-auto mt-14 flex max-w-2xl flex-wrap items-center justify-center gap-x-3 gap-y-2"
          style={{ animationDelay: "440ms" }}
        >
          {capabilities.map((item) => (
            <li
              key={item}
              className="rounded-full border border-neutral-200 bg-white/60 px-3.5 py-1 text-sm text-neutral-500 backdrop-blur"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-neutral-400 transition-colors hover:text-neutral-900 md:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-neutral-200">
          <span className="animate-scroll-line absolute inset-x-0 top-0 h-4 bg-neutral-900" />
        </span>
      </a>
    </section>
  );
}
