import React, { useRef, useLayoutEffect, useMemo } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'
import ScrollReveal from '../effects/ScrollReveal'
import HoverLift from '../effects/HoverLift'
import RippleEffect from '../effects/RippleEffect'
import AnimatedGradient from '../effects/AnimatedGradient'
import VignetteOverlay from '../effects/VignetteOverlay'
import DynamicUnderline from '../effects/DynamicUnderline'
import AmbientLight from '../effects/AmbientLight'   // ✅ Added this


const CTASection = () => {
  const sectionRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  // Memoize animation configuration for better performance
  const animationConfig = useMemo(() => ({
    from: { opacity: 0, y: 40, visibility: 'hidden' },
    to: {
      opacity: 1,
      y: 0,
      visibility: 'visible',
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.2,
    },
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 85%',
      toggleActions: 'play none none none',
    }
  }), [])

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.cta-fade')
      if (!elements.length) return

      gsap.fromTo(elements, animationConfig.from, {
        ...animationConfig.to,
        scrollTrigger: {
          ...animationConfig.scrollTrigger,
          trigger: sectionRef.current,
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [animationConfig])

  // Optimized refresh handling with debouncing
  useLayoutEffect(() => {
    let refreshTimeout

    const debouncedRefresh = () => {
      clearTimeout(refreshTimeout)
      refreshTimeout = setTimeout(() => {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh()
        })
      }, 100)
    }

    const handleLoad = () => debouncedRefresh()
    const handleResize = () => debouncedRefresh()

    window.addEventListener('load', handleLoad, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })

    // Initial refresh
    debouncedRefresh()

    return () => {
      window.removeEventListener('load', handleLoad)
      window.removeEventListener('resize', handleResize)
      clearTimeout(refreshTimeout)
    }
  }, [])

  // Memoized stats data for performance
  const statsData = useMemo(() => [
    { value: '24h', label: 'Response Time' },
    { value: '100%', label: 'Satisfaction Rate' },
    { value: 'Free', label: 'Initial Consultation' }
  ], [])

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="min-h-screen section-dark-alt text-white relative depth-3 flex items-center section-transition morphing-bg"
      role="region"
      aria-labelledby="cta-heading"
    >
      <div className="cinematic-overlay">
        <AnimatedGradient intensity="fast" />
        <VignetteOverlay intensity="medium" />
      </div>
      <div className="container mx-auto text-center w-full">
        <div className="max-width-wide">
          <div className="floating-panel-dark space-y-8 sm:space-y-10 lg:space-y-12 glass-enhanced border-glow spotlight">
            <ScrollReveal direction="scale">
              <h2 
              id="cta-heading"
                className="cta-fade font-[font2] heading-responsive-xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow neon-text"
              >
                <DynamicUnderline animationType="expand">
                  Ready to Create Magic?
                </DynamicUnderline>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="cta-fade font-[font1] text-responsive leading-relaxed text-layer-2 max-width-text text-shimmer">
              Transformons votre jour spécial en un chef-d'œuvre cinématographique qui raconte votre histoire unique.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4} className="cta-fade flex-col-mobile justify-center">
              <HoverLift liftAmount={10} scale={1.08} glowEffect={true}>
                <RippleEffect>
                  <Link
                  to="/contact"
                    className="btn-pill btn-primary h-12 sm:h-16 lg:h-20 px-8 sm:px-12 lg:px-16 inline-flex items-center justify-center group focus:outline-none btn-enhanced border-glow pulse-glow"
                  aria-label="Get started with our wedding videography services"
                  >
                    <span className="font-[font2] text-base sm:text-xl lg:text-2xl gradient-text-animated">
                    Get Started Today
                    </span>
                  </Link>
                </RippleEffect>
              </HoverLift>

              <HoverLift liftAmount={8} scale={1.05} glowEffect={true}>
                <RippleEffect>
                  <Link
                  to="/projects"
                    className="btn-pill btn-secondary h-12 sm:h-16 lg:h-20 px-8 sm:px-12 lg:px-16 inline-flex items-center justify-center group focus:outline-none btn-enhanced border-glow"
                  aria-label="View our wedding videography portfolio"
                  >
                    <span className="font-[font2] text-base sm:text-xl lg:text-2xl">
                    View Our Work
                    </span>
                  </Link>
                </RippleEffect>
              </HoverLift>
            </ScrollReveal>

            <ScrollReveal direction="scale" stagger={0.15} className="cta-fade responsive-grid-3 text-center">
              {statsData.map((stat, index) => (
                <HoverLift
                  key={stat.label}
                  liftAmount={8}
                  scale={1.05}
                  glowEffect={true}
                  className="floating-panel-dark glass-hover space-y-3 sm:space-y-4 glass-enhanced border-glow spotlight"
                >
                  <AmbientLight>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-[font2] text-[#D3FD50] glow-accent text-layer-2 text-glow-strong gradient-text-animated pulse-glow">
                    {stat.value}
                    </div>
                    <div className="font-[font1] text-xs sm:text-sm lg:text-base text-layer-1 uppercase tracking-wide">
                    {stat.label}
                    </div>
                  </AmbientLight>
                </HoverLift>
              ))}
            </ScrollReveal>
                  </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection