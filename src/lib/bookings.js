// Booking Storage Layer
// localStorage-basierter CRUD für Termine. Kein Backend nötig — Demo-fähig.
// Schema: { id, name, email, phone, treatment, date, time, notes,
//           status: 'pending'|'confirmed'|'declined'|'completed',
//           createdAt, updatedAt, ownerNote, history: [{ ts, action }] }

const KEY = 'grandspa_bookings_v1'
const EVENT = 'grandspa-bookings-changed'

function read() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function write(list) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list))
    // notify same-tab subscribers
    window.dispatchEvent(new CustomEvent(EVENT))
  } catch {}
}

function uid() {
  return 'bk_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

function nowIso() {
  return new Date().toISOString()
}

// ── Public API ──────────────────────────────────────────────

export const STATUSES = {
  pending: { label: 'Offen', color: 'amber' },
  confirmed: { label: 'Bestaetigt', color: 'emerald' },
  declined: { label: 'Abgelehnt', color: 'rose' },
  completed: { label: 'Erledigt', color: 'slate' },
}

export function listBookings() {
  ensureSeeded()
  return read() || []
}

export function getBooking(id) {
  return listBookings().find((b) => b.id === id) || null
}

export function createBooking(input) {
  const list = read() || []
  const booking = {
    id: uid(),
    name: input.name?.trim() || '',
    email: input.email?.trim() || '',
    phone: input.phone?.trim() || '',
    treatment: input.treatment || '',
    date: input.date || '',
    time: input.time || '',
    notes: input.notes?.trim() || '',
    status: 'pending',
    ownerNote: '',
    createdAt: nowIso(),
    updatedAt: nowIso(),
    history: [{ ts: nowIso(), action: 'Anfrage eingegangen' }],
  }
  write([booking, ...list])
  return booking
}

export function updateBooking(id, patch) {
  const list = read() || []
  const next = list.map((b) => {
    if (b.id !== id) return b
    const updated = { ...b, ...patch, updatedAt: nowIso() }
    if (patch.status && patch.status !== b.status) {
      const labelMap = {
        confirmed: 'Termin bestaetigt',
        declined: 'Termin abgelehnt',
        completed: 'Behandlung abgeschlossen',
        pending: 'Auf offen zurueckgesetzt',
      }
      updated.history = [
        ...(b.history || []),
        { ts: nowIso(), action: labelMap[patch.status] || 'Status geaendert' },
      ]
    }
    return updated
  })
  write(next)
  return next.find((b) => b.id === id)
}

export function deleteBooking(id) {
  const list = read() || []
  write(list.filter((b) => b.id !== id))
}

export function clearAll() {
  write([])
}

export function resetWithDemo() {
  localStorage.removeItem(KEY)
  ensureSeeded(true)
}

export function subscribe(cb) {
  const handler = () => cb()
  window.addEventListener(EVENT, handler)
  window.addEventListener('storage', handler) // cross-tab
  return () => {
    window.removeEventListener(EVENT, handler)
    window.removeEventListener('storage', handler)
  }
}

// ── Stats ───────────────────────────────────────────────────

export function computeStats(list) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const week = new Date(today)
  week.setDate(week.getDate() + 7)

  const isToday = (d) => {
    const x = new Date(d)
    return x.toDateString() === today.toDateString()
  }
  const isThisWeek = (d) => {
    const x = new Date(d)
    return x >= today && x <= week
  }

  return {
    total: list.length,
    pending: list.filter((b) => b.status === 'pending').length,
    confirmed: list.filter((b) => b.status === 'confirmed').length,
    today: list.filter((b) => b.date && isToday(b.date)).length,
    week: list.filter((b) => b.date && isThisWeek(b.date)).length,
  }
}

// ── Demo Seed ───────────────────────────────────────────────

const SEED_KEY = 'grandspa_bookings_seeded_v1'

function ensureSeeded(force = false) {
  if (!force && localStorage.getItem(SEED_KEY)) return
  if (read() && read().length > 0 && !force) {
    localStorage.setItem(SEED_KEY, '1')
    return
  }
  const today = new Date()
  const day = (offset) => {
    const d = new Date(today)
    d.setDate(d.getDate() + offset)
    return d.toISOString().slice(0, 10)
  }

  const seed = [
    {
      name: 'Sabine Wagner',
      email: 'sabine.w@example.de',
      phone: '0561 234 5678',
      treatment: 'Thai Spa III \u2014 Royal Retreat',
      date: day(2),
      time: '14:00',
      notes: 'Geschenk vom Ehemann zum Hochzeitstag',
    },
    {
      name: 'Markus Becker',
      email: 'm.becker@example.de',
      phone: '0151 9876 5432',
      treatment: 'Traditionelle Thai-Massage',
      date: day(0),
      time: '17:30',
      notes: 'Verspannungen unterer R\u00FCcken',
    },
    {
      name: 'Lena Hoffmann',
      email: 'lena.h@example.de',
      phone: '0561 998 7654',
      treatment: 'Aroma-Entspannungsmassage',
      date: day(1),
      time: '11:00',
      notes: '',
    },
    {
      name: 'Familie Schmidt',
      email: 'kontakt@schmidt.de',
      phone: '0171 555 4433',
      treatment: 'Thai Spa II \u2014 Premium Wellness',
      date: day(3),
      time: '16:00',
      notes: 'Paarbuchung, Geburtstag',
    },
    {
      name: 'Dr. Ingrid Weber',
      email: 'iweber@example.de',
      phone: '0561 333 2211',
      treatment: 'Lava-Stone-Massage',
      date: day(5),
      time: '10:30',
      notes: 'Stammkundin, bevorzugt Therapeutin Ploy',
    },
    {
      name: 'Tobias Krause',
      email: 't.krause@example.de',
      phone: '0162 444 8899',
      treatment: 'Thai-Herbal-Massage',
      date: day(-2),
      time: '15:00',
      notes: '',
    },
    {
      name: 'Anna M\u00FCller',
      email: 'anna.mueller@example.de',
      phone: '0561 111 2233',
      treatment: 'Fu\u00DFreflexzonenmassage',
      date: day(-1),
      time: '13:00',
      notes: '',
    },
    {
      name: 'Christian Vogel',
      email: 'c.vogel@example.de',
      phone: '0173 678 1234',
      treatment: 'Thai Spa III \u2014 Royal Retreat',
      date: day(7),
      time: '12:00',
      notes: 'M\u00F6chte Gutschein einl\u00F6sen',
    },
  ]

  // create with varied statuses
  const seeded = []
  seed.forEach((entry, i) => {
    const b = {
      id: uid(),
      ...entry,
      ownerNote: '',
      createdAt: new Date(Date.now() - (seed.length - i) * 3600 * 1000).toISOString(),
      updatedAt: nowIso(),
      history: [{ ts: nowIso(), action: 'Anfrage eingegangen' }],
      status: 'pending',
    }
    if (i === 0) b.status = 'confirmed'
    if (i === 4) b.status = 'confirmed'
    if (i === 5) {
      b.status = 'completed'
      b.ownerNote = 'Sehr zufrieden, kommt wieder.'
    }
    if (i === 6) b.status = 'completed'
    seeded.push(b)
  })
  write(seeded)
  localStorage.setItem(SEED_KEY, '1')
}
