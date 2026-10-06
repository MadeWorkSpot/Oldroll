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
    <footer className="px-6 md:px-12 lg:px-24 border-t border-slate-800 bg-slate-950">
      <div className="w-full grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-5">
          <Image
            src="/logo/logo.png"
            alt="Oldroll"
            width={2005}
            height={593}
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="max-w-sm text-base text-slate-400 leading-relaxed">
            Engineering experiences, from code to reality.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-medium text-white">Navigate</h2>
          <ul className="mt-4 space-y-3 text-base text-slate-400">
            {navigate.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-medium text-white">Follow</h2>
          <ul className="mt-4 space-y-3 text-base text-slate-400">
            {follow.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-medium text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-base text-slate-400">
            <li>
              <a href="mailto:info@oldrollentertainments.com" className="hover:text-white transition-colors">
                info@oldrollentertainments.com
              </a>
            </li>
            <li>
              <a href="tel:+917293402204" className="hover:text-white transition-colors">
                +91 72934 02204
              </a>
            </li>
            <li>
              <a href="tel:+919061482884" className="hover:text-white transition-colors">
                +91 90614 82884
              </a>
            </li>
            <li>Wayanad Holdings, Vythiri, Wayanad</li>
          </ul>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 border-t border-slate-800 py-6 text-base text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Oldroll. All rights reserved.</p>
        <p>Engineering experiences, from code to reality.</p>
      </div>
    </footer>
  );
}
