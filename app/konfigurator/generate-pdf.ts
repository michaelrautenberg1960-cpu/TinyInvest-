// ─────────────────────────────────────────────────────────────────────────────
// PDF Generator – Tiny House Konfigurator
// Erzeugt ein Kundenangebot für das Komplettpaket (netto/MwSt./brutto)
// ─────────────────────────────────────────────────────────────────────────────

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import type { Variant } from "./konfigurator-data";
import {
  COMPANY_INFO,
  DELIVERY_TERM,
  ESCAPE_660,
  INCLUDED_ITEMS,
  LOCATION_NOTE,
  OFFER_VALIDITY,
  PACKAGE_NOTE,
  PAYMENT_TERMS,
  QUANTITY_NOTE,
  VARIANT_LABEL,
  VARIANT_SHORT,
  VAT_NOTE,
  WARRANTY_TERMS,
  calcOffer,
} from "./konfigurator-data";

export interface PdfConfig {
  variant: Variant;
  units: number;
  extraIds: string[];
  clientInfo: {
    name: string;
    address: string;
    salesAgent: string;
    date: string;
  };
}

const EUR = (n: number) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);

const GREEN: [number, number, number] = [34, 102, 51];
const DARK: [number, number, number] = [30, 30, 30];
const GRAY: [number, number, number] = [100, 100, 100];
const LIGHT_GRAY: [number, number, number] = [245, 245, 245];
const WHITE: [number, number, number] = [255, 255, 255];

type DocWithTable = jsPDF & { lastAutoTable: { finalY: number } };

// Lädt ein Bild aus /public als Data-URL – im Browser per Canvas, auf dem Server per fs
export type ImageLoader = (
  src: string,
  mime: "image/png" | "image/jpeg"
) => Promise<{ base64: string; ratio: number }>;

// ── HELPER: Bild laden im Browser (Seitenverhältnis erhalten) ───────────────
const browserLoadImage: ImageLoader = async (src, mime) => {
  const response = await fetch(src);
  if (!response.ok) throw new Error("fetch failed");
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    const url = URL.createObjectURL(blob);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        resolve({
          base64: canvas.toDataURL(mime, 0.85),
          ratio: img.naturalWidth / img.naturalHeight,
        });
      } else {
        reject(new Error("canvas ctx null"));
      }
      URL.revokeObjectURL(url);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("img load"));
    };
    img.src = url;
  });
};

export function offerFileName(config: PdfConfig): string {
  const { units } = calcOffer(config.variant, config.units, config.extraIds);
  return `TinyInvest_Angebot_Escape660_${VARIANT_SHORT[config.variant]}_${units}Einheiten_${config.clientInfo.date.replace(/\./g, "-")}.pdf`;
}

// Browser: Angebot erzeugen und herunterladen
export async function generatePDF(config: PdfConfig): Promise<void> {
  const doc = await buildOfferDoc(config, browserLoadImage);
  doc.save(offerFileName(config));
}

