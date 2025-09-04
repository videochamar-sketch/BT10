import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'
import ScrollReveal from '../effects/ScrollReveal'
import HoverLift from '../effects/HoverLift'
import DynamicUnderline from '../effects/DynamicUnderline'
import AnimatedGradient from '../effects/AnimatedGradient'
import VignetteOverlay from '../effects/VignetteOverlay'
import RippleEffect from '../effects/RippleEffect'

const Footer = () => {
  const footerRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    // Animate footer content
    gsap.fromTo('.footer-content',
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: {
          amount: 0.3
        },
        scrollTrigger: {
          trigger: '.footer-content',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  const quickLinks = [
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms & Conditions', href: '#terms' },
    { name: 'Affiliates', href: '#affiliates' }
  ]

  return (
    <footer ref={footerRef} className='section-dark text-white relative depth-3 morphing-bg'>
      <div className="cinematic-overlay">
        <AnimatedGradient intensity="slow" />
        <VignetteOverlay intensity="strong" />
      </div>
      <div className='container mx-auto section-padding'>
        {/* Main CTA Section */}
        <ScrollReveal direction="scale" className='text-center component-margin footer-content'>
          <div className='floating-panel-dark space-y-6 sm:space-y-8 glass-enhanced border-glow spotlight'>
            <h2 className='font-[font2] text-4xl sm:text-5xl lg:text-[6vw] uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow neon-text'>
              <DynamicUnderline animationType="draw">
                Let's Talk About Your Project
              </DynamicUnderline>
            </h2>
            <div className='flex justify-center'>
              <HoverLift liftAmount={8} scale={1.08} glowEffect={true}>
                <RippleEffect>
                  <button className='btn-pill btn-primary h-12 sm:h-14 lg:h-16 px-6 sm:px-8 lg:px-12 group btn-enhanced border-glow pulse-glow'>
                    <span className='font-[font2] text-base sm:text-lg lg:text-xl gradient-text-animated'>
                    Inquire Now
                    </span>
                  </button>
                </RippleEffect>
              </HoverLift>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer Information Grid */}
        <ScrollReveal direction="up" stagger={0.15} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-12 sm:mb-16'>
          {/* Quick Links */}
          <HoverLift liftAmount={8} scale={1.03} glowEffect={true}>
            <div className='footer-content floating-panel-dark space-y-4 sm:space-y-6 glass-enhanced border-glow spotlight'>
              <h3 className='font-[font2] text-lg sm:text-xl lg:text-2xl uppercase text-[#D3FD50] mb-4 sm:mb-6 text-layer-2 gradient-text-animated'>
                Quick Links
              </h3>
              <ul className='space-y-3 sm:space-y-4'>
                <li>
                  <DynamicUnderline animationType="slide">
                    <button 
                      onClick={() => {
                        const element = document.getElementById('portfolio')
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                      }}
                      className='font-[font1] text-sm sm:text-base lg:text-lg text-layer-1 interactive-hover text-left micro-bounce w-full text-left'
                    >
                      Our Portfolio
                    </button>
                  </DynamicUnderline>
                </li>
                <li>
                  <DynamicUnderline animationType="slide">
                    <Link 
                      to="/contact"
                      className='font-[font1] text-sm sm:text-base lg:text-lg text-layer-1 interactive-hover micro-bounce block'
                    >
                      Contact
                    </Link>
                  </DynamicUnderline>
                </li>
                <li>
                  <DynamicUnderline animationType="slide">
                    <Link 
                      to="/privacy-policy"
                      className='font-[font1] text-sm sm:text-base lg:text-lg text-layer-1 interactive-hover micro-bounce block'
                    >
                      Privacy Policy
                    </Link>
                  </DynamicUnderline>
                </li>
                <li>
                  <DynamicUnderline animationType="slide">
                    <Link 
                      to="/terms-of-service"
                      className='font-[font1] text-sm sm:text-base lg:text-lg text-layer-1 interactive-hover micro-bounce block'
                    >
                      Terms & Conditions
                    </Link>
                  </DynamicUnderline>
                </li>
                <li>
                  <DynamicUnderline animationType="slide">
                    <Link 
                      to="/affiliate-program"
                      className='font-[font1] text-sm sm:text-base lg:text-lg text-layer-1 interactive-hover micro-bounce block'
                    >
                      Affiliate Program
                    </Link>
                  </DynamicUnderline>
                </li>
              </ul>
            </div>
          </HoverLift>

          {/* Company Address */}
          <HoverLift liftAmount={8} scale={1.03} glowEffect={true}>
            <div className='footer-content floating-panel-dark space-y-4 sm:space-y-6 glass-enhanced border-glow spotlight'>
              <h3 className='font-[font2] text-lg sm:text-xl lg:text-2xl uppercase text-[#D3FD50] mb-4 sm:mb-6 text-layer-2 text-glow gradient-text-animated'>
                Address
              </h3>
              <div className='font-[font1] text-sm sm:text-base lg:text-lg text-layer-1 leading-relaxed space-y-1 sm:space-y-2'>
                <p>22 ruelle du Clerc</p>
                <p>59126, Linselles</p>
                <p>(France)</p>
              </div>
            </div>
          </HoverLift>

          {/* Hours of Operation */}
          <HoverLift liftAmount={8} scale={1.03} glowEffect={true}>
            <div className='footer-content floating-panel-dark space-y-4 sm:space-y-6 glass-enhanced border-glow spotlight'>
              <h3 className='font-[font2] text-lg sm:text-xl lg:text-2xl uppercase text-[#D3FD50] mb-4 sm:mb-6 text-layer-2 text-glow gradient-text-animated'>
                Hours
              </h3>
              <div className='font-[font1] text-sm sm:text-base lg:text-lg text-layer-1 space-y-2 sm:space-y-3'>
                <p>M–F: 9am – 7pm (UTC+1)</p>
                <p>Saturday & Sunday: Closed</p>
              </div>
            </div>
          </HoverLift>

          {/* Contact Information */}
          <HoverLift liftAmount={8} scale={1.03} glowEffect={true}>
            <div className='footer-content floating-panel-dark space-y-4 sm:space-y-6 glass-enhanced border-glow spotlight'>
              <h3 className='font-[font2] text-lg sm:text-xl lg:text-2xl uppercase text-[#D3FD50] mb-4 sm:mb-6 text-layer-2 text-glow gradient-text-animated'>
                Contact
              </h3>
              <div className='font-[font1] text-sm sm:text-base lg:text-lg text-layer-1'>
                <DynamicUnderline animationType="expand">
                  <a 
                    href="mailto:contact@amouraworks.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='interactive-hover micro-bounce break-all sm:break-normal'
                  >
                    contact@amouraworks.com
                  </a>
                </DynamicUnderline>
              </div>
            </div>
          </HoverLift>
        </ScrollReveal>

        {/* Bottom Border Line */}
        <ScrollReveal direction="fade">
          <div className='floating-panel-dark text-center glass-enhanced border-glow'>
            <div className='text-center'>
              <p className='font-[font1] text-xs sm:text-sm lg:text-base text-layer-1 text-shimmer'>
                © 2025 Amoura Works. All rights reserved.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}

export default Footer