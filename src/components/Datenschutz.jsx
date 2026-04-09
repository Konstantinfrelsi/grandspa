import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Datenschutz() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Datenschutz — Grand Spa Thaimassage Haus Kassel'
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
          Datenschutz
        </p>
        <h1 className="font-heading text-4xl md:text-5xl text-cream font-normal tracking-tight leading-[1.08]">
          <em className="text-gold-grad">Datenschutzerkl&auml;rung</em>
        </h1>
        <p className="mt-4 text-sm text-cream/40 font-light">
          Stand: April 2026 &middot; konform mit DSGVO, BDSG und TTDSG
        </p>

        {/* TL;DR Box */}
        <div className="mt-10 p-6 md:p-8 bg-spa-800/60 border border-gold/15">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">
            Kurz &amp; klar
          </p>
          <p className="text-sm md:text-[15px] text-cream/70 font-light leading-relaxed">
            Ihre Daten sind bei uns sicher. Wir verarbeiten Ihre Angaben ausschlie&szlig;lich
            f&uuml;r Terminbuchungen und Gutscheinbestellungen, niemals f&uuml;r Werbung Dritter.
            Cookies setzen wir nur, wenn Sie zustimmen.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          <Block title="1. Verantwortlicher">
            <p>Verantwortlich f&uuml;r die Datenverarbeitung auf dieser Website:</p>
            <p className="mt-3 text-cream font-medium">Grand Spa Thaimassage Haus</p>
            <p>Inhaberin: Nat Muannamon</p>
            <p>Wilhelmsh&ouml;her Allee 40</p>
            <p>34119 Kassel</p>
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

          <Block title="2. Allgemeines zur Datenverarbeitung">
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer grunds&auml;tzlich nur,
              soweit dies zur Bereitstellung einer funktionsf&auml;higen Website sowie unserer
              Inhalte und Leistungen erforderlich ist. Die Verarbeitung erfolgt regelm&auml;&szlig;ig
              nur nach Einwilligung der Nutzer (Art. 6 Abs. 1 lit. a DSGVO) oder wenn die
              Verarbeitung durch gesetzliche Vorschriften gestattet ist.
            </p>
            <p>
              Personenbezogene Daten werden gel&ouml;scht, sobald der Zweck der Speicherung
              entf&auml;llt und keine gesetzlichen Aufbewahrungsfristen entgegenstehen.
            </p>
          </Block>

          <Block title="3. Bereitstellung der Website &amp; Server-Logfiles">
            <p>
              Beim Aufruf dieser Website werden durch unseren Hosting-Provider automatisch
              technische Daten in einer Logdatei gespeichert:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>IP-Adresse (anonymisiert)</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene Seite</li>
              <li>verwendeter Browser und Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p className="mt-3">
              <span className="text-cream/80">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. f
              DSGVO (berechtigtes Interesse an stabiler, sicherer Bereitstellung).
            </p>
            <p>
              <span className="text-cream/80">Speicherdauer:</span> in der Regel 7 Tage,
              danach automatische L&ouml;schung.
            </p>
          </Block>

          <Block title="4. Hosting (Netlify)">
            <p>
              Unsere Website wird gehostet bei:
            </p>
            <p className="mt-3 text-cream/80">
              Netlify, Inc.<br />
              512 2nd Street, Suite 200<br />
              San Francisco, CA 94107<br />
              USA
            </p>
            <p className="mt-3">
              Beim Aufruf unserer Website verarbeitet Netlify technisch notwendige Daten
              (insbesondere IP-Adresse, Datum/Uhrzeit, Browsertyp, aufgerufene URL) zum
              Zweck der Bereitstellung, der Sicherheit und der Performance der Website.
            </p>
            <p>
              <span className="text-cream/80">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. f
              DSGVO (berechtigtes Interesse an einer sicheren und performanten Bereitstellung
              dieser Website).
            </p>
            <p>
              <span className="text-cream/80">Auftragsverarbeitung:</span> Mit Netlify
              besteht ein Vertrag zur Auftragsverarbeitung (Data Processing Addendum) gem&auml;&szlig;
              Art. 28 DSGVO.
            </p>
            <p>
              <span className="text-cream/80">Daten&uuml;bermittlung in Drittl&auml;nder:</span>{' '}
              Netlify ist ein US-Anbieter und kann Daten in die USA &uuml;bermitteln. Die
              &Uuml;bermittlung erfolgt auf Grundlage des EU&#8209;US Data Privacy Framework
              (Angemessenheitsbeschluss der EU-Kommission vom 10.07.2023; Netlify ist
              zertifiziert) sowie zus&auml;tzlich auf Basis der EU&#8209;Standardvertragsklauseln
              (Art. 46 Abs. 2 lit. c DSGVO).
            </p>
            <p>
              Weitere Informationen finden Sie in den Datenschutzhinweisen von Netlify:{' '}
              <a href="https://www.netlify.com/privacy/" target="_blank" rel="noreferrer noopener"
                 className="text-gold hover:text-gold-light transition-colors break-all">
                https://www.netlify.com/privacy/
              </a>
            </p>
          </Block>

          <Block title="5. Terminanfrage &uuml;ber das Buchungsformular">
            <p>
              Wenn Sie &uuml;ber unser Buchungsformular einen Termin anfragen, erheben wir
              folgende Daten:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Vor- und Nachname</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>gew&uuml;nschte Behandlung und Wunschtermin</li>
            </ul>
            <p className="mt-3">
              <span className="text-cream/80">Zweck:</span> Bearbeitung Ihrer Terminanfrage
              und Best&auml;tigung des Termins per E-Mail oder Telefon.
            </p>
            <p>
              <span className="text-cream/80">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. b
              DSGVO (Anbahnung und Durchf&uuml;hrung eines Vertrages).
            </p>
            <p>
              <span className="text-cream/80">Speicherdauer:</span> Ihre Daten werden
              sp&auml;testens 12 Monate nach Abschluss der Behandlung gel&ouml;scht, soweit keine
              gesetzlichen Aufbewahrungspflichten (z.&nbsp;B. handels- oder steuerrechtlich
              bis zu 10 Jahre f&uuml;r Rechnungsdaten) entgegenstehen.
            </p>
          </Block>

          <Block title="6. Gutscheinbestellung &amp; Online-Checkout">
            <p>
              Beim Kauf eines Wertgutscheins verarbeiten wir die zur Vertragsabwicklung
              notwendigen Daten (Name, E-Mail, ggf. Lieferadresse, Zahlungsdaten).
            </p>
            <p>
              <span className="text-cream/80">Zweck:</span> Vertragsabwicklung, Versand des
              Gutscheins, Rechnungsstellung.
            </p>
            <p>
              <span className="text-cream/80">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. b
              DSGVO.
            </p>
            <p>
              <span className="text-cream/80">Zahlungsdienstleister:</span> Die Zahlungsabwicklung
              erfolgt durch unsere Partner Stripe Payments Europe Ltd. (Irland), PayPal (Europe)
              S.&agrave; r.l. et Cie, S.C.A. (Luxemburg) sowie Klarna Bank AB (Schweden). Sie
              geben Ihre Zahlungsdaten direkt beim jeweiligen Anbieter ein. Wir erhalten
              ausschlie&szlig;lich die Zahlungsbest&auml;tigung. Es gelten zus&auml;tzlich die
              Datenschutzhinweise des jeweiligen Anbieters.
            </p>
            <p>
              <span className="text-cream/80">Speicherdauer:</span> Rechnungsdaten werden
              gem&auml;&szlig; &sect; 147 AO 10 Jahre aufbewahrt.
            </p>
          </Block>

          <Block title="7. Cookies">
            <p>
              Unsere Website verwendet ausschlie&szlig;lich technisch notwendige Cookies, die
              f&uuml;r den Betrieb der Seite erforderlich sind (z.&nbsp;B. Speicherung Ihrer
              Cookie-Auswahl).
            </p>
            <p>
              <span className="text-cream/80">Rechtsgrundlage:</span> &sect; 25 Abs. 2 Nr. 2
              TTDSG f&uuml;r notwendige Cookies; Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs.
              1 TTDSG f&uuml;r alle weiteren Cookies (Einwilligung).
            </p>
            <p>
              Sie k&ouml;nnen Ihre Einwilligung jederzeit mit Wirkung f&uuml;r die Zukunft
              widerrufen, indem Sie Ihre Browser-Einstellungen anpassen oder die
              Cookie-Auswahl auf dieser Seite zur&uuml;cksetzen.
            </p>
          </Block>

          <Block title="8. Web-Schriftarten (Google Fonts)">
            <p>
              Wir binden die Schriften &bdquo;Playfair Display&ldquo; und &bdquo;Inter&ldquo;
              ein. Diese werden lokal von unserem Server bzw. nach Einwilligung &uuml;ber Google
              Fonts geladen. Bei Einbindung &uuml;ber Google Fonts erfolgt eine &Uuml;bertragung
              Ihrer IP-Adresse an Google LLC, USA.
            </p>
            <p>
              <span className="text-cream/80">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. a
              DSGVO (Einwilligung &uuml;ber Cookie-Banner). Eine &Uuml;bermittlung in die USA
              erfolgt auf Grundlage des EU&#8209;US Data Privacy Framework (Angemessenheitsbeschluss
              der EU&#8209;Kommission).
            </p>
          </Block>

          <Block title="9. Kartendienste / Anfahrt">
            <p>
              Eine direkte Einbindung von Google Maps oder vergleichbaren Kartendiensten
              erfolgt nicht. Externe Verlinkungen zur Routenplanung &ouml;ffnen sich erst auf
              aktiven Klick in einem neuen Tab. Erst dann werden Daten an den jeweiligen
              Anbieter &uuml;bermittelt.
            </p>
          </Block>

          <Block title="10. Kontaktaufnahme per E-Mail oder Telefon">
            <p>
              Bei Kontaktaufnahme werden Ihre Angaben zur Bearbeitung Ihrer Anfrage und f&uuml;r
              den Fall von Anschlussfragen gespeichert.
            </p>
            <p>
              <span className="text-cream/80">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. b
              DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an effizienter Bearbeitung).
            </p>
          </Block>

          <Block title="11. Ihre Rechte als betroffene Person">
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Auskunft &uuml;ber Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>L&ouml;schung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschr&auml;nkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Daten&uuml;bertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Widerruf erteilter Einwilligungen mit Wirkung f&uuml;r die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zur Aus&uuml;bung Ihrer Rechte gen&uuml;gt eine formlose E-Mail an{' '}
              <a href="mailto:info@grandspa-thaimassage.de" className="text-gold hover:text-gold-light transition-colors break-all">
                info@grandspa-thaimassage.de
              </a>
              .
            </p>
          </Block>

          <Block title="12. Beschwerderecht bei der Aufsichtsbeh&ouml;rde">
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbeh&ouml;rde zu beschweren.
              Zust&auml;ndig ist:
            </p>
            <p className="mt-3 text-cream/80">
              Der Hessische Beauftragte f&uuml;r Datenschutz und Informationsfreiheit
            </p>
            <p>Postfach 31 63, 65021 Wiesbaden</p>
            <p>
              <a href="https://datenschutz.hessen.de" target="_blank" rel="noreferrer noopener"
                 className="text-gold hover:text-gold-light transition-colors">
                datenschutz.hessen.de
              </a>
            </p>
          </Block>

          <Block title="13. Datensicherheit">
            <p>
              Wir verwenden eine SSL/TLS-Verschl&uuml;sselung (HTTPS) f&uuml;r alle &Uuml;bermittlungen
              auf dieser Website. Eine vollst&auml;ndige Sicherheit der Daten&uuml;bertragung im
              Internet kann jedoch nicht gew&auml;hrleistet werden.
            </p>
          </Block>

          <Block title="14. Aktualit&auml;t und &Auml;nderung dieser Datenschutzerkl&auml;rung">
            <p>
              Wir behalten uns vor, diese Datenschutzerkl&auml;rung anzupassen, damit sie stets
              den aktuellen rechtlichen Anforderungen entspricht. Die jeweils aktuelle
              Version k&ouml;nnen Sie jederzeit auf dieser Seite einsehen.
            </p>
          </Block>
        </div>

        {/* Impressum Hinweis */}
        <div className="mt-16 pt-10 border-t border-gold/15">
          <p className="text-xs text-cream/30 font-light">
            Anbieter-Angaben gem&auml;&szlig; &sect; 5 TMG finden Sie im{' '}
            <Link to="/impressum" className="text-gold hover:text-gold-light transition-colors">
              Impressum
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
