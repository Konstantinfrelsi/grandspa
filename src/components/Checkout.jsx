import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ShieldCheck, Lock, Heart } from 'lucide-react'

const AMOUNTS = [50, 100, 150, 200, 250]

export default function Checkout() {
  const [amount, setAmount] = useState(150)
  const [consent, setConsent] = useState(false)
  const [withdrawal, setWithdrawal] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Dies ist eine Demo. Hier w\u00FCrde der sichere Checkout-Prozess (Stripe/PayPal) folgen.')
  }

  return (
    <div className="bg-cream text-spa-900 min-h-screen pt-32 pb-24">
      <div className="max-w-[800px] mx-auto px-6 md:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-spa-800/50 hover:text-spa-900 transition-colors mb-8 font-light">
          <ArrowLeft size={16} />
          Zur&uuml;ck zur Startseite
        </Link>

        <p className="text-[10px] uppercase tracking-[0.3em] text-gold-dark font-semibold mb-3">
          &#10022; Das Geschenk, das man nie vergisst
        </p>
        <h1 className="font-heading text-4xl md:text-5xl text-spa-900 font-normal tracking-tight mb-3">
          Wertgutschein <em className="text-gold-dark">verschenken</em>
        </h1>
        <p className="text-base text-spa-800/60 font-light max-w-[55ch] mb-10">
          In 90&nbsp;Sekunden bestellt &middot; sofort per E&#8209;Mail oder als edle
          Geschenkkarte per Post &middot; 12&nbsp;Monate g&uuml;ltig.
        </p>

        {/* Trust Bar */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <TrustBadge icon={<Lock size={14} />} label="SSL-verschl&uuml;sselt" />
          <TrustBadge icon={<ShieldCheck size={14} />} label="14 Tage Widerruf" />
          <TrustBadge icon={<Heart size={14} />} label="Sofort verschenken" />
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-spa-900/8 p-8 md:p-10 space-y-10">
          {/* Step 1 */}
          <div>
            <h2 className="text-lg font-medium mb-4 pb-3 border-b border-spa-900/8">
              1. Gutscheinwert w&auml;hlen
            </h2>
            <div className="flex gap-3 flex-wrap">
              {AMOUNTS.map((val) => (
                <button key={val} type="button" onClick={() => setAmount(val)}
                  className={`px-6 py-3 text-sm font-medium transition-all duration-300 cursor-pointer ${
                    amount === val
                      ? 'bg-gold/10 border-2 border-gold text-spa-900'
                      : 'bg-cream-dark/50 border border-spa-900/8 text-spa-800/60 hover:border-spa-900/20'
                  }`}>
                  {val} &euro;
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div>
            <h2 className="text-lg font-medium mb-4 pb-3 border-b border-spa-900/8">
              2. Ihre Daten
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Vorname" required className={inputCls} />
              <input type="text" placeholder="Nachname" required className={inputCls} />
              <input type="email" placeholder="E-Mail (f&uuml;r den Gutscheinversand)" required className={`${inputCls} md:col-span-2`} />
              <textarea placeholder="Nachricht f&uuml;r den Empf&auml;nger (optional)" className={`${inputCls} md:col-span-2 min-h-[100px] resize-y`} />
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <h2 className="text-lg font-medium mb-4 pb-3 border-b border-spa-900/8">
              3. Zahlungsmethode
            </h2>
            <div className="space-y-3">
              {['Kreditkarte (Stripe)', 'PayPal', 'Klarna Sofort\u00FCberweisung'].map((method, i) => (
                <label key={method} className="flex items-center gap-3 px-4 py-3.5 border border-spa-900/8 cursor-pointer hover:border-spa-900/15 transition-colors">
                  <input type="radio" name="payment" defaultChecked={i === 0} className="accent-gold-dark" />
                  <span className="text-sm text-spa-900">{method}</span>
                </label>
              ))}
            </div>
          </div>

          {/* DSGVO & Widerruf */}
          <div className="space-y-3 pt-6 border-t border-spa-900/8">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" required checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 accent-gold-dark shrink-0 cursor-pointer" />
              <span className="text-xs text-spa-800/65 font-light leading-relaxed">
                Ich habe die{' '}
                <Link to="/datenschutz" target="_blank" className="text-gold-dark underline underline-offset-2">
                  Datenschutzerkl&auml;rung
                </Link>
                {' '}gelesen und willige in die Verarbeitung meiner Daten zur Bestellabwicklung ein.
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" required checked={withdrawal}
                onChange={(e) => setWithdrawal(e.target.checked)}
                className="mt-1 accent-gold-dark shrink-0 cursor-pointer" />
              <span className="text-xs text-spa-800/65 font-light leading-relaxed">
                Ich akzeptiere die AGB und habe die Widerrufsbelehrung zur Kenntnis
                genommen. Mir ist bekannt, dass ich den Vertrag innerhalb von
                14&nbsp;Tagen ohne Angabe von Gr&uuml;nden widerrufen kann.
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t-2 border-gold/25">
            <div className="text-xl font-medium">
              Gesamt: <span className="text-gold-dark font-heading text-2xl" style={{ fontVariantNumeric: 'tabular-nums' }}>{amount} &euro;</span>
            </div>
            <button type="submit"
              className="bg-spa-900 text-gold text-[11px] uppercase tracking-[0.15em] font-semibold px-8 py-4 hover:bg-spa-800 transition-all duration-500 btn-push cursor-pointer">
              Jetzt kostenpflichtig bestellen
            </button>
          </div>

          <p className="text-[11px] text-spa-800/40 font-light text-center pt-2">
            Sichere Zahlung &middot; Ihre Daten werden SSL-verschl&uuml;sselt &uuml;bertragen
          </p>
        </form>
      </div>
    </div>
  )
}

function TrustBadge({ icon, label }) {
  return (
    <div className="flex items-center justify-center gap-2 px-3 py-3 bg-white border border-spa-900/8 text-[10px] uppercase tracking-[0.12em] text-spa-800/55 font-medium">
      <span className="text-gold-dark">{icon}</span>
      <span className="hidden sm:inline">{label}</span>
    </div>
  )
}

const inputCls = 'w-full px-4 py-3.5 bg-cream-dark/30 border border-spa-900/8 text-sm text-spa-900 placeholder:text-spa-800/35 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors font-light'
