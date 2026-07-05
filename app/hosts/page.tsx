import { BASE_OG } from "@/app/lib/og";
import Navbar from "../components/Navbar";
import Hosts from "../components/Hosts";
import Footer from "../components/Footer";

export const metadata = {
  title: "Tiny House Stellplatz vermieten: Host werden | TinyInvest",
  description:
    "Du hast einen Stellplatz? Werde TinyInvest Host und verdiene bis zu 45 % der Mieteinnahmen – ohne eigenes Kapital. Kostenlose Standortprüfung in 24h.",
  keywords:
    "tiny house host werden, stellplatz vermieten tiny house, grundstück tiny house vermieten, lokale Partner host, airbnb tiny house host",
  alternates: {
    canonical: "https://tinyhouse.investments/hosts",
  },
  openGraph: {
    ...BASE_OG,
    type: "website",
    title: "Für Hosts – Dein Grundstück, unser Tiny House | TinyInvest",
    description:
      "Werde Host und verdiene bis zu 45 % der Einnahmen – ohne Eigenkapital. Kostenlose Standortprüfung innerhalb von 24h.",
    url: "https://tinyhouse.investments/hosts",
  },
};

export default function HostsPage() {
  return (
    <main className="font-sans antialiased text-gray-900 bg-white">
      <Navbar variant="sub" />
      <div className="pt-16 md:pt-20">
        <Hosts />
        <Footer />
      </div>
    </main>
  );
}
