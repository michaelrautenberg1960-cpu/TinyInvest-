'use client'

import React from 'react'

export function ClickableLock() {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    const desktop = document.getElementById('unlock-section')
    const mobile  = document.getElementById('unlock-section-mobile')
    const target  = desktop && desktop.offsetParent !== null ? desktop : mobile
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' })
      target.classList.add('ring-2', 'ring-amber-400', 'ring-offset-2', 'rounded-xl')
      setTimeout(() => {
        target.classList.remove('ring-2', 'ring-amber-400', 'ring-offset-2', 'rounded-xl')
      }, 2000)
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      title="Registrieren, um Details zu sehen"
      className="cursor-pointer text-lg text-gray-300 hover:text-gray-500 transition-colors focus:outline-none"
    >
      🔒
    </button>
  )
}

export function LockedRow({
  label,
  value,
  locked,
}: {
  label: string
  value: React.ReactNode
  locked: boolean
}) {
  return (
    <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
      <td className="px-4 py-2.5 text-sm text-gray-500 w-2/5 align-middle">{label}</td>
      <td className="px-4 py-2.5 text-sm font-semibold text-gray-900 align-middle">
        {locked ? <ClickableLock /> : (value ?? '—')}
      </td>
    </tr>
  )
}

export function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-5 rounded-xl border border-gray-200 overflow-hidden bg-white">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
      </div>
      <table className="w-full">
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}
