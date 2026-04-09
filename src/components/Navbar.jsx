import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#behandlungen', label: 'Behandlungen' },
  { href: '#pakete', label: 'Spa-Pakete' },
  { href: '#gutscheine', label: 'Gutscheine' },
  { href: '#akademie', label: 'Akademie' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar({ onBook }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const scrollTo = (e, href) => {
    e.preventDefault()
    closeMenu()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 60)
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const goHome = (e) => {
    e.preventDefault()
    closeMenu()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 60)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'nav-glass py-4' : 'py-6 md:py-8'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="relative z-50 flex flex-col" onClick={goHome}>
            <span className="font-heading text-lg md:text-xl text-gold tracking-[0.15em] font-semibold uppercase leading-none">
              Grand Spa
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-gold/40 font-medium mt-0.5">
              Thaimassage Haus
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} onClick={(e) => scrollTo(e, href)}
                 className="text-[11px] uppercase tracking-[0.2em] font-medium text-cream/50 hover:text-gold transition-colors duration-500">
                {label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button onClick={onBook}
            className="hidden lg:flex items-center text-[11px] uppercase tracking-[0.15em] font-semibold text-gold border border-gold/30 px-7 py-3 hover:bg-gold hover:text-spa-900 transition-all duration-500 btn-push cursor-pointer">
            Termin Buchen
          </button>

          {/* Hamburger */}
          <button onClick={toggleMenu} className="lg:hidden relative z-50 text-gold cursor-pointer" aria-label="Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''} fixed inset-0 z-40 bg-spa-900/98 backdrop-blur-2xl flex flex-col items-center justify-center`}>
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map(({ href, label }, i) => (
            <a key={href} href={href} onClick={(e) => scrollTo(e, href)}
               className="font-heading text-3xl text-cream/70 hover:text-gold transition-all duration-500"
               style={{
                 transitionDelay: `${(i + 1) * 80}ms`,
                 opacity: menuOpen ? 1 : 0,
                 transform: menuOpen ? 'translateY(0)' : 'translateY(1.5rem)',
               }}>
              {label}
            </a>
          ))}
          <button onClick={() => { closeMenu(); onBook() }}
            className="mt-6 text-[11px] uppercase tracking-[0.15em] font-semibold bg-gold text-spa-900 px-10 py-4 transition-all duration-500 cursor-pointer"
            style={{ transitionDelay: '500ms', opacity: menuOpen ? 1 : 0 }}>
            Termin Buchen
          </button>
        </div>
      </div>
    </>
  )
}
