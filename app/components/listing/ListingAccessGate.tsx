'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getBrowserClient } from '@/app/lib/supabase'

const LS_KEY = 'tinyinvest_unlocked'

export function useIsUnlocked() {
  const [unlocked, setUnlocked] = useState<boolean | null>(null)
  useEffect(() => {
    const check = () => {
      if (localStorage.getItem(LS_KEY) === '1') { setUnlocked(true); return }
    }
    check()
    window.addEventListener('tinyinvest_unlocked', check)

    const supabase = getBrowserClient()
    supabase.auth.getSession().then(({ data }) => { if (data.session) setUnlocked(true) })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, s) => {
      if (s) setUnlocked(true)
    })
    return () => {
      window.removeEventListener('tinyinvest_unlocked', check)
      subscription.unsubscribe()
    }
  }, [])
  return unlocked
}

interface Props {
  listingId: number
}

export function ListingAccessGate({ listingId }: Props) {
  const unlocked = useIsUnlocked()
  const [name,    setName]    = useState('')
  const [phone,   setPhone]   = useState('')
  const [email,   setEmail]   = useState('')
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState('')

  if (unlocked === true) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center">
        <p className="text-sm font-bold text-green-700">✓ Alle Details freigeschaltet</p>
        <p className="text-[11px] text-green-600 mt-0.5">Zugang aktiv.</p>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/gate-register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, listing_id: listingId }),
      })
      if (!res.ok) throw new Error('Fehler beim Speichern')
      localStorage.setItem(LS_KEY, '1')
      window.dispatchEvent(new Event('tinyinvest_unlocked'))
    } catch {
      setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
    }
    setLoading(false)
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-center gap-2.5 mb-3">
        <span className="text-xl">🔓</span>
        <div>
          <p className="text-sm font-black text-gray-900 leading-tight">Projektdetails freischalten</p>
          <p className="text-[11px] text-gray-400 mt-0.5">Einmalig — alle Projekte dauerhaft zugänglich</p>
        </div>
      </div>
      <p className="text-[11px] text-blue-700 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 mb-3 leading-snug">
        📍 Erhalten Sie Zugang zu Adresse & Karte, Ausstattung, Betreiber-Profil und Exposé-Download
      </p>

      <form onSubmit={handleSubmit} className="space-y-2.5">
        <input
          type="text"
          required
          placeholder="Vorname"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <input
          type="tel"
          required
          placeholder="Telefonnummer"
          value={phone}
          pattern="[0-9+\s\-()]*"
          onChange={(e) => setPhone(e.target.value.replace(/[^0-9+\s\-()]/g, ""))}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <input
          type="email"
          required
          placeholder="E-Mail-Adresse"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <button
          type="submit"
          disabled={loading || !name || !phone || !email}
          className="w-full bg-green-700 hover:bg-green-800 disabled:opacity-50 text-white font-bold py-2.5 rounded-full text-sm transition-colors"
        >
          {loading ? 'Wird gespeichert…' : 'Kostenlos freischalten →'}
        </button>
      </form>

      <p className="text-center text-[11px] text-gray-400 mt-3">
        Bereits registriert?{' '}
        <Link href="/investor/login" className="text-green-700 font-semibold hover:underline">
          Einloggen
        </Link>
      </p>
    </div>
  )
}
