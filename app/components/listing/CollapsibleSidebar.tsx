'use client'

import { useState } from 'react'

export function CollapsibleSidebar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true)

  return (
    <div className="hidden lg:flex shrink-0 relative order-1" style={{ width: open ? '16rem' : '2rem' }}>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Sidebar schließen' : 'Sidebar öffnen'}
        className="absolute -right-3 top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm hover:text-gray-700 transition-colors text-xs"
      >
        {open ? '‹' : '›'}
      </button>

      {/* Sidebar content */}
      <div
        className="w-64 space-y-4 overflow-hidden transition-all duration-300"
        style={{ opacity: open ? 1 : 0, width: open ? '16rem' : 0, pointerEvents: open ? 'auto' : 'none' }}
      >
        {children}
      </div>
    </div>
  )
}
