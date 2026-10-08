'use client'
import dynamic from 'next/dynamic'
import type { MapListing } from './ProjekteGoogleMap'
import ConsentGate from './ConsentGate'

const ProjekteGoogleMap = dynamic(() => import('./ProjekteGoogleMap'), {
  ssr: false,
  loading: () => (
    <div className="h-115 bg-gray-100 rounded-2xl animate-pulse flex items-center justify-center text-gray-400 text-sm">
      Karte wird geladen…
    </div>
  ),
})

interface Props {
  listings: MapListing[]
  hoveredId?: number | null
  onHoverPin?: (id: number | null) => void
  fullHeight?: boolean
}

export default function MarktplatzMap({ listings, hoveredId, onHoverPin, fullHeight }: Props) {
  return (
    <ConsentGate service="Google Maps" className={fullHeight ? 'h-full' : 'h-115 rounded-2xl border border-gray-200'}>
      <ProjekteGoogleMap
        listings={listings}
        hoveredId={hoveredId}
        onHoverPin={onHoverPin}
        fullHeight={fullHeight}
      />
    </ConsentGate>
  )
}
