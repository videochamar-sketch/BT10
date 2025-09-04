import React, { useRef, useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ScrollReveal from '../effects/ScrollReveal'
import HoverLift from '../effects/HoverLift'
import RippleEffect from '../effects/RippleEffect'
import AnimatedGradient from '../effects/AnimatedGradient'
import VignetteOverlay from '../effects/VignetteOverlay'

const StatsSection = () => {
  const sectionRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  
  // Configurable stats data for easy editing
  const statsData = [
    {
      number: 2000,
      suffix: '+',
      label: 'Wedding projects completed',
      icon: '💍'
    },
    {
      number: 150,
      suffix: '+',
      label: 'Happy Videographers',
      icon: '🎥'
    },
    {
      number: 8,
      suffix: '',
      label: 'Editors in our team',
      icon: '✂️'
    },
    {
      number: 7,
      suffix: ' yrs',
      label: 'Post-production experience',
      icon: '🏆'
    }
  ]

  gsap.registerPlugin(ScrollTrigger)

  // Counter animation function
  const animateCounter = (element, finalNumber, duration = 2) => {
    const counter = { value: 0 }
    
    gsap.to(counter, {
      value: finalNumber,
      duration: duration,
      ease: "power2.out",
      onUpdate: () => {
        element.textContent = Math.floor(counter.value).toLocaleString()
      }
    })
  }

  useGSAP(() => {
    // Animate section title
    gsap.fromTo('.stats-title',
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.stats-title',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Animate stat cards with stagger
    gsap.fromTo('.stat-card',
      {
        opacity: 0,
        y: 40,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: {
          amount: 0.3
        },
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 75%',
          toggleActions: 'play none none none',
          onEnter: () => {
            if (!hasAnimated) {
              // Trigger counter animations
              setTimeout(() => {
                document.querySelectorAll('.counter-number').forEach((counter, index) => {
                  animateCounter(counter, statsData[index].number, 2.5)
                })
                setHasAnimated(true)
              }, 400)
            }
          }
        }
      }
    )
  }, [hasAnimated])

  return (
    <section id="stats" ref={sectionRef} className='min-h-screen section-dark text-white relative depth-3 section-transition holographic'>
      <div className="cinematic-overlay">
        <AnimatedGradient intensity="medium" />
        <VignetteOverlay intensity="medium" />
      </div>
      <div className='container mx-auto section-padding'>
        {/* Section Header */}
        <ScrollReveal direction="down" className='text-center component-margin space-y-4 sm:space-y-6 lg:space-y-8'>
          <div>
            <h2 className='stats-title font-[font2] heading-responsive-xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow neon-text'>
              A Few Stats About Us
            </h2>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <ScrollReveal direction="scale" stagger={0.2} className='stats-grid responsive-grid-2 max-width-content'>
          {statsData.map((stat, index) => (
            <HoverLift
              key={index}
              liftAmount={20}
              scale={1.08}
              glowEffect={true}
              className='stat-card group floating-panel-dark glass-hover glass-click text-center gpu-accelerated glass-enhanced border-glow spotlight tilt-effect'
            >
              <RippleEffect>
                {/* Icon */}
                <div className='text-4xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8 micro-bounce glow-accent float-animation pulse-glow'>
                  {stat.icon}
                </div>
                
                {/* Number */}
                <div className='mb-4 sm:mb-6'>
                  <span className='counter-number font-[font2] text-layer-2 glow-accent text-glow-strong gradient-text-animated' style={{background: 'none', backgroundColor: 'transparent'}}>
                    0
                  </span>
                  <span className='font-[font2] text-3xl sm:text-4xl lg:text-5xl text-layer-2 glow-accent text-glow-strong gradient-text-animated' style={{background: 'none', backgroundColor: 'transparent'}}>
                    {stat.suffix}
                  </span>
                </div>
                
                {/* Label */}
                <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                  {stat.label}
                </p>

                {/* Hover accent line */}
                <div className='w-full accent-line mt-6 sm:mt-8 rounded-full mx-auto glow-accent wave-animation'></div>
              </RippleEffect>
            </HoverLift>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}

export default StatsSection