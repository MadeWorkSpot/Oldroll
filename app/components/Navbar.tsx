"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

const links = [
  { label: "Home", hash: "#home" },
  { label: "About", hash: "#about" },
  { label: "Services", hash: "#services" },
  { label: "Gallery", hash: "#gallery" },
  { label: "Contact", hash: "#contact" },
];

// Shared by both bars so the two halves of the morph stay in lockstep.
const bar =
  "absolute left-0 block h-[1.5px] w-[22px] rounded-full bg-neutral-900 transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Hash links only resolve on the home page, so prefix them elsewhere.
  const hrefFor = (hash: string) => (isHome ? hash : `/${hash}`);

  // Solid background and rule once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation, including browser back/forward.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setIsOpen(false);
  }

  // Stop the page scrolling behind the open menu.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white border-b border-neutral-200" : "bg-white/90 border-b border-transparent"
        }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">
          <a href={hrefFor("#home")} className="flex items-center">
            <Image
              src="/logo/logo.png"
              alt="Oldroll Entertainments LLP"
              width={2005}
              height={593}
              priority
              className="h-8 w-auto md:h-10"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-base text-neutral-600">
            {links.map((link) => (
              <a
                key={link.label}
                href={hrefFor(link.hash)}
                className="py-2 transition-colors hover:text-neutral-900"
              >
                {link.label}
              </a>
            ))}
            <a
              href={hrefFor("#contact")}
              className="rounded-sm border border-neutral-200 px-5 py-2.5 font-medium text-neutral-900 transition-colors hover:border-neutral-400"
            >
              Start a project
            </a>
          </nav>

          {/* Mobile Toggle — two bars that converge and rotate into an X */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((open) => !open)}
            className="md:hidden -mr-3 flex h-12 w-12 items-center justify-center"
          >
            <span className="relative block h-4 w-[22px]">
              <span
                className={`${bar} ${isOpen ? "top-[7px] rotate-45" : "top-0.5"}`}
              />
              <span
                className={`${bar} ${isOpen ? "top-[7px] -rotate-45" : "top-[11px]"}`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Nav — kept outside <header> so `fixed` resolves against the
          viewport rather than the header box. Cheaper to composite on Android
          too, since the header no longer uses backdrop-filter. */}
      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={() => setIsOpen(false)}
            className="animate-menu-fade fixed inset-0 top-20 z-30 cursor-default bg-neutral-900/25 md:hidden"
          />

          <div
            id="mobile-menu"
            className="animate-menu-in fixed inset-x-0 top-20 z-40 max-h-menu overflow-y-auto overscroll-contain border-b border-neutral-200 bg-white shadow-lg shadow-neutral-900/5 md:hidden"
          >
            <nav className="px-6 pt-2 pb-6 flex flex-col">
              {links.map((link, index) => (
                <a
                  key={link.label}
                  href={hrefFor(link.hash)}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${80 + index * 55}ms` }}
                  className="animate-item-in group flex items-center justify-between border-b border-neutral-100 py-4 text-lg text-neutral-800"
                >
                  <span className="transition-colors group-hover:text-neutral-900">
                    {link.label}
                  </span>
                  <span className="text-neutral-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-500">
                    <ArrowRight size={18} />
                  </span>
                </a>
              ))}

              <a
                href={hrefFor("#contact")}
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${80 + links.length * 55}ms` }}
                className="animate-item-in mt-6 inline-flex items-center justify-center rounded-sm bg-neutral-900 px-5 py-3.5 text-base font-medium text-white"
              >
                Start a project
              </a>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
