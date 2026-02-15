import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-extrabold text-sky-500">404</h1>
      <p className="mt-4 text-xl text-gray-700">
        Tuto stránku jsme bohužel nenašli.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white text-lg font-semibold rounded-full transition-colors"
      >
        Zpět na úvodní stránku
      </Link>
    </section>
  );
}
