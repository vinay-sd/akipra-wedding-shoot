import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const stats = [
  { number: 280, suffix: '+', label: 'Weddings Filmed' },
  { number: 40, suffix: '+', label: 'Cities Covered' },
  { number: 18, suffix: '+', label: 'Destination Weddings' },
  { number: 98, suffix: '%', label: 'Couples Recommend Us' },
]

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [active, target])
  return count
}

function StatItem({ stat, active }: { stat: typeof stats[0], active: boolean }) {
  const count = useCountUp(stat.number, active)
  return (
    <motion.div
      className="stat-item"
      initial={{ opacity: 0, y: 30 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
    >
      <div className="stat-number font-serif">
        {count}{stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </motion.div>
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { threshold: 0.3 })

  return (
    <section className="stats-section" ref={ref}>
      <motion.div
        style={{ textAlign: 'center', marginBottom: '60px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-label" style={{ justifyContent: 'center' }}>
          Our Legacy
        </div>
        <h2 className="section-title">
          Years of <em>Stories</em>
        </h2>
      </motion.div>
      <div className="stats-grid">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} active={inView} />
        ))}
      </div>
    </section>
  )
}
