import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://starsonstage.fr"),
  title: "Stars On Stage — Booking d’artistes pour clubs, bars et événements",
  description:
    "Stars On Stage accompagne clubs, bars, plages, BDE et organisateurs d’événements dans le booking d’artistes, DJ sets et showcases adaptés à leur public.",
  keywords: [
    "booking artistes",
    "agence de booking",
    "DJ set",
    "showcase",
    "rap",
    "afro",
    "drill",
    "club",
    "événement privé",
    "BDE",
  ],
  authors: [{ name: "Stars On Stage" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://starsonstage.fr",
    title: "Stars On Stage — Booking d’artistes pour clubs, bars et événements",
    description:
      "Stars On Stage accompagne clubs, bars, plages, BDE et organisateurs d’événements dans le booking d’artistes, DJ sets et showcases adaptés à leur public.",
    siteName: "Stars On Stage",
    images: [
      {
        url: "/og-starsonstage.svg",
        width: 1200,
        height: 630,
        alt: "Stars On Stage — Booking d’artistes premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stars On Stage — Booking d’artistes",
    description:
      "Booking d’artistes pour clubs, bars, plages, BDE, événements privés et festivals.",
    images: ["/og-starsonstage.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased selection:bg-violet-neon">
        {children}
      </body>
    </html>
  );
}
