import Link from "next/link";
import { clinic } from "@/config/clinic";

export default function HomePage() {
  return (
    <>
      {/* 1) Hero */}
      <section className="relative bg-gradient-to-br from-sky-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              {clinic.slogan}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
              {clinic.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/kontakt#formular"
                className="inline-flex items-center px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white text-lg font-semibold rounded-full transition-colors shadow-lg shadow-sky-500/25"
              >
                Objednat se
              </Link>
              <a
                href={`tel:${clinic.phoneRaw}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 text-lg font-semibold rounded-full border border-gray-200 transition-colors"
              >
                {clinic.phone}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-100 rounded-full opacity-50 blur-3xl" />
      </section>

      {/* 2) Rychlé objednání – 3 kroky */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Objednání je snadné
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Na návštěvu se objednáte za pár minut. Žádné čekání, žádné starosti.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Kontaktujte nás",
                desc: "Zavolejte, napište e-mail nebo vyplňte formulář na webu.",
              },
              {
                step: "2",
                title: "Vyberte termín",
                desc: "Nabídneme vám nejbližší volný termín dle vašich možností.",
              },
              {
                step: "3",
                title: "Přijďte k nám",
                desc: "Na místě se o vás profesionálně postaráme v příjemném prostředí.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center p-6 rounded-2xl bg-sky-50"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-sky-500 text-white text-2xl font-bold rounded-full">
                  {item.step}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/kontakt#formular"
              className="inline-flex items-center px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white text-lg font-semibold rounded-full transition-colors shadow-lg shadow-sky-500/25"
            >
              Objednat se online
            </Link>
          </div>
        </div>
      </section>

      {/* 3) Služby – 6 karet */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Naše služby
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Nabízíme komplexní stomatologickou péči pro celou rodinu.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinic.services.map((service) => (
              <Link
                key={service.id}
                href={`/sluzby#${service.id}`}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-sky-200 transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.shortDesc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/sluzby"
              className="text-sky-600 hover:text-sky-700 font-semibold transition-colors"
            >
              Zobrazit všechny služby →
            </Link>
          </div>
        </div>
      </section>

      {/* 4) Proč my */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Proč si vybrat nás?
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Spojujeme odbornost, moderní technologie a lidský přístup.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏥",
                title: "Moderní vybavení",
                desc: "Ordinace vybavená nejnovější technikou pro přesnou diagnostiku a šetrné ošetření.",
              },
              {
                icon: "👩‍⚕️",
                title: "Zkušený tým",
                desc: "Náš tým tvoří zkušení lékaři a hygienistky s praxí v oboru.",
              },
              {
                icon: "💆",
                title: "Bezbolestné ošetření",
                desc: "Používáme moderní anestetika a šetrné postupy pro maximální komfort.",
              },
              {
                icon: "🤝",
                title: "Individuální přístup",
                desc: "Ke každému pacientovi přistupujeme individuálně a s respektem.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5) Recenze */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Co říkají naši pacienti
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
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
          <div className="mt-10 text-center">
            <a
              href={clinic.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-sky-300 text-gray-700 font-semibold rounded-full transition-colors"
            >
              Napište nám recenzi na Google →
            </a>
          </div>
        </div>
      </section>

      {/* 6) Tým – krátký blok */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Náš tým
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Za každým zdravým úsměvem stojí tým odborníků, kterým můžete
            důvěřovat.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {clinic.team.map((member) => (
              <div key={member.name}>
                <div className="w-28 h-28 mx-auto bg-sky-100 rounded-full flex items-center justify-center text-4xl text-sky-300">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sky-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/tym"
              className="text-sky-600 hover:text-sky-700 font-semibold transition-colors"
            >
              Poznejte celý tým →
            </Link>
          </div>
        </div>
      </section>

      {/* 7) FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Časté dotazy
            </h2>
          </div>
          <div className="mt-12 space-y-4">
            {clinic.faq.map((item, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-sky-600 transition-colors list-none">
                  {item.question}
                  <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8) Závěrečný CTA band */}
      <section className="py-16 md:py-20 bg-sky-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Chcete zdravý a krásný úsměv?
          </h2>
          <p className="mt-4 text-sky-100 text-lg max-w-xl mx-auto">
            Objednejte se ještě dnes a svěřte se do péče našich odborníků.
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
