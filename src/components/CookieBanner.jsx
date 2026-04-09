import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield } from 'lucide-react'

const STORAGE_KEY = 'grandspa_cookie_consent_v1'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) {
        const t = setTimeout(() => setVisible(true), 600)
        return () => clearTimeout(t)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  const decide = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, ts: Date.now() }))
    } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] p-4 md:p-6 pointer-events-none">
      <div className="pointer-events-auto max-w-[680px] mx-auto bg-spa-900/95 backdrop-blur-xl border border-gold/25 shadow-2xl">
        <div className="p-6 md:p-7">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex w-10 h-10 border border-gold/30 items-center justify-center shrink-0">
              <Shield size={16} className="text-gold" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-2">
                Datenschutz
              </p>
              <p className="text-sm text-cream/70 font-light leading-relaxed">
                Wir verwenden ausschlie&szlig;lich technisch notwendige Cookies, damit unsere
                Website einwandfrei funktioniert. Es findet kein Tracking, keine Werbung
                und keine Weitergabe an Dritte statt.{' '}
                <Link to="/datenschutz" className="text-gold hover:text-gold-light underline underline-offset-2">
                  Mehr erfahren
                </Link>
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => decide('accepted')}
                  className="bg-gold text-spa-900 text-[11px] uppercase tracking-[0.15em] font-semibold px-7 py-3 hover:bg-gold-light transition-all duration-500 btn-push cursor-pointer">
                  Verstanden
                </button>
                <button
                  onClick={() => decide('declined')}
                  className="border border-gold/30 text-gold/80 text-[11px] uppercase tracking-[0.15em] font-medium px-7 py-3 hover:bg-gold/10 transition-all duration-500 cursor-pointer">
                  Nur Notwendige
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
