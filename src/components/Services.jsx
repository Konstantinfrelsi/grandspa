import useReveal from '../hooks/useReveal'

const SERVICES = [
  {
    tag: 'Signature',
    title: 'Traditionelle Thai-Massage',
    desc: 'Ganzkörpermassage mit Stimulation der Muskulatur und aller Energiepunkte des Körpers. Dehnung, Akupressur und Energielinienarbeit auf der Behandlungsmatte.',
    prices: [
      ['60 Min', '65 €'],
      ['90 Min', '95 €'],
      ['120 Min', '125 €'],
    ],
    img: '/images/services_bg.png',
    wide: true,
  },
  {
    tag: 'Entspannung',
    title: 'Aroma-Entspannungsmassage',
    desc: 'Sanfte Ganzkörpermassage mit warmem, aromatischem Öl. Ätherische Öle beruhigen die Sinne und lösen tiefliegende Verspannungen. Auch als Teilmassage für Kopf, Schultern & Rücken verfügbar.',
    prices: [
      ['60 Min', '65 €'],
      ['90 Min', '95 €'],
      ['120 Min', '125 €'],
    ],
    img: '/images/royal.png',
    wide: true,
    reversed: true,
  },
  {
    tag: 'Vulkanstein',
    title: 'Lava-Stone-Massage',
    desc: 'Das alte Geheimnis der Thai-Massage mit heißen Lavasteinen verstärkt den Kreislauf und die Durchblutung der Muskulatur in Verbindung mit einer Aroma-Massage.',
    prices: [
      ['90 Min', '125 €'],
      ['120 Min', '165 €'],
    ],
    img: '/images/hero.png',
  },
  {
    tag: 'Heilkräuter',
    title: 'Thai-Herbal-Massage',
    desc: 'Kombination aus Stimulation der Muskulatur und Behandlung mit der traditionellen thailändischen Kräuterkompresse. Tiefenwirksam und wohltuend zugleich.',
    prices: [
      ['90 Min', '135 €'],
      ['120 Min', '180 €'],
    ],
    img: '/images/services_bg.png',
  },
  {
    tag: 'Reflexologie',
    title: 'Fußreflexzonenmassage',
    desc: 'Traditionelle Thai-Fußmassage mit Reinigung und Stimulation der Fußreflexzonen unter Verwendung von Aromaölen. Aktiviert die Selbstheilungskräfte des Körpers.',
    prices: [
      ['60 Min', '65 €'],
    ],
    img: '/images/voucher.png',
  },
]

export default function Services({ onBook }) {
  const ref = useReveal()

  return (
    <section id="behandlungen" ref={ref} className="relative py-24 md:py-40 bg-spa-800">
      {/* Subtle background image overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
           style={{ backgroundImage: 'url(/images/services_bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="reveal text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">
            Signature Treatments
          </p>
          <h2 className="reveal reveal-d1 font-heading text-4xl md:text-5xl lg:text-6xl text-cream font-normal leading-[1.08] tracking-tight">
            Erleben Sie pure <em className="text-gold-grad">Entspannung</em>
          </h2>
          <p className="reveal reveal-d2 mt-6 text-base text-cream/40 max-w-xl mx-auto font-light leading-relaxed">
            Von kraftvoller Traditionsmassage bis zur sanften Aroma-Behandlung.
            Jede Sitzung wird individuell auf Ihre Bed&uuml;rfnisse abgestimmt.
          </p>
        </div>

        {/* Wide featured services */}
        {SERVICES.filter((s) => s.wide).map((srv, i) => (
          <WideService key={i} {...srv} onBook={onBook} />
        ))}

        {/* Compact grid */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {SERVICES.filter((s) => !s.wide).map((srv, i) => (
            <CompactService key={i} {...srv} onBook={onBook} />
          ))}
        </div>

        {/* Note */}
        <p className="reveal mt-10 text-center text-xs text-cream/25 font-light">
          Alle Preisangaben inkl. MwSt. Terminvereinbarung erforderlich.
        </p>
      </div>
    </section>
  )
}

function PriceList({ prices }) {
  return (
    <div className="mt-5 space-y-2">
      {prices.map(([dur, price], i) => (
        <div key={i} className={`flex items-baseline justify-between gap-4 pb-2 ${i < prices.length - 1 ? 'border-b border-cream/5' : ''}`}>
          <span className="text-sm text-cream/40 font-light shrink-0">{dur}</span>
          <span className="text-sm font-medium text-gold" style={{ fontVariantNumeric: 'tabular-nums' }}>{price}</span>
        </div>
      ))}
    </div>
  )
}

function WideService({ tag, title, desc, prices, img, reversed, onBook }) {
  return (
    <div className="reveal mb-5">
      <div className={`service-card grid grid-cols-1 lg:grid-cols-12 border border-gold/10 bg-spa-900/60`}>
        <div className={`lg:col-span-7 img-zoom ${reversed ? 'lg:order-2' : ''}`}>
          <img src={img} alt={title} className="w-full h-full object-cover aspect-[16/10] lg:aspect-auto lg:min-h-[450px]" loading="lazy" />
        </div>
        <div className={`lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center ${reversed ? 'lg:order-1' : ''}`}>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">{tag}</span>
          <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-cream font-normal leading-tight tracking-tight">{title}</h3>
          <p className="mt-4 text-sm text-cream/40 leading-relaxed font-light">{desc}</p>
          <PriceList prices={prices} />
          <button onClick={() => onBook(title)}
            className="mt-6 self-start text-[10px] uppercase tracking-[0.15em] font-semibold text-gold border border-gold/30 px-6 py-3 hover:bg-gold hover:text-spa-900 transition-all duration-500 btn-push cursor-pointer">
            Jetzt Buchen
          </button>
        </div>
      </div>
    </div>
  )
}

function CompactService({ tag, title, desc, prices, img, onBook }) {
  return (
    <div className="service-card border border-gold/10 bg-spa-900/60 flex flex-col">
      <div className="img-zoom aspect-[4/3]">
        <img src={img} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold mb-2">{tag}</span>
        <h3 className="font-heading text-xl md:text-2xl text-cream font-normal tracking-tight">{title}</h3>
        <p className="mt-3 text-sm text-cream/40 leading-relaxed font-light flex-1">{desc}</p>
        <PriceList prices={prices} />
        <button onClick={() => onBook(title)}
          className="mt-5 w-full text-[10px] uppercase tracking-[0.15em] font-semibold text-gold border border-gold/30 py-3 hover:bg-gold hover:text-spa-900 transition-all duration-500 btn-push cursor-pointer">
          Jetzt Buchen
        </button>
      </div>
    </div>
  )
}
