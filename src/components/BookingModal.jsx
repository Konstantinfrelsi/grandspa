import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, CheckCircle2 } from 'lucide-react'
import { createBooking } from '../lib/bookings'

const TREATMENTS = [
  'Traditionelle Thai-Massage',
  'Aroma-Entspannungsmassage',
  'Lava-Stone-Massage',
  'Thai-Herbal-Massage',
  'Fußreflexzonenmassage',
  'Thai Spa I — Klassik Erlebnis',
  'Thai Spa II — Premium Wellness',
  'Thai Spa III — Royal Retreat',
]

const EMPTY = { name: '', email: '', phone: '', date: '', time: '', notes: '' }

export default function BookingModal({ isOpen, onClose, preselectedTreatment }) {
  const [treatment, setTreatment] = useState('')
  const [form, setForm] = useState(EMPTY)
  const [consent, setConsent] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setTreatment(preselectedTreatment || '')
      setForm(EMPTY)
      setConsent(false)
      setSent(false)
    }
  }, [preselectedTreatment, isOpen])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    createBooking({
      ...form,
      treatment: treatment || 'Sonstiges',
    })
    setSent(true)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-spa-900/80 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-cream text-spa-900 p-8 md:p-10 w-full max-w-[480px] shadow-2xl max-h-[92vh] overflow-y-auto"
           onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-spa-800/40 hover:text-spa-900 transition-colors cursor-pointer">
          <X size={20} />
        </button>

        {sent ? (
          <SuccessState onClose={onClose} />
        ) : (
          <>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold-dark font-semibold mb-2">
              &#10022; Antwort innerhalb von 2 Stunden
            </p>
            <h2 className="font-heading text-3xl text-spa-900 font-normal tracking-tight mb-1">
              Ihren Termin sichern
            </h2>
            <p className="text-sm text-spa-800/50 font-light mb-7">
              Hinterlassen Sie Ihre Wunschdaten &mdash; wir best&auml;tigen Ihren Termin pers&ouml;nlich.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Vollst&auml;ndiger Name" required
                value={form.name} onChange={set('name')} className={inputCls} />
              <input type="email" placeholder="E-Mail Adresse" required
                value={form.email} onChange={set('email')} className={inputCls} />
              <input type="tel" placeholder="Telefonnummer" required
                value={form.phone} onChange={set('phone')} className={inputCls} />
              <select required value={treatment} onChange={(e) => setTreatment(e.target.value)} className={inputCls}>
                <option value="" disabled>Gew&uuml;nschte Behandlung</option>
                {TREATMENTS.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
                <option value="Sonstiges">Andere / Allgemeine Anfrage</option>
              </select>
              <div className="grid grid-cols-2 gap-3">
                <input type="date" required value={form.date} onChange={set('date')} className={inputCls} />
                <input type="time" required value={form.time} onChange={set('time')} className={inputCls} />
              </div>
              <textarea placeholder="Anmerkungen (optional)" rows={2}
                value={form.notes} onChange={set('notes')}
                className={`${inputCls} resize-none`} />

              {/* DSGVO Consent */}
              <label className="flex items-start gap-3 pt-2 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 accent-gold-dark shrink-0 cursor-pointer"
                />
                <span className="text-xs text-spa-800/60 font-light leading-relaxed">
                  Ich willige ein, dass meine Daten zur Bearbeitung der Terminanfrage
                  verarbeitet werden. Hinweise gem&auml;&szlig;{' '}
                  <Link to="/datenschutz" target="_blank" className="text-gold-dark underline underline-offset-2 hover:text-spa-900">
                    Datenschutzerkl&auml;rung
                  </Link>
                  . Widerruf jederzeit per E-Mail m&ouml;glich.
                </span>
              </label>

              <button type="submit"
                className="w-full bg-spa-900 text-gold text-[11px] uppercase tracking-[0.15em] font-semibold py-4 hover:bg-spa-800 transition-all duration-500 btn-push cursor-pointer mt-2">
                Termin Verbindlich Anfragen
              </button>

              {/* Trust */}
              <div className="flex items-center justify-center gap-4 pt-2 text-[10px] uppercase tracking-[0.15em] text-spa-800/40 font-medium">
                <span>&#10003; Unverbindlich</span>
                <span className="w-1 h-1 bg-spa-800/20 rounded-full" />
                <span>&#10003; Kostenfrei</span>
                <span className="w-1 h-1 bg-spa-800/20 rounded-full" />
                <span>&#10003; SSL</span>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function SuccessState({ onClose }) {
  return (
    <div className="py-8 text-center">
      <div className="mx-auto w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mb-6">
        <CheckCircle2 size={32} className="text-gold-dark" />
      </div>
      <p className="text-[10px] uppercase tracking-[0.25em] text-gold-dark font-semibold mb-3">
        Anfrage eingegangen
      </p>
      <h2 className="font-heading text-3xl text-spa-900 font-normal tracking-tight mb-3">
        Vielen Dank!
      </h2>
      <p className="text-sm text-spa-800/60 font-light leading-relaxed max-w-[36ch] mx-auto">
        Wir haben Ihre Anfrage erhalten und melden uns innerhalb von
        2&nbsp;Stunden pers&ouml;nlich bei Ihnen zur&uuml;ck.
      </p>
      <button onClick={onClose}
        className="mt-8 bg-spa-900 text-gold text-[11px] uppercase tracking-[0.15em] font-semibold px-10 py-4 hover:bg-spa-800 transition-all duration-500 btn-push cursor-pointer">
        Schlie&szlig;en
      </button>
    </div>
  )
}

const inputCls = 'w-full px-4 py-3.5 bg-white border border-spa-900/10 text-sm text-spa-900 placeholder:text-spa-800/35 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors font-light'
