import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidgetPlaceholder from "@/components/ChatWidgetPlaceholder";
import { clinic } from "@/config/clinic";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: {
    default: `${clinic.name} – ${clinic.slogan}`,
    template: `%s | ${clinic.name}`,
  },
  description: clinic.description,
  metadataBase: new URL(clinic.url),
  openGraph: {
    title: `${clinic.name} – ${clinic.slogan}`,
    description: clinic.description,
    url: clinic.url,
    siteName: clinic.name,
    locale: "cs_CZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className="antialiased text-gray-900 bg-white">
        <SchemaOrg />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidgetPlaceholder />
      </body>
    </html>
  );
}
