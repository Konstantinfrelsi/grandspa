import useReveal from '../hooks/useReveal'
import { ArrowRight, Users, User, Star, ShieldCheck, Sparkles } from 'lucide-react'

const PACKAGES = [
  {
    tier: 'Thai Spa I',
    name: 'Klassik Erlebnis',
    promise: 'F\u00FCr Einsteiger, die das Authentische erleben m\u00F6chten.',
    items: [
      'Aroma-Massage des ganzen K\u00F6rpers (60 Min.)',
      'Aroma-Whirlpoolbad mit Salz aus dem Toten Meer, Honig und Milch',
      'Tropische Fr\u00FCchte & Prosecco (alkoholfrei)',
    ],
    duration: '120 Minuten',
    regular1: '183',
    regular2: '295',
    price1: '155',
    price2: '250',
  },
  {
    tier: 'Thai Spa III',
    name: 'Royal Retreat',
    promise: 'Unser Bestseller. Die ganzheitliche Auszeit auf h\u00F6chstem Niveau.',
    items: [
      'Thai-Massage oder Aroma-Massage nach Wahl',
      'Thai-Fu\u00DFreflexzonenmassage',
      'Sauna mit Thai-Kr\u00E4utern oder Kr\u00E4uter-Aromabad',
      'Tropische Fr\u00FCchte & Wellness-Drink inklusive',
    ],
    duration: '120 Minuten',
    regular1: '183',
    regular2: '295',
    price1: '155',
    price2: '250',
    featured: true,
    badge: 'Beliebteste Wahl',
  },
  {
    tier: 'Thai Spa II',
    name: 'Premium Wellness',
    promise: 'Tiefe Entspannung mit verl\u00E4ngerter Massagezeit.',
    items: [
      'Aroma-Massage des ganzen K\u00F6rpers (90 Min.)',
      'Aroma-Whirlpoolbad mit Salz, Honig und Milch (30 Min.)',
      'Tropische Fr\u00FCchte & Wellness-Drink',
    ],
    duration: '120 Minuten',
    regular1: '183',
    regular2: '295',
    price1: '155',
    price2: '250',
  },
]

export default function Packages({ onBook }) {
  const ref = useReveal()

  return (
    <section id="pakete" ref={ref} className="py-24 md:py-40 bg-spa-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="reveal text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">
            &#10022; Spa-Pakete &middot; Online bis zu 45&nbsp;&euro; sparen
          </p>
          <h2 className="reveal reveal-d1 font-heading text-4xl md:text-5xl lg:text-6xl text-cream font-normal leading-[1.08] tracking-tight">
            Ganzheitliche <em className="text-gold-grad">Erholung</em>
          </h2>
          <p className="reveal reveal-d2 mt-6 text-base text-cream/40 max-w-xl mx-auto font-light leading-relaxed">
            Verschmelzen Sie Massage, Aromabad und Sauna zu einem 120&#8209;Min&uuml;tigen
            Ritual f&uuml;r K&ouml;rper und Geist. Jedes Paket auch zu zweit buchbar.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:items-stretch">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.name} {...pkg} onBook={onBook} />
          ))}
        </div>

        {/* Trust Row */}
        <div className="reveal mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[900px] mx-auto">
          <TrustItem
            icon={<ShieldCheck size={16} />}
            title="Termin-Flex-Garantie"
            desc="Kostenfreie Umbuchung bis 24h vor dem Termin."
          />
          <TrustItem
            icon={<Star size={16} />}
            title="Zertifizierte Therapeutinnen"
            desc="Ausgebildet in Thailand, gepr\u00FCft in Deutschland."
          />
          <TrustItem
            icon={<Sparkles size={16} />}
            title="Premium Hygienestandard"
            desc="Deutsches Hygienezertifikat &middot; nach RKI-Empfehlung."
          />
        </div>
      </div>
    </section>
  )
}

