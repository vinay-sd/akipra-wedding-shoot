import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    number: '01',
    title: 'Wedding Films',
    tagline: 'Directed like cinema.',
    desc: 'Every wedding film we create is a full cinematic narrative — with intentional storytelling, emotional sound design, and color grading that makes your memories feel timeless.',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-walking-outside-a-building-44208-large.mp4',
    poster: '/images/bride-portraits/DSC00304.JPG',
    reverse: false
  },
  {
    number: '02',
    title: 'Candid Photography',
    tagline: 'Real emotions. No forced moments.',
    desc: 'We blend into the ceremony and capture genuine, unscripted moments — the stolen glances, quiet tears, and joyful chaos that make your story real.',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-standing-together-4073-large.mp4',
    poster: '/images/family-portraits/DSC00191.JPG',
    reverse: true
  },
  {
    number: '03',
    title: 'Pre-Wedding Stories',
    tagline: 'Before the chaos begins.',
    desc: 'A cinematic pre-wedding film to capture the calm before the celebration — your love, your places, your story, beautifully told.',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-couple-walking-through-a-forest-4081-large.mp4',
    poster: '/images/couple-portraits/DSC04015.jpg',
    reverse: false
  },
  {
    number: '04',
    title: 'Destination Weddings',
    tagline: 'Stories from everywhere.',
    desc: 'From Udaipur palaces to Santorini cliffs — we travel anywhere your love story takes us, bringing our full cinematic team and equipment.',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-couple-on-a-boat-on-a-lake-with-mountains-in-the-background-41168-large.mp4',
    poster: '/images/couple-portraits/DSC06347.JPG',
    reverse: true
  }
]

export default function ServicesSection() {
  return (
    <section className="services-section" id="experience">
      <div style={{ textAlign: 'center', padding: '120px 64px 80px' }}>
        <motion.div
          className="section-label" style={{ justifyContent: 'center' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          What We Create
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
        >
          Cinematic Stories, <em>Every Time</em>
        </motion.h2>
      </div>

      {services.map((s, i) => (
        <ServiceSplit key={s.title} service={s} index={i} />
      ))}
    </section>
  )
}

function ServiceSplit({ service, index }: { service: typeof services[0], index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const videoY = useTransform(scrollYProgress, [0, 1], ['-24%', '24%'])

  const handleMouseEnter = () => videoRef.current?.play().catch(() => {})
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      ref={containerRef}
      className={`service-split ${service.reverse ? 'reverse' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="service-visual" style={{ overflow: 'hidden' }}>
        <motion.video
          ref={videoRef}
          className="service-video"
          src={service.video}
          poster={service.poster}
          muted loop playsInline
          style={{ y: videoY, height: '148%', marginTop: '-24%', willChange: 'transform' }}
        />
        <div className="service-visual-overlay" />
      </div>

      <div className="service-content">
        <div>
          <div className="service-number font-serif">{service.number}</div>
          <div className="section-label" style={{ marginBottom: '16px' }}>
            Service {String(index + 1).padStart(2, '0')}
          </div>
          <h3 className="service-title font-serif">{service.title}</h3>
          <p className="service-tagline">"{service.tagline}"</p>
          <p className="service-desc">{service.desc}</p>
          <a href="#contact" className="btn-secondary">
            <span className="btn-bg" />
            <span className="btn-bg-hover" />
            <span className="btn-text">Start Your Journey →</span>
          </a>
        </div>
      </div>
    </div>
  )
}
