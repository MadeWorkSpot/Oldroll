import Image from "next/image";
import VideoTile from "./VideoTile";
import { media } from "../lib/media";

export default function GalleryGrid() {
  return (
    <div className="w-full columns-1 sm:columns-2 lg:columns-3 gap-x-6">
      {media.map((item) => (
        <figure key={item.id} className="mb-10 break-inside-avoid md:mb-12">
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
                className="object-cover"
              />
            )}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-neutral-900/10"
            />
          </div>
          <figcaption className="mt-4 flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-medium text-neutral-900">{item.title}</h2>
            <span className="shrink-0 text-sm text-neutral-400">{item.tag}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
