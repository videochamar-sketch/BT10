import React, { useRef } from 'react'

const RippleEffect = ({ children, className = '' }) => {
  const containerRef = useRef(null)

  const createRipple = (e) => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    const ripple = document.createElement('span')
    ripple.className = 'ripple'
    ripple.style.width = ripple.style.height = size + 'px'
    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'

    container.appendChild(ripple)

    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple)
      }
    }, 600)
  }

  return (
    <div
      ref={containerRef}
      className={`ripple-effect ${className}`}
      onClick={createRipple}
    >
      {children}
    </div>
  )
}

export default RippleEffect