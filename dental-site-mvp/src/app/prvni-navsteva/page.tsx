import type { Metadata } from "next";
import Link from "next/link";
import { clinic } from "@/config/clinic";

export const metadata: Metadata = {
  title: "První návštěva",
  description:
    "Jak probíhá první návštěva v naší zubní ordinaci? Co si vzít s sebou a co vás čeká.",
};

export default function PrvniNavstevaPage() {
  const steps = [
    {
      num: "1",
      title: "Registrace a příchod",
      desc: "Na recepci se zaregistrujete, předložíte kartičku pojišťovny a občanský průkaz. Vyplníte krátký zdravotní dotazník.",
    },
    {
      num: "2",
      title: "Úvodní konzultace",
      desc: "Lékař si s vámi promluví o vašich obtížích, přáních a očekáváních. Nebojte se ptát na cokoliv.",
    },
    {
      num: "3",
      title: "Kompletní vyšetření",
      desc: "Provedeme důkladné vyšetření dutiny ústní, zhotovíme RTG snímek (panoramatický nebo cílený) a zhodnotíme stav vašeho chrupu.",
    },
    {
      num: "4",
      title: "Plán léčby",
      desc: "Na základě vyšetření vám navrhneme individuální plán léčby včetně předpokládaných nákladů a časového harmonogramu.",
    },
    {
      num: "5",
      title: "Další kroky",
      desc: "Společně se domluvíme na dalších termínech. Pokud je to možné, některé jednoduché ošetření provedeme rovnou.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            První návštěva
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Víme, že první návštěva u nového zubaře může být stresující. Proto
            vám přinášíme přehled toho, co vás čeká.
          </p>
        </div>
      </section>

      {/* Co si vzít */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Co si vzít s sebou?
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Kartičku zdravotní pojišťovny",
              "Občanský průkaz",
              "Seznam užívaných léků",
              "Předchozí RTG snímky (pokud máte)",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-sky-50 rounded-xl px-5 py-4"
              >
                <span className="text-sky-500 text-xl">✓</span>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kroky */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Jak návštěva probíhá?
          </h2>
          <div className="mt-12 space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-sky-500 text-white text-xl font-bold rounded-full">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tip */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900">
              Máte strach ze zubaře?
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed max-w-xl mx-auto">
              Nebojte se nám o tom říct. Náš tým je zkušený v péči o úzkostné
              pacienty a přizpůsobíme tempo ošetření vašemu komfortu. Používáme
              moderní bezbolestné metody.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-sky-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Objednejte se na první návštěvu
          </h2>
          <p className="mt-4 text-sky-100 text-lg">
            Počítejte s přibližně 45–60 minutami. Vše vám vysvětlíme a
            odpovíme na vaše dotazy.
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
