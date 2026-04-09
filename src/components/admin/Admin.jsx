import { useState, useEffect } from 'react'
import AdminLogin from './AdminLogin'
import AdminDashboard from './AdminDashboard'
import { isLoggedIn } from '../../lib/auth'

export default function Admin() {
  const [authed, setAuthed] = useState(() => isLoggedIn())

  useEffect(() => {
    // recheck on focus (session may have expired)
    const onFocus = () => setAuthed(isLoggedIn())
    window.addEventListener('focus', onFocus)
    return () => window.removeEventListener('focus', onFocus)
  }, [])

  return authed
    ? <AdminDashboard onLogout={() => setAuthed(false)} />
    : <AdminLogin onLogin={() => setAuthed(true)} />
}
