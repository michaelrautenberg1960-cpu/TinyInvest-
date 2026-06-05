import { BASE_OG } from "@/app/lib/og";
import Navbar from "../components/Navbar";
import Vertriebspartner from "../components/Vertriebspartner";
import Footer from "../components/Footer";

export const metadata = {
  title: "Vertriebspartner werden – Provisionsprogramm | TinyInvest",
  description: "Werde TinyInvest Vertriebspartner. Empfehle Tiny House Investments und verdiene attraktive Provisionen. Für Finanzberater, Makler und Netzwerker.",
  keywords: "Vertriebspartner Investment, Provision Ferienimmobilien, Affiliate Tiny House, Partner werden TinyInvest",
  alternates: {
    canonical: "https://tinyhouse.investments/partner",
  },
  openGraph: {
    ...BASE_OG,
    type: "website",
    title: "Vertriebspartner werden – Provision & Kooperation | TinyInvest",
    description: "Attraktives Provisionsprogramm für Finanzberater, Makler und Netzwerker.",
    url: "https://tinyhouse.investments/partner",
  },
};

export default function PartnerPage() {
  return (
    <main className="font-sans antialiased text-gray-900 bg-white">
      <Navbar variant="sub" />
      <div className="pt-16 md:pt-20">
        <Vertriebspartner />
        <Footer />
      </div>
    </main>
  );
}
