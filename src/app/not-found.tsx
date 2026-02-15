import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h1 className="text-6xl font-extrabold text-sky-500">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Stránka nenalezena
        </h2>
        <p className="mt-3 text-gray-600">
          Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla
          přesunuta.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full transition-colors"
          >
            Zpět na úvod
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-full border border-gray-200 transition-colors"
          >
            Kontaktujte nás
          </Link>
        </div>
      </div>
    </section>
  );
}
