import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import VideoTile from "./VideoTile";
import { media } from "../lib/media";

const featured = media.filter((item) => item.featured);

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-t border-neutral-100">
      <div className="w-full flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900">
          Selected Works
        </h2>
        <p className="text-base text-neutral-500">A curation of our finest work.</p>
      </div>

      <div className="w-full mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
        {featured.map((item) => (
          <figure key={item.id} className={item.wide ? "sm:col-span-2" : undefined}>
            <div
              className={`relative w-full overflow-hidden rounded-sm bg-neutral-100 ${
                item.wide ? "" : "aspect-4/3"
              }`}
              style={item.wide ? { aspectRatio: `${item.width} / ${item.height}` } : undefined}
            >
              {item.type === "video" ? (
                <VideoTile src={item.src} poster={item.poster} title={item.title} />
              ) : (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes={item.wide ? "100vw" : "(min-width: 640px) 50vw, 100vw"}
                  className="object-cover object-top"
                />
              )}
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-medium text-neutral-900">{item.title}</h3>
              <span className="shrink-0 text-sm text-neutral-400">{item.tag}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="w-full mt-10 md:mt-12">
        <Link
          href="/gallery"
          className="group inline-flex items-center gap-2 rounded-sm border border-neutral-200 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-400"
        >
          View the full gallery
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </section>
  );
}
