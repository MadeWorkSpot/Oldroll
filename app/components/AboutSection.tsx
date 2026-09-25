import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-t border-neutral-100">
      <div className="w-full grid md:grid-cols-2 gap-12 lg:gap-16">
        <div className="group relative min-h-[20rem] md:min-h-[24rem] w-full rounded-sm overflow-hidden bg-neutral-100">
          <Image
            src="/test/chronicle-spot.jpeg"
            alt="The Chronicle Spot photo booth, built by Oldroll Entertainments"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="space-y-5">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900">
            About Our Studio
          </h2>

          <p className="text-lg text-neutral-500 leading-relaxed">
            Oldroll Entertainments LLP is a technology-driven company focused on developing
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
            {["Software", "Electronics", "Hardware", "Creative Design"].map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-neutral-200 px-3 py-1 text-sm text-neutral-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
