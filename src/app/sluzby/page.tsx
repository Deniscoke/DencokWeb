import type { Metadata } from "next";
import Link from "next/link";
import { clinic } from "@/config/clinic";

export const metadata: Metadata = {
  title: "Služby",
  description:
    "Kompletní nabídka stomatologických služeb – preventivní prohlídky, dentální hygiena, bílé plomby, endodoncie, implantáty a estetická stomatologie.",
};

export default function SluzbyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Naše služby
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Nabízíme komplexní stomatologickou péči pro celou rodinu. Od
            preventivních prohlídek po estetické zákroky.
          </p>
        </div>
      </section>

      {/* Služby detail */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {clinic.services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24"
            >
              <div className="flex items-start gap-4">
                <span className="text-5xl shrink-0">{service.icon}</span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <Link
                    href="/kontakt#formular"
                    className="inline-flex items-center mt-4 text-sky-600 hover:text-sky-700 font-semibold transition-colors"
                  >
                    Objednat se na {service.title.toLowerCase()} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-sky-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Potřebujete poradit s výběrem?
          </h2>
          <p className="mt-4 text-sky-100 text-lg">
            Kontaktujte nás a rádi vám doporučíme vhodnou léčbu.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt#formular"
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-sky-600 text-lg font-semibold rounded-full transition-colors"
            >
              Objednat se
            </Link>
            <a
              href={`tel:${clinic.phoneRaw}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white text-lg font-semibold rounded-full transition-colors"
            >
              {clinic.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
