import type { Metadata } from "next";
import Link from "next/link";
import { clinic } from "@/config/clinic";

export const metadata: Metadata = {
  title: "Náš tým",
  description:
    "Seznamte se s naším týmem zkušených zubních lékařů a dentálních hygienistek.",
};

export default function TymPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Náš tým
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Za kvalitní péčí stojí zkušený a sehraný tým odborníků, kterým
            můžete důvěřovat.
          </p>
        </div>
      </section>

      {/* Tým */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {clinic.team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
              >
                <div className="w-32 h-32 shrink-0 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-300">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {member.name}
                  </h2>
                  <p className="text-sky-600 font-medium mt-1">{member.role}</p>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hodnoty */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Naše hodnoty
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Odbornost",
                desc: "Pravidelně se vzděláváme a sledujeme nejnovější trendy v oboru stomatologie.",
              },
              {
                title: "Empatie",
                desc: "Rozumíme obavám pacientů a vytváříme přátelské a klidné prostředí.",
              },
              {
                title: "Transparentnost",
                desc: "Vždy vám vysvětlíme postup léčby a předem sdělíme cenu ošetření.",
              },
            ].map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {val.title}
                </h3>
                <p className="mt-2 text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-sky-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Svěřte se do našich rukou
          </h2>
          <p className="mt-4 text-sky-100 text-lg">
            Objednejte se a přesvědčte se sami o kvalitě naší péče.
          </p>
          <div className="mt-8">
            <Link
              href="/kontakt#formular"
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-sky-600 text-lg font-semibold rounded-full transition-colors"
            >
              Objednat se
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
