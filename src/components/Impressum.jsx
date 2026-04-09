import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Impressum — Grand Spa Thaimassage Haus Kassel'
  }, [])

  return (
    <div className="bg-spa-900 text-cream min-h-screen pt-32 pb-24">
      <div className="max-w-[820px] mx-auto px-6 md:px-8">
        <Link to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cream/40 hover:text-gold transition-colors mb-10 font-medium">
          <ArrowLeft size={14} />
          Zur&uuml;ck
        </Link>

        <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">
          Rechtliches
        </p>
        <h1 className="font-heading text-4xl md:text-5xl text-cream font-normal tracking-tight leading-[1.08]">
          <em className="text-gold-grad">Impressum</em>
        </h1>
        <p className="mt-4 text-sm text-cream/40 font-light">
          Angaben gem&auml;&szlig; &sect; 5 TMG &middot; &sect; 18 Abs. 2 MStV
        </p>

        <div className="mt-14 space-y-12">
          <Block title="Anbieter">
            <p className="text-cream font-medium">Grand Spa Thaimassage Haus</p>
            <p>Inhaberin: Nat Muannamon</p>
            <p>Wilhelmsh&ouml;her Allee 40</p>
            <p>34119 Kassel</p>
            <p>Deutschland</p>
          </Block>

          <Block title="Kontakt">
            <p>
              Telefon:{' '}
              <a href="tel:05617669349" className="text-gold hover:text-gold-light transition-colors">
                0561 / 766 93 49
              </a>
            </p>
            <p>
              E&#8209;Mail:{' '}
              <a href="mailto:info@grandspa-thaimassage.de" className="text-gold hover:text-gold-light transition-colors break-all">
                info@grandspa-thaimassage.de
              </a>
            </p>
          </Block>

          <Block title="Umsatzsteuer-Identifikationsnummer">
            <p>Gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:</p>
            <p className="text-cream font-medium tracking-wide">DE 025 834 02342</p>
          </Block>

          <Block title="Berufsbezeichnung">
            <p>Inhaberin: Wellness- und Massagetherapeutin</p>
            <p>(verliehen in K&ouml;nigreich Thailand &middot; Mitgliedschaft im Verein der Traditionellen Thail&auml;ndischen Medizin, Kasseler Berufsausbildungs-Zentrum)</p>
            <p>Deutsches Hygienezertifikat &middot; gepr&uuml;fte Hygienestandards nach RKI&#8209;Empfehlungen.</p>
          </Block>

          <Block title="Verantwortlich f&uuml;r den Inhalt nach &sect; 18 Abs. 2 MStV">
            <p>Nat Muannamon</p>
            <p>Wilhelmsh&ouml;her Allee 40</p>
            <p>34119 Kassel</p>
          </Block>

          <Block title="EU-Streitschlichtung">
            <p>
              Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung
              (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer noopener"
                 className="text-gold hover:text-gold-light transition-colors break-all">
                https://ec.europa.eu/consumers/odr
              </a>
              .
            </p>
            <p>Unsere E&#8209;Mail&#8209;Adresse finden Sie oben im Impressum.</p>
          </Block>

          <Block title="Verbraucherstreitbeilegung / Universalschlichtungsstelle">
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </Block>

          <Block title="Haftung f&uuml;r Inhalte">
            <p>
              Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs. 1 TMG f&uuml;r eigene Inhalte auf
              diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis
              10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte
              oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu
              forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
              nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche
              Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung m&ouml;glich. Bei Bekanntwerden entsprechender Rechtsverletzungen
              werden wir diese Inhalte umgehend entfernen.
            </p>
          </Block>

          <Block title="Haftung f&uuml;r Links">
            <p>
              Unser Angebot enth&auml;lt Links zu externen Webseiten Dritter, auf deren Inhalte
              wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch
              keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der
              jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
              konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
              von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </Block>

          <Block title="Urheberrecht">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechts
              bed&uuml;rfen der schriftlichen Zustimmung der Inhaberin.
            </p>
            <p>
              Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht kommerziellen
              Gebrauch gestattet.
            </p>
          </Block>

          <Block title="Bildnachweise">
            <p>
              Eigene Aufnahmen sowie lizenzierte Bilder von Shutterstock und Adobe Stock.
              Alle Rechte bei den jeweiligen Urhebern.
            </p>
          </Block>
        </div>

        {/* Datenschutz Hinweis */}
        <div className="mt-16 pt-10 border-t border-gold/15">
          <p className="text-xs text-cream/30 font-light">
            Informationen zur Verarbeitung Ihrer personenbezogenen Daten finden Sie in unserer{' '}
            <Link to="/datenschutz" className="text-gold hover:text-gold-light transition-colors">
              Datenschutzerkl&auml;rung
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

function Block({ title, children }) {
  return (
    <section>
      <h2 className="font-heading text-xl md:text-2xl text-gold font-normal tracking-tight mb-4">
        {title}
      </h2>
      <div className="space-y-2 text-sm md:text-[15px] text-cream/60 font-light leading-relaxed">
        {children}
      </div>
    </section>
  )
}
