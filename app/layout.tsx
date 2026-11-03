import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import { ModalProvider } from "./components/ModalContext";
import MemorandumModalLazy from "./components/MemorandumModalLazy";
import Analytics from "./components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tinyhouse.investments"),
  title: "TinyInvest – Tiny House Investment Plattform",
  description:
    "Tiny House kaufen und vermieten. Steueroptimierte Direktkäufe ab 74.700 € netto. §7g EStG · Betrieb auf Wunsch über lokale Partner.",
  icons: {
    icon: "/favicon1.png",
    shortcut: "/favicon1.png",
    apple: "/favicon1.png",
  },
  openGraph: {
    title: "TinyInvest – Tiny House Investment Plattform",
    description:
      "Tiny House kaufen und vermieten. Steueroptimierte Direktkäufe ab 74.700 € netto. §7g EStG · Betrieb auf Wunsch über lokale Partner.",
    url: "https://tinyhouse.investments",
    siteName: "TinyInvest",
    images: [
      {
        url: "https://tinyhouse.investments/images/og-tinyinvest.jpg",
        width: 1200,
        height: 630,
        alt: "TinyInvest – Tiny House Investment Plattform",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TinyInvest – Mobile Asset Investment",
    description:
      "Tiny House kaufen und vermieten. Steueroptimierte Direktkäufe ab 74.700 € netto. §7g EStG · Betrieb auf Wunsch über lokale Partner.",
    images: [
      "https://tinyhouse.investments/images/og-tinyinvest.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TinyInvest",
    "url": "https://tinyhouse.investments",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TinyInvest",
    "url": "https://tinyhouse.investments",
    "logo": "https://tinyhouse.investments/logo1.png",
    "legalName": "Rautenberg Professional Solutions GmbH",
    "email": "info@tinyhouse.investments",
    "description": "Tiny House Investments mit §7g Steueroptimierung – bewegliche Wirtschaftsgüter als Kapitalanlage",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Baslerstraße 3",
      "addressLocality": "Bad Homburg v.d.Höhe",
      "postalCode": "61325",
      "addressCountry": "DE",
    },
  };

  return (
    <html lang="de">
      <body className={`${geistSans.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Analytics />
        <ModalProvider>
          {children}
          <MemorandumModalLazy />
          <CookieBanner />
        </ModalProvider>
      </body>
    </html>
  );
}
