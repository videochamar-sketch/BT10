import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const TextRevealMask = ({ children, className = '', triggerClass = '' }) => {
  const textRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    const element = textRef.current
    if (!element) return

    // Set initial state
    gsap.set(element, {
      clipPath: 'inset(0 100% 0 0)'
    })

    // Animate reveal
    gsap.to(element, {
      clipPath: 'inset(0 0% 0 0)',
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: triggerClass ? `.${triggerClass}` : element,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })
  })

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  )
}

export default TextRevealMask