import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  LogOut, Search, RotateCcw, Check, X, Clock, CheckCircle2,
  Calendar, User, Phone, Mail, FileText, ExternalLink, Trash2,
} from 'lucide-react'
import {
  listBookings, updateBooking, deleteBooking, resetWithDemo,
  computeStats, subscribe, STATUSES,
} from '../../lib/bookings'
import { logout } from '../../lib/auth'

const FILTERS = [
  { key: 'all', label: 'Alle' },
  { key: 'pending', label: 'Offen' },
  { key: 'confirmed', label: 'Bestaetigt' },
  { key: 'completed', label: 'Erledigt' },
  { key: 'declined', label: 'Abgelehnt' },
]

export default function AdminDashboard({ onLogout }) {
  const [bookings, setBookings] = useState(() => listBookings())
  const [filter, setFilter] = useState('pending')
  const [query, setQuery] = useState('')
  const [detail, setDetail] = useState(null)

  useEffect(() => {
    document.title = 'Admin — Grand Spa Terminverwaltung'
    const unsub = subscribe(() => setBookings(listBookings()))
    return unsub
  }, [])

  const refresh = () => setBookings(listBookings())

  const stats = useMemo(() => computeStats(bookings), [bookings])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return bookings
      .filter((b) => filter === 'all' || b.status === filter)
      .filter((b) => {
        if (!q) return true
        return (
          b.name.toLowerCase().includes(q) ||
          b.email.toLowerCase().includes(q) ||
          b.treatment.toLowerCase().includes(q) ||
          b.phone.toLowerCase().includes(q)
        )
      })
      .sort((a, b) => {
        // pending first, then by date
        if (a.status === 'pending' && b.status !== 'pending') return -1
        if (b.status === 'pending' && a.status !== 'pending') return 1
        return (a.date || '').localeCompare(b.date || '')
      })
  }, [bookings, filter, query])

  const handleStatus = (id, status) => {
    updateBooking(id, { status })
    refresh()
    if (detail?.id === id) setDetail((d) => ({ ...d, status }))
  }

  const handleDelete = (id) => {
    if (!window.confirm('Termin wirklich loeschen?')) return
    deleteBooking(id)
    setDetail(null)
    refresh()
  }

  const handleLogout = () => {
    logout()
    onLogout?.()
  }

  const handleReset = () => {
    if (!window.confirm('Alle Termine zuruecksetzen und Demo-Daten neu laden?')) return
    resetWithDemo()
    refresh()
  }

  return (
    <div className="min-h-screen bg-spa-950 text-cream">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-spa-900/90 backdrop-blur-xl border-b border-gold/15">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="font-heading text-base md:text-lg text-gold tracking-[0.15em] font-semibold uppercase leading-none">
                Grand Spa
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-gold/40 font-medium mt-0.5">
                Admin Terminverwaltung
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/" target="_blank"
              className="hidden sm:inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] font-medium text-cream/50 hover:text-gold transition-colors px-4 py-2.5 border border-cream/10">
              <ExternalLink size={12} />
              Website
            </Link>
            <button onClick={handleReset}
              className="hidden sm:inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] font-medium text-cream/50 hover:text-gold transition-colors px-4 py-2.5 border border-cream/10 cursor-pointer"
              title="Demo-Daten neu laden">
              <RotateCcw size={12} />
              Demo-Reset
            </button>
            <button onClick={handleLogout}
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] font-semibold text-spa-900 bg-gold hover:bg-gold-light transition-colors px-4 py-2.5 cursor-pointer">
              <LogOut size={12} />
              Abmelden
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-10">
        {/* KPI Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
          <Kpi label="Offene Anfragen" value={stats.pending} accent />
          <Kpi label="Heute" value={stats.today} />
          <Kpi label="Diese Woche" value={stats.week} />
          <Kpi label="Bestaetigt" value={stats.confirmed} />
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          {/* Filter Pills */}
          <div className="flex gap-1.5 overflow-x-auto -mx-1 px-1 pb-1">
            {FILTERS.map((f) => {
              const count = f.key === 'all' ? bookings.length : bookings.filter((b) => b.status === f.key).length
              const active = filter === f.key
              return (
                <button key={f.key} onClick={() => setFilter(f.key)}
                  className={`shrink-0 text-[10px] uppercase tracking-[0.15em] font-semibold px-4 py-3 border transition-all cursor-pointer ${
                    active
                      ? 'bg-gold text-spa-900 border-gold'
                      : 'bg-spa-900/60 text-cream/50 border-cream/10 hover:border-gold/40 hover:text-cream'
                  }`}>
                  {f.label}
                  <span className={`ml-2 text-[9px] ${active ? 'text-spa-900/60' : 'text-cream/30'}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Search */}
          <div className="relative md:ml-auto md:min-w-[280px]">
            <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/30" />
            <input type="text" placeholder="Suche Name, E-Mail, Behandlung..."
              value={query} onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-spa-900/60 border border-cream/10 text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/60 transition-colors font-light" />
          </div>
        </div>

        {/* Booking List */}
        {filtered.length === 0 ? (
          <EmptyState filter={filter} query={query} />
        ) : (
          <div className="space-y-3">
            {filtered.map((b) => (
              <BookingRow
                key={b.id}
                booking={b}
                onStatus={handleStatus}
                onOpen={() => setDetail(b)}
              />
            ))}
          </div>
        )}
      </main>

      {detail && (
        <DetailModal
          booking={detail}
          onClose={() => setDetail(null)}
          onStatus={handleStatus}
          onDelete={handleDelete}
          onSave={(patch) => {
            updateBooking(detail.id, patch)
            refresh()
            setDetail((d) => ({ ...d, ...patch }))
          }}
        />
      )}
    </div>
  )
}

// ── KPI ─────────────────────────────────────────────────────

function Kpi({ label, value, accent }) {
  return (
    <div className={`p-5 md:p-6 border ${accent ? 'bg-gold/10 border-gold/40' : 'bg-spa-900/60 border-cream/8'}`}>
      <p className="text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-cream/40 font-semibold">
        {label}
      </p>
      <p className={`mt-2 font-heading text-3xl md:text-4xl font-normal ${accent ? 'text-gold-light' : 'text-cream'}`}
         style={{ fontVariantNumeric: 'tabular-nums' }}>
        {value}
      </p>
    </div>
  )
}

// ── Booking Row ─────────────────────────────────────────────

function BookingRow({ booking, onStatus, onOpen }) {
  const status = STATUSES[booking.status] || STATUSES.pending

  return (
    <div
      onClick={onOpen}
      className="group bg-spa-900/60 border border-cream/8 hover:border-gold/40 p-5 md:p-6 transition-all duration-300 cursor-pointer">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Date Block */}
        <div className="md:w-[88px] shrink-0">
          <DateBlock date={booking.date} time={booking.time} />
        </div>

        {/* Main Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="font-heading text-lg md:text-xl text-cream font-normal truncate">
              {booking.name}
            </h3>
            <StatusBadge status={booking.status} />
          </div>
          <p className="mt-1 text-sm text-gold/85 font-light truncate">
            {booking.treatment}
          </p>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-cream/40 font-light">
            <span className="flex items-center gap-1.5">
              <Mail size={11} /> {booking.email}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={11} /> {booking.phone}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0" onClick={(e) => e.stopPropagation()}>
          {booking.status === 'pending' ? (
            <>
              <ActionButton
                variant="accept"
                onClick={() => onStatus(booking.id, 'confirmed')}
                icon={<Check size={14} />}
                label="Annehmen"
              />
              <ActionButton
                variant="decline"
                onClick={() => onStatus(booking.id, 'declined')}
                icon={<X size={14} />}
                label="Ablehnen"
              />
            </>
          ) : booking.status === 'confirmed' ? (
            <ActionButton
              variant="complete"
              onClick={() => onStatus(booking.id, 'completed')}
              icon={<CheckCircle2 size={14} />}
              label="Erledigt"
            />
          ) : (
            <ActionButton
              variant="reset"
              onClick={() => onStatus(booking.id, 'pending')}
              icon={<RotateCcw size={14} />}
              label="Zurueck"
            />
          )}
          <span className="hidden md:block text-xs text-cream/25 ml-2">{status.label}</span>
        </div>
      </div>
    </div>
  )
}

function DateBlock({ date, time }) {
  if (!date) {
    return (
      <div className="bg-spa-800/60 border border-cream/10 p-3 text-center">
        <p className="text-[9px] uppercase tracking-wider text-cream/30">Offen</p>
      </div>
    )
  }
  const d = new Date(date)
  const day = d.getDate()
  const month = d.toLocaleDateString('de-DE', { month: 'short' })
  return (
    <div className="bg-spa-800/60 border border-gold/15 p-3 text-center">
      <p className="text-[9px] uppercase tracking-wider text-gold/70 font-semibold">
        {month}
      </p>
      <p className="font-heading text-2xl text-cream leading-none mt-0.5"
         style={{ fontVariantNumeric: 'tabular-nums' }}>
        {day}
      </p>
      {time && (
        <p className="text-[10px] text-cream/45 mt-1 tabular-nums">{time}</p>
      )}
    </div>
  )
}

function StatusBadge({ status }) {
  const map = {
    pending: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    confirmed: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    declined: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    completed: 'bg-slate-500/15 text-slate-300 border-slate-500/30',
  }
  return (
    <span className={`text-[9px] uppercase tracking-[0.15em] font-semibold px-2.5 py-1 border ${map[status] || map.pending}`}>
      {STATUSES[status]?.label || status}
    </span>
  )
}

function ActionButton({ icon, label, onClick, variant }) {
  const variants = {
    accept: 'bg-emerald-500/15 hover:bg-emerald-500 text-emerald-200 hover:text-spa-900 border-emerald-500/40',
    decline: 'bg-rose-500/10 hover:bg-rose-500/90 text-rose-200 hover:text-cream border-rose-500/30',
    complete: 'bg-gold/15 hover:bg-gold text-gold hover:text-spa-900 border-gold/40',
    reset: 'bg-cream/5 hover:bg-cream/15 text-cream/60 hover:text-cream border-cream/15',
  }
  return (
    <button onClick={onClick}
      className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] font-semibold px-3 md:px-4 py-2.5 border transition-all cursor-pointer ${variants[variant]}`}>
      {icon}
      <span className="hidden md:inline">{label}</span>
    </button>
  )
}

// ── Empty State ─────────────────────────────────────────────

function EmptyState({ filter, query }) {
  return (
    <div className="bg-spa-900/40 border border-cream/8 p-12 text-center">
      <Calendar size={32} className="mx-auto text-cream/20 mb-4" />
      <p className="text-sm text-cream/45 font-light">
        {query
          ? 'Keine Termine gefunden fuer diese Suche.'
          : filter === 'pending'
          ? 'Keine offenen Anfragen. Alles im Griff.'
          : 'Keine Termine in dieser Kategorie.'}
      </p>
    </div>
  )
}

// ── Detail Modal ────────────────────────────────────────────

function DetailModal({ booking, onClose, onStatus, onDelete, onSave }) {
  const [ownerNote, setOwnerNote] = useState(booking.ownerNote || '')

  useEffect(() => {
    setOwnerNote(booking.ownerNote || '')
  }, [booking.id])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const saveNote = () => {
    if (ownerNote !== (booking.ownerNote || '')) {
      onSave({ ownerNote })
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-4 overflow-y-auto"
         onClick={onClose}>
      <div className="absolute inset-0 bg-spa-950/85 backdrop-blur-sm" />

      <div className="relative bg-spa-900 border border-gold/20 w-full max-w-[640px] my-4 md:my-8 shadow-2xl"
           onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="border-b border-gold/15 p-6 md:p-8 flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <StatusBadge status={booking.status} />
            <h2 className="mt-3 font-heading text-2xl md:text-3xl text-cream font-normal tracking-tight truncate">
              {booking.name}
            </h2>
            <p className="mt-1 text-sm text-gold/80 font-light truncate">
              {booking.treatment}
            </p>
          </div>
          <button onClick={onClose}
            className="shrink-0 w-9 h-9 flex items-center justify-center text-cream/40 hover:text-gold border border-cream/10 hover:border-gold/30 transition-colors cursor-pointer">
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <DetailField icon={<Calendar size={14} />} label="Wunschtermin">
            {booking.date
              ? new Date(booking.date).toLocaleDateString('de-DE', {
                  weekday: 'long', day: '2-digit', month: 'long', year: 'numeric',
                }) + (booking.time ? ` \u00B7 ${booking.time}` : '')
              : 'nicht angegeben'}
          </DetailField>

          <DetailField icon={<Mail size={14} />} label="E-Mail">
            <a href={`mailto:${booking.email}`} className="text-gold hover:text-gold-light break-all">
              {booking.email}
            </a>
          </DetailField>

          <DetailField icon={<Phone size={14} />} label="Telefon">
            <a href={`tel:${booking.phone}`} className="text-gold hover:text-gold-light">
              {booking.phone}
            </a>
          </DetailField>

          {booking.notes && (
            <DetailField icon={<FileText size={14} />} label="Nachricht des Gastes">
              <span className="text-cream/70 italic">&ldquo;{booking.notes}&rdquo;</span>
            </DetailField>
          )}

          {/* Owner Note */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-gold/70 font-semibold mb-2 flex items-center gap-2">
              <User size={12} />
              Interne Notiz
            </p>
            <textarea rows={3}
              value={ownerNote}
              onChange={(e) => setOwnerNote(e.target.value)}
              onBlur={saveNote}
              placeholder="z.B. Therapeutenzuordnung, Raum, besondere Hinweise..."
              className="w-full px-4 py-3 bg-spa-800/60 border border-cream/10 text-sm text-cream placeholder:text-cream/25 focus:outline-none focus:border-gold/60 transition-colors font-light resize-none" />
          </div>

          {/* History */}
          {booking.history && booking.history.length > 0 && (
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-gold/70 font-semibold mb-3 flex items-center gap-2">
                <Clock size={12} />
                Verlauf
              </p>
              <div className="space-y-2">
                {booking.history.slice().reverse().map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs text-cream/50 font-light">
                    <span className="w-1 h-1 rounded-full bg-gold/50 mt-1.5 shrink-0" />
                    <div>
                      <p>{h.action}</p>
                      <p className="text-cream/25 mt-0.5">
                        {new Date(h.ts).toLocaleString('de-DE')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="border-t border-gold/15 p-5 md:p-6 bg-spa-950/50 flex flex-col sm:flex-row gap-2">
          {booking.status === 'pending' && (
            <>
              <button onClick={() => { saveNote(); onStatus(booking.id, 'confirmed') }}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-500 text-spa-900 text-[11px] uppercase tracking-[0.15em] font-semibold py-3.5 hover:bg-emerald-400 transition-colors cursor-pointer">
                <Check size={14} /> Annehmen
              </button>
              <button onClick={() => { saveNote(); onStatus(booking.id, 'declined') }}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-rose-500/15 text-rose-200 text-[11px] uppercase tracking-[0.15em] font-semibold py-3.5 border border-rose-500/40 hover:bg-rose-500/25 transition-colors cursor-pointer">
                <X size={14} /> Ablehnen
              </button>
            </>
          )}
          {booking.status === 'confirmed' && (
            <button onClick={() => { saveNote(); onStatus(booking.id, 'completed') }}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gold text-spa-900 text-[11px] uppercase tracking-[0.15em] font-semibold py-3.5 hover:bg-gold-light transition-colors cursor-pointer">
              <CheckCircle2 size={14} /> Als erledigt markieren
            </button>
          )}
          {(booking.status === 'declined' || booking.status === 'completed') && (
            <button onClick={() => { saveNote(); onStatus(booking.id, 'pending') }}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-cream/10 text-cream/80 text-[11px] uppercase tracking-[0.15em] font-semibold py-3.5 border border-cream/15 hover:bg-cream/15 transition-colors cursor-pointer">
              <RotateCcw size={14} /> Auf offen zuruecksetzen
            </button>
          )}
          <button onClick={() => onDelete(booking.id)}
            className="inline-flex items-center justify-center gap-2 bg-transparent text-cream/40 hover:text-rose-300 text-[11px] uppercase tracking-[0.15em] font-semibold py-3.5 px-5 border border-cream/10 hover:border-rose-500/40 transition-colors cursor-pointer"
            title="Loeschen">
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}

function DetailField({ icon, label, children }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.18em] text-gold/70 font-semibold mb-2 flex items-center gap-2">
        <span className="text-gold/80">{icon}</span>
        {label}
      </p>
      <div className="text-sm text-cream/80 font-light">{children}</div>
    </div>
  )
}
