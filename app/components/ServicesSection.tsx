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
      className="py-20 md:py-28 px-6 md:px-12 lg:px-24 border-t border-slate-800"
    >
      <Reveal className="w-full max-w-2xl space-y-4">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
          Our Services
        </h2>
        <p className="text-base md:text-lg text-slate-300 leading-relaxed">
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
              className="relative h-full rounded-sm border border-slate-800 bg-slate-900 p-4 md:p-5"
            >
              <div className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-sm bg-slate-800 text-blue-400">
                <Icon size={16} strokeWidth={1.75} className="md:hidden" />
                <Icon size={16} strokeWidth={1.75} className="hidden md:block" />
              </div>

              <h3 className="mt-3 md:mt-4 text-base font-semibold text-white">{service.title}</h3>
              <p className="mt-1 md:mt-2 text-sm md:text-base text-slate-300 leading-relaxed">
                {service.description}
              </p>

              <span className="absolute right-4 top-4 md:right-5 md:top-5 text-xs font-medium text-slate-600">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
