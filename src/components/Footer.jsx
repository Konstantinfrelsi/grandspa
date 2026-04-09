import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-spa-950 border-t border-gold/10 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex flex-col">
              <span className="font-heading text-xl text-gold tracking-[0.15em] font-semibold uppercase leading-none">
                Grand Spa
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-gold/40 font-medium mt-1">
                Thaimassage Haus
              </span>
            </div>
            <p className="mt-5 text-sm text-cream/30 font-light leading-relaxed max-w-[35ch]">
              Die Kunst der asiatischen Heilkunst auf h&ouml;chstem Niveau.
              Authentische Thai-Massage in Kassel seit &uuml;ber 15 Jahren.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold/60 font-semibold mb-5">Navigation</p>
            <div className="flex flex-col gap-3">
              {['Behandlungen', 'Spa-Pakete', 'Gutscheine', 'Akademie', 'Kontakt'].map((label) => (
                <a key={label} href={`#${label.toLowerCase().replace('-', '').replace('ü', 'u')}`}
                   className="text-sm font-light text-cream/30 hover:text-gold transition-colors duration-300">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold/60 font-semibold mb-5">Behandlungen</p>
            <div className="flex flex-col gap-3">
              {['Traditionelle Thai-Massage', 'Aroma-Entspannungsmassage', 'Lava-Stone-Massage', 'Thai-Herbal-Massage', 'Fußreflexzonenmassage'].map((s) => (
                <span key={s} className="text-sm font-light text-cream/30">{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold/60 font-semibold mb-5">Kontakt</p>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-light text-cream/30">Wilhelmsh&ouml;her Allee 40</span>
              <span className="text-sm font-light text-cream/30">34119 Kassel</span>
              <a href="tel:05617669349" className="text-sm font-light text-cream/30 hover:text-gold transition-colors duration-300">
                0561 / 766 93 49
              </a>
              <a href="mailto:info@grandspa-thaimassage.de" className="text-sm font-light text-cream/30 hover:text-gold transition-colors duration-300 break-all">
                info@grandspa-thaimassage.de
              </a>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-cream/5">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-gold/20 flex items-center justify-center">
                <span className="text-gold text-xs">&#9670;</span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-gold/50 font-semibold">Mitglied</p>
                <p className="text-xs text-cream/30 font-light">Verein der Traditionellen Thailändischen Medizin</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-gold/20 flex items-center justify-center">
                <span className="text-gold text-xs">&#10003;</span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-gold/50 font-semibold">Zertifiziert</p>
                <p className="text-xs text-cream/30 font-light">Deutsches Hygienezertifikat</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-cream/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/20 font-light">
            &copy; {new Date().getFullYear()} Grand Spa Thaimassage Haus. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/impressum" className="text-xs text-cream/20 font-light hover:text-gold/60 transition-colors duration-300">Impressum</Link>
            <Link to="/datenschutz" className="text-xs text-cream/20 font-light hover:text-gold/60 transition-colors duration-300">Datenschutz</Link>
            <Link to="/admin" className="text-xs text-cream/10 font-light hover:text-gold/40 transition-colors duration-300" title="Admin Terminverwaltung">&middot;</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
