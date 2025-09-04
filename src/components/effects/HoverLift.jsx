import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const HoverLift = ({ 
  children, 
  liftAmount = 10, 
  scale = 1.02, 
  duration = 0.3,
  className = '',
  glowEffect = false 
}) => {
  const elementRef = useRef(null)

  useGSAP(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseEnter = () => {
      gsap.to(element, {
        y: -liftAmount,
        scale: scale,
        duration: duration,
        ease: "power2.out",
        filter: glowEffect ? 'drop-shadow(0 10px 30px rgba(211, 253, 80, 0.3))' : undefined
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        y: 0,
        scale: 1,
        duration: duration,
        ease: "power2.out",
        filter: glowEffect ? 'drop-shadow(0 0 0 rgba(211, 253, 80, 0))' : undefined
      })
    }

    // Only add hover effects on devices that support hover
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    
    if (mediaQuery.matches) {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  })

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

export default HoverLift