import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useRef } from 'react'

const films = [
  {
    title: 'The Oberoi Wedding',
    venue: 'Udaipur • 2025',
    tagline: 'Where royal vows met golden sunsets.',
    thumb: '/images/couple-portraits/DSC06118.JPG',
    cta: 'Watch Story →',
    size: 'large'
  },
  {
    title: 'Priya & Arjun',
    venue: 'Jaipur • 2025',
    tagline: 'A love story written in marigolds.',
    thumb: '/images/bride-portraits/DSC00304.JPG',
    cta: 'Experience Film →',
    size: 'small'
  },
  {
    title: 'The Palace Reception',
    venue: 'Jodhpur • 2025',
    tagline: 'Blue city. Golden hearts.',
    thumb: '/images/couple-portraits/DSC06347.JPG',
    cta: 'View Full Wedding →',
    size: 'small'
  },
  {
    title: 'Ananya & Dev',
    venue: 'Mumbai • 2026',
    tagline: 'City lights and first glances.',
    thumb: '/images/couple-portraits/DSC00354.JPG',
    cta: 'Watch Story →',
    size: 'large'
  },
  {
    title: 'The Garden Ceremony',
    venue: 'Coorg • 2026',
    tagline: 'Mist, mountains, and forever.',
    thumb: '/images/family-portraits/DSC00191.JPG',
    cta: 'Experience Film →',
    size: 'small'
  },
  {
    title: 'Meera & Rohan',
    venue: 'Goa • 2026',
    tagline: 'Barefoot. By the sea. Eternal.',
    thumb: '/images/bride-portraits/DSC06120 copy.jpg',
    cta: 'View Full Wedding →',
    size: 'small'
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
}

export default function FilmsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { threshold: 0.1 })

  return (
    <section className="films-section" id="films" ref={ref}>
      <div className="films-header">
        <motion.div
          className="section-label"
          variants={fadeUp} initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8 }}
        >
          Featured Wedding Films
        </motion.div>
        <motion.h2
          className="section-title"
          variants={fadeUp} initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Stories We've <em>Told</em>
        </motion.h2>
        <motion.p
          className="section-desc"
          variants={fadeUp} initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Each wedding film is a unique narrative — crafted with intention, 
          emotion, and cinematic precision.
        </motion.p>
      </div>

      {/* Grid layout */}
      <div className="films-grid">
        {films.map((film, i) => {
          const colSpan = [3, 2, 2, 3, 2, 3][i]

          return (
            <motion.div
              key={film.title}
              className={`film-card film-card-col-${colSpan}`}
              style={{
                gridColumn: `span ${colSpan}`,
                height: '420px',
                position: 'relative'
              }}
              variants={fadeUp} initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.9, delay: 0.1 * i }}
            >
              <ParallaxImage src={film.thumb} alt={film.title} />
              <div className="film-card-overlay" />
              <div className="film-card-info">
                <div className="film-card-venue">{film.venue}</div>
                <div className="film-card-title font-serif">{film.title}</div>
                <div className="film-card-tagline">{film.tagline}</div>
                <a href="#films" className="film-card-cta">{film.cta}</a>
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        style={{ textAlign: 'center', marginTop: '64px' }}
        variants={fadeUp} initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a href="#films" className="btn-secondary">
          <span className="btn-bg" />
          <span className="btn-bg-hover" />
          <span className="btn-text">Explore All Wedding Stories →</span>
        </a>
      </motion.div>
    </section>
  )
}

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-28%', '28%'])

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute', inset: 0, overflow: 'hidden',
        width: '100%', height: '100%',
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          width: '100%', height: '156%', objectFit: 'cover',
          display: 'block', marginTop: '-28%',
          willChange: 'transform', y,
        }}
        loading="lazy"
      />
    </div>
  )
}
