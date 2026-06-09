'use client'

import { Section, LockedRow } from './shared'
import { useIsUnlocked } from './ListingAccessGate'
import type { Listing } from '../ModelleCarousel'

export function ListingDetailSections({ listing }: { listing: Listing }) {
  const unlocked = useIsUnlocked()

  const locked = !unlocked

  const extraItems = listing.extras
    ? listing.extras.split(',').map(s => s.trim()).filter(Boolean)
    : []

  return (
    <>
      {/* 1 — Projektbeschreibung (public) */}
      <div className="mb-5 rounded-xl border border-gray-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-gray-800 mb-2">Projektbeschreibung</h2>
        <p className="text-sm text-gray-600 leading-relaxed">{listing.description}</p>
      </div>

      {/* 2 — Investition (public) */}
      <Section title="💰 Investition">
        <LockedRow label="Preis / Einheit"     value={listing.preis}                                                          locked={false} />
        <LockedRow label="IRR p.a."            value={listing.irr}                                                            locked={false} />
        <LockedRow label="NPV"                 value={listing.npv}                                                            locked={false} />
        <LockedRow label="Einheiten verfügbar" value={`${Math.max(0, listing.total - listing.reserved)} von ${listing.total}`} locked={false} />
        <LockedRow label="Kategorie"           value={listing.category}                                                       locked={false} />
        <LockedRow label="Asset-ID"            value={`#${listing.asset_id}`}                                                 locked={false} />
      </Section>

      {/* 3 — Wirtschaftlichkeit (public) */}
      <Section title="📊 Wirtschaftlichkeit">
        <LockedRow label="Ø Belegungsrate"  value={listing.occ}      locked={false} />
        <LockedRow label="Belegungshinweis" value={listing.occ_note} locked={false} />
      </Section>

      {/* 4 — Standort (region public, address + map locked) */}
      <Section title="📍 Standort">
        <LockedRow label="Region / Ort"    value={listing.location}       locked={false} />
        <LockedRow label="Vollst. Adresse" value={listing.address ?? '—'} locked={locked} />
      </Section>
      {!locked && listing.address && (
        <div className="mb-5 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(listing.address)}&output=embed`}
            width="100%"
            height="260"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
            allowFullScreen
          />
        </div>
      )}

      {/* 5 — Ausstattung & Extras (locked) */}
      <Section title="🛋 Ausstattung & Extras">
        {extraItems.length > 0 ? (
          extraItems.map((item, i) => (
            <LockedRow key={i} label={`Extra ${i + 1}`} value={item} locked={locked} />
          ))
        ) : (
          <LockedRow label="Enthaltene Extras" value="Wird nach Registrierung angezeigt" locked={locked} />
        )}
      </Section>

      {/* 6 — Betreiber-Profil (locked) */}
      <Section title="🏢 Betreiber-Profil">
        <LockedRow label="Betreiber"         value="tiny Escapes GmbH"                  locked={locked} />
        <LockedRow label="Standort-Hinweis"  value={listing.manager_note ?? '—'}        locked={locked} />
        <LockedRow label="Buchungsplattform" value="Airbnb · Booking.com · Direkt"      locked={locked} />
      </Section>

      {/* 7 — Unterlagen & Exposé (locked) */}
      <Section title="📄 Unterlagen & Exposé">
        <LockedRow label="Investment-Exposé" value="PDF Download" locked={locked} />
      </Section>
      {!locked && listing.document_url && (
        <div className="mb-5">
          <a
            href={listing.document_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full justify-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 hover:border-green-300 hover:text-green-700 transition-all shadow-sm"
          >
            📄 Exposé herunterladen →
          </a>
        </div>
      )}

      {/* 8 — Disclaimer (public) */}
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-xs text-gray-500 leading-relaxed">
        <p className="font-semibold text-gray-700 mb-1.5">⚠️ Hinweis & Disclaimer</p>
        <p>
          Alle IRR- und NPV-Angaben sind Projektionen auf Basis historischer Belegungsdaten von tiny Escapes.
          Sie stellen keine Garantie zukünftiger Renditen dar. TinyInvest agiert als Plattform und Vermittler,
          nicht als Kapitalsammelstelle.
        </p>
      </div>
    </>
  )
}
