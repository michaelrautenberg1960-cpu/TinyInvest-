-- ============================================================
-- TinyInvest – Lead Follow-up Tracking ("Wer wartet auf wen?")
-- Ausführen im Supabase SQL Editor (einmalig, idempotent)
-- ============================================================
BEGIN;

-- Wer ist gerade am Zug? 'us' = wir, 'customer' = Kunde, 'none' = niemand
ALTER TABLE leads ADD COLUMN IF NOT EXISTS blocked_on_owner   TEXT DEFAULT 'us';
-- Worauf genau wird gewartet? (Freitext, z.B. "wartet auf Kaufvertrag-Unterschrift")
ALTER TABLE leads ADD COLUMN IF NOT EXISTS blocked_on_note    TEXT;
-- Wann soll als Nächstes nachgefasst werden?
ALTER TABLE leads ADD COLUMN IF NOT EXISTS next_followup_at   DATE;
-- Wann wurde zuletzt wirklich gesprochen?
ALTER TABLE leads ADD COLUMN IF NOT EXISTS last_contacted_at  TIMESTAMPTZ;

-- Erlaubte Werte absichern
ALTER TABLE leads DROP CONSTRAINT IF EXISTS leads_blocked_on_owner_check;
ALTER TABLE leads ADD  CONSTRAINT leads_blocked_on_owner_check
  CHECK (blocked_on_owner IS NULL OR blocked_on_owner IN ('us', 'customer', 'none'));

-- Bestehende Zeilen auf 'us' setzen (neu eingegangene Leads warten immer auf uns)
UPDATE leads SET blocked_on_owner = 'us' WHERE blocked_on_owner IS NULL;

CREATE INDEX IF NOT EXISTS idx_leads_next_followup ON leads (next_followup_at);

COMMIT;
