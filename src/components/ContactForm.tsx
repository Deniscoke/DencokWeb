"use client";

import { useState, type FormEvent } from "react";
import { clinic } from "@/config/clinic";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    // Pokus o odeslání přes API endpoint (placeholder pro SendGrid/Resend)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
    } catch {
      // API endpoint ještě není nakonfigurován – fallback na mailto
    }

    // Fallback: mailto
    const subject = encodeURIComponent(
      `Objednávka z webu – ${name}`
    );
    const body = encodeURIComponent(
      `Jméno: ${name}\nTelefon: ${phone}\nE-mail: ${email}\n\nZpráva:\n${message}`
    );
    window.location.href = `mailto:${clinic.emailBooking}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Jméno a příjmení *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-shadow"
          placeholder="Jan Novák"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Telefon *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-shadow"
          placeholder="+420 777 888 999"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-shadow"
          placeholder="jan@email.cz"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Zpráva / důvod návštěvy
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-shadow resize-y"
          placeholder="Popište stručně důvod návštěvy nebo preferovaný termín..."
        />
      </div>
      <p className="text-xs text-gray-500">
        Odesláním formuláře souhlasíte se{" "}
        <a href="/gdpr" className="text-sky-600 underline">
          zpracováním osobních údajů
        </a>
        .
      </p>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-6 py-4 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white font-semibold rounded-xl transition-colors text-lg"
      >
        {status === "sending" ? "Odesílám..." : "Odeslat objednávku"}
      </button>
      {status === "sent" && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-center">
          Děkujeme! Vaše zpráva byla odeslána. Ozveme se vám co nejdříve.
        </div>
      )}
      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center">
          Při odesílání došlo k chybě. Zkuste to prosím znovu nebo nás
          kontaktujte telefonicky.
        </div>
      )}
    </form>
  );
}
