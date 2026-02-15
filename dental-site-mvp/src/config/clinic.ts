export const clinic = {
  name: "DentCare Clinic",
  shortName: "DentCare",
  description:
    "Moderní zubní ordinace v centru Prahy. Kvalitní péče, bezbolestné ošetření a příjemné prostředí pro celou rodinu.",
  slogan: "Zdravý úsměv začíná u nás",

  // Kontaktní údaje
  phone: "+420 123 456 789",
  phoneRaw: "+420123456789",
  email: "info@dentcare.cz",
  emailBooking: "objednavky@dentcare.cz",

  // Adresa
  address: {
    street: "Vodičkova 30",
    city: "Praha 1",
    zip: "110 00",
    full: "Vodičkova 30, 110 00 Praha 1",
  },

  // GPS pro mapu
  gps: {
    lat: 50.0833,
    lng: 14.4237,
  },

  // Ordinační doba
  hours: [
    { day: "Pondělí", time: "8:00 – 18:00" },
    { day: "Úterý", time: "8:00 – 18:00" },
    { day: "Středa", time: "8:00 – 16:00" },
    { day: "Čtvrtek", time: "8:00 – 18:00" },
    { day: "Pátek", time: "8:00 – 14:00" },
    { day: "Sobota", time: "Zavřeno" },
    { day: "Neděle", time: "Zavřeno" },
  ],

  // Služby
  services: [
    {
      id: "preventivni",
      title: "Preventivní prohlídky",
      shortDesc: "Pravidelné kontroly pro zdravý úsměv.",
      description:
        "Pravidelné preventivní prohlídky jsou základem zdravých zubů. Doporučujeme návštěvu alespoň 2× ročně. Součástí je kompletní vyšetření dutiny ústní, RTG snímek a plán léčby.",
      icon: "🛡️",
    },
    {
      id: "hygiena",
      title: "Dentální hygiena",
      shortDesc: "Profesionální čištění a odstranění zubního kamene.",
      description:
        "Profesionální dentální hygiena zahrnuje odstranění zubního kamene, pigmentací a leštění zubů. Naučíme vás správnou techniku čištění a doporučíme vhodné pomůcky.",
      icon: "✨",
    },
    {
      id: "bila-plomba",
      title: "Bílé plomby",
      shortDesc: "Estetické výplně v barvě vašich zubů.",
      description:
        "Používáme nejkvalitnější kompozitní materiály pro estetické výplně, které jsou prakticky nerozeznatelné od přirozeného zubu. Bezbolestné ošetření s lokální anestézií.",
      icon: "🦷",
    },
    {
      id: "endodoncie",
      title: "Endodoncie",
      shortDesc: "Léčba kořenových kanálků moderními metodami.",
      description:
        "Moderní endodontické ošetření s využitím strojových nástrojů a elektronického měření délky kanálku. Zachráníme i zuby, které by jinak musely být extrahovány.",
      icon: "🔬",
    },
    {
      id: "implantaty",
      title: "Zubní implantáty",
      shortDesc: "Trvalé řešení chybějících zubů.",
      description:
        "Zubní implantáty jsou nejmodernějším řešením pro nahrazení chybějících zubů. Používáme prémiové implantační systémy s celoživotní zárukou na tělo implantátu.",
      icon: "⚙️",
    },
    {
      id: "estetika",
      title: "Estetická stomatologie",
      shortDesc: "Bělení zubů, fazety a kompletní proměny úsměvu.",
      description:
        "Nabízíme profesionální bělení zubů, keramické fazety a komplexní estetické rekonstrukce. Vytvoříme vám úsměv, na který budete hrdí.",
      icon: "💎",
    },
  ],

  // Ceník
  pricing: [
    { service: "Preventivní prohlídka", price: "Hrazeno pojišťovnou" },
    { service: "Dentální hygiena", price: "1 500 – 2 500 Kč" },
    { service: "Bílá plomba (kompozit)", price: "1 200 – 3 500 Kč" },
    { service: "Endodontické ošetření", price: "3 000 – 8 000 Kč" },
    { service: "Zubní implantát (komplet)", price: "25 000 – 45 000 Kč" },
    { service: "Bělení zubů", price: "5 000 – 8 000 Kč" },
    { service: "Keramická fazeta", price: "8 000 – 15 000 Kč" },
    { service: "Korunka (celokeramická)", price: "8 000 – 14 000 Kč" },
    { service: "Extrakce zubu", price: "800 – 2 500 Kč" },
    { service: "RTG snímek (panoramatický)", price: "500 – 800 Kč" },
  ],

  // Pojišťovny
  insuranceCompanies: [
    "VZP (111)",
    "VoZP (201)",
    "ČPZP (205)",
    "OZP (207)",
    "ZPŠ (209)",
    "ZPMV (211)",
    "RBP (213)",
  ],

  // Tým
  team: [
    {
      name: "MUDr. Jana Nováková",
      role: "Zubní lékařka – vedoucí ordinace",
      description:
        "Absolventka 1. LF UK v Praze. 15 let zkušeností v oboru. Specializuje se na estetickou stomatologii a implantologii.",
      image: "/team/doctor-1.jpg",
    },
    {
      name: "MUDr. Petr Svoboda",
      role: "Zubní lékař",
      description:
        "Absolvent LF MU v Brně. Specializuje se na endodoncii a protetiku. Pravidelně se vzdělává na zahraničních kongresech.",
      image: "/team/doctor-2.jpg",
    },
    {
      name: "Bc. Markéta Dvořáková",
      role: "Dentální hygienistka",
      description:
        "Certifikovaná dentální hygienistka s 8letou praxí. Specializuje se na prevenci a profesionální čištění zubů.",
      image: "/team/hygienist-1.jpg",
    },
  ],

  // Ukázkové recenze
  reviews: [
    {
      name: "Marie K.",
      rating: 5,
      text: "Konečně jsem našla zubní ordinaci, kde se nebojím. Paní doktorka je velmi příjemná a vše vysvětlí. Doporučuji všem, kteří mají strach ze zubaře.",
      date: "Před 2 měsíci",
    },
    {
      name: "Jan P.",
      rating: 5,
      text: "Profesionální přístup, moderní vybavení a hlavně bezbolestné ošetření. Dentální hygiena proběhla výborně, zuby jako nové!",
      date: "Před 1 měsícem",
    },
    {
      name: "Lucie S.",
      rating: 5,
      text: "S implantátem jsem maximálně spokojená. Celý proces mi byl dopředu vysvětlen a výsledek předčil moje očekávání. Děkuji celému týmu!",
      date: "Před 3 týdny",
    },
  ],

  // FAQ
  faq: [
    {
      question: "Bolí ošetření u zubaře?",
      answer:
        "Používáme moderní anestetika, díky kterým je ošetření prakticky bezbolestné. Před aplikací anestezie navíc místo znecitlivíme gelem, takže neucítíte ani vpich jehly.",
    },
    {
      question: "Kolik stojí ošetření?",
      answer:
        "Ceny závisí na typu ošetření. Preventivní prohlídky jsou hrazeny pojišťovnou. Kompletní ceník najdete na stránce Ceník. Na úvodní konzultaci vám vždy předem sdělíme předpokládanou cenu léčby.",
    },
    {
      question: "Které pojišťovny přijímáte?",
      answer:
        "Přijímáme všechny hlavní české zdravotní pojišťovny – VZP, VoZP, ČPZP, OZP, ZPŠ, ZPMV a RBP. Preventivní prohlídky a základní ošetření jsou hrazeny z veřejného pojištění.",
    },
    {
      question: "Jak probíhá první návštěva?",
      answer:
        "Při první návštěvě provedeme kompletní vyšetření, zhotovíme RTG snímek a sestavíme individuální plán léčby. Počítejte s cca 45–60 minut. Vezměte s sebou kartičku pojišťovny a občanský průkaz.",
    },
    {
      question: "Jak se mohu objednat?",
      answer:
        "Objednat se můžete telefonicky, e-mailem nebo přes náš online formulář. Snažíme se nabídnout termín do jednoho týdne, v akutních případech vás ošetříme v den zavolání.",
    },
    {
      question: "Máte pohotovost nebo akutní příjem?",
      answer:
        "Nemáme nepřetržitou pohotovost, ale v případě akutní bolesti nás kontaktujte telefonicky a pokusíme se vás ošetřit co nejdříve, ideálně tentýž den. Mimo ordinační dobu doporučujeme zubní pohotovost.",
    },
  ],

  // Odkazy a sociální sítě
  social: {
    google:
      "https://www.google.com/maps/place/...",
    facebook: "https://www.facebook.com/dentcare",
    instagram: "https://www.instagram.com/dentcare",
  },

  // URL webu
  url: "https://www.dentcare.cz",

  // Barvy – Tailwind třídy
  colors: {
    primary: "sky",       // hlavní barva (sky-500, sky-600 atd.)
    accent: "emerald",    // akcentová barva
  },
} as const;

export type Clinic = typeof clinic;
