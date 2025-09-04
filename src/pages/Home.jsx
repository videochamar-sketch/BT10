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
    const el = heroSectionRef.current
    if (!el) return

    // animate the hero container (scoped to the ref)
    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out', delay: 0.5 }
    )

    return () => {
      if (tween && tween.kill) tween.kill()
    }
  }, [])

  return (
    <div className="text-white relative overflow-x-hidden">
      {/* Cinematic Header Overlay */}
      <Header />

      {/* Fixed video background (kept as background layer, not touching layout) */}
      <div className="h-screen h-[100dvh] w-screen fixed top-0 left-0 z-0">
        <Video />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 sm:bg-black/40 lg:bg-black/30 z-10" />
      </div>

      {/* Scrollable content */}
      <div className="relative z-20">
        {/* Hero Section */}
        <div
          ref={heroSectionRef}
          className="h-screen h-[100dvh] w-screen relative flex flex-col hero-content"
        >
          <HomeHeroText />
        </div>

        {/* Other sections (these are imported components) */}
        <WhyUsSection />
        <PortfolioSection />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <CTASection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}

export default Home
