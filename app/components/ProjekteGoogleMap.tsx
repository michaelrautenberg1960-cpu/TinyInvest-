'use client'

import { useEffect, useRef, useState } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export interface MapListing {
  id: number
  asset_id: string
  img: string
  title: string
  location: string
  status: string
  status_label: string
  irr: string
  preis: string
  total: number
  reserved: number
  lat: number | null
  lng: number | null
}

const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID ?? 'DEMO_MAP_ID'

// Singleton loader — safe to call multiple times
const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
  version: 'weekly',
})

function makePill(listing: MapListing, hovered = false): HTMLElement {
  const bg     = hovered ? '#4ade80' : '#0d1b2e'
  const border = hovered ? '#22c55e' : '#0d1b2e'
  const shadow = hovered ? '0 4px 16px rgba(0,0,0,0.35)' : '0 2px 10px rgba(0,0,0,0.22)'

  const wrapper = document.createElement('div')
  wrapper.style.cssText = `display:inline-flex;flex-direction:column;align-items:center;cursor:pointer;filter:drop-shadow(${shadow});`

  const bubble = document.createElement('div')
  bubble.style.cssText = `background:${bg};color:#fff;border:2px solid ${border};padding:5px 10px 5px 7px;border-radius:10px;font-family:-apple-system,sans-serif;display:flex;align-items:center;gap:5px;white-space:nowrap;line-height:1;`

  const icon = document.createElement('img')
  icon.src = '/favicon.png'
  icon.width = 18
  icon.height = 18
  icon.style.cssText = `border-radius:3px;flex-shrink:0;`

  const irrText = document.createElement('span')
  irrText.textContent = listing.irr
  irrText.style.cssText = `font-size:12px;font-weight:800;letter-spacing:-0.2px;`

  const irrUnit = document.createElement('span')
  irrUnit.textContent = 'p.a.'
  irrUnit.style.cssText = `font-size:9px;font-weight:400;opacity:0.65;margin-left:-1px;`

  bubble.appendChild(icon)
  bubble.appendChild(irrText)
  bubble.appendChild(irrUnit)

  const arrowOuter = document.createElement('div')
  arrowOuter.style.cssText = `width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid ${border};`

  const arrowInner = document.createElement('div')
  arrowInner.style.cssText = `width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:6px solid ${bg};margin-top:-7px;`

  wrapper.appendChild(bubble)
  wrapper.appendChild(arrowOuter)
  wrapper.appendChild(arrowInner)
  return wrapper
}

interface Props {
  listings: MapListing[]
  hoveredId?: number | null
  onHoverPin?: (id: number | null) => void
  fullHeight?: boolean
}

