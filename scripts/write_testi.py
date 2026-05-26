content = """\
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: "I couldn't stop crying watching our wedding film. Not because it was sad \u2014 because it was so completely us. Every little moment I thought no one noticed\u2026 he got them all.",
    author: 'Priya & Arjun',
    venue: 'The Leela, Jaipur \u00b7 2025',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=120&q=80'
  },
  {
    quote: "We've watched our film over 30 times. Our kids will grow up watching it. It's not just a video \u2014 it's our family's greatest treasure.",
    author: 'Meera & Rohan',
    venue: 'Umaid Bhawan, Jodhpur \u00b7 2025',
    image: 'https://images.unsplash.com/photo-1595407753234-0882f1e77954?w=120&q=80'
  },
  {
    quote: "My mother called me sobbing after watching the reel. She said 'it felt like I was there all over again.' That's the only review that matters.",
    author: 'Ananya & Dev',
    venue: 'Grand Hyatt, Mumbai \u00b7 2026',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=120&q=80'
  }
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="testimonials-section" id="stories-proof">
      <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          className="section-label" style={{ justifyContent: 'center' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          Real Couples. Real Reactions.
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
        >
          What they said <em>after</em>
        </motion.h2>

        <div style={{ marginTop: '60px', position: 'relative', minHeight: '220px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="testimonial-quote font-serif">
                {testimonials[active].quote}
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginTop: '36px' }}>
                <img
                  src={testimonials[active].image}
                  alt=""
                  style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--gold)', flexShrink: 0 }}
                />
                <div style={{ textAlign: 'left' }}>
                  <div className="testimonial-author">{testimonials[active].author}</div>
                  <div className="testimonial-couple">{testimonials[active].venue}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '40px' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? '28px' : '8px',
                height: '8px', borderRadius: '4px',
                background: i === active ? 'var(--maroon)' : 'rgba(139,26,46,0.2)',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.35s ease'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
"""

with open(r'c:\Users\vinay\OneDrive\Desktop\SD\landingpages\src\components\TestimonialsSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('TestimonialsSection written, lines:', len(content.splitlines()))
