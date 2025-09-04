import React, { useRef, useEffect } from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import Header from '../components/common/Header'
import WhyUsSection from '../components/home/WhyUsSection'
import PortfolioSection from '../components/home/PortfolioSection'
import StatsSection from '../components/home/StatsSection'
import ServicesSection from '../components/home/ServicesSection'
import ProcessSection from '../components/home/ProcessSection'
import CTASection from '../components/home/CTASection'
import AboutSection from '../components/home/AboutSection'
import ContactSection from '../components/home/ContactSection'
import Footer from '../components/home/Footer'
import gsap from 'gsap'

const Home = () => {
  const heroSectionRef = useRef(null)

  useEffect(() => {
    // Scope animation to the hero section ref (safer than global selectors)
    const target = heroSectionRef.current
    if (!target) return

    const tl = gsap.fromTo(
      target,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.5
      }
    )

    return () => {
      // cleanup GSAP tween to avoid side-effects
      if (tl && tl.kill) tl.kill()
    }
  }, [])

  return (
    <div className='text-white relative overflow-x-hidden'>
      {/* Cinematic Header Overlay */}
      <Header />
      
      {/* Fixed video background */}
      <div className='h-screen h-[100dvh] w-screen fixed top-0 left-0 z-0'>
        <Video />
        {/* Dark overlay for better text readability */}
        <div className='absolute inset-0 bg-black/50 sm:bg-black/40 lg:bg-black/30 z-10'></div>
      </div>
      
      {/* Scrollable content */}
      <div className='relative z-20'>
        {/* Hero Section */}
        <div ref={heroSectionRef} className='h-screen h-[100dvh] w-screen relative flex flex-col hero-content'>
          <HomeHeroText />
        </div>
        
        {/* Why Us Section */}
        <WhyUsSection />
        
        {/* Portfolio Section */}
        <PortfolioSection />
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Process Section */}
        <ProcessSection />
        
        {/* Call-to-Action Section */}
        <CTASection />
        
        {/* About Us Section */}
        <AboutSection />
        
        {/* Contact Section */}
        <ContactSection />
        
        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  )
}

export default Home
