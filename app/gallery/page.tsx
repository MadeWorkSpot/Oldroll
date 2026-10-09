import type { Metadata } from "next";
import Link from "next/link";
import GalleryGrid from "../components/GalleryGrid";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery — Oldroll",
  description:
    "Selected work from Oldroll: VR experiences, photo booths, and interactive products.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-blue-800 selection:text-white">
      {/* No fixed Navbar on this route, so no top padding is needed to clear it. */}
      <div className="px-6 md:px-12 lg:px-24 pt-8 pb-16 md:pb-24">
        <div className="w-full">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            Back home
          </Link>

          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="text-5xl font-semibold tracking-tight leading-[0.98] text-white md:text-6xl lg:text-7xl">
              Gallery
            </h1>
            <p className="text-base text-slate-400 lg:pb-3">
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
