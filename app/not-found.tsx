import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <div className="space-y-4">
        <h1 className="text-6xl font-medium tracking-tight text-neutral-900">404</h1>
        <p className="text-neutral-500">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-neutral-900 text-white text-base font-medium rounded-sm hover:bg-neutral-800 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
