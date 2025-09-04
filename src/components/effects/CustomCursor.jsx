import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      gsap.to(cursor, {
        x: mouseX - 10,
        y: mouseY - 10,
        duration: 0.1,
        ease: "power2.out"
      })
    }

    const handleMouseEnter = (e) => {
      const target = e.target
      if (target.matches('a, button, input, textarea, select, [role="button"], .interactive-hover, .btn-pill, .glass-hover')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e) => {
      const target = e.target
      if (target.matches('a, button, input, textarea, select, [role="button"], .interactive-hover, .btn-pill, .glass-hover')) {
        setIsHovering(false)
      }
    }

    // Only show custom cursor on desktop devices with mouse
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    
    if (mediaQuery.matches) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseover', handleMouseEnter)
      document.addEventListener('mouseout', handleMouseLeave)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? 'custom-cursor-hover' : ''}`}
      style={{ display: window.matchMedia('(hover: hover) and (pointer: fine)').matches ? 'block' : 'none' }}
    />
  )
}

export default CustomCursor