// Baut das Angebots-Dokument – gemeinsam für Konfigurator (Browser) und Erstmail (Server)
export async function buildOfferDoc(config: PdfConfig, loadImage: ImageLoader): Promise<jsPDF> {
  const { variant, units, extraIds, clientInfo } = config;
  const calc = calcOffer(variant, units, extraIds);
  const unitWord = calc.units === 1 ? "Einheit" : "Einheiten";

  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const margin = 18;
  let y = margin;

  // ── PAGE HEADER (repeated on new pages) ──────────────────────────────────
  const drawPageHeader = () => {
    doc.setFillColor(...GREEN);
    doc.rect(0, 0, W, 8, "F");
  };

  // ── HELPER: add page if needed ────────────────────────────────────────────
  const checkPage = (needed = 20) => {
    if (y + needed > H - 20) {
      doc.addPage();
      y = margin;
      drawPageHeader();
    }
  };

  // ── FOOTER ────────────────────────────────────────────────────────────────
  const drawFooter = (pageNum: number, totalPages: number) => {
    const footerY = H - 10;
    doc.setDrawColor(...GRAY);
    doc.setLineWidth(0.3);
    doc.line(margin, footerY - 2, W - margin, footerY - 2);
    doc.setFontSize(7.5);
    doc.setTextColor(...GRAY);
    doc.text(COMPANY_INFO.name, margin, footerY + 2);
    doc.text(COMPANY_INFO.vatId, W / 2, footerY + 2, { align: "center" });
    doc.text(`Seite ${pageNum} / ${totalPages}`, W - margin, footerY + 2, { align: "right" });
  };

  // ── START: First page ─────────────────────────────────────────────────────
  drawPageHeader();
  y = 14;

  try {
    const { base64, ratio } = await loadImage("/logo8.png", "image/png");
    const logoW = 52;
    doc.addImage(base64, "PNG", margin, y, logoW, logoW / ratio);
  } catch {
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...GREEN);
    doc.text("TinyInvest", margin, y + 8);
  }

  // Title block
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(...DARK);
  doc.text("PREISANGEBOT", W - margin, y + 6, { align: "right" });

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...GRAY);
  doc.text(`Datum: ${clientInfo.date}`, W - margin, y + 12, { align: "right" });
  doc.text(`${calc.units} ${unitWord} · ${VARIANT_SHORT[variant]}`, W - margin, y + 17, {
    align: "right",
  });

  y += 26;

  // ── CLIENT + COMPANY INFO BOX ─────────────────────────────────────────────
  const boxH = 36;
  doc.setFillColor(...LIGHT_GRAY);
  doc.roundedRect(margin, y, (W - margin * 2 - 6) / 2, boxH, 2, 2, "F");
  doc.roundedRect(margin + (W - margin * 2 - 6) / 2 + 6, y, (W - margin * 2 - 6) / 2, boxH, 2, 2, "F");

  // Client
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(...GREEN);
  doc.text("KUNDE", margin + 4, y + 6);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...DARK);
  doc.setFontSize(9);
  doc.text(doc.splitTextToSize(clientInfo.name, 70), margin + 4, y + 12);
  doc.text(doc.splitTextToSize(clientInfo.address, 70), margin + 4, y + 18);

  // Company
  const cx = margin + (W - margin * 2 - 6) / 2 + 10;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(...GREEN);
  doc.text("VERKÄUFER / ANBIETER", cx, y + 6);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...DARK);
  doc.setFontSize(8.5);
  doc.text(COMPANY_INFO.name, cx, y + 12);
  doc.text(COMPANY_INFO.address, cx, y + 17);
  doc.text(`Tel: ${COMPANY_INFO.phone}`, cx, y + 22);
  doc.text(COMPANY_INFO.email, cx, y + 27);
  if (clientInfo.salesAgent) {
    doc.setFont("helvetica", "italic");
    doc.text(`Vertriebspartner: ${clientInfo.salesAgent}`, cx, y + 32);
  }

  y += boxH + 8;

  // ── INTRO ─────────────────────────────────────────────────────────────────
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...DARK);
  const introLines = doc.splitTextToSize(`${PACKAGE_NOTE} ${QUANTITY_NOTE}`, W - margin * 2);
  doc.text(introLines, margin, y);
  y += introLines.length * 4 + 4;

  // ── MODELL & VARIANTE ─────────────────────────────────────────────────────
  doc.setFillColor(...GREEN);
  doc.rect(margin, y, W - margin * 2, 8, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...WHITE);
  doc.text("MODELL & KOMPLETTPAKET", margin + 4, y + 5.5);
  y += 8;

  autoTable(doc, {
    startY: y,
    margin: { left: margin, right: margin },
    head: [["Modell", "Variante", "Abmessungen", "Anhänger", "Einheiten"]],
    body: [
      [
        ESCAPE_660.name,
        VARIANT_LABEL[variant],
        ESCAPE_660.dimensions,
        ESCAPE_660.trailer,
        `${calc.units}`,
      ],
    ],
    headStyles: { fillColor: DARK, textColor: WHITE, fontSize: 8, fontStyle: "bold" },
    bodyStyles: { fontSize: 8, textColor: DARK },
    columnStyles: {
      0: { fontStyle: "bold", cellWidth: 26 },
      4: { fontStyle: "bold", halign: "right", cellWidth: 20 },
    },
    alternateRowStyles: { fillColor: LIGHT_GRAY },
    theme: "grid",
  });
  y = (doc as DocWithTable).lastAutoTable.finalY + 4;

  // ── MODELL-BILD ───────────────────────────────────────────────────────────
  try {
    const { base64, ratio } = await loadImage(ESCAPE_660.pdfImage, "image/jpeg");
    const imgW = W - margin * 2;
    const maxH = 60;
    const finalH = Math.min(imgW / ratio, maxH);
    const finalW = finalH === maxH ? maxH * ratio : imgW;
    const imgX = margin + (imgW - finalW) / 2;
    checkPage(finalH + 6);
    doc.addImage(base64, "JPEG", imgX, y, finalW, finalH);
    y += finalH + 6;
  } catch {
    // Bild nicht verfügbar – überspringen
  }

  // ── LEISTUNGSTABELLE (pro Einheit) ────────────────────────────────────────
  checkPage(40);
  doc.setFillColor(...GREEN);
  doc.rect(margin, y, W - margin * 2, 8, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...WHITE);
  doc.text("LEISTUNGEN & PREISE JE EINHEIT", margin + 4, y + 5.5);
  y += 8;

  const lineRows = calc.lines.map((l) => [l.label, EUR(l.net)]);
  lineRows.push(["Preis pro Einheit (netto)", EUR(calc.unitNet)]);

  autoTable(doc, {
    startY: y,
    margin: { left: margin, right: margin },
    head: [["Leistung (pro Einheit)", "Preis (netto)"]],
    body: lineRows,
    headStyles: { fillColor: DARK, textColor: WHITE, fontSize: 8, fontStyle: "bold" },
    bodyStyles: { fontSize: 8, textColor: DARK },
    columnStyles: {
      0: { cellWidth: "auto" },
      1: { cellWidth: 32, halign: "right", fontStyle: "bold" },
    },
    alternateRowStyles: { fillColor: LIGHT_GRAY },
    didParseCell: (hookData) => {
      if (hookData.section !== "body") return;
      if (hookData.row.index === hookData.table.body.length - 1) {
        hookData.cell.styles.fillColor = [225, 240, 225];
        hookData.cell.styles.textColor = GREEN as unknown as string;
        hookData.cell.styles.fontStyle = "bold";
      }
    },
    theme: "grid",
  });
  y = (doc as DocWithTable).lastAutoTable.finalY + 8;

  // ── GESAMTSUMME ───────────────────────────────────────────────────────────
  checkPage(40);
  doc.setFillColor(...GREEN);
  doc.rect(margin, y, W - margin * 2, 8, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...WHITE);
  doc.text(`GESAMTSUMME BEI ${calc.units} ${unitWord.toUpperCase()}`, margin + 4, y + 5.5);
  y += 8;

  autoTable(doc, {
    startY: y,
    margin: { left: margin, right: margin },
    head: [["", "netto", "MwSt. (19%)", "brutto"]],
    body: [
      ["Preis pro Einheit", EUR(calc.unitNet), EUR(calc.unitVat), EUR(calc.unitGross)],
      [
        `GESAMT (${calc.units} ${unitWord})`,
        EUR(calc.totalNet),
        EUR(calc.totalVat),
        EUR(calc.totalGross),
      ],
    ],
    headStyles: { fillColor: DARK, textColor: WHITE, fontSize: 8, fontStyle: "bold", halign: "right" },
    bodyStyles: { fontSize: 9, textColor: DARK, halign: "right" },
    columnStyles: {
      0: { cellWidth: "auto", halign: "left" },
      1: { cellWidth: 34 },
      2: { cellWidth: 34 },
      3: { cellWidth: 34 },
    },
    didParseCell: (hookData) => {
      if (hookData.section !== "body") return;
      if (hookData.row.index === hookData.table.body.length - 1) {
        hookData.cell.styles.fillColor = GREEN;
        hookData.cell.styles.textColor = WHITE as unknown as string;
        hookData.cell.styles.fontStyle = "bold";
        hookData.cell.styles.fontSize = 10;
      }
    },
    theme: "grid",
  });
  y = (doc as DocWithTable).lastAutoTable.finalY + 8;

  // ── IM KOMPLETTPAKET ENTHALTEN ────────────────────────────────────────────
  checkPage(30);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(...GREEN);
  doc.text("Im Komplettpaket enthalten:", margin, y + 4);
  y += 7;

  autoTable(doc, {
    startY: y,
    margin: { left: margin, right: margin },
    head: [["#", "Beschreibung", "Preis"]],
    body: INCLUDED_ITEMS[variant].map((item, i) => [`${i + 1}.`, item, "inkl."]),
    headStyles: {
      fillColor: [220, 240, 220] as [number, number, number],
      textColor: DARK,
      fontSize: 7.5,
      fontStyle: "bold",
    },
    bodyStyles: { fontSize: 7.5, textColor: DARK },
    columnStyles: {
      0: { cellWidth: 8, halign: "center" },
      1: { cellWidth: "auto" },
      2: { cellWidth: 22, halign: "right", textColor: GREEN, fontStyle: "bold" },
    },
    theme: "grid",
    alternateRowStyles: { fillColor: [248, 255, 248] as [number, number, number] },
  });
  y = (doc as DocWithTable).lastAutoTable.finalY + 8;

  // ── TERMS ─────────────────────────────────────────────────────────────────
  checkPage(50);
  const halfW = (W - margin * 2 - 6) / 2;

  // Zahlungsbedingungen
  doc.setFillColor(...DARK);
  doc.rect(margin, y, halfW, 7, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(...WHITE);
  doc.text("ZAHLUNGSBEDINGUNGEN", margin + 3, y + 5);

  autoTable(doc, {
    startY: y + 7,
    margin: { left: margin, right: margin + halfW + 6 },
    body: PAYMENT_TERMS.map((t) => [t]),
    bodyStyles: { fontSize: 8, textColor: DARK },
    theme: "plain",
    styles: { cellPadding: 2 },
  });
  const payY = (doc as DocWithTable).lastAutoTable.finalY;

  // Lieferzeit
  doc.setFontSize(8);
  doc.setTextColor(...GRAY);
  doc.setFont("helvetica", "italic");
  doc.text(DELIVERY_TERM, margin, payY + 5);

  // Garantie
  const gx = margin + halfW + 6;
  doc.setFillColor(...DARK);
  doc.rect(gx, y, halfW, 7, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(...WHITE);
  doc.text("GARANTIEBEDINGUNGEN", gx + 3, y + 5);

  autoTable(doc, {
    startY: y + 7,
    margin: { left: gx, right: margin },
    head: [["Kategorie", "Garantie"]],
    body: WARRANTY_TERMS.map((w) => [w.item, w.duration]),
    headStyles: { fillColor: [50, 60, 50] as [number, number, number], textColor: WHITE, fontSize: 7.5 },
    bodyStyles: { fontSize: 7.5, textColor: DARK },
    columnStyles: {
      0: { cellWidth: "auto" },
      1: { cellWidth: 20, halign: "right", fontStyle: "bold", textColor: GREEN },
    },
    theme: "grid",
    alternateRowStyles: { fillColor: LIGHT_GRAY },
  });
  y = Math.max(payY + 10, (doc as DocWithTable).lastAutoTable.finalY + 8);

  // ── HINWEISE ──────────────────────────────────────────────────────────────
  const notes: Array<[string, string]> = [
    ["Hinweis zur Mehrwertsteuer", VAT_NOTE],
    ["Hinweis zur Standortwahl", LOCATION_NOTE],
    ["Hinweis zum Angebot", OFFER_VALIDITY],
    ["Bankverbindung", `${COMPANY_INFO.name} · ${COMPANY_INFO.bank}`],
  ];

  for (const [title, body] of notes) {
    const bodyLines = doc.splitTextToSize(body, W - margin * 2);
    checkPage(bodyLines.length * 3.6 + 10);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(...DARK);
    doc.text(title, margin, y);
    y += 4;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(...GRAY);
    doc.text(bodyLines, margin, y);
    y += bodyLines.length * 3.6 + 5;
  }

  // ── SIGNATURE BLOCK ───────────────────────────────────────────────────────
  y += 6;
  checkPage(25);
  doc.setDrawColor(...DARK);
  doc.setLineWidth(0.4);
  const sigW = 60;
  doc.line(margin, y + 14, margin + sigW, y + 14);
  doc.line(W - margin - sigW, y + 14, W - margin, y + 14);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(...GRAY);
  doc.text("Datum / Unterschrift Kunde", margin, y + 18);
  doc.text("Datum / Unterschrift Anbieter", W - margin, y + 18, { align: "right" });

  // ── APPLY FOOTERS ─────────────────────────────────────────────────────────
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    drawFooter(i, totalPages);
  }

  return doc;
}
