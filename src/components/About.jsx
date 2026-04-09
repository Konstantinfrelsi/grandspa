import useReveal from '../hooks/useReveal'
import { Shield } from 'lucide-react'

export default function About() {
  const ref = useReveal()

  return (
    <section id="philosophie" ref={ref} className="py-24 md:py-40 bg-spa-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal relative">
            <div className="relative img-zoom">
              <img src="/images/royal.png" alt="Traditionelle Thai-Massage Behandlung"
                   className="w-full aspect-[4/5] object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/15 pointer-events-none" />
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t border-l border-gold/20 pointer-events-none" />
          </div>

          {/* Text */}
          <div>
            <p className="reveal text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-6">
              Unsere Philosophie
            </p>
            <h2 className="reveal reveal-d1 font-heading text-4xl md:text-5xl lg:text-6xl text-cream font-normal leading-[1.08] tracking-tight">
              Heilkunst aus<br /><em className="text-gold-grad">Tradition</em>
            </h2>
            <div className="reveal reveal-d2 w-16 h-px bg-gold/30 my-8" />
            <p className="reveal reveal-d2 text-base text-cream/50 leading-relaxed font-light">
              Die traditionelle Thai-Massage ist eine &uuml;ber 2.500 Jahre alte Heilkunst,
              die Akupressur, Energielinienarbeit und passive Yoga-Elemente verbindet.
              Im Grand Spa Thaimassage Haus bringen wir diese Tradition authentisch nach Kassel.
            </p>
            <p className="reveal reveal-d3 mt-6 text-base text-cream/50 leading-relaxed font-light">
              Alle unsere Therapeutinnen und Therapeuten sind professionell ausgebildet
              und tragen Zertifikate der <strong className="text-cream font-medium">Association of Traditional Thai Medicine</strong> nach
              dem Lehrplan des thail&auml;ndischen Gesundheitsministeriums.
            </p>
            <div className="reveal reveal-d4 mt-10 flex items-center gap-4">
              <div className="w-12 h-12 border border-gold/25 flex items-center justify-center shrink-0">
                <Shield size={20} className="text-gold" />
              </div>
              <div>
                <p className="text-sm font-medium text-cream">Zertifizierte Qualit&auml;t</p>
                <p className="text-xs text-cream/35 mt-0.5">Thai Ministry of Health Curriculum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
