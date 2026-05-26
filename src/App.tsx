import { useState, useEffect } from 'react'
import './styles.css'

// ─── Lenis smooth scroll ────────────────────────────────────────────────────
// Install once:  npm install lenis
import { useSmoothScroll } from './hooks/useSmoothScroll'

import LoadingScreen from './components/LoadingScreen'
import ParticleField from './components/ParticleField'
import ProgressIndicator from './components/ProgressIndicator'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import FilmsSection from './components/FilmsSection'
import EmotionalSection from './components/EmotionalSection'
import ReelsSection from './components/ReelsSection'
import ServicesSection from './components/ServicesSection'
import SignatureSection from './components/SignatureSection'
import StatsSection from './components/StatsSection'
import TestimonialsSection from './components/TestimonialsSection'
import ProcessSection from './components/ProcessSection'
import ScarcitySection from './components/ScarcitySection'
import FAQSection from './components/FAQSection'
import FinalCTASection from './components/FinalCTASection'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  // ── Lenis smooth scroll ──────────────────────────────────────────────────
  // Only activate after the loading screen exits — prevents scroll fighting
  // with the loading animation and keeps the first paint clean.
  useSmoothScroll({
    enabled: loaded,
    duration: 1.2,          // seconds — tune between 0.8 (snappy) and 1.6 (dreamy)
    wheelMultiplier: 1,     // 1 = natural, >1 = faster per wheel tick
    touchMultiplier: 2,     // mobile touch sensitivity
  })

  return (
    <>
      {/* Loading screen — renders on top; slides away when done */}
      <LoadingScreen onDone={() => setLoaded(true)} />

      {/* Main site — always in DOM so it's ready when loader exits */}
      <div style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.6s ease',
        pointerEvents: loaded ? 'auto' : 'none',
      }}>
        {/* Cinematic overlays */}
        <div className="film-grain" aria-hidden="true" />
        <div className="vignette" aria-hidden="true" />
        <ParticleField />
        <ProgressIndicator />

        {/* Navigation */}
        <Navigation />

        {/* Main content */}
        <main>
          <HeroSection />
          <FilmsSection />
          <EmotionalSection />
          <ServicesSection />
          <StatsSection />
          <ReelsSection />
          <SignatureSection />
          <TestimonialsSection />
          <ProcessSection />
          <ScarcitySection />
          <FAQSection />
          <FinalCTASection />
        </main>

        {/* Footer */}
        <footer>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="footer-grid">
              <div>
                <div className="footer-logo font-serif">AkiPra <span>Films</span></div>
                <div className="footer-tagline">
                  Cinematic Storytellers for Indian Weddings
                </div>
                <p className="footer-about-text">
                  We craft wedding films that feel like cinema and leave you moved every time you watch them.
                </p>
              </div>
              <div>
                <div className="footer-col-heading">Navigate</div>
                <div className="footer-links footer-links-col">
                  {['Films', 'Stories', 'Experience', 'About', 'Contact'].map(item => (
                    <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
                  ))}
                </div>
              </div>
              <div>
                <div className="footer-col-heading">Services</div>
                <div className="footer-links footer-links-col">
                  {['Wedding Films', 'Candid Photography', 'Pre-Wedding', 'Destination', 'Reels'].map(item => (
                    <a key={item} href="#">{item}</a>
                  ))}
                </div>
              </div>
              <div>
                <div className="footer-col-heading">Connect</div>
                <div className="footer-links footer-links-col">
                  <a href="#">Instagram</a>
                  <a href="#">YouTube</a>
                  <a href="https://wa.me/919876543210">WhatsApp</a>
                  <a href="mailto:hello@akiprafilms.in">Email Us</a>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-copy">
                © 2026 AkiPra Films. All rights reserved. Crafted with intention.
              </div>
              <div className="footer-legal-links">
                {['Privacy Policy', 'Terms', 'Sitemap'].map(item => (
                  <a key={item} href="#" className="footer-legal-link">{item}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>

        {/* Floating CTA */}
        <FloatingCTA />
      </div>
    </>
  )
}