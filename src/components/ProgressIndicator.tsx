import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'hero', label: 'Begin' },
  { id: 'films', label: 'Films' },
  { id: 'stories', label: 'Moments' },
  { id: 'experience', label: 'Services' },
  { id: 'reels', label: 'Reels' },
  { id: 'signature', label: 'Style' },
  { id: 'stories-proof', label: 'Voices' },
  { id: 'about', label: 'Journey' },
  { id: 'contact', label: 'Begin' },
]

export default function ProgressIndicator() {
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')
  const [hovered, setHovered] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
      setVisible(scrollTop > 200)

      // Detect active section
      SECTIONS.forEach(s => {
        const el = document.getElementById(s.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 0) {
            setActiveSection(s.id)
          }
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', right: '24px', top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 500,
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0',
    }}>
      {/* Track */}
      <div style={{
        width: '1px', height: '160px',
        background: 'rgba(201,169,110,0.15)',
        position: 'relative', borderRadius: '1px',
      }}>
        {/* Progress fill */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: `${progress * 100}%`,
          background: 'linear-gradient(to bottom, var(--crimson), var(--gold))',
          transition: 'height 0.1s ease',
          borderRadius: '1px',
        }} />

        {/* Dot */}
        <div style={{
          position: 'absolute', left: '50%',
          top: `${progress * 100}%`,
          transform: 'translate(-50%, -50%)',
          width: '6px', height: '6px',
          borderRadius: '50%',
          background: 'var(--gold)',
          boxShadow: '0 0 8px rgba(201,169,110,0.8)',
          transition: 'top 0.1s ease',
        }} />
      </div>

      {/* Section dots */}
      <div style={{
        position: 'absolute', right: '12px', top: 0, bottom: 0,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        alignItems: 'flex-end',
      }}>
        {SECTIONS.map(s => (
          <div
            key={s.id}
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', padding: '2px 0' }}
          >
            {/* Label */}
            <div style={{
              fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--gold)',
              opacity: hovered === s.id || activeSection === s.id ? 1 : 0,
              transition: 'opacity 0.3s ease',
              whiteSpace: 'nowrap',
            }}>
              {s.label}
            </div>
            {/* Tick */}
            <div style={{
              width: activeSection === s.id ? '8px' : '4px',
              height: '1px',
              background: activeSection === s.id ? 'var(--gold)' : 'rgba(201,169,110,0.3)',
              transition: 'all 0.3s ease',
            }} />
          </div>
        ))}
      </div>
    </div>
  )
}
