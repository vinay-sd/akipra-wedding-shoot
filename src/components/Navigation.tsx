import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)
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
    </nav>
  )
}
