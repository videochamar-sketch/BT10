import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ScrollReveal from '../effects/ScrollReveal'
import HoverLift from '../effects/HoverLift'
import AmbientLight from '../effects/AmbientLight'
import DynamicUnderline from '../effects/DynamicUnderline'
import AnimatedGradient from '../effects/AnimatedGradient'
import VignetteOverlay from '../effects/VignetteOverlay'

const ServicesSection = () => {
  const sectionRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.fromTo('.services-title',
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
          trigger: '.services-title',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    gsap.fromTo('.service-card',
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
          amount: 0.4
        },
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  const services = [
    {
      icon: '🎬',
      title: 'Wedding Cinematography',
      description: 'Cinematic storytelling that captures every precious moment of your special day with artistic flair.',
      features: ['4K Ultra HD', 'Drone Footage', 'Multiple Angles', 'Same-Day Highlights']
    },
    {
      icon: '📸',
      title: 'Photography',
      description: 'Professional wedding photography that preserves memories with stunning visual artistry.',
      features: ['High Resolution', 'RAW Processing', 'Quick Turnaround', 'Online Gallery']
    },
    {
      icon: '✂️',
      title: 'Post-Production',
      description: 'Expert editing and color grading to transform raw footage into cinematic masterpieces.',
      features: ['Color Grading', 'Audio Enhancement', 'Motion Graphics', 'Custom Music']
    },
    {
      icon: '🎵',
      title: 'Live Streaming',
      description: 'Share your special moments with loved ones who cannot attend in person.',
      features: ['HD Quality', 'Multiple Cameras', 'Real-time Streaming', 'Recording Included']
    }
  ]

  return (
    <section id="services" ref={sectionRef} className='min-h-screen section-dark-alt text-white relative depth-3 section-transition morphing-bg'>
      <div className="cinematic-overlay">
        <AnimatedGradient intensity="fast" />
        <VignetteOverlay intensity="medium" />
      </div>
      <div className='container mx-auto section-padding'>
        <ScrollReveal direction="up" stagger={0.3}>
          <div className='text-center component-margin space-y-4 sm:space-y-6 lg:space-y-8'>
            <h2 className='services-title font-[font2] heading-responsive-xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow neon-text'>
              <DynamicUnderline animationType="expand">
                Services
              </DynamicUnderline>
            </h2>
            <div className='floating-panel-dark max-width-content glass-enhanced border-glow'>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-2 text-shimmer'>
              Everything you need to relive your wedding. beautifully filmed, thoughtfully crafted, and made just for you.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="scale" stagger={0.2} className='services-grid responsive-grid-2 max-width-wide'>
          {services.map((service, index) => (
            <HoverLift
              key={index}
              liftAmount={15}
              scale={1.05}
              glowEffect={true}
              className='service-card group floating-panel-dark glass-hover glass-click gpu-accelerated glass-enhanced border-glow spotlight tilt-effect'
            >
              <AmbientLight>
                <div className='text-4xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8 micro-bounce glow-accent float-animation pulse-glow'>
                  {service.icon}
                </div>
                
                <div className='space-y-4 sm:space-y-6 mb-6 sm:mb-8'>
                  <h3 className='font-[font2] heading-responsive-md uppercase text-layer-2 gradient-text-animated'>
                    {service.title}
                  </h3>
                  <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                    {service.description}
                  </p>
                </div>

                <ul className='space-y-2 sm:space-y-3 mb-6 sm:mb-8'>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='flex items-center font-[font1] text-sm sm:text-base text-layer-1 stagger-reveal'>
                      <span className='w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-[#D3FD50] to-[#b8e03e] rounded-full mr-3 sm:mr-4 micro-bounce glow-accent flex-shrink-0 pulse-glow'></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className='w-full accent-line mt-6 sm:mt-8 rounded-full glow-accent wave-animation'></div>
              </AmbientLight>
            </HoverLift>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}

export default ServicesSection