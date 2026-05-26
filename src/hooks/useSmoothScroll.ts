// useSmoothScroll.ts
// Industry-standard smooth scrolling via Lenis
// Install: npm install lenis

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export type LenisInstance = InstanceType<typeof Lenis>

// Singleton so any component can call scrollTo
let globalLenis: LenisInstance | null = null

export function getLenis() {
  return globalLenis
}

/**
 * Scrolls to an element or offset with Lenis easing.
 * Works even before Lenis is ready (falls back to native).
 */
export function smoothScrollTo(
  target: string | number | HTMLElement,
  options?: { offset?: number; duration?: number; immediate?: boolean }
) {
  if (globalLenis) {
    globalLenis.scrollTo(target as any, {
      offset: options?.offset ?? 0,
      duration: options?.duration ?? 1.4,
      immediate: options?.immediate ?? false,
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // expo out
    })
  } else {
    // Fallback before Lenis mounts
    if (typeof target === 'string') {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
    } else if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'smooth' })
    }
  }
}

interface UseSmoothScrollOptions {
  /** Whether to start Lenis. Pass `false` during loading screens. */
  enabled?: boolean
  /** Scroll duration in seconds (default 1.2) */
  duration?: number
  /** Wheel multiplier — higher = faster per tick (default 1) */
  wheelMultiplier?: number
  /** Touch multiplier (default 2) */
  touchMultiplier?: number
}

export function useSmoothScroll({
  enabled = true,
  duration = 1.2,
  wheelMultiplier = 1,
  touchMultiplier = 2,
}: UseSmoothScrollOptions = {}) {
  const lenisRef = useRef<LenisInstance | null>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!enabled) return

    const lenis = new Lenis({
      duration,
      // Cinematic exponential-out easing — feels like high-end creative sites
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier,
      touchMultiplier,
      // Prevent scroll from "stacking" during rapid input
      syncTouch: false,
      infinite: false,
    })

    lenisRef.current = lenis
    globalLenis = lenis

    // RAF loop — Lenis needs this every frame
    function raf(time: number) {
      lenis.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }
    rafRef.current = requestAnimationFrame(raf)

    // ── Anchor-link interception ─────────────────────────────────────────
    // Makes every <a href="#section"> use Lenis instead of native jump
    function handleAnchorClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || href === '#') return

      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        lenis.scrollTo(target as HTMLElement, {
          offset: -80, // account for fixed nav height
          duration: 1.4,
          easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        })
      }
    }
    document.addEventListener('click', handleAnchorClick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
      globalLenis = null
      lenisRef.current = null
    }
  }, [enabled, duration, wheelMultiplier, touchMultiplier])

  return lenisRef
}