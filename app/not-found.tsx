import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-brand-100 px-6 py-24 text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-brand-700">404</p>
      <h1 className="mt-6 text-5xl font-semibold text-brand-950">Page not found</h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-brand-700">
        The page you are looking for may have moved or no longer exists.
      </p>
      <Link href="/" className="mt-8 inline-flex rounded-full border border-brand-900 bg-brand-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800">
        Return home
      </Link>
    </main>
  );
}
