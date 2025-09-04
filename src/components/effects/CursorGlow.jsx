import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

const CursorGlow = () => {
  const glowRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    let mouseX = 0
    let mouseY = 0
    let isMoving = false

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      if (!isMoving) {
        setIsVisible(true)
        isMoving = true
      }

      gsap.to(glow, {
        x: mouseX - 100,
        y: mouseY - 100,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
      isMoving = false
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className={`fixed w-48 h-48 pointer-events-none z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: 'radial-gradient(circle, rgba(211, 253, 80, 0.15) 0%, rgba(211, 253, 80, 0.05) 40%, transparent 70%)',
        filter: 'blur(20px)',
        mixBlendMode: 'screen'
      }}
    />
  )
}

export default CursorGlow