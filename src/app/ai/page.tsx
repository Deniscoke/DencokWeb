import type { Metadata } from "next";
import { clinic } from "@/config/clinic";

export const metadata: Metadata = {
  title: "AI funkce – interní",
  description: "Přehled plánovaných AI funkcí pro ordinaci.",
  robots: { index: false, follow: false },
};

export default function AiPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-sky-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            AI funkce
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Přehled plánovaných AI funkcí pro {clinic.name}. Tato stránka je
            určena pro interní prezentaci.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Chatbot */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🤖</span>
                <h2 className="text-2xl font-bold text-gray-900">
                  AI Chatbot pro pacienty
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Inteligentní chatbot dostupný 24/7 na webu ordinace. Bude
                odpovídat na časté dotazy pacientů (ordinační doba, ceník,
                pojišťovny, příprava na zákrok), pomáhat s objednáváním a
                přesměrovávat složitější dotazy na personál.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Plánováno
                </span>
              </div>
            </div>

            {/* Recenze */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⭐</span>
                <h2 className="text-2xl font-bold text-gray-900">
                  Automatický sběr a správa recenzí
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Automatické odesílání žádostí o recenzi po návštěvě. AI
                analýza sentimentu recenzí, automatické zobrazení nejlepších
                recenzí na webu a upozornění na negativní zpětnou vazbu pro
                rychlou reakci.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Plánováno
                </span>
              </div>
            </div>

            {/* Připomínky */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🔔</span>
                <h2 className="text-2xl font-bold text-gray-900">
                  Inteligentní připomínky návštěv
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Automatické SMS a e-mailové připomínky před plánovanou
                návštěvou. AI predikce optimálního času pro další preventivní
                prohlídku na základě historie pacienta. Snížení počtu
                zmeškaných termínů.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Plánováno
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-sky-50 rounded-2xl p-8 text-center">
            <p className="text-gray-600">
              Tyto funkce jsou ve fázi plánování. Pro více informací nebo
              zapojení do pilotního testování kontaktujte{" "}
              <a
                href={`mailto:${clinic.email}`}
                className="text-sky-600 font-medium"
              >
                {clinic.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
