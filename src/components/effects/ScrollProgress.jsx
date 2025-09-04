import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const ScrollProgress = () => {
  const progressRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const progress = progressRef.current
    if (!progress) return

    gsap.to(progress, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    })

    // Set initial state
    gsap.set(progress, { scaleX: 0, transformOrigin: "left center" })

  }, [])

  return (
    <div
      ref={progressRef}
      className="scroll-indicator"
    />
  )
}

export default ScrollProgress