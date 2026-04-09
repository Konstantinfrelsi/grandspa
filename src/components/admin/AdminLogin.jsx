import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Lock, ArrowLeft, Eye, EyeOff } from 'lucide-react'
import { login } from '../../lib/auth'

export default function AdminLogin({ onLogin }) {
  const [pw, setPw] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (login(pw)) {
      setError('')
      onLogin?.()
    } else {
      setError('Passwort inkorrekt.')
    }
  }

  return (
    <div className="min-h-screen bg-spa-900 flex items-center justify-center p-6">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-[420px]">
        <Link to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cream/40 hover:text-gold transition-colors mb-8 font-medium">
          <ArrowLeft size={14} />
          Zur Website
        </Link>

        <div className="bg-spa-800/60 backdrop-blur-sm border border-gold/15 p-10 md:p-12 shadow-2xl">
          <div className="mb-8 text-center">
            <div className="mx-auto w-14 h-14 border border-gold/30 flex items-center justify-center mb-5">
              <Lock size={18} className="text-gold" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-3">
              Grand Spa &middot; Admin
            </p>
            <h1 className="font-heading text-3xl text-cream font-normal tracking-tight">
              Terminverwaltung
            </h1>
            <p className="mt-3 text-sm text-cream/40 font-light">
              Bitte mit Admin-Passwort anmelden.
            </p>
          </div>

          <form onSubmit={submit} className="space-y-5">
            <div className="relative">
              <input
                type={show ? 'text' : 'password'}
                placeholder="Admin-Passwort"
                autoFocus
                required
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                className="w-full px-4 py-4 pr-12 bg-spa-900/60 border border-gold/20 text-sm text-cream placeholder:text-cream/25 focus:outline-none focus:border-gold/60 transition-colors font-light"
              />
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-cream/30 hover:text-gold transition-colors cursor-pointer"
                aria-label="Passwort anzeigen">
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {error && (
              <p className="text-xs text-rose-300/80 bg-rose-950/30 border border-rose-500/20 px-4 py-3">
                {error}
              </p>
            )}

            <button type="submit"
              className="w-full bg-gold text-spa-900 text-[11px] uppercase tracking-[0.15em] font-semibold py-4 hover:bg-gold-light transition-all duration-500 btn-push cursor-pointer">
              Anmelden
            </button>
          </form>

          <p className="mt-8 pt-6 border-t border-gold/10 text-[10px] text-cream/30 font-light text-center leading-relaxed">
            Demo-Zugang: <span className="text-gold/70">grandspa2026</span><br />
            Im Produktivbetrieb auf echte Authentifizierung umstellen.
          </p>
        </div>
      </div>
    </div>
  )
}
