import type { Metadata } from "next";
import { clinic } from "@/config/clinic";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktujte naši zubní ordinaci. ${clinic.address.full}. Telefon: ${clinic.phone}.`,
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Kontakt
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Jsme tu pro vás. Kontaktujte nás telefonicky, e-mailem nebo přes
            formulář.
          </p>
        </div>
      </section>

      {/* Kontaktní info + formulář */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Kontaktní údaje
              </h2>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Adresa</h3>
                    <p className="text-gray-600">{clinic.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefon</h3>
                    <a
                      href={`tel:${clinic.phoneRaw}`}
                      className="text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      {clinic.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">E-mail</h3>
                    <a
                      href={`mailto:${clinic.email}`}
                      className="text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      {clinic.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Ordinační hodiny */}
              <h3 className="mt-10 text-xl font-bold text-gray-900">
                Ordinační doba
              </h3>
              <ul className="mt-4 space-y-2">
                {clinic.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between text-gray-600 border-b border-gray-50 pb-2"
                  >
                    <span>{h.day}</span>
                    <span
                      className={
                        h.time === "Zavřeno"
                          ? "text-gray-400"
                          : "font-medium text-gray-900"
                      }
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Formulář */}
            <div id="formular" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900">
                Objednat se online
              </h2>
              <p className="mt-2 text-gray-600">
                Vyplňte formulář a my se vám ozveme s nabídkou termínu.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Mapa placeholder */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <svg className="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="font-medium">Mapa – {clinic.address.full}</p>
              <p className="text-sm mt-1">
                Zde bude vložena interaktivní mapa (Google Maps / Mapy.cz)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
