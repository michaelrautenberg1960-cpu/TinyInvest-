'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getBrowserClient } from '@/app/lib/supabase'

interface Props {
  listingId: number
}

export function ListingAccessGate({ listingId }: Props) {
  const [loggedIn, setLoggedIn]   = useState<boolean | null>(null)
  const [name,     setName]       = useState('')
  const [phone,    setPhone]      = useState('')
  const [email,    setEmail]      = useState('')
  const [loading,  setLoading]    = useState(false)
  const [sent,     setSent]       = useState(false)
  const [error,    setError]      = useState('')

  useEffect(() => {
    const supabase = getBrowserClient()
    supabase.auth.getSession().then(({ data }) => setLoggedIn(!!data.session))
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, s) => {
      setLoggedIn(!!s)
    })
    return () => subscription.unsubscribe()
  }, [])

  if (loggedIn === true) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center">
        <p className="text-sm font-bold text-green-700">✓ Alle Details freigeschaltet</p>
        <p className="text-[11px] text-green-600 mt-0.5">Sie sind eingeloggt.</p>
      </div>
    )
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-center">
        <div className="text-3xl mb-2">✉️</div>
        <p className="font-bold text-gray-900 text-sm">E-Mail gesendet!</p>
        <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
          Klicken Sie den Link in Ihrer E-Mail — alle 🔒 werden sofort aufgehoben.
        </p>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const callbackUrl =
      typeof window !== 'undefined'
        ? window.location.href
        : `https://tinyhouse.investments/marktplatz/${listingId}`
    const supabase = getBrowserClient()
    const { error: err } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: callbackUrl,
        data: { full_name: name, phone },
      },
    })
    setLoading(false)
    if (err) { setError(err.message); return }
    setSent(true)
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-center gap-2.5 mb-4">
        <span className="text-xl">🔓</span>
        <div>
          <p className="text-sm font-black text-gray-900 leading-tight">Details freischalten</p>
          <p className="text-[11px] text-gray-400 mt-0.5">Einmalig — alle Projekte dauerhaft zugänglich</p>
        </div>
      </div>

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
          placeholder="Telefon (optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
          disabled={loading || !name || !email}
          className="w-full bg-green-700 hover:bg-green-800 disabled:opacity-50 text-white font-bold py-2.5 rounded-full text-sm transition-colors"
        >
          {loading ? 'Wird gesendet…' : 'Kostenlos registrieren →'}
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
