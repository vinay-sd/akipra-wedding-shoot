import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const SCARCITY_VIDEO = 'https://assets.mixkit.co/videos/preview/mixkit-newlywed-couple-on-a-meadow-4075-large.mp4'

export default function ScarcitySection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-22%', '22%'])

  return (
    <section className="scarcity-section" ref={sectionRef}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <motion.video
          ref={videoRef}
          className="scarcity-video"
          src={SCARCITY_VIDEO}
          poster="/images/couple-portraits/DSC04015.jpg"
          autoPlay muted loop playsInline
          style={{ y: bgY, height: '144%', marginTop: '-22%', willChange: 'transform' }}
        />
      </div>
      <div className="scarcity-overlay" />

      <motion.div
        className="scarcity-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="section-label" style={{ justifyContent: 'center', marginBottom: '32px' , color: 'var(--gold-pale)' }}>
          Limited Availability
        </div>
        <h2 className="scarcity-title font-serif">
          We Document Only<br /><em>Limited Weddings</em><br />Each Season.
        </h2>
        <p className="scarcity-subtitle">
          Because every story deserves time, care, and complete creative attention. 
          We accept a limited number of weddings to ensure yours receives everything it deserves.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          {[
            { label: 'Slots Remaining', value: '3' },
            { label: 'Season', value: '2026' },
            { label: 'Average Booking Lead', value: '8 months' }
          ].map(item => (
            <div key={item.label} style={{
              padding: '20px 32px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.15)',
              textAlign: 'center'
            }}>
              <div style={{
                fontFamily: "'Fraunces', serif",
                fontSize: '32px', fontWeight: '300', color: '#fff', lineHeight: '1'
              }}>
                {item.value}
              </div>
              <div style={{
                fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.62)', marginTop: '8px'
              }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <a href="#contact" className="btn-primary">
          <span className="btn-bg" /><span className="btn-bg-hover" />
          <span className="btn-text">Check Your Date Availability</span>
        </a>
      </motion.div>
    </section>
  )
}
