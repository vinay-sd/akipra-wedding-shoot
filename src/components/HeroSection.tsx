import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const HERO_VIDEO = 'https://assets.mixkit.co/videos/preview/mixkit-couple-having-their-wedding-in-a-garden-40982-large.mp4'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  // Hero: scroll down → video drifts up — classic parallax depth
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section className="hero-section" id="hero" ref={sectionRef}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <motion.video
          ref={videoRef}
          className="hero-video"
          src={HERO_VIDEO}
          autoPlay muted loop playsInline
          poster="/images/couple-portraits/DSC06076.JPG"
          style={{ y: bgY, height: '130%', marginTop: '0%', willChange: 'transform' }}
        />
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          Indian Wedding Photography &amp; Films
        </motion.div>

        <motion.h1
          className="hero-title font-serif"
          initial={{ opacity: 0, y: 52, filter: 'blur(16px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Your story,<br />
          told <em>honestly.</em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <a href="#contact" className="btn-primary">
            <span className="btn-bg" />
            <span className="btn-bg-hover" />
            <span className="btn-text">Let's talk about your wedding →</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.8 }}
      >
        Scroll
      </motion.div>
    </section>
  )
}
