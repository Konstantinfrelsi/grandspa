export default function Divider() {
  return (
    <div className="py-8 flex items-center justify-center bg-spa-900">
      <div className="flex items-center gap-6 w-full max-w-sm px-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/25" />
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-gold/30" fill="currentColor">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/25" />
      </div>
    </div>
  )
}
