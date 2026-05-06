import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import { ModalProvider } from "./components/ModalContext";
import MemorandumModal from "./components/MemorandumModal";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tinyhouse.investments"),
  title: "TinyInvest – Die Nr. 1 Plattform für Mobile Asset Investments",
  description:
    "Tiny House kaufen, vermieten und Steuern sparen. Steueroptimierte Investments ab 65.000 €. 12–14 % Rendite p.a., vollautomatisch verwaltet durch tiny Escapes.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "TinyInvest – Die Nr. 1 Plattform für Mobile Asset Investments",
    description:
      "Tiny House kaufen, vermieten und Steuern sparen. Steueroptimierte Investments ab 65.000 €. 12–14 % Rendite p.a.",
    url: "https://tinyhouse.investments",
    siteName: "TinyInvest",
    images: [
      {
        url: "https://tinyhouse.investments/images/Gemini_Generated_Image_e2327ae2327ae232.png",
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
      "Tiny House kaufen, vermieten und Steuern sparen. Steueroptimierte Investments ab 65.000 €. 12–14 % Rendite p.a.",
    images: [
      "https://tinyhouse.investments/images/Gemini_Generated_Image_e2327ae2327ae232.png",
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
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tinyhouse.investments/wissen?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TinyInvest",
    "url": "https://tinyhouse.investments",
    "logo": "https://tinyhouse.investments/logo1.png",
    "description": "Tiny House Investments mit §7g Steueroptimierung – bewegliche Wirtschaftsgüter als Kapitalanlage",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Frankfurt am Main",
      "addressCountry": "DE",
    },
  };

  return (
    <html lang="de">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4K5B8T1ERL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4K5B8T1ERL');
          `}
        </Script>
        <ModalProvider>
          {children}
          <MemorandumModal />
          <CookieBanner />
        </ModalProvider>
      </body>
    </html>
  );
}
