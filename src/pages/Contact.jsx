import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import PageWrapper from '../components/common/PageWrapper'
import ContactForm from '../components/forms/ContactForm'
import ScrollReveal from '../components/effects/ScrollReveal'
import HoverLift from '../components/effects/HoverLift'
import DynamicUnderline from '../components/effects/DynamicUnderline'
import AnimatedGradient from '../components/effects/AnimatedGradient'
import VignetteOverlay from '../components/effects/VignetteOverlay'
import RippleEffect from '../components/effects/RippleEffect'

const Contact = () => {


  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/k72wedding', icon: '📷' },
    { name: 'Facebook', url: 'https://facebook.com/k72wedding', icon: '📘' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/k72wedding', icon: '💼' }
  ]

  return (
    <PageWrapper className='section-dark text-white morphing-bg'>
      <div className="cinematic-overlay">
        <AnimatedGradient intensity="medium" />
        <VignetteOverlay intensity="medium" />
      </div>
      {/* Header */}
      <ScrollReveal direction="down" stagger={0.2}>
        <div className='pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 text-center container mx-auto'>
          <h1 className='contact-content font-[font2] heading-responsive-xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow neon-text'>
            <DynamicUnderline animationType="expand">
              Contact Us
            </DynamicUnderline>
          </h1>
          <div className='floating-panel-dark max-width-content glass-enhanced border-glow'>
            <p className='contact-content font-[font1] text-responsive leading-relaxed text-layer-2 text-shimmer'>
          The first step to your perfect film is a simple hello. Reach out to us today
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div className='container mx-auto pb-16 sm:pb-24 lg:pb-32'>
        <ScrollReveal direction="up" stagger={0.3} className='responsive-grid-2 max-width-wide'>
          {/* Contact Form */}
          <div className='contact-content'>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className='space-y-6 sm:space-y-8 lg:space-y-10'>
            <HoverLift liftAmount={10} scale={1.03} glowEffect={true}>
              <div className='contact-content floating-panel-dark space-y-4 sm:space-y-6 glass-enhanced border-glow spotlight'>
                <h3 className='font-[font2] heading-responsive-lg uppercase text-[#D3FD50] text-layer-2 text-glow gradient-text-animated'>
                  Let's Connect
                </h3>
                <div className='space-y-4 sm:space-y-5 font-[font1] text-responsive text-layer-1'>
                  <div className='flex items-start sm:items-center space-x-3 sm:space-x-4'>
                    <span className='text-xl sm:text-2xl micro-bounce glow-accent flex-shrink-0 pulse-glow'>📧</span>
                    <DynamicUnderline animationType="slide">
                      <a href="mailto:contact@amouraworks.com" className='interactive-hover break-all sm:break-normal'>
                        contact@amouraworks.com
                      </a>
                    </DynamicUnderline>
                  </div>
                  <div className='flex items-start sm:items-center space-x-3 sm:space-x-4'>
                    <span className='text-xl sm:text-2xl micro-bounce glow-accent flex-shrink-0 pulse-glow'>📍</span>
                    <span>22 ruelle du Clerc, 59126, Linselles (France)</span>
                  </div>
                  <div className='flex items-start sm:items-center space-x-3 sm:space-x-4'>
                    <span className='text-xl sm:text-2xl micro-bounce glow-accent flex-shrink-0 pulse-glow'>🕒</span>
                    <span>M–F: 9am – 7pm (UTC+1)</span>
                  </div>
                </div>
              </div>
            </HoverLift>

            <HoverLift liftAmount={10} scale={1.03} glowEffect={true}>
              <div className='contact-content floating-panel-dark space-y-4 sm:space-y-6 glass-enhanced border-glow spotlight'>
                <h3 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-layer-2 text-glow gradient-text-animated'>
                  Follow Our Work
                </h3>
                <div className='flex justify-center sm:justify-start space-x-4 sm:space-x-6'>
                  {socialLinks.map((social, index) => (
                    <HoverLift key={index} liftAmount={6} scale={1.1} glowEffect={true}>
                      <RippleEffect>
                        <a 
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 glass glass-hover glass-click rounded-full flex items-center justify-center group glow-accent border-glow pulse-glow'
                        >
                          <span className='text-lg sm:text-2xl lg:text-3xl micro-bounce glow-accent float-animation'>
                            {social.icon}
                          </span>
                        </a>
                      </RippleEffect>
                    </HoverLift>
                  ))}
                </div>
              </div>
            </HoverLift>

            <HoverLift liftAmount={10} scale={1.03} glowEffect={true}>
              <div className='contact-content floating-panel-dark glass-enhanced border-glow spotlight'>
                <h4 className='font-[font2] text-lg sm:text-xl lg:text-2xl uppercase text-[#D3FD50] mb-4 sm:mb-6 text-layer-2 text-glow gradient-text-animated'>
                    Response Time
                </h4>
                <p className='font-[font1] text-responsive text-layer-1 leading-relaxed'>
                    Nous répondons à toutes les demandes dans les 24 heures. Pour les urgences, n'hésitez pas à nous appeler directement.
                </p>
              </div>
            </HoverLift>
          </div>
        </ScrollReveal>
      </div>
    </PageWrapper>
  )
}

export default Contact