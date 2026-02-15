import { clinic } from "@/config/clinic";

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist"],
    name: clinic.name,
    description: clinic.description,
    url: clinic.url,
    telephone: clinic.phone,
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.street,
      addressLocality: clinic.address.city,
      postalCode: clinic.address.zip,
      addressCountry: "CZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.gps.lat,
      longitude: clinic.gps.lng,
    },
    openingHoursSpecification: clinic.hours
      .filter((h) => h.time !== "Zavřeno")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.time.split(" – ")[0],
        closes: h.time.split(" – ")[1],
      })),
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
