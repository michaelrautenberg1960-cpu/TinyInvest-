import type { Metadata } from "next";
import { BASE_OG } from "@/app/lib/og";

export const metadata: Metadata = {
  title: "So funktioniert TinyInvest – Tiny House Investment in 4 Schritten",
  description: "Vom Erstkontakt bis zur monatlichen Auszahlung: Wie TinyInvest §7g-optimierte Tiny House Investments strukturiert, bewirtschaftet und transparent abrechnet.",
  keywords: "Tiny House Investment erklärung, wie funktioniert Ferienhaus Investment, §7g Ablauf, TinyInvest Prozess",
  alternates: {
    canonical: "https://tinyhouse.investments/so-funktioniert-es",
  },
  openGraph: {
    ...BASE_OG,
    type: "website",
    title: "So funktioniert TinyInvest – Investment in 4 Schritten",
    description: "Kauf → Bewirtschaftung → Auszahlung → Steuer: Der komplette Prozess verständlich erklärt.",
    url: "https://tinyhouse.investments/so-funktioniert-es",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
