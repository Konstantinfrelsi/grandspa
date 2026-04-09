import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import { ArrowRight, Mail, Gift, Clock } from 'lucide-react'

const QUICK_AMOUNTS = [100, 150, 250]

export default function Vouchers() {
  const ref = useReveal()

  return (
    <section id="gutscheine" ref={ref} className="bg-cream text-spa-900 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="reveal img-zoom min-h-[400px] lg:min-h-[680px] relative">
          <img src="/images/voucher.png" alt="Grand Spa Gutschein"
               className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-spa-900/40 via-transparent to-transparent" />
          {/* Floating proof badge */}
          <div className="absolute top-8 left-8 bg-cream/95 backdrop-blur-sm px-5 py-3 border-l-2 border-gold-dark shadow-xl">
            <p className="text-[9px] uppercase tracking-[0.2em] text-spa-800/50 font-semibold">Unser Bestseller</p>
            <p className="text-sm font-medium text-spa-900 mt-0.5">Royal Retreat Gutschein</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 lg:py-24">
          <p className="reveal text-[10px] uppercase tracking-[0.3em] text-gold-dark font-semibold mb-4">
            &#10022; Das Geschenk, das in Erinnerung bleibt
          </p>
          <h2 className="reveal reveal-d1 font-heading text-4xl md:text-5xl text-spa-900 font-normal leading-[1.08] tracking-tight">
            Verschenken Sie<br />unvergessliche <em className="text-gold-dark">Momente</em>
          </h2>
          <p className="reveal reveal-d2 mt-6 text-base text-spa-800/65 leading-relaxed font-light max-w-[52ch]">
            W&auml;hrend andere Geschenke vergessen werden, sprechen die Beschenkten noch
            Wochen sp&auml;ter von ihrem Spa-Tag. Ein Gutschein vom Grand Spa ist mehr als
            ein Pr&auml;sent &mdash; es ist ein <span className="text-spa-900 font-medium">Versprechen
            auf reinen Luxus</span>.
          </p>

          {/* Benefits */}
          <ul className="reveal reveal-d3 mt-8 space-y-4">
            <Benefit icon={<Mail size={14} />}>
              <span className="font-medium text-spa-900">Sofort per E&#8209;Mail</span>
              {' '}oder als edle Geschenkkarte per Post
            </Benefit>
            <Benefit icon={<Gift size={14} />}>
              <span className="font-medium text-spa-900">Flexibel einl&ouml;sbar</span>
              {' '}f&uuml;r alle Behandlungen und Spa-Pakete
            </Benefit>
            <Benefit icon={<Clock size={14} />}>
              <span className="font-medium text-spa-900">12 Monate g&uuml;ltig</span>
              {' '}&middot; ohne Verfall, ohne Kleingedrucktes
            </Benefit>
          </ul>

          {/* Quick Amount Picker */}
          <div className="reveal reveal-d3 mt-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-spa-800/50 font-semibold mb-3">
              Beliebte Werte
            </p>
            <div className="flex flex-wrap gap-3">
              {QUICK_AMOUNTS.map((val, i) => (
                <Link
                  key={val}
                  to="/checkout"
                  className={`relative px-6 py-3 text-sm font-semibold border transition-all duration-300 ${
                    i === 1
                      ? 'bg-spa-900 text-gold border-spa-900 hover:bg-spa-800'
                      : 'bg-white text-spa-900 border-spa-900/15 hover:border-spa-900'
                  }`}>
                  {val}&nbsp;&euro;
                  {i === 1 && (
                    <span className="absolute -top-2 -right-2 text-[9px] uppercase tracking-[0.1em] bg-gold text-spa-900 px-2 py-0.5 font-bold">
                      Top
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/checkout"
            className="reveal reveal-d4 mt-8 inline-flex items-center gap-2 self-start bg-spa-900 text-gold text-[11px] uppercase tracking-[0.15em] font-semibold px-9 py-4 hover:bg-spa-800 transition-all duration-500 btn-push shadow-lg shadow-spa-900/20">
            Gutschein jetzt bestellen
            <ArrowRight size={14} />
          </Link>

          {/* Trust line */}
          <p className="reveal reveal-d4 mt-5 text-[11px] text-spa-800/45 font-light">
            &#10003; SSL-verschl&uuml;sselt &nbsp;&middot;&nbsp; &#10003; 14 Tage Widerruf &nbsp;&middot;&nbsp; &#10003; Sicher mit Stripe &amp; PayPal
          </p>
        </div>
      </div>
    </section>
  )
}

function Benefit({ icon, children }) {
  return (
    <li className="flex items-start gap-4 text-spa-800/75 font-light">
      <span className="mt-0.5 w-7 h-7 border border-gold-dark/30 flex items-center justify-center text-gold-dark shrink-0">
        {icon}
      </span>
      <span className="leading-relaxed">{children}</span>
    </li>
  )
}
