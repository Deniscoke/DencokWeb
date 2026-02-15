import { NextRequest, NextResponse } from "next/server";

/**
 * Placeholder API endpoint pro odesílání kontaktního formuláře.
 *
 * BUDOUCÍ NAPOJENÍ:
 * 1. Nainstalujte: npm install resend (nebo @sendgrid/mail)
 * 2. Přidejte env variable: RESEND_API_KEY=...
 * 3. Odkomentujte a upravte kód níže.
 */

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, email, message } = body;

  // Validace
  if (!name || !phone) {
    return NextResponse.json(
      { error: "Jméno a telefon jsou povinné." },
      { status: 400 }
    );
  }

  // --- PLACEHOLDER: Napojení na e-mailovou službu ---
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  //
  // await resend.emails.send({
  //   from: 'web@dentcare.cz',
  //   to: 'objednavky@dentcare.cz',
  //   subject: `Nová objednávka z webu – ${name}`,
  //   text: `Jméno: ${name}\nTelefon: ${phone}\nE-mail: ${email || 'neuvedeno'}\n\nZpráva:\n${message || 'neuvedeno'}`,
  // });
  //
  // --- KONEC PLACEHOLDERU ---

  console.log("Nová objednávka z webu:", { name, phone, email, message });

  return NextResponse.json({ success: true });
}
