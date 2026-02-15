import type { Metadata } from "next";
import { clinic } from "@/config/clinic";

export const metadata: Metadata = {
  title: "Zásady ochrany osobních údajů",
  description:
    "Informace o zpracování osobních údajů v naší zubní ordinaci dle GDPR.",
};

export default function GdprPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-sky-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Zásady ochrany osobních údajů
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            1. Správce osobních údajů
          </h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Správcem osobních údajů je {clinic.name}, se sídlem{" "}
            {clinic.address.full}, e-mail:{" "}
            <a href={`mailto:${clinic.email}`} className="text-sky-600">
              {clinic.email}
            </a>
            , telefon: {clinic.phone} (dále jen &bdquo;správce&ldquo;).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            2. Jaké osobní údaje zpracováváme
          </h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Zpracováváme osobní údaje, které nám poskytnete v rámci objednávky
            nebo kontaktního formuláře:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-2 space-y-1">
            <li>Jméno a příjmení</li>
            <li>Telefonní číslo</li>
            <li>E-mailová adresa</li>
            <li>Obsah zprávy</li>
          </ul>
          <p className="text-gray-600 mt-2 leading-relaxed">
            V rámci poskytování zdravotní péče zpracováváme dále zdravotnickou
            dokumentaci dle platných právních předpisů.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            3. Účel zpracování
          </h2>
          <ul className="list-disc pl-6 text-gray-600 mt-2 space-y-1">
            <li>
              Kontaktní formulář: zpracování vaší poptávky a objednání termínu
              (právní základ: oprávněný zájem / souhlas)
            </li>
            <li>
              Zdravotní péče: vedení zdravotnické dokumentace (právní základ:
              plnění právní povinnosti)
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            4. Doba uchovávání
          </h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Údaje z kontaktního formuláře uchováváme po dobu nezbytnou pro
            vyřízení vaší žádosti, maximálně 1 rok. Zdravotnickou dokumentaci
            uchováváme dle platných právních předpisů (zpravidla 10 let od
            posledního ošetření).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            5. Vaše práva
          </h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Máte právo na přístup ke svým osobním údajům, jejich opravu,
            výmaz, omezení zpracování, přenositelnost a právo vznést námitku.
            Pro uplatnění těchto práv nás kontaktujte na{" "}
            <a href={`mailto:${clinic.email}`} className="text-sky-600">
              {clinic.email}
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            6. Předávání údajů
          </h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Osobní údaje nepředáváme třetím stranám s výjimkou případů
            vyžadovaných zákonem (např. zdravotní pojišťovny, orgány veřejné
            moci). Údaje nezpracováváme mimo EU/EHP.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            7. Cookies
          </h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Tento web aktuálně nepoužívá analytické ani reklamní cookies.
            Používáme pouze technicky nezbytné cookies pro správné fungování
            webu.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            8. Kontakt na dozorový úřad
          </h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            V případě, že se domníváte, že zpracováním vašich osobních údajů
            dochází k porušení právních předpisů, máte právo podat stížnost u
            Úřadu pro ochranu osobních údajů (www.uoou.cz).
          </p>

          <p className="text-gray-500 mt-10 text-sm">
            Tyto zásady jsou platné od 1. 1. 2024 a budou průběžně
            aktualizovány.
          </p>
        </div>
      </section>
    </>
  );
}
