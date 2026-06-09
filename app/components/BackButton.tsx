'use client'

import { useRouter } from 'next/navigation'

export function BackButton({ className }: { className?: string }) {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className={className ?? "flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors"}
    >
      ← Zurück
    </button>
  )
}
