import React from 'react'

const VignetteOverlay = ({ intensity = 'medium', className = '' }) => {
  const getVignetteStyle = () => {
    switch (intensity) {
      case 'light':
        return {
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.1) 100%)'
        }
      case 'strong':
        return {
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.4) 100%)'
        }
      default:
        return {
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.2) 100%)'
        }
    }
  }

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={getVignetteStyle()}
    />
  )
}

export default VignetteOverlay