// Simple Admin Auth (Demo)
// HINWEIS: Dies ist ein Demo-Auth fuer lokale Vorfuehrungen.
// Produktiv MUSS ein echtes Backend mit JWT / Session-Cookies / Hashing her.
// Das Passwort liegt hier im Frontend — reicht fuer Demo auf localhost.

const PW_KEY = 'grandspa_admin_pw_v1'
const SESSION_KEY = 'grandspa_admin_session_v1'
const DEFAULT_PW = 'grandspa2026'
const SESSION_HOURS = 8

export function getPassword() {
  try {
    return localStorage.getItem(PW_KEY) || DEFAULT_PW
  } catch {
    return DEFAULT_PW
  }
}

export function setPassword(pw) {
  try {
    localStorage.setItem(PW_KEY, pw)
  } catch {}
}

export function login(pw) {
  if (pw !== getPassword()) return false
  const expires = Date.now() + SESSION_HOURS * 3600 * 1000
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify({ expires }))
  } catch {}
  return true
}

export function logout() {
  try {
    localStorage.removeItem(SESSION_KEY)
  } catch {}
}

export function isLoggedIn() {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return false
    const { expires } = JSON.parse(raw)
    if (Date.now() > expires) {
      localStorage.removeItem(SESSION_KEY)
      return false
    }
    return true
  } catch {
    return false
  }
}
