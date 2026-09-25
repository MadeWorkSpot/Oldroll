import Image from "next/image";
import VideoTile from "./VideoTile";
import { media } from "../lib/media";

export default function GalleryGrid() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-y-12">
      {media.map((item) => (
        <figure key={item.id} className={item.wide ? "sm:col-span-2 lg:col-span-3" : undefined}>
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
                sizes={
                  item.wide
                    ? "100vw"
                    : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                }
                className="object-cover object-top"
              />
            )}
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
