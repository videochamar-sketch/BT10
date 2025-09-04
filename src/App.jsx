import React, { Suspense, lazy, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoadingFallback from './components/common/LoadingFallback'
import ParallaxBackground from './components/effects/ParallaxBackground'
import ParticleField from './components/effects/ParticleField'
import CustomCursor from './components/effects/CustomCursor'
import ScrollProgress from './components/effects/ScrollProgress'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

// Register GSAP plugin once
gsap.registerPlugin(ScrollTrigger)

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const AffiliateProgram = lazy(() => import('./pages/AffiliateProgram'))

// Simple ErrorBoundary so lazy/load errors don't crash the whole app
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // optionally log to external service
    // console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, color: '#fff', background: '#111' }}>
          <h2>Something went wrong while loading this page.</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {String(this.state.error)}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}

const App = () => {
  useEffect(() => {
    // ✅ Refresh ScrollTrigger on load
    const handleLoad = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('load', handleLoad)

    // ✅ Also refresh after React paints (fixes desktop bug)
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    return () => {
      window.removeEventListener('load', handleLoad)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className='overflow-x-hidden'>
      {/* Visual Effects Layer */}
      <ParallaxBackground />
      <ParticleField />
      <CustomCursor />
      <ScrollProgress />
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-of-service' element={<TermsOfService />} />
            <Route path='/affiliate-program' element={<AffiliateProgram />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App
