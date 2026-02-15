import Link from "next/link";
import { clinic } from "@/config/clinic";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* O ordinaci */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🦷</span>
              <span className="text-xl font-bold text-white">
                {clinic.shortName}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              {clinic.description}
            </p>
          </div>

          {/* Rychlé odkazy */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigace</h3>
            <ul className="space-y-2">
              {[
                { href: "/sluzby", label: "Služby" },
                { href: "/cenik", label: "Ceník" },
                { href: "/prvni-navsteva", label: "První návštěva" },
                { href: "/tym", label: "Náš tým" },
                { href: "/recenze", label: "Recenze" },
                { href: "/kontakt", label: "Kontakt" },
                { href: "/gdpr", label: "Zásady ochrany údajů" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>{clinic.address.full}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📞</span>
                <a
                  href={`tel:${clinic.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {clinic.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✉️</span>
                <a
                  href={`mailto:${clinic.email}`}
                  className="hover:text-white transition-colors"
                >
                  {clinic.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Ordinační doba */}
          <div>
            <h3 className="text-white font-semibold mb-4">Ordinační doba</h3>
            <ul className="space-y-1.5 text-sm">
              {clinic.hours.map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span className="text-gray-400">{h.day}</span>
                  <span
                    className={
                      h.time === "Zavřeno" ? "text-gray-500" : "text-gray-300"
                    }
                  >
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {clinic.name}. Všechna práva
            vyhrazena.
          </p>
          <div className="flex gap-4">
            <Link href="/gdpr" className="hover:text-gray-300 transition-colors">
              Zásady ochrany údajů
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
