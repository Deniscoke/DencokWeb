"use client";

import { useState } from "react";
import Link from "next/link";
import { clinic } from "@/config/clinic";

const navLinks = [
  { href: "/", label: "Úvod" },
  { href: "/sluzby", label: "Služby" },
  { href: "/cenik", label: "Ceník" },
  { href: "/prvni-navsteva", label: "První návštěva" },
  { href: "/tym", label: "Náš tým" },
  { href: "/recenze", label: "Recenze" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">🦷</span>
            <span className="text-xl font-bold text-gray-900">
              {clinic.shortName}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-sky-600 rounded-lg hover:bg-sky-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${clinic.phoneRaw}`}
              className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors"
            >
              {clinic.phone}
            </a>
            <Link
              href="/kontakt#formular"
              className="inline-flex items-center px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold rounded-full transition-colors shadow-sm"
            >
              Objednat se
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Otevřít menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="flex flex-col px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href={`tel:${clinic.phoneRaw}`}
                className="px-3 py-2.5 text-base font-medium text-gray-700"
              >
                📞 {clinic.phone}
              </a>
              <Link
                href="/kontakt#formular"
                onClick={() => setMobileOpen(false)}
                className="mx-3 text-center px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full transition-colors"
              >
                Objednat se
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
