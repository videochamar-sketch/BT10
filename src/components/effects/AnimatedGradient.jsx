import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const AnimatedGradient = ({ className = '', intensity = 'medium' }) => {
  const gradientRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 })
    
    // Gradient animation based on intensity
    const duration = intensity === 'slow' ? 8 : intensity === 'fast' ? 3 : 5
    
    tl.to(gradientRef.current, {
      background: 'linear-gradient(45deg, rgba(211, 253, 80, 0.1) 0%, rgba(184, 224, 62, 0.05) 25%, rgba(163, 209, 57, 0.1) 50%, rgba(211, 253, 80, 0.05) 75%, rgba(211, 253, 80, 0.1) 100%)',
      duration: duration,
      ease: "power2.inOut"
    })
    .to(gradientRef.current, {
      background: 'linear-gradient(225deg, rgba(211, 253, 80, 0.05) 0%, rgba(184, 224, 62, 0.1) 25%, rgba(163, 209, 57, 0.05) 50%, rgba(211, 253, 80, 0.1) 75%, rgba(211, 253, 80, 0.05) 100%)',
      duration: duration,
      ease: "power2.inOut"
    })
    .to(gradientRef.current, {
      background: 'linear-gradient(135deg, rgba(211, 253, 80, 0.1) 0%, rgba(184, 224, 62, 0.05) 25%, rgba(163, 209, 57, 0.1) 50%, rgba(211, 253, 80, 0.05) 75%, rgba(211, 253, 80, 0.1) 100%)',
      duration: duration,
      ease: "power2.inOut"
    })
    .to(gradientRef.current, {
      background: 'linear-gradient(315deg, rgba(211, 253, 80, 0.05) 0%, rgba(184, 224, 62, 0.1) 25%, rgba(163, 209, 57, 0.05) 50%, rgba(211, 253, 80, 0.1) 75%, rgba(211, 253, 80, 0.05) 100%)',
      duration: duration,
      ease: "power2.inOut"
    })
  })

  return (
    <div
      ref={gradientRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: 'linear-gradient(45deg, rgba(211, 253, 80, 0.1) 0%, rgba(184, 224, 62, 0.05) 25%, rgba(163, 209, 57, 0.1) 50%, rgba(211, 253, 80, 0.05) 75%, rgba(211, 253, 80, 0.1) 100%)'
      }}
    />
  )
}

export default AnimatedGradient