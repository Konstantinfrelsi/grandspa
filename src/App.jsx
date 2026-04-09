import { Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Divider from './components/Divider'
import About from './components/About'
import Services from './components/Services'
import Packages from './components/Packages'
import Vouchers from './components/Vouchers'
import Academy from './components/Academy'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import Checkout from './components/Checkout'
import Impressum from './components/Impressum'
import Datenschutz from './components/Datenschutz'
import CookieBanner from './components/CookieBanner'
import Admin from './components/admin/Admin'

function LandingPage({ onBook }) {
  return (
    <>
      <Hero onBook={onBook} />
      <Divider />
      <About />
      <Services onBook={onBook} />
      <Packages onBook={onBook} />
      <Vouchers />
      <Academy />
      <Contact onBook={onBook} />
    </>
  )
}

export default function App() {
  const [booking, setBooking] = useState({ open: false, treatment: '' })
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')

  const openBooking = (treatment = '') => setBooking({ open: true, treatment })
  const closeBooking = () => setBooking({ open: false, treatment: '' })

  // Admin laeuft ohne Navbar/Footer/Cookie-Banner als eigenstaendige App
  if (isAdmin) {
    return (
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    )
  }

  return (
    <>
      <Navbar onBook={() => openBooking()} />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage onBook={openBooking} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>
      <Footer />
      <BookingModal
        isOpen={booking.open}
        onClose={closeBooking}
        preselectedTreatment={booking.treatment}
      />
      <CookieBanner />
    </>
  )
}
