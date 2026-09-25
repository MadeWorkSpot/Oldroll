const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet specific business needs, streamline workflows, and drive operational efficiency.",
  },
  {
    title: "Application Development",
    description:
      "Scalable web and mobile applications engineered for optimal performance, smooth user experiences, and high reliability.",
  },
  {
    title: "Photo Booths",
    description:
      "Interactive photo booth solutions and customized digital activation experiences combining hardware, software, and creative design.",
  },
  {
    title: "Engineering Design",
    description:
      "Cross-disciplinary design bringing together electronics, hardware, and software into practical, tangible products.",
  },
  {
    title: "IT Consulting",
    description:
      "Strategic advice and technical guidance to help organizations navigate digital transformation and build robust technology architecture.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-t border-neutral-100"
    >
      <div className="w-full max-w-2xl space-y-4">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900">
          Our Services
        </h2>
        <p className="text-lg text-neutral-500 leading-relaxed">
          We bring together software, electronics, hardware, and creative design to transform ideas
          into practical, engaging, and scalable technology solutions.
        </p>
      </div>

      <div className="w-full mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {services.map((service) => (
          <div key={service.title}>
            <h3 className="text-xl font-medium text-neutral-900">{service.title}</h3>
            <p className="mt-2 text-base text-neutral-500 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
