'use client'

import { useState, useEffect } from 'react'
import { getBrowserClient } from '@/app/lib/supabase'
import { Section, LockedRow } from './shared'
import type { Listing } from '../ModelleCarousel'

export function ListingDetailSections({ listing }: { listing: Listing }) {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null)

  useEffect(() => {
    const supabase = getBrowserClient()
    supabase.auth.getSession().then(({ data }) => setLoggedIn(!!data.session))
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, s) => {
      setLoggedIn(!!s)
    })
    return () => subscription.unsubscribe()
  }, [])

  // While loading auth state, treat as locked so there's no flash of content
  const locked = !loggedIn

  return (
    <>
      {/* Projektbeschreibung */}
      <div className="mb-5 rounded-xl border border-gray-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-gray-800 mb-2">Projektbeschreibung</h2>
        <p className="text-sm text-gray-600 leading-relaxed">{listing.description}</p>
      </div>

      {/* Investition */}
      <Section title="💰 Investition">
        <LockedRow label="Preis / Einheit"   value={listing.preis}  locked={false} />
        <LockedRow
          label="Einheiten verfügbar"
          value={`${Math.max(0, listing.total - listing.reserved)} von ${listing.total}`}
          locked={false}
        />
        <LockedRow label="Kategorie"         value={listing.category} locked={false} />
        <LockedRow label="Asset-ID"          value={`#${listing.asset_id}`} locked={false} />
      </Section>

      {/* Wirtschaftlichkeit — locked */}
      <Section title="📈 Wirtschaftlichkeit">
        <LockedRow label="IRR p.a."          value={listing.irr}      locked={locked} />
        <LockedRow label="NPV"               value={listing.npv}      locked={locked} />
        <LockedRow label="Ø Belegungsrate"   value={listing.occ}      locked={locked} />
        <LockedRow label="Belegungshinweis"  value={listing.occ_note} locked={locked} />
      </Section>

      {/* Standort — address locked */}
      <Section title="📍 Standort">
        <LockedRow label="Region / Ort"      value={listing.location} locked={false} />
        <LockedRow label="Vollst. Adresse"   value={listing.location} locked={locked} />
      </Section>

      {/* Disclaimer */}
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
