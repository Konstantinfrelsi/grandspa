import useReveal from '../hooks/useReveal'
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react'

export default function Contact({ onBook }) {
  const ref = useReveal()

  return (
    <section id="kontakt" ref={ref} className="py-24 md:py-40 bg-spa-800">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="reveal text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">
            Besuchen Sie uns
          </p>
          <h2 className="reveal reveal-d1 font-heading text-4xl md:text-5xl lg:text-6xl text-cream font-normal leading-[1.08] tracking-tight">
            Kontakt & <em className="text-gold-grad">Anfahrt</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Address */}
            <InfoCard icon={<MapPin size={18} className="text-gold" />} title="Adresse">
              <p className="text-sm text-cream/50 mt-1.5 font-light leading-relaxed">
                Wilhelmsh&ouml;her Allee 40<br />
                34119 Kassel<br />
                <span className="text-cream/30">(neben Arosa Hotel)</span>
              </p>
            </InfoCard>

            {/* Hours */}
            <InfoCard icon={<Clock size={18} className="text-gold" />} title="&Ouml;ffnungszeiten">
              <div className="mt-2 space-y-2">
                <div className="flex justify-between gap-8">
                  <span className="text-sm text-cream/50 font-light">Montag &mdash; Samstag</span>
                  <span className="text-sm font-medium text-gold" style={{ fontVariantNumeric: 'tabular-nums' }}>10:00 &mdash; 20:00</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span className="text-sm text-cream/50 font-light">Sonntag</span>
                  <span className="text-sm text-cream/25 font-light">Geschlossen</span>
                </div>
              </div>
            </InfoCard>

            {/* Contact */}
            <InfoCard icon={<Phone size={18} className="text-gold" />} title="Kontakt">
              <div className="mt-2 space-y-2">
                <a href="tel:05617669349" className="block text-sm text-cream/50 font-light hover:text-gold transition-colors duration-300">
                  0561 / 766 93 49
                </a>
                <a href="mailto:info@grandspa-thaimassage.de" className="block text-sm text-cream/50 font-light hover:text-gold transition-colors duration-300 break-all">
                  info@grandspa-thaimassage.de
                </a>
              </div>
              <p className="mt-3 text-xs text-cream/20 font-light">Terminvereinbarung mind. 2 Tage im Voraus</p>
            </InfoCard>

            {/* CTA */}
            <div className="reveal pt-2">
              <button onClick={() => onBook()}
                className="flex items-center justify-center gap-2 w-full bg-gold text-spa-900 text-[11px] uppercase tracking-[0.15em] font-semibold py-4 hover:bg-gold-light transition-all duration-500 btn-push cursor-pointer">
                Jetzt anrufen & Termin buchen
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-7">
            <div className="reveal h-full min-h-[400px] lg:min-h-[550px] border border-gold/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.8!2d9.4789!3d51.3121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bb3f7c94c2e9a1%3A0x1!2sWilhelmsh%C3%B6her+Allee+40%2C+34119+Kassel!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px', filter: 'invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.6)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Google Maps - Grand Spa Kassel"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon, title, children }) {
  return (
    <div className="reveal service-card bg-spa-900/60 border border-gold/10 p-7">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 border border-gold/25 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-cream">{title}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
