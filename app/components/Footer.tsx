import Image from "next/image";
import Link from "next/link";

const navigate = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
];

const follow = [
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 border-t border-neutral-100 bg-white">
      <div className="w-full grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-6 space-y-5">
          <Image
            src="/logo/logo.png"
            alt="Oldroll Entertainments LLP"
            width={2005}
            height={593}
            className="h-10 w-auto"
          />
          <p className="max-w-sm text-base text-neutral-500 leading-relaxed">
            Engineering experiences, from code to reality.
          </p>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-medium text-neutral-900">Navigate</h2>
          <ul className="mt-4 space-y-3 text-base text-neutral-500">
            {navigate.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-neutral-900 transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-medium text-neutral-900">Follow</h2>
          <ul className="mt-4 space-y-3 text-base text-neutral-500">
            {follow.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-neutral-900 transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 border-t border-neutral-100 py-6 text-base text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Oldroll Entertainments LLP. All rights reserved.</p>
        <p>Engineering experiences, from code to reality.</p>
      </div>
    </footer>
  );
}
