import type { Metadata } from "next";
import { clinic } from "@/config/clinic";

export const metadata: Metadata = {
  title: "Recenze",
  description:
    "Přečtěte si, co říkají naši pacienti o kvalitě naší stomatologické péče.",
};

export default function RecenzePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Recenze pacientů
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Vaše zpětná vazba je pro nás důležitá. Přečtěte si, co říkají naši
            pacienti.
          </p>
        </div>
      </section>

      {/* Recenze */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clinic.reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <span key={j} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span className="font-medium text-gray-900">
                    {review.name}
                  </span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
            <p className="text-gray-500">
              Zde se budou zobrazovat další recenze z Google a dalších platforem.
            </p>
          </div>
        </div>
      </section>

      {/* CTA na Google */}
      <section className="py-16 md:py-20 bg-sky-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Byli jste u nás spokojeni?
          </h2>
          <p className="mt-4 text-sky-100 text-lg">
            Budeme rádi za vaši recenzi na Google. Pomáháte tak ostatním najít
            kvalitní péči.
          </p>
          <div className="mt-8">
            <a
              href={clinic.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-sky-600 text-lg font-semibold rounded-full transition-colors"
            >
              Napsat recenzi na Google
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
