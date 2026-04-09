import useReveal from '../hooks/useReveal'
import { GraduationCap, Clock, Users } from 'lucide-react'

const FEATURES = [
  {
    icon: <GraduationCap size={20} className="text-gold" />,
    title: 'Offizielle Zertifizierung',
    desc: 'Abschluss mit Zertifikat der Association of Traditional Thai Medicine',
  },
  {
    icon: <Clock size={20} className="text-gold" />,
    title: 'Praxisnaher Unterricht',
    desc: 'Kleine Gruppen, individuelle Betreuung, umfangreiche Praxiseinheiten',
  },
  {
    icon: <Users size={20} className="text-gold" />,
    title: 'F\u00FCr Anf\u00E4nger & Profis',
    desc: 'Verschiedene Kursformate f\u00FCr Einsteiger und Weiterbildung',
  },
]

export default function Academy() {
  const ref = useReveal()

  return (
    <section id="akademie" ref={ref} className="py-24 md:py-40 bg-spa-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal order-2 lg:order-1 relative">
            <div className="img-zoom">
              <img src="/images/hero.png" alt="Grand Spa Akademie"
                   className="w-full aspect-[4/3] object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-3 -left-3 w-full h-full border border-gold/15 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="reveal text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-6">
              Grand Spa Akademie
            </p>
            <h2 className="reveal reveal-d1 font-heading text-4xl md:text-5xl lg:text-6xl text-cream font-normal leading-[1.08] tracking-tight">
              Die Kunst<br /><em className="text-gold-grad">erlernen</em>
            </h2>
            <p className="reveal reveal-d2 mt-6 text-base text-cream/50 leading-relaxed font-light max-w-[55ch]">
              In unserer Akademie bieten wir Ausbildungskurse in traditioneller Thai-Massage
              nach dem Lehrplan des thail&auml;ndischen Gesundheitsministeriums an.
            </p>

            <div className="reveal reveal-d3 mt-10 space-y-5">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 border border-gold/25 flex items-center justify-center shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-cream">{f.title}</p>
                    <p className="text-sm text-cream/40 mt-0.5 font-light">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="mailto:grandspa.kassel@hotmail.com"
               className="reveal reveal-d4 mt-10 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors duration-500">
              Kursanfrage per E-Mail senden
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
