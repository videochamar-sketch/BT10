import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const SectionTransition = ({ children, className = '', transitionType = 'fade' }) => {
  const sectionRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    const section = sectionRef.current
    if (!section) return

    let fromVars = {}
    let toVars = { duration: 1, ease: "power2.out" }

    switch (transitionType) {
      case 'slideUp':
        fromVars = { y: 100, opacity: 0 }
        toVars = { y: 0, opacity: 1, ...toVars }
        break
      case 'slideLeft':
        fromVars = { x: 100, opacity: 0 }
        toVars = { x: 0, opacity: 1, ...toVars }
        break
      case 'scale':
        fromVars = { scale: 0.8, opacity: 0 }
        toVars = { scale: 1, opacity: 1, ...toVars }
        break
      case 'clip':
        fromVars = { clipPath: 'inset(100% 0 0 0)', opacity: 1 }
        toVars = { clipPath: 'inset(0% 0 0 0)', opacity: 1, ...toVars }
        break
      default: // fade
        fromVars = { opacity: 0 }
        toVars = { opacity: 1, ...toVars }
    }

    gsap.fromTo(section, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: section,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    })
  })

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}

export default SectionTransition