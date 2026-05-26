import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'

const FINAL_VIDEO = 'https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-at-sunset-4096-large.mp4'

export default function FinalCTASection() {
  return (
    <section className="final-cta-section" id="contact">
      <video
        className="final-cta-video"
        src={FINAL_VIDEO}
        poster="/images/couple-portraits/DSC04060.jpg"
        autoPlay muted loop playsInline
      />
      <div className="final-cta-overlay" />

      <motion.div
        className="final-cta-content"
        initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="section-label" style={{ justifyContent: 'center', color: 'var(--gold-pale)', marginBottom: '20px' }}>
          Limited Dates — 2026
        </div>

        <h2 className="final-cta-title font-serif">
          Your story deserves<br /><em>a storyteller.</em>
        </h2>

        <p className="final-cta-sub">
          A handful of weddings a year. Yours could be one.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '28px' }}>
          <a href="#contact" className="btn-primary">
            <span className="btn-bg" />
            <span className="btn-bg-hover" />
            <span className="btn-text">Reserve your date →</span>
          </a>
          <a
            href="https://wa.me/919876543210"
            className="btn-whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <span><MessageSquare size={14} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />WhatsApp</span>
          </a>
        </div>

        <p className="final-cta-location">
          Delhi · Mumbai · Jaipur · Udaipur · Worldwide
        </p>
      </motion.div>
    </section>
  )
}
