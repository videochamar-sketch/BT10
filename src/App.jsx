import React, { Suspense, lazy, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoadingFallback from './components/common/LoadingFallback'
import ParallaxBackground from './components/effects/ParallaxBackground'
import ParticleField from './components/effects/ParticleField'
import CustomCursor from './components/effects/CustomCursor'
import ScrollProgress from './components/effects/ScrollProgress'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugin once
gsap.registerPlugin(ScrollTrigger)

// Lazy load pages with console logging on failure to aid debugging
const Home = lazy(() =>
  import('./pages/Home').catch((err) => {
    console.error('Dynamic import failed: ./pages/Home', err)
    throw err
  })
)
const Projects = lazy(() =>
  import('./pages/Projects').catch((err) => {
    console.error('Dynamic import failed: ./pages/Projects', err)
    throw err
  })
)
const Contact = lazy(() =>
  import('./pages/Contact').catch((err) => {
    console.error('Dynamic import failed: ./pages/Contact', err)
    throw err
  })
)
const PrivacyPolicy = lazy(() =>
  import('./pages/PrivacyPolicy').catch((err) => {
    console.error('Dynamic import failed: ./pages/PrivacyPolicy', err)
    throw err
  })
)
const TermsOfService = lazy(() =>
  import('./pages/TermsOfService').catch((err) => {
    console.error('Dynamic import failed: ./pages/TermsOfService', err)
    throw err
  })
)
const AffiliateProgram = lazy(() =>
  import('./pages/AffiliateProgram').catch((err) => {
    console.error('Dynamic import failed: ./pages/AffiliateProgram', err)
    throw err
  })
)

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
    // Optional: send error to an external logging service
    // console.error('ErrorBoundary caught error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, color: '#fff', background: '#111', minHeight: '100vh' }}>
          <h2>Something went wrong while loading this page.</h2>
          <p>The developer console contains the error details.</p>
          <pre style={{ whiteSpace: 'pre-wrap', marginTop: 12 }}>{String(this.state.error)}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

const App = () => {
  useEffect(() => {
    // Refresh ScrollTrigger after load and after first paint
    const handleLoad = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('load', handleLoad)

    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    return () => {
      window.removeEventListener('load', handleLoad)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="overflow-x-hidden">
      {/* Visual Effects Layer (purely decorative overlays/components) */}
      <ParallaxBackground />
      <ParticleField />
      <CustomCursor />
      <ScrollProgress />

      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/affiliate-program" element={<AffiliateProgram />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App
