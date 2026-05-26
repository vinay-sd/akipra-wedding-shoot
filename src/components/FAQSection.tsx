import { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'How early should we book?',
    a: 'We recommend booking at least 6–12 months in advance, especially for peak wedding seasons (October–February). Popular dates fill up quickly, and early bookings allow us to plan your cinematic story thoroughly.'
  },
  {
    q: 'Do you travel for destination weddings?',
    a: 'Absolutely. We have covered weddings across Rajasthan, Goa, Kerala, and internationally in Dubai, Bali, and Europe. Travel logistics are planned seamlessly as part of your package.'
  },
  {
    q: 'How long is the delivery timeline?',
    a: 'Your highlight film is delivered within 6–8 weeks after the wedding. Full-length films take 10–12 weeks. We never rush — quality takes the time it deserves.'
  },
  {
    q: 'Do you provide Instagram reels and edits?',
    a: 'Yes. Every package includes a 60–90 second cinematic highlight reel optimized for Instagram, plus individual ceremony edits upon request.'
  },
  {
    q: 'Can emotional moments be planned naturally?',
    a: 'This is what sets us apart. We never manufacture moments — we create conditions where emotions flow naturally, then capture them with precision. Our presence is unobtrusive; our camera always ready.'
  },
  {
    q: 'What equipment do you use?',
    a: 'Cinema-grade cameras (Sony Venice, RED), professional gimbals, drones (DJI Inspire), cinema lenses, and wireless audio systems. The same tools used in professional film productions.'
  }
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="faq-section" id="faq">
      <div className="faq-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', maxWidth: '1100px', margin: '0 auto' }}>
        <div>
          <motion.div
            className="section-label"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            Questions
          </motion.div>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
          >
            Everything<br />You Want<br />to <em>Know</em>
          </motion.h2>
          <motion.p
            style={{ fontSize: '14px', lineHeight: '1.8', color: 'var(--text-muted)', marginTop: '24px' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            Can't find your answer? Reach us on WhatsApp and we'll respond personally.
          </motion.p>
          <motion.div
            style={{ marginTop: '32px' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a href="https://wa.me/919876543210" className="btn-secondary">
              <span className="btn-bg" />
              <span className="btn-bg-hover" />
              <span className="btn-text">Ask on WhatsApp →</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: 'inherit' }}
              >
                <span className="font-serif">{faq.q}</span>
                <span className={`faq-icon ${open === i ? 'open' : ''}`}>+</span>
              </button>
              <div className={`faq-answer ${open === i ? 'open' : ''}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
