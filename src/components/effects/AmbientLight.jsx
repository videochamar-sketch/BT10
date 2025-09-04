import React, { useRef, useEffect } from 'react'

const AmbientLight = ({ children, className = '' }) => {
  const containerRef = useRef(null)
  const lightRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const light = lightRef.current
    if (!container || !light) return

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      
      light.style.setProperty('--mouse-x', `${x}%`)
      light.style.setProperty('--mouse-y', `${y}%`)
    }

    // Only add effect on devices that support hover
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    
    if (mediaQuery.matches) {
      container.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className={`ambient-light-container relative ${className}`}>
      {children}
      <div ref={lightRef} className="ambient-light" />
    </div>
  )
}

export default AmbientLight