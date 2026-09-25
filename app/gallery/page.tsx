import type { Metadata } from "next";
import Link from "next/link";
import GalleryGrid from "../components/GalleryGrid";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery — Oldroll Entertainments LLP",
  description:
    "Selected work from Oldroll Entertainments LLP: VR experiences, photo booths, and interactive products.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="px-6 md:px-12 lg:px-24 pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="w-full">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            Back home
          </Link>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.02] text-neutral-900">
              Gallery
            </h1>
            <p className="text-lg text-neutral-500">
              Everything we&apos;ve built, in images and motion.
            </p>
          </div>

          <div className="mt-10 md:mt-14">
            <GalleryGrid />
          </div>
        </div>
      </div>
    </main>
  );
}
