import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 60)
      setHidden(y > lastY && y > 200)
      setLastY(y)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])

  return (
    <nav className={`cinematic-nav ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <a href="#" className="nav-logo">
        AkiPra <span>Films</span>
      </a>

      <ul className="nav-links">
        {['Films', 'Stories', 'Experience', 'About', 'Contact'].map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-cta">Book Now</a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none', border: 'none', cursor: 'pointer', padding: '8px',
          flexDirection: 'column', gap: '5px'
        }}
        className="mobile-menu-btn"
        aria-label="Menu"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{ display: 'block', width: '22px', height: '1px', background: 'var(--ivory)' }} />
        ))}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(250,246,240,0.98)', backdropFilter: 'blur(20px)',
          padding: '24px', borderBottom: '1px solid rgba(184,133,42,0.15)',
          boxShadow: '0 8px 32px rgba(123,19,37,0.08)'
        }}>
          {['Films', 'Stories', 'Experience', 'About', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '14px 0',
                borderBottom: '1px solid rgba(123,19,37,0.07)',
                fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--text)', textDecoration: 'none'
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
