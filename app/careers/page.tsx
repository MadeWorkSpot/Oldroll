import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CareersForm from "../components/CareersForm";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Careers — Oldroll",
  description:
    "Join Oldroll. Send us your details and we'll get back to you about open roles.",
};

export default function CareersPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white selection:bg-blue-800 selection:text-white">
      {/* Ambient backdrop: hairline grid fading out, plus a soft blue wash. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid-lines mask-fade-b absolute inset-0 opacity-60" />
        
        <div className="animate-drift absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-blue-600/12 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>

      {/* No fixed Navbar on this route, so no top padding is needed to clear it. */}
      <div className="relative px-6 pt-8 pb-16 md:px-12 md:pb-24 lg:px-24">
        <div className="w-full">
          <Reveal>
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
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
                  Join the team
                </p>
                <h1 className="mt-3 text-5xl font-semibold tracking-tight leading-[0.98] text-white md:text-6xl lg:text-7xl">
                  Careers
                </h1>
              </div>
              <p className="max-w-md text-base text-slate-400 lg:pb-3">
                Tell us about yourself and we&apos;ll get back to you.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid items-start gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="space-y-6 border-t border-slate-800 pt-8">
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Let&apos;s build something together.
                </h2>

                <p className="text-base leading-relaxed text-slate-300 md:text-lg">
                  We are always looking for people who care about the craft. Fill out the form
                  with your details and our team will reach out to you.
                </p>

                <div className="space-y-4 pt-2">
                  <p className="text-base text-slate-300 transition-colors hover:text-white md:text-lg">
                    <a
                      href="mailto:info@oldrollentertainments.com"
                      className="transition-colors hover:text-white"
                    >
                      info@oldrollentertainments.com
                    </a>
                  </p>

                  <p className="text-base leading-relaxed text-slate-400 md:text-lg">
                    Wayanad Holdings
                    <br />
                    Vythiri, Wayanad
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-7">
              <CareersForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}