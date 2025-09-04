import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ScrollReveal from '../effects/ScrollReveal'
import HoverLift from '../effects/HoverLift'
import AmbientLight from '../effects/AmbientLight'
import AnimatedGradient from '../effects/AnimatedGradient'
import VignetteOverlay from '../effects/VignetteOverlay'
import DynamicUnderline from '../effects/DynamicUnderline'

const AboutSection = () => {
  const sectionRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.fromTo(
      '.about-title',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-title',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    gsap.fromTo(
      '.about-content',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: { amount: 0.3 },
        scrollTrigger: {
          trigger: '.about-grid',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    )
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen section-dark-alt text-white relative depth-3 section-transition holographic"
    >
      <div className="cinematic-overlay">
        <AnimatedGradient intensity="slow" />
        <VignetteOverlay intensity="light" />
      </div>

      <div className="container mx-auto section-padding">
        {/* Title */}
        <ScrollReveal direction="up">
          <div className="text-center component-margin space-y-4 sm:space-y-6 lg:space-y-8">
            <h2 className="about-title font-[font2] heading-responsive-xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow neon-text">
              <DynamicUnderline animationType="slide">
                About Us
              </DynamicUnderline>
            </h2>
          </div>
        </ScrollReveal>

        {/* Story Section */}
        <div className="about-grid max-width-wide">
          <ScrollReveal
            direction="scale"
            className="floating-panel-dark mb-12 sm:mb-16 glass-enhanced border-glow"
          >
            <div className="responsive-grid-2 items-center">
              {/* Story Content */}
              <ScrollReveal
                direction="left"
                className="about-content space-y-6 sm:space-y-8 order-2 lg:order-1"
              >
                <div>
                  <h3 className="font-[font2] heading-responsive-lg uppercase text-[#D3FD50] mb-4 sm:mb-6 text-layer-2 text-glow gradient-text-animated">
                    Our Story
                  </h3>
                  <p className="font-[font1] text-responsive leading-relaxed text-layer-1">
                    For 7 years, we've dedicated ourselves to transforming
                    weddings into cinematic stories. With equal parts craft and
                    heart, we create films that feel as real as the moments
                    themselves — memories designed to last a lifetime.
                  </p>
                  <div className="floating-quote glass-enhanced spotlight">
                    <p className="font-[font1] text-responsive leading-relaxed text-layer-2 italic text-shimmer">
                      "Our approach is simple: to be present, to listen, and to
                      see your day as you live it. With equal parts skill and
                      sensitivity, we create films that feel real, timeless, and
                      true to you."
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Image */}
              <ScrollReveal
                direction="right"
                className="about-content order-1 lg:order-2"
              >
                <HoverLift liftAmount={15} scale={1.05} glowEffect={true}>
                  <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden video-glass gpu-accelerated video-enhanced border-glow tilt-effect">
                    <img
                      src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                      alt="K72 team at work"
                      className="w-full h-full object-cover transition-transform duration-700 lazy-image"
                      loading="lazy"
                      onLoad={(e) => e.target.classList.add('loaded')}
                    />
                  </div>
                </HoverLift>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>

        {/* Values Grid */}
        <ScrollReveal
          direction="up"
          stagger={0.2}
          className="responsive-grid-3"
        >
          <div className="about-content text-center space-y-4">
            <HoverLift liftAmount={12} scale={1.05} glowEffect={true}>
              <AmbientLight className="floating-panel-dark glass-hover space-y-4 sm:space-y-6 glass-enhanced border-glow spotlight tilt-effect">
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 micro-bounce glow-accent float-animation pulse-glow">
                  🎯
                </div>
                <h4 className="font-[font2] text-lg sm:text-xl lg:text-2xl uppercase text-layer-2 gradient-text-animated">
                  Vision
                </h4>
                <p className="font-[font1] text-responsive leading-relaxed text-layer-1">
                  We want every wedding film to feel like a piece of your story
                  — real, timeless, and full of love.
                </p>
              </AmbientLight>
            </HoverLift>
          </div>

          <div className="about-content text-center space-y-4">
            <HoverLift liftAmount={12} scale={1.05} glowEffect={true}>
              <AmbientLight className="floating-panel-dark glass-hover space-y-4 sm:space-y-6 glass-enhanced border-glow spotlight tilt-effect">
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 micro-bounce glow-accent float-animation pulse-glow">
                  💎
                </div>
                <h4 className="font-[font2] text-lg sm:text-xl lg:text-2xl uppercase text-layer-2 gradient-text-animated">
                  Mission
                </h4>
                <p className="font-[font1] text-responsive leading-relaxed text-layer-1">
                  Our goal is simple: to give you memories that feel alive, not
                  staged. Films that make you feel the day all over again.
                </p>
              </AmbientLight>
            </HoverLift>
          </div>

          <div className="about-content text-center space-y-4">
            <HoverLift liftAmount={12} scale={1.05} glowEffect={true}>
              <AmbientLight className="floating-panel-dark glass-hover space-y-4 sm:space-y-6 glass-enhanced border-glow spotlight tilt-effect">
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 micro-bounce glow-accent float-animation pulse-glow">
                  ⚡
                </div>
                <h4 className="font-[font2] text-lg sm:text-xl lg:text-2xl uppercase text-layer-2 gradient-text-animated">
                  Values
                </h4>
                <p className="font-[font1] text-responsive leading-relaxed text-layer-1">
                  We stay true to what's real. We create with heart and
                  imagination. And we give our very best, every single time.
                </p>
              </AmbientLight>
            </HoverLift>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default AboutSection
