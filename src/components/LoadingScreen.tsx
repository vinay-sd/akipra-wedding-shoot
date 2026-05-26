import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    // Fade in content early — before curtain starts rising
    const t1 = setTimeout(onDone, 1700)
    // Then lift the curtain
    const t2 = setTimeout(() => setExiting(true), 2300)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="loader-static"
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            background: 'linear-gradient(135deg, #6B0F1A 0%, #8B1A2E 45%, #550D1C 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {/* Subtle radial glow */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,117,10,0.12) 0%, transparent 70%)'
          }} />

          {/* Brand mark */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(16px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            style={{ textAlign: 'center' }}
          >
            {/* Decorative top line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
              style={{
                height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(196,146,42,0.7), transparent)',
                marginBottom: '28px',
                transformOrigin: 'center'
              }}
            />

            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(52px, 10vw, 96px)',
              fontWeight: '800',
              letterSpacing: '0.05em',
              color: '#FBF7F1',
              lineHeight: 1,
            }}>
              AkiPra
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              style={{
                marginTop: '10px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '10px',
                letterSpacing: '0.55em',
                textTransform: 'uppercase',
                color: 'rgba(196,146,42,0.75)',
              }}
            >
              Cinematic Wedding Films
            </motion.div>

            {/* Decorative bottom line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
              style={{
                height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(196,146,42,0.7), transparent)',
                marginTop: '28px',
                transformOrigin: 'center'
              }}
            />
          </motion.div>

          {/* Breathing progress dot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0.6, 0] }}
            transition={{ duration: 2, delay: 0.8, times: [0, 0.2, 0.8, 1] }}
            style={{
              position: 'absolute', bottom: '40px',
              width: '5px', height: '5px', borderRadius: '50%',
              background: 'rgba(196,146,42,0.7)',
            }}
          />
        </motion.div>
      ) : (
        /* Curtain slides up on exit */
        <motion.div
          key="loader-exit"
          initial={{ y: '0%' }}
          animate={{ y: '-100%' }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            background: 'linear-gradient(135deg, #6B0F1A 0%, #8B1A2E 45%, #550D1C 100%)',
          }}
        />
      )}
    </AnimatePresence>
  )
}
