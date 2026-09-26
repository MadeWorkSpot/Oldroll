import {
  Code2,
  LayoutGrid,
  Camera,
  CircuitBoard,
  Compass,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

const services: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet specific business needs, streamline workflows, and drive operational efficiency.",
    icon: Code2,
  },
  {
    title: "Application Development",
    description:
      "Scalable web and mobile applications engineered for optimal performance, smooth user experiences, and high reliability.",
    icon: LayoutGrid,
  },
  {
    title: "Photo Booths",
    description:
      "Interactive photo booth solutions and customized digital activation experiences combining hardware, software, and creative design.",
    icon: Camera,
  },
  {
    title: "Engineering Design",
    description:
      "Cross-disciplinary design bringing together electronics, hardware, and software into practical, tangible products.",
    icon: CircuitBoard,
  },
  {
    title: "IT Consulting",
    description:
      "Strategic advice and technical guidance to help organizations navigate digital transformation and build robust technology architecture.",
    icon: Compass,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 px-6 md:px-12 lg:px-24 border-t border-neutral-100"
    >
      <Reveal className="w-full max-w-2xl space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-400">
          What we do
        </p>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900">
          Our Services
        </h2>
        <p className="text-lg text-neutral-500 leading-relaxed">
          We bring together software, electronics, hardware, and creative design to transform ideas
          into practical, engaging, and scalable technology solutions.
        </p>
      </Reveal>

      <div className="w-full mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal
              key={service.title}
              as="div"
              delay={index * 70}
              className="group relative h-full rounded-sm border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:shadow-lg hover:shadow-neutral-900/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-neutral-100 text-neutral-900 transition-colors duration-300 group-hover:bg-neutral-900 group-hover:text-white">
                <Icon size={18} strokeWidth={1.75} />
              </div>

              <h3 className="mt-5 text-xl font-medium text-neutral-900">{service.title}</h3>
              <p className="mt-2 text-base text-neutral-500 leading-relaxed">
                {service.description}
              </p>

              <span className="absolute right-6 top-6 text-xs font-medium text-neutral-300 transition-colors duration-300 group-hover:text-neutral-400">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
