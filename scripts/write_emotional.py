content = """\
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const PHOTOGRAPHER_IMG = 'https://images.unsplash.com/photo-1556103255-4443dbae8e5a?w=1200&q=90'

const LINES = [
  'I film the tears no one else notices.',
  'Every stumble, every laugh, every stolen glance.',
]
const FINAL = 'Your day, preserved. Forever.'

export default function EmotionalSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section className="emotional-section" id="stories" ref={sectionRef}>
      <div className="emotional-layout">

        {/* Left \u2014 photographer portrait with parallax */}
        <div className="emotional-photo-col">
          <div className="emotional-photo-wrap">
            <motion.img
              src={PHOTOGRAPHER_IMG}
              alt="AkiPra at work"
              className="emotional-photo"
              style={{ y: imgY }}
            />
            <div className="emotional-badge">
              <span className="emotional-badge-num">12</span>
              <span className="emotional-badge-label">Weddings<br />per year</span>
            </div>
          </div>
        </div>

        {/* Right \u2014 emotional copy */}
        <div className="emotional-content">
          <motion.div
            className="section-label"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Why Couples Choose Me
          </motion.div>

          <div className="emotional-lines">
            {LINES.map((line, i) => (
              <motion.p
                key={i}
                className="emotional-line"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + i * 0.22, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {line}
              </motion.p>
            ))}

            <motion.p
              className="emotional-line emotional-line-final"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.72 }}
            >
              {FINAL}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.1 }}
            style={{ marginTop: '64px' }}
          >
            <a href="#contact" className="btn-secondary" style={{ display: 'inline-flex' }}>
              <span className="btn-bg" />
              <span className="btn-bg-hover" />
              <span className="btn-text" style={{ color: 'var(--ivory)' }}>Book a Conversation \u2192</span>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
"""

with open(r'c:\Users\vinay\OneDrive\Desktop\SD\landingpages\src\components\EmotionalSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('EmotionalSection written, lines:', len(content.splitlines()))
