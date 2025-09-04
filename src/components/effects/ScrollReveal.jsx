import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  distance = 50, 
  duration = 0.8, 
  delay = 0,
  stagger = 0,
  className = '',
  triggerStart = 'top 85%'
}) => {
  const containerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    const elements = containerRef.current.children
    if (!elements.length) return

    let fromVars = { opacity: 0 }
    let toVars = { opacity: 1, duration, delay, ease: "power2.out" }

    // Set direction
    switch (direction) {
      case 'up':
        fromVars.y = distance
        toVars.y = 0
        break
      case 'down':
        fromVars.y = -distance
        toVars.y = 0
        break
      case 'left':
        fromVars.x = distance
        toVars.x = 0
        break
      case 'right':
        fromVars.x = -distance
        toVars.x = 0
        break
      case 'scale':
        fromVars.scale = 0.8
        toVars.scale = 1
        break
      case 'fade':
        // Only opacity animation
        break
    }

    // Add stagger if specified
    if (stagger > 0) {
      toVars.stagger = stagger
    }

    gsap.fromTo(elements, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: containerRef.current,
        start: triggerStart,
        toggleActions: 'play none none none'
      }
    })
  })

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

export default ScrollReveal