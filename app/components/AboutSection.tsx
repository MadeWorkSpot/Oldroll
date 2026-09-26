import Image from "next/image";
import Reveal from "./Reveal";

const tags = ["Software", "Electronics", "Hardware", "Creative Design"];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-6 md:px-12 lg:px-24 border-t border-neutral-100"
    >
      <div className="w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal className="group relative min-h-[22rem] md:min-h-[30rem] w-full rounded-sm overflow-hidden bg-neutral-100">
          <Image
            src="/test/chronicle-spot.jpeg"
            alt="The Chronicle Spot photo booth, built by Oldroll"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-neutral-900/10"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-900/70 to-transparent p-5 text-sm text-white/90">
            Chronicle Spot — interactive photo booth
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-400">
              Who we are
            </p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900">
              About Our Studio
            </h2>

            <p className="text-xl leading-relaxed text-neutral-700">
              Oldroll is a technology-driven company focused on developing
              innovative software, products, and immersive entertainment experiences. We combine
              software development, electronics, physical interfaces, and creative design to build
              technology-driven solutions for real-world applications.
            </p>

            <p className="text-lg text-neutral-500 leading-relaxed">
              Our evolving portfolio includes software solutions, VR Gaming, Chronicle Spot, and
              interactive products such as Fridge Magnet, bringing technology and creativity together
              in new and engaging ways.
            </p>

            <p className="text-lg text-neutral-500 leading-relaxed">
              We continuously explore, develop, and launch new concepts, transforming ideas into
              innovative products, software, and experiences that are interactive, memorable, and
              scalable across events, businesses, and diverse environments.
            </p>

            <p className="text-lg text-neutral-500 leading-relaxed">
              From software to physical experiences, we build technology that engages, entertains,
              and creates meaningful interactions.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-sm text-neutral-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
