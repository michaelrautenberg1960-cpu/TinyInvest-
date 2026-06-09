'use client'
import dynamic from 'next/dynamic'
import type { MapListing } from './ProjekteGoogleMap'

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
    <ProjekteGoogleMap
      listings={listings}
      hoveredId={hoveredId}
      onHoverPin={onHoverPin}
      fullHeight={fullHeight}
    />
  )
}
