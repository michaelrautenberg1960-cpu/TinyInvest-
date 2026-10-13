// Gemeinsame Telefon-Regeln für Lead-Formulare (Client) und /api/contact (Server)
export const sanitizePhone = (s: string) => s.replace(/[^0-9+\s\-()]/g, "");

export const isValidPhone = (s: unknown) =>
  typeof s === "string" && s.replace(/\D/g, "").length >= 6;
