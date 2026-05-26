import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const reels = [
  {
    poster: '/images/bride-portraits/DSC06866.JPG',
    label: 'Bridal Portraits',
    sub: 'Tears of joy',
    views: '1.2M'
  },
  {
    poster: '/images/family-portraits/DSC00228.JPG',
    label: 'Haldi Morning',
    sub: 'Pure laughter',
    views: '890K'
  },
  {
    poster: '/images/couple-portraits/DSC04060.jpg',
    label: 'First Look',
    sub: 'Speechless',
    views: '2.1M'
  },
  {
    poster: '/images/couple-portraits/DSC07391.JPG',
    label: 'Varmala Moment',
    sub: 'Forever starts here',
    views: '1.7M'
  },
]

export default function ReelsSection() {
  return (
    <section className="reels-section" id="reels">
      {/* Header */}
      <div className="reels-header">
        <motion.div
          className="section-label"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          Instagram Reels
        </motion.div>
        <motion.h2
          className="reels-heading"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }}
        >
          Moments That Stop <em>Scrolling</em>
        </motion.h2>
      </div>

      {/* Full-width 4-col reel strip */}
      <div className="reels-strip">
        {reels.map((reel, i) => (
          <motion.div
            key={reel.label}
            className="reel-tile"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img src={reel.poster} alt={reel.label} className="reel-tile-img" loading="lazy" />
            <div className="reel-tile-overlay" />
            <div className="reel-tile-play">
              <Play size={20} strokeWidth={1.5} />
            </div>
            <div className="reel-tile-info">
              <div className="reel-tile-sub">{reel.sub}</div>
              <div className="reel-tile-label">{reel.label}</div>
              <div className="reel-tile-views">{reel.views} views</div>
            </div>
            <div className="reel-tile-num">{String(i + 1).padStart(2, '0')}</div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="reels-cta"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          <span className="btn-bg" />
          <span className="btn-bg-hover" />
          <span className="btn-text">
            <InstagramIcon />
            Follow on Instagram
          </span>
        </a>
      </motion.div>
    </section>
  )
}
