import type { Metadata } from "next";
import Link from "next/link";
import { clinic } from "@/config/clinic";

export const metadata: Metadata = {
  title: "Ceník",
  description:
    "Přehledný ceník stomatologických služeb. Přijímáme všechny hlavní zdravotní pojišťovny.",
};

export default function CenikPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Ceník
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Přehled orientačních cen našich služeb. Přesnou cenu vám vždy
            sdělíme před zahájením léčby.
          </p>
        </div>
      </section>

      {/* Ceník tabulka */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                    Služba
                  </th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-gray-900">
                    Cena
                  </th>
                </tr>
              </thead>
              <tbody>
                {clinic.pricing.map((item, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <td className="px-6 py-4 text-gray-700">{item.service}</td>
                    <td className="px-6 py-4 text-right font-medium text-gray-900 whitespace-nowrap">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-gray-500 text-center">
            Uvedené ceny jsou orientační a mohou se lišit dle rozsahu ošetření.
            Přesnou kalkulaci obdržíte po vyšetření.
          </p>
        </div>
      </section>

      {/* Pojišťovny */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Smluvní pojišťovny
          </h2>
          <p className="mt-4 text-gray-600">
            Jsme smluvním partnerem těchto zdravotních pojišťoven. Preventivní
            prohlídky a základní ošetření jsou hrazeny z veřejného pojištění.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {clinic.insuranceCompanies.map((ins) => (
              <div
                key={ins}
                className="px-5 py-3 bg-white rounded-xl border border-gray-100 shadow-sm text-gray-700 font-medium"
              >
                {ins}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-sky-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Máte dotaz k cenám?
          </h2>
          <p className="mt-4 text-sky-100 text-lg">
            Kontaktujte nás a rádi vám poskytneme nezávaznou cenovou kalkulaci.
          </p>
          <div className="mt-8">
            <Link
              href="/kontakt#formular"
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-sky-600 text-lg font-semibold rounded-full transition-colors"
            >
              Kontaktujte nás
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