function PackageCard({ tier, name, promise, price1, price2, regular1, regular2, items, duration, featured, badge, onBook }) {
  const save1 = parseInt(regular1, 10) - parseInt(price1, 10)
  const save2 = parseInt(regular2, 10) - parseInt(price2, 10)

  return (
    <div className={`reveal service-card flex flex-col relative overflow-hidden ${
      featured
        ? 'bg-gradient-to-b from-spa-700/90 to-spa-800/90 border-2 border-gold/50 md:-translate-y-3 md:scale-[1.02]'
        : 'bg-spa-800/60 border border-gold/10'
    }`}>
      {/* Badge bar (inside card, full width) */}
      {badge && (
        <div className="bg-gold text-spa-900 text-[10px] uppercase tracking-[0.25em] font-bold py-2.5 text-center shadow-lg relative z-20">
          &#9733;&nbsp; {badge} &nbsp;&#9733;
        </div>
      )}

      {/* Gold glow on featured */}
      {featured && (
        <>
          <div className="absolute top-0 right-0 w-72 h-72 bg-gold/12 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        </>
      )}

      <div className="relative flex-1 flex flex-col p-8 md:p-10">
        {/* Header */}
        <div className="mb-5">
          <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold block mb-2 ${featured ? 'text-gold-light' : 'text-gold'}`}>
            {tier}
          </span>
          <h3 className="font-heading text-2xl md:text-3xl text-cream font-normal tracking-tight">{name}</h3>
          <p className="mt-1 text-xs text-cream/30 font-light">{duration}</p>
        </div>

        {/* Promise */}
        <p className={`text-sm font-light italic mb-5 ${featured ? 'text-gold-light/80' : 'text-cream/55'}`}>
          {promise}
        </p>

        <div className={`h-px mb-5 ${featured ? 'bg-gold/20' : 'bg-cream/8'}`} />

        {/* Items */}
        <ul className="space-y-3 flex-1">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-cream/55 font-light">
              <span className={`w-1 h-1 rounded-full mt-2 shrink-0 ${featured ? 'bg-gold-light' : 'bg-gold/60'}`} />
              {item}
            </li>
          ))}
        </ul>

        {/* Pricing */}
        <div className="mt-6 pt-5 border-t border-cream/5 space-y-4">
          {/* 1 Person */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User size={14} className="text-cream/40" />
              <span className="text-xs text-cream/50 font-light">1 Person</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xs text-cream/30 line-through font-light" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {regular1}&nbsp;&euro;
              </span>
              <span className={`font-heading text-2xl font-normal ${featured ? 'text-gold-light' : 'text-gold'}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                {price1}&nbsp;&euro;
              </span>
            </div>
          </div>

          {/* 2 Personen */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users size={14} className="text-cream/40" />
              <span className="text-xs text-cream/50 font-light">2 Personen</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xs text-cream/30 line-through font-light" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {regular2}&nbsp;&euro;
              </span>
              <span className={`font-heading text-xl font-normal ${featured ? 'text-gold-light/85' : 'text-gold/80'}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                {price2}&nbsp;&euro;
              </span>
            </div>
          </div>

          {/* Savings highlight */}
          <div className={`text-center text-[10px] uppercase tracking-[0.18em] font-semibold py-2 ${
            featured
              ? 'bg-gold/15 text-gold-light border border-gold/20'
              : 'bg-gold/8 text-gold/85 border border-gold/15'
          }`}>
            Sie sparen bis zu {save2}&nbsp;&euro; online
          </div>
        </div>

        {/* CTA */}
        <button onClick={() => onBook(tier + ' \u2014 ' + name)}
          className={`mt-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.15em] font-semibold py-4 transition-all duration-500 btn-push cursor-pointer ${
            featured
              ? 'bg-gold text-spa-900 hover:bg-gold-light shadow-lg shadow-gold/20'
              : 'border border-gold/30 text-gold hover:bg-gold hover:text-spa-900'
          }`}>
          {featured ? 'Royal Retreat sichern' : 'Jetzt sichern'}
          <ArrowRight size={14} />
        </button>

        {featured && (
          <p className="mt-3 text-center text-[10px] text-gold-light/60 font-light">
            &#10022; Termine begrenzt &middot; Antwort innerhalb von 2&nbsp;Stunden
          </p>
        )}
      </div>
    </div>
  )
}

function TrustItem({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3 p-5 border border-gold/10 bg-spa-800/40">
      <span className="text-gold mt-0.5 shrink-0">{icon}</span>
      <div>
        <p className="text-[11px] uppercase tracking-[0.15em] text-gold font-semibold">{title}</p>
        <p className="mt-1 text-xs text-cream/50 font-light leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
