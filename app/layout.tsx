import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.website),
  title: {
    default: `${site.name} — Estrena tu iPhone a crédito`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "iPhone a crédito",
    "celulares a crédito Colombia",
    "iPhone para reportados",
    "Play Móvil",
    "financiación iPhone Pereira",
    "financiación iPhone Armenia",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — Estrena tu iPhone a crédito`,
    description: site.description,
    url: site.website,
    siteName: site.name,
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Estrena tu iPhone a crédito`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050308",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CO" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
