import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ShimmerOverlay = ({ children, className = '' }) => {
  const shimmerRef = useRef(null)
  const overlayRef = useRef(null)

  useGSAP(() => {
    // Continuous shimmer animation
    gsap.fromTo(overlayRef.current, 
      {
        x: '-100%'
      },
      {
        x: '100%',
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 2
      }
    )
  })

  return (
    <div ref={shimmerRef} className={`relative overflow-hidden ${className}`}>
      {children}
      <div 
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  )
}

export default ShimmerOverlay