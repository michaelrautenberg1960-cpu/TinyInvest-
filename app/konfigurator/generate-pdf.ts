// ─────────────────────────────────────────────────────────────────────────────
// PDF Generator – Tiny House Konfigurator
// Generates a professional price offer PDF using jsPDF + autoTable
// ─────────────────────────────────────────────────────────────────────────────

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import type {
  ModelConfig,
  OptionItem,
  Variant,
} from "./konfigurator-data";
import {
  COMPANY_INFO,
  DELIVERY_TERM,
  OFFER_VALIDITY,
  OFF_GRID_INCLUDED_ITEMS,
  ON_GRID_INCLUDED_ITEMS,
  OPTION_CATEGORIES,
  PAYMENT_TERMS,
  WARRANTY_TERMS,
} from "./konfigurator-data";

export interface PdfConfig {
  variant: Variant;
  model: ModelConfig;
  selectedOptionIds: Set<string>;
  transportKm: number;
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

export async function generatePDF(config: PdfConfig): Promise<void> {
  const { variant, model, selectedOptionIds, transportKm, clientInfo } = config;

  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const margin = 18;
  let y = margin;

  // ── HELPER: add page if needed ────────────────────────────────────────────
  const checkPage = (needed = 20) => {
    if (y + needed > H - 20) {
      doc.addPage();
      y = margin;
      drawPageHeader();
    }
  };

  // ── PAGE HEADER (repeated on new pages) ──────────────────────────────────
  const drawPageHeader = () => {
    doc.setFillColor(...GREEN);
    doc.rect(0, 0, W, 8, "F");
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

  // Try to load logo – preserve aspect ratio
  try {
    const response = await fetch("/logo8.png");
    if (response.ok) {
      const blob = await response.blob();
      const { base64: logoBase64, ratio: logoRatio } = await new Promise<{ base64: string; ratio: number }>((resolve, reject) => {
        const img = new window.Image();
        const url = URL.createObjectURL(blob);
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0);
            resolve({ base64: canvas.toDataURL("image/png"), ratio: img.naturalWidth / img.naturalHeight });
          } else { reject(new Error("ctx")); }
          URL.revokeObjectURL(url);
        };
        img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("load")); };
        img.src = url;
      });
      const logoW = 52; // fixed width in mm
      const logoH = logoW / logoRatio; // height preserving aspect ratio
      doc.addImage(logoBase64, "PNG", margin, y, logoW, logoH);
    }
  } catch {
    // fallback: text logo
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
  doc.text(OFFER_VALIDITY.split(".")[0] + ".", W - margin, y + 17, { align: "right" });

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
  const clientLines = doc.splitTextToSize(clientInfo.name, 70);
  doc.text(clientLines, margin + 4, y + 12);
  const addrLines = doc.splitTextToSize(clientInfo.address, 70);
  doc.text(addrLines, margin + 4, y + 18);

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

  // ── MODEL SECTION ─────────────────────────────────────────────────────────
  doc.setFillColor(...GREEN);
  doc.rect(margin, y, W - margin * 2, 8, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...WHITE);
  doc.text("MODELL & BASISPAKET", margin + 4, y + 5.5);
  y += 8;

  // Model info table
  autoTable(doc, {
    startY: y,
    margin: { left: margin, right: margin },
    head: [["Modell", "Variante", "Abmessungen", "Anhänger", "Basispreis"]],
    body: [
      [
        model.name,
        variant === "offgrid" ? "Off-Grid (Vollautark)" : "On-Grid (Netzanschluss)",
        model.dimensions,
        model.trailer,
        EUR(model.basePrice[variant]),
      ],
    ],
    headStyles: { fillColor: DARK, textColor: WHITE, fontSize: 8, fontStyle: "bold" },
    bodyStyles: { fontSize: 8.5, textColor: DARK },
    columnStyles: {
      0: { fontStyle: "bold", cellWidth: 28 },
      4: { fontStyle: "bold", halign: "right", cellWidth: 28 },
    },
    alternateRowStyles: { fillColor: LIGHT_GRAY },
    theme: "grid",
  });
  y = (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 4;

  // ── MODEL IMAGE – preserve aspect ratio ────────────────────────────────────
  try {
    const imgResp = await fetch(model.image);
    if (imgResp.ok) {
      const imgBlob = await imgResp.blob();
      const { base64: imgBase64, ratio: imgRatio } = await new Promise<{ base64: string; ratio: number }>((resolve, reject) => {
        const img = new window.Image();
        const url = URL.createObjectURL(imgBlob);
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0);
            resolve({ base64: canvas.toDataURL("image/jpeg", 0.85), ratio: img.naturalWidth / img.naturalHeight });
          } else {
            reject(new Error("canvas ctx null"));
          }
          URL.revokeObjectURL(url);
        };
        img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("img load")); };
        img.src = url;
      });
      const imgW = W - margin * 2; // full content width
      const imgH = imgW / imgRatio; // height preserving aspect ratio
      const maxH = 65; // cap at 65mm so it doesn't take up too much page
      const finalH = Math.min(imgH, maxH);
      const finalW = finalH === maxH ? maxH * imgRatio : imgW;
      const imgX = margin + (imgW - finalW) / 2; // center if capped
      checkPage(finalH + 6);
      doc.addImage(imgBase64, "JPEG", imgX, y, finalW, finalH);
      y += finalH + 6;
    }
  } catch {
    // image not available – skip
  }

  // ── INCLUDED IN BASE PACKAGE ──────────────────────────────────────────────
  const includedItems = variant === "offgrid" ? OFF_GRID_INCLUDED_ITEMS : ON_GRID_INCLUDED_ITEMS;

  checkPage(30);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(...GREEN);
  doc.text("Im Basispaket enthalten:", margin, y + 4);
  y += 7;

  const includedRows = includedItems.map((item, i) => [
    `${i + 1}.`,
    item,
    "inkl.",
  ]);

  autoTable(doc, {
    startY: y,
    margin: { left: margin, right: margin },
    head: [["#", "Beschreibung", "Preis"]],
    body: includedRows,
    headStyles: { fillColor: [220, 240, 220] as [number, number, number], textColor: DARK, fontSize: 7.5, fontStyle: "bold" },
    bodyStyles: { fontSize: 7.5, textColor: DARK },
    columnStyles: {
      0: { cellWidth: 8, halign: "center" },
      1: { cellWidth: "auto" },
      2: { cellWidth: 22, halign: "right", textColor: GREEN, fontStyle: "bold" },
    },
    theme: "grid",
    alternateRowStyles: { fillColor: [248, 255, 248] as [number, number, number] },
  });
  y = (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 8;

  // ── SELECTED OPTIONS by category ──────────────────────────────────────────
  // Gather all selected options
  const selectedRows: Array<{ category: string; item: OptionItem; qty: number }> = [];
  let optionsSubtotal = 0;

  for (const cat of OPTION_CATEGORIES) {
    for (const item of cat.items) {
      if (!selectedOptionIds.has(item.id)) continue;
      if (item.hideFor?.includes(variant)) continue;
      if (item.lockedFor?.includes(variant)) continue; // locked = in base price, don't add again
      if (item.defaultFor?.includes(variant)) continue; // default = already in base price, don't add

      // Transport
      if (item.id === "transport_km" && transportKm > 0) {
        const price = item.price * transportKm;
        selectedRows.push({ category: cat.label, item: { ...item, price }, qty: 1 });
        optionsSubtotal += price;
        continue;
      }

      selectedRows.push({ category: cat.label, item, qty: 1 });
      optionsSubtotal += item.price;
    }
  }

  if (selectedRows.length > 0) {
    checkPage(20);
    doc.setFillColor(...GREEN);
    doc.rect(margin, y, W - margin * 2, 8, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...WHITE);
    doc.text("ZUSÄTZLICHE OPTIONEN", margin + 4, y + 5.5);
    y += 8;

    // Group by category
    const byCategory = new Map<string, Array<{ item: OptionItem; qty: number }>>();
    for (const row of selectedRows) {
      if (!byCategory.has(row.category)) byCategory.set(row.category, []);
      byCategory.get(row.category)!.push({ item: row.item, qty: row.qty });
    }

    for (const [catLabel, rows] of byCategory.entries()) {
      checkPage(15);
      autoTable(doc, {
        startY: y,
        margin: { left: margin, right: margin },
        head: [[{ content: catLabel, colSpan: 4 }]],
        body: rows.map(({ item }) => [
          item.label,
          item.description || "",
          "1 Stk.",
          EUR(item.price),
        ]),
        headStyles: {
          fillColor: [50, 80, 60] as [number, number, number],
          textColor: WHITE,
          fontSize: 8,
          fontStyle: "bold",
        },
        bodyStyles: { fontSize: 7.5, textColor: DARK },
        columnStyles: {
          0: { cellWidth: 60, fontStyle: "bold" },
          1: { cellWidth: "auto", textColor: GRAY },
          2: { cellWidth: 16, halign: "center" },
          3: { cellWidth: 24, halign: "right", fontStyle: "bold" },
        },
        alternateRowStyles: { fillColor: LIGHT_GRAY },
        theme: "grid",
      });
      y = (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 4;
    }
  }

  // Transport line (special)
  const transportItem = OPTION_CATEGORIES.find((c) => c.id === "transport")?.items[0];
  let transportTotal = 0;
  if (transportKm > 0 && transportItem) {
    transportTotal = transportItem.price * transportKm;
  }

  y += 4;
  checkPage(55);

  // ── PRICE SUMMARY ─────────────────────────────────────────────────────────
  // All prices are GROSS (inkl. 21% MwSt.)
  const basePrice = model.basePrice[variant];
  const total = basePrice + optionsSubtotal + transportTotal; // GROSS total
  const netto = Math.round(total / 1.21);
  const vat = total - netto;

  doc.setFillColor(...GREEN);
  doc.rect(margin, y, W - margin * 2, 8, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...WHITE);
  doc.text("PREISZUSAMMENFASSUNG", margin + 4, y + 5.5);
  y += 8;

  const summaryRows: string[][] = [
    ["Basispaket " + model.name + " (" + (variant === "offgrid" ? "Off-Grid" : "On-Grid") + ")", EUR(basePrice)],
  ];
  if (optionsSubtotal > 0) summaryRows.push(["Zusätzliche Optionen", EUR(optionsSubtotal)]);
  if (transportTotal > 0) summaryRows.push([`Transport (${transportKm} km × 2,00 €)`, EUR(transportTotal)]);
  summaryRows.push(["davon Netto", EUR(netto)]);
  summaryRows.push(["davon MwSt. 21%", EUR(vat)]);
  summaryRows.push(["GESAMTBETRAG (inkl. MwSt.)", EUR(total)]);

  autoTable(doc, {
    startY: y,
    margin: { left: margin, right: margin },
    body: summaryRows,
    bodyStyles: { fontSize: 9, textColor: DARK },
    columnStyles: {
      0: { cellWidth: "auto", fontStyle: "normal" },
      1: { cellWidth: 38, halign: "right", fontStyle: "bold" },
    },
    didParseCell: (hookData) => {
      const lastIdx = hookData.table.body.length - 1;
      if (hookData.row.index === lastIdx) {
        hookData.cell.styles.fillColor = GREEN;
        hookData.cell.styles.textColor = WHITE as unknown as string;
        hookData.cell.styles.fontSize = 11;
        hookData.cell.styles.fontStyle = "bold";
      } else if (hookData.row.index === lastIdx - 2) {
        hookData.cell.styles.fillColor = DARK;
        hookData.cell.styles.textColor = WHITE as unknown as string;
        hookData.cell.styles.fontStyle = "bold";
      }
    },
    theme: "grid",
  });
  y = (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 8;

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
  const payY = (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY;

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
  y = Math.max(
    payY + 10,
    (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 8
  );

  // ── FINAL NOTE ────────────────────────────────────────────────────────────
  checkPage(20);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(7.5);
  doc.setTextColor(...GRAY);
  const noteLines = doc.splitTextToSize(
    OFFER_VALIDITY +
      " Transport von unserer Werkstatt. Entfernung einfache Strecke. " +
      COMPANY_INFO.bank,
    W - margin * 2
  );
  doc.text(noteLines, margin, y);

  // ── SIGNATURE BLOCK ───────────────────────────────────────────────────────
  y += noteLines.length * 4 + 10;
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

  // ── SAVE ──────────────────────────────────────────────────────────────────
  const fileName = `TinyInvest_Angebot_${model.name.replace(/\s/g, "_")}_${clientInfo.date.replace(/\./g, "-")}.pdf`;
  doc.save(fileName);
}
