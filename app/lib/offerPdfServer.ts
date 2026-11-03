import fs from "fs";
import path from "path";
import jsPDF from "jspdf";
import { buildOfferDoc, type ImageLoader } from "@/app/konfigurator/generate-pdf";
import { VARIANT_SHORT, type Variant } from "@/app/konfigurator/konfigurator-data";

// Server: Bilder direkt aus /public lesen statt per fetch + Canvas
const serverLoadImage: ImageLoader = async (src, mime) => {
  const file = fs.readFileSync(path.join(process.cwd(), "public", src));
  const base64 = `data:${mime};base64,${file.toString("base64")}`;
  const { width, height } = new jsPDF().getImageProperties(base64);
  return { base64, ratio: width / height };
};

// Persönliches Angebot für die Erstmail (Standard: 1 Einheit, ohne Extras)
// bzw. mit der Auswahl aus dem Konfigurator
export async function buildOfferPdf(
  variant: Variant,
  name: string,
  config: { units?: number; extraIds?: string[]; address?: string; salesAgent?: string } = {}
) {
  const date = new Date().toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Europe/Berlin",
  });

  const doc = await buildOfferDoc(
    {
      variant,
      units: config.units ?? 1,
      extraIds: config.extraIds ?? [],
      clientInfo: { name, address: config.address ?? "", salesAgent: config.salesAgent ?? "", date },
    },
    serverLoadImage
  );

  return {
    filename: `TinyInvest-Angebot-Escape660-${VARIANT_SHORT[variant]}.pdf`,
    content: Buffer.from(doc.output("arraybuffer")),
  };
}
