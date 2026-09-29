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

// Persönliches Angebot (1 Einheit, ohne Extras) für die Erstmail
export async function buildOfferPdf(variant: Variant, name: string) {
  const date = new Date().toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Europe/Berlin",
  });

  const doc = await buildOfferDoc(
    {
      variant,
      units: 1,
      extraIds: [],
      clientInfo: { name, address: "", salesAgent: "", date },
    },
    serverLoadImage
  );

  return {
    filename: `TinyInvest-Angebot-Escape660-${VARIANT_SHORT[variant]}.pdf`,
    content: Buffer.from(doc.output("arraybuffer")),
  };
}
