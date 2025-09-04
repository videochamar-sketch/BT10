import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const DynamicUnderline = ({ 
  children, 
  color = '#D3FD50', 
  thickness = 2,
  className = '',
  animationType = 'expand' // 'expand', 'slide', 'draw'
}) => {
  const containerRef = useRef(null)
  const underlineRef = useRef(null)

  useGSAP(() => {
    const container = containerRef.current
    const underline = underlineRef.current
    if (!container || !underline) return

    // Set initial state based on animation type
    switch (animationType) {
      case 'expand':
        gsap.set(underline, { scaleX: 0, transformOrigin: 'left center' })
        break
      case 'slide':
        gsap.set(underline, { x: '-100%' })
        break
      case 'draw':
        gsap.set(underline, { width: 0 })
        break
    }

    const handleMouseEnter = () => {
      switch (animationType) {
        case 'expand':
          gsap.to(underline, { scaleX: 1, duration: 0.3, ease: "power2.out" })
          break
        case 'slide':
          gsap.to(underline, { x: '0%', duration: 0.4, ease: "power2.out" })
          break
        case 'draw':
          gsap.to(underline, { width: '100%', duration: 0.4, ease: "power2.out" })
          break
      }
    }

    const handleMouseLeave = () => {
      switch (animationType) {
        case 'expand':
          gsap.to(underline, { scaleX: 0, duration: 0.3, ease: "power2.out" })
          break
        case 'slide':
          gsap.to(underline, { x: '100%', duration: 0.4, ease: "power2.out" })
          break
        case 'draw':
          gsap.to(underline, { width: 0, duration: 0.4, ease: "power2.out" })
          break
      }
    }

    // Only add hover effects on devices that support hover
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    
    if (mediaQuery.matches) {
      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  })

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {children}
      <div
        ref={underlineRef}
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: `${thickness}px`,
          backgroundColor: color,
          boxShadow: `0 0 8px ${color}40`
        }}
      />
    </div>
  )
}

export default DynamicUnderline