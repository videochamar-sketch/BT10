import React, { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const ParallaxBackground = () => {
  const containerRef = useRef(null)
  const layer1Ref = useRef(null)
  const layer2Ref = useRef(null)
  const layer3Ref = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    // Parallax layers with different speeds
    gsap.to(layer1Ref.current, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })

    gsap.to(layer2Ref.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })

    gsap.to(layer3Ref.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
  })

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Layer 1 - Fastest */}
      <div ref={layer1Ref} className="absolute inset-0 opacity-20">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-gradient-radial from-[#D3FD50]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] right-[15%] w-80 h-80 bg-gradient-radial from-purple-500/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-gradient-radial from-blue-500/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Background Layer 2 - Medium */}
      <div ref={layer2Ref} className="absolute inset-0 opacity-15">
        <div className="absolute top-[30%] right-[10%] w-64 h-64 bg-gradient-radial from-[#D3FD50]/25 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-[40%] left-[5%] w-56 h-56 bg-gradient-radial from-cyan-500/20 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-[70%] left-[60%] w-48 h-48 bg-gradient-radial from-pink-500/15 to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Background Layer 3 - Slowest */}
      <div ref={layer3Ref} className="absolute inset-0 opacity-10">
        <div className="absolute top-[20%] left-[70%] w-40 h-40 bg-gradient-radial from-[#D3FD50]/30 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-[60%] right-[25%] w-36 h-36 bg-gradient-radial from-orange-500/20 to-transparent rounded-full blur-xl"></div>
        <div className="absolute top-[80%] left-[40%] w-32 h-32 bg-gradient-radial from-green-500/15 to-transparent rounded-full blur-xl"></div>
      </div>
    </div>
  )
}

export default ParallaxBackground