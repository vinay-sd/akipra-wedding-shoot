import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const BTS_VIDEO = 'https://assets.mixkit.co/videos/preview/mixkit-photographer-taking-photos-at-a-wedding-40956-large.mp4'

const features = [
  {
    icon: '◈',
    title: 'Cinematic Color Grading',
    desc: 'Every frame is color graded using professional LUTs inspired by film. Warm honey tones, deep shadows, and rich contrast that make moments feel legendary.'
  },
  {
    icon: '◎',
    title: 'Emotional Storytelling',
    desc: 'We build each film with a narrative arc — beginning, emotion, climax, and resolution. Your wedding film is structured like a movie, not a slideshow.'
  },
  {
    icon: '◉',
    title: 'Immersive Sound Design',
    desc: 'Natural ambient sounds, emotional music composition, and audio design that guides how you feel. Sound makes the cinema real.'
  }
]

export default function SignatureSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { threshold: 0.1 })
  const [sliderPos, setSliderPos] = useState(50)
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleSliderMove = (e: React.MouseEvent | React.TouchEvent) => {
    const el = sliderRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const pos = ((clientX - rect.left) / rect.width) * 100
    setSliderPos(Math.min(Math.max(pos, 5), 95))
  }

  return (
    <section className="signature-section" ref={ref} id="signature">
      <motion.div
        style={{ textAlign: 'center', marginBottom: '80px' }}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-label" style={{ justifyContent: 'center' }}>
          Our Signature Style
        </div>
        <h2 className="section-title">
          The AkiPra <em>Difference</em>
        </h2>
        <p className="section-desc" style={{ margin: '0 auto', textAlign: 'center', maxWidth: '500px' }}>
          Three pillars that define our visual language and set our films apart from everything else.
        </p>
      </motion.div>

      {/* Feature cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', marginBottom: '80px' }}>
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            style={{
              padding: '48px 40px',
              background: i === 1 ? 'rgba(201,169,110,0.06)' : 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(201,169,110,0.08)',
              transition: 'background 0.4s ease'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 * i }}
            whileHover={{ background: 'rgba(201,169,110,0.06)' }}
          >
            <div style={{
              fontSize: '32px', color: 'var(--gold)',
              marginBottom: '24px', lineHeight: '1'
            }}>
              {f.icon}
            </div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '24px', fontWeight: '400',
              color: 'var(--ivory)', marginBottom: '16px'
            }}>
              {f.title}
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: 'rgba(251,247,241,0.55)' }}>
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Before / After Slider */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Color Grading
          </div>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '28px', fontWeight: '300', color: 'var(--ivory)'
          }}>
            Before & After — Drag to Reveal
          </h3>
        </div>

        <div
          ref={sliderRef}
          className="before-after-slider"
          style={{ height: '500px', maxWidth: '900px', margin: '0 auto', cursor: 'ew-resize' }}
          onMouseMove={handleSliderMove}
          onTouchMove={handleSliderMove}
        >
          {/* After image (cinematic) */}
          <img
            src="/images/bride-portraits/DSC00730.JPG"
            alt="After"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />

          {/* Before (original) */}
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: `${sliderPos}%`, height: '100%', overflow: 'hidden',
            borderRight: '2px solid var(--gold)'
          }}>
            <img
              src="/images/bride-portraits/DSC00730.JPG"
              alt="Before"
              style={{ width: '900px', maxWidth: 'none', height: '100%', objectFit: 'cover', objectPosition: 'left', filter: 'sepia(0) contrast(0.9) brightness(1) saturate(1)' }}
            />
            <div style={{
              position: 'absolute', top: '50%', right: '12px', transform: 'translateY(-50%)',
              background: 'rgba(8,8,8,0.8)', padding: '6px 14px',
              fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)'
            }}>
              Original
            </div>
          </div>

          <div style={{
            position: 'absolute', top: '50%', left: `${sliderPos}%`,
            transform: 'translate(-50%, -50%)',
            width: '40px', height: '40px', borderRadius: '50%',
            background: 'var(--gold)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 20px rgba(201,169,110,0.4)',
            pointerEvents: 'none'
          }}>
            <span style={{ color: '#080808', fontSize: '12px', fontWeight: '700' }}>⟷</span>
          </div>

          <div style={{
            position: 'absolute', top: '50%', left: `calc(${sliderPos}% + 16px)`, transform: 'translateY(-50%)',
            background: 'rgba(8,8,8,0.8)', padding: '6px 14px',
            fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)'
          }}>
            Cinematic Grade
          </div>
        </div>
      </motion.div>

      {/* BTS Video */}
      <motion.div
        style={{ marginTop: '80px' }}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Behind The Scenes
          </div>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '28px', fontWeight: '300', color: 'white'
          }}>
            The People Behind Your Film
          </h3>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', borderRadius: '2px', overflow: 'hidden', border: '1px solid rgba(201,169,110,0.1)' }}>
          <video
            src={BTS_VIDEO}
            poster="/images/couple-portraits/DSC07391.JPG"
            autoPlay muted loop playsInline
            style={{ width: '100%', display: 'block', height: '480px', objectFit: 'cover' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
