import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import VideoTile from "./VideoTile";
import Reveal from "./Reveal";
import { media } from "../lib/media";

const featured = media.filter((item) => item.featured);

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-20 md:py-28 px-6 md:px-12 lg:px-24 border-t border-neutral-100"
    >
      <Reveal className="w-full flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-400">
            Portfolio
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight text-neutral-900">
            Selected Works
          </h2>
        </div>
        <p className="text-base text-neutral-500">A curation of our finest work.</p>
      </Reveal>

      <div className="w-full mt-10 md:mt-14 columns-1 sm:columns-2 lg:columns-3 gap-x-6">
        {featured.map((item, index) => (
          <Reveal
            as="figure"
            key={item.id}
            delay={index * 80}
            className="group mb-10 break-inside-avoid md:mb-12"
          >
            <div
              className="relative w-full overflow-hidden rounded-sm bg-neutral-100"
              style={{ aspectRatio: `${item.width} / ${item.height}` }}
            >
              {item.type === "video" ? (
                <VideoTile src={item.src} poster={item.poster} title={item.title} />
              ) : (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              )}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-neutral-900/10"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-medium text-neutral-900">{item.title}</h3>
              <span className="shrink-0 text-sm text-neutral-400">{item.tag}</span>
            </figcaption>
          </Reveal>
        ))}
      </div>

      <Reveal className="w-full mt-12 md:mt-16">
        <Link
          href="/gallery"
          className="group inline-flex items-center gap-2 rounded-sm border border-neutral-200 px-6 py-3 text-sm font-medium text-neutral-900 transition-all duration-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
        >
          View the full gallery
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>
      </Reveal>
    </section>
  );
}
