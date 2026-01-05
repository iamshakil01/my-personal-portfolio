import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Configure ScrollTrigger for Lenis
if (typeof window !== 'undefined') {
  ScrollTrigger.defaults({
    markers: false,
  })
}

// Fade in from bottom animation
export const useFadeInUp = (delay = 0) => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    gsap.fromTo(
      element,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [delay])

  return ref
}

// Stagger animation for lists
export const useStaggerAnimation = () => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const children = element.children

    gsap.fromTo(
      children,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return ref
}

// Scale animation
export const useScaleIn = (delay = 0) => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    gsap.fromTo(
      element,
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [delay])

  return ref
}

// Slide in from left
export const useSlideInLeft = (delay = 0) => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    gsap.fromTo(
      element,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [delay])

  return ref
}

// Slide in from right
export const useSlideInRight = (delay = 0) => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    gsap.fromTo(
      element,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [delay])

  return ref
}

// Rotate animation
export const useRotateIn = (delay = 0) => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    gsap.fromTo(
      element,
      {
        rotation: -10,
        opacity: 0,
      },
      {
        rotation: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [delay])

  return ref
}

export { gsap, ScrollTrigger }