export default function ProjekteGoogleMap({ listings, hoveredId, onHoverPin, fullHeight }: Props) {
  const mapRef            = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef    = useRef<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef        = useRef<Map<number, any>>(new Map())
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const infoWindowRef     = useRef<any>(null)
  const openCardFnsRef    = useRef<Map<number, () => void>>(new Map())
  const openIdRef         = useRef<number | null>(null)
  const closeTimerRef     = useRef<ReturnType<typeof setTimeout> | null>(null)
  const scheduleCloseRef  = useRef<(() => void) | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    loader.importLibrary('maps').then(() => loader.importLibrary('marker')).then(() => setLoaded(true))
  }, [])

  useEffect(() => {
    if (!loaded || !mapRef.current || mapInstanceRef.current) return

    async function initMap() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { Map, InfoWindow }       = await loader.importLibrary('maps')   as any
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { AdvancedMarkerElement } = await loader.importLibrary('marker') as any

      const map = new Map(mapRef.current, {
        center: { lat: 51.0, lng: 10.5 },
        zoom: 5,
        mapId: MAP_ID,
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      })
      mapInstanceRef.current = map
      infoWindowRef.current = new InfoWindow()

      const scheduleClose = () => {
        closeTimerRef.current = setTimeout(() => {
          infoWindowRef.current?.close()
          openIdRef.current = null
        }, 350)
      }
      scheduleCloseRef.current = scheduleClose

      const cancelClose = () => {
        if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null }
      }

      infoWindowRef.current.addListener('domready', () => {
        const iw = document.querySelector('.gm-style-iw')
        if (iw) {
          iw.addEventListener('mouseenter', cancelClose)
          iw.addEventListener('mouseleave', scheduleClose)
        }
        const chr = document.querySelector<HTMLElement>('.gm-style-iw-chr')
        if (chr) chr.style.display = 'none'
        const iwc = document.querySelector<HTMLElement>('.gm-style-iw-c')
        if (iwc) iwc.style.padding = '0'
        const iwd = document.querySelector<HTMLElement>('.gm-style-iw-d')
        if (iwd) { iwd.style.overflow = 'hidden'; iwd.style.padding = '0' }
      })
      infoWindowRef.current.addListener('closeclick', () => { openIdRef.current = null })

      const valid = listings.filter(l => l.lat !== null && l.lng !== null) as (MapListing & { lat: number; lng: number })[]

      for (const listing of valid) {
        const pill   = makePill(listing)
        const marker = new AdvancedMarkerElement({
          map,
          position: { lat: listing.lat, lng: listing.lng },
          title: listing.title,
          content: pill,
        })
        markersRef.current.set(listing.id, marker)

        const statusStyle =
          listing.status === 'available' ? 'background:#d1fae5;color:#065f46' :
          listing.status === 'reserved'  ? 'background:#fef3c7;color:#92400e' :
          listing.status === 'planning'  ? 'background:#e0e7ff;color:#3730a3' :
                                           'background:#fee2e2;color:#991b1b'

        const openCard = () => {
          cancelClose()
          const available = Math.max(0, listing.total - listing.reserved)
          infoWindowRef.current?.setContent(`
            <div style="width:260px;font-family:-apple-system,sans-serif;border-radius:12px;overflow:hidden;">
              <div style="position:relative;">
                <img src="${listing.img}" style="width:100%;height:150px;object-fit:cover;display:block;" alt="${listing.title}" />
                <div style="position:absolute;top:8px;right:8px;background:rgba(255,255,255,0.92);color:#18181b;padding:2px 8px;border-radius:20px;font-size:11px;font-weight:600;">${available}/${listing.total} frei</div>
              </div>
              <div style="padding:12px 14px 14px;">
                <p style="margin:0 0 3px;font-size:11px;font-weight:500;color:#71717a;">📍 ${listing.location}</p>
                <a href="/marktplatz/${listing.id}" style="display:block;margin:0 0 6px;font-size:14px;font-weight:700;color:#003580;line-height:1.3;text-decoration:none;">${listing.title}</a>
                <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px;">
                  <span style="${statusStyle};padding:2px 7px;border-radius:4px;font-size:11px;font-weight:600;">${listing.status_label}</span>
                  <span style="background:#f0fdf4;border:1px solid #bbf7d0;color:#166534;padding:2px 7px;border-radius:4px;font-size:11px;font-weight:700;">${listing.irr} p.a.</span>
                </div>
                <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:10px;">
                  <span style="font-size:17px;font-weight:800;color:#003580;">${listing.preis}<span style="font-size:11px;font-weight:400;color:#a1a1aa;"> /Einheit</span></span>
                </div>
                <a href="/marktplatz/${listing.id}" style="display:block;background:#15803d;color:#fff;text-align:center;padding:9px 0;border-radius:8px;font-size:13px;font-weight:600;text-decoration:none;">Projektdetails →</a>
              </div>
            </div>
          `)
          openIdRef.current = listing.id
          infoWindowRef.current?.open(map, marker)
        }

        openCardFnsRef.current.set(listing.id, openCard)
        pill.addEventListener('mouseenter', () => { onHoverPin?.(listing.id); openCard() })
        pill.addEventListener('mouseleave', () => { onHoverPin?.(null); scheduleClose() })
        marker.addListener('click', () => {
          onHoverPin?.(listing.id)
          openCard()
          // scroll matching card into view
          const card = document.getElementById(`map-card-${listing.id}`)
          card?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        })
      }

      if (valid.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { LatLngBounds } = await loader.importLibrary('core') as any
        const bounds = new LatLngBounds()
        valid.forEach(l => bounds.extend({ lat: l.lat, lng: l.lng }))
        map.fitBounds(bounds, 60)
      }
    }

    initMap()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded])

  // Bounce + amber highlight on hovered marker, restore all others
  useEffect(() => {
    if (!mapInstanceRef.current) return

    markersRef.current.forEach((marker, id) => {
      const listing = listings.find(l => l.id === id)
      if (!listing) return
      const pill = makePill(listing, false)
      const fn = openCardFnsRef.current.get(id)
      if (fn) pill.addEventListener('mouseenter', fn)
      if (scheduleCloseRef.current) pill.addEventListener('mouseleave', scheduleCloseRef.current)
      marker.content = pill
    })

    // Re-open info window if it was showing before pill replacement
    if (openIdRef.current) {
      const m = markersRef.current.get(openIdRef.current)
      if (m) infoWindowRef.current?.open(mapInstanceRef.current, m)
    }

    if (hoveredId != null) {
      const marker  = markersRef.current.get(hoveredId)
      const listing = listings.find(l => l.id === hoveredId)
      if (marker && listing) {
        const pill = makePill(listing, true)
        const fn = openCardFnsRef.current.get(hoveredId)
        if (fn) pill.addEventListener('mouseenter', fn)
        if (scheduleCloseRef.current) pill.addEventListener('mouseleave', scheduleCloseRef.current)
        marker.content = pill
        pill.animate(
          [
            { transform: 'translateY(-6px) scale(1.08)' },
            { transform: 'translateY(-18px) scale(1.1)' },
            { transform: 'translateY(-6px) scale(1.08)' },
          ],
          { duration: 900, easing: 'ease-in-out', iterations: Infinity }
        )
      }
    }
  }, [hoveredId, listings])

  return (
    <div
      className={fullHeight ? 'relative w-full h-full' : 'relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm'}
      style={{ height: fullHeight ? '100%' : '460px' }}
    >
      <div ref={mapRef} className="w-full h-full" />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-900 border-t-transparent" />
        </div>
      )}
    </div>
  )
}
