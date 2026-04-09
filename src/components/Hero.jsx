import useReveal from '../hooks/useReveal'

export default function Hero({ onBook }) {
  const ref = useReveal()

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/images/hero.png" alt="" className="w-full h-full object-cover scale-105" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-spa-900/50 via-spa-900/40 to-spa-900/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
        {/* Eyebrow */}
        <p className="reveal text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-gold font-medium mb-8">
          &#10022; Kassels exklusivstes Thai-Spa seit &uuml;ber 15 Jahren &#10022;
        </p>

        {/* Headline */}
        <h1 className="reveal reveal-d1 font-heading text-[clamp(2.8rem,6vw,5.5rem)] text-cream font-normal leading-[1.08] tracking-tight">
          Die Kunst der asiatischen<br />
          <em className="text-gold-grad">Heilkunst</em> auf<br />
          h&ouml;chstem Niveau.
        </h1>

        {/* Subline */}
        <p className="reveal reveal-d2 mt-8 md:mt-10 text-base md:text-lg text-cream/55 max-w-2xl mx-auto font-light leading-relaxed">
          Lassen Sie den Alltag hinter sich. In unserem Refugium an der Wilhelmsh&ouml;her
          Allee verwandeln zertifizierte Therapeutinnen aus Thailand jede Sitzung in
          ein <span className="text-cream/85">Ritual aus 2.500 Jahren Heilkunst</span>.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-d3 mt-10 md:mt-14 flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => onBook()}
            className="bg-gold text-spa-900 text-[11px] uppercase tracking-[0.15em] font-semibold px-10 py-4 hover:bg-gold-light transition-all duration-500 btn-push cursor-pointer shadow-2xl shadow-gold/20">
            Termin Sichern
          </button>
          <a href="#gutscheine"
             onClick={(e) => { e.preventDefault(); document.querySelector('#gutscheine')?.scrollIntoView({ behavior: 'smooth' }) }}
             className="border border-gold/40 text-gold text-[11px] uppercase tracking-[0.15em] font-medium px-10 py-4 hover:bg-gold/10 transition-all duration-500 cursor-pointer text-center">
            Gutschein verschenken
          </a>
        </div>

        {/* Micro-trust */}
        <p className="reveal reveal-d3 mt-5 text-[11px] uppercase tracking-[0.2em] text-cream/35 font-medium">
          &#10003; Antwort innerhalb von 2&nbsp;Stunden &nbsp;&middot;&nbsp; &#10003; Termin-Flex-Garantie
        </p>

        {/* Stats */}
        <div className="reveal reveal-d4 mt-14 md:mt-20 flex justify-center gap-10 md:gap-20">
          <Stat value="15+" label="Jahre Tradition" />
          <div className="w-px bg-gold/15" />
          <Stat value="100%" label="Zertifiziert" />
          <div className="w-px bg-gold/15" />
          <Stat value="DE" label="Hygienesiegel" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 hidden md:flex">
        <span className="text-[9px] uppercase tracking-[0.4em] text-gold/30">Scrollen</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/30 to-transparent animate-pulse" />
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <span className="font-heading text-2xl md:text-3xl text-gold font-normal" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {value}
      </span>
      <p className="text-[9px] uppercase tracking-[0.2em] text-cream/30 mt-1.5 font-medium">{label}</p>
    </div>
  )
}
