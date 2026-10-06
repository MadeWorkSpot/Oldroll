import { ArrowRight } from "lucide-react";
import HeroBackdrop from "./HeroBackdrop";

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
        <HeroBackdrop />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="relative w-full max-w-4xl text-center">

        <h1
          className="animate-rise-in mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.03] text-white text-balance"
          style={{ animationDelay: "140ms" }}
        >
          Engineering experiences, from code to reality.
        </h1>

        <p
          className="animate-rise-in mx-auto mt-7 max-w-2xl text-lg text-slate-300 leading-relaxed text-balance"
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
            className="group inline-flex items-center justify-center gap-2 rounded-sm bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            View Our Work
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-sm border border-slate-700 bg-slate-800/40 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition-colors duration-300 hover:border-slate-500"
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
              className="rounded-full border border-slate-800 bg-slate-900/40 px-3.5 py-1 text-sm text-slate-300 backdrop-blur"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
