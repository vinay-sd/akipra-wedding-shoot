import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'We listen to your story, understand your vision, and learn what makes your love unique.',
  },
  {
    num: '02',
    title: 'Creative Planning',
    desc: 'We shape cinematic moments naturally — no forced poses, just intentional storytelling.',
  },
  {
    num: '03',
    title: 'Wedding Day',
    desc: 'Present everywhere, intrusive nowhere. We capture emotions without interrupting them.',
  },
  {
    num: '04',
    title: 'Film Delivery',
    desc: 'Your memories become timeless cinema. Delivered with care, ready to relive forever.',
  }
]

export default function ProcessSection() {
  return (
    <section className="process-section" id="about">
      {/* Left: heading block */}
      <div className="process-layout">
        <div className="process-left">
          <motion.div
            className="section-label"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            How It Works
          </motion.div>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
          >
            Your <em>Journey</em><br />With Us
          </motion.h2>
          <motion.p
            className="section-desc"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            Four intentional steps from first conversation to finished cinema.
          </motion.p>
        </div>

        {/* Right: step cards */}
        <div className="process-right">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="process-card"
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className="process-card-num">{step.num}</div>
              <div className="process-card-body">
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-desc">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

