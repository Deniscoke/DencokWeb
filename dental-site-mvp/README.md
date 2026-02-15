# DentCare Clinic – MVP web pro zubní ordinaci

Moderní, rychlý a konverzní web (šablona) pro zubní ordinace v ČR. Postaveno na Next.js 14, TypeScript a Tailwind CSS.

## Rychlý start

```bash
# Instalace závislostí
npm install

# Spuštění vývojového serveru
npm run dev

# Build pro produkci
npm run build

# Spuštění produkčního serveru
npm start
```

Vývojový server poběží na [http://localhost:3000](http://localhost:3000).

## Struktura webu

| Stránka           | URL              | Popis                              |
| ----------------- | ---------------- | ---------------------------------- |
| Úvod              | `/`              | Homepage se všemi klíčovými sekcemi |
| Služby            | `/sluzby`        | Přehled a detaily služeb            |
| Ceník             | `/cenik`         | Ceník + smluvní pojišťovny         |
| První návštěva    | `/prvni-navsteva`| Průvodce první návštěvou            |
| Náš tým           | `/tym`           | Profily členů týmu                  |
| Recenze           | `/recenze`       | Recenze pacientů + CTA na Google    |
| Kontakt           | `/kontakt`       | Kontaktní info + objednávkový formulář |
| GDPR              | `/gdpr`          | Zásady ochrany osobních údajů       |
| AI (skrytá)       | `/ai`            | Interní přehled plánovaných AI funkcí |

## Kde měnit údaje ordinace

Veškeré údaje ordinace (název, telefon, adresa, ordinační doba, služby, ceník, tým, recenze, FAQ atd.) jsou v jednom konfiguračním souboru:

```
src/config/clinic.ts
```

Stačí upravit hodnoty v tomto souboru a celý web se automaticky aktualizuje.

## Nasazení na Vercel

1. Pushněte projekt na GitHub
2. Propojte repozitář na [vercel.com](https://vercel.com)
3. Vercel automaticky detekuje Next.js a provede build
4. Přidejte vlastní doménu v nastavení projektu

## Napojení odesílání formuláře (SendGrid / Resend)

Formulář na stránce `/kontakt` aktuálně funguje přes **mailto:** fallback. Pro napojení na e-mailovou službu:

1. Nainstalujte knihovnu:
   ```bash
   npm install resend
   # nebo
   npm install @sendgrid/mail
   ```

2. Přidejte environment variable:
   ```
   RESEND_API_KEY=re_xxxxxxxxx
   ```

3. Upravte API endpoint v `src/app/api/contact/route.ts` – odkomentujte připravený kód a doplňte svůj e-mail.

## Technologie

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Schema.org** (LocalBusiness + Dentist)
- **SEO**: meta tagy, OpenGraph, sitemap.xml, robots.txt

## Licence

Tento projekt je šablona určená pro komerční použití.
