import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {
  const currentPath = useLocation().pathname

  const stairParentRef = useRef(null)
  const pageRef = useRef(null)
  const tlRef = useRef(null)

  // Ensure content is visible on initial load
  useEffect(() => {
    if (pageRef.current) {
      gsap.set(pageRef.current, { opacity: 1 })
    }
  }, [])

  useEffect(() => {
    const stairParent = stairParentRef.current
    const page = pageRef.current
    if (!stairParent || !page) return

    // Hide initially
    gsap.set(stairParent, { display: 'none' })

    const tl = gsap.timeline()
    tlRef.current = tl

    tl.to(stairParent, { display: 'block' })
    // animate each .stair element
    const stairs = stairParent.querySelectorAll('.stair')
    tl.from(stairs, {
      height: 0,
      stagger: {
        amount: -0.2
      }
    })
    tl.to(stairs, {
      y: '100%',
      stagger: {
        amount: -0.25
      }
    })
    tl.to(stairParent, { display: 'none' })
    tl.to(stairs, { y: '0%' })

    // animate main page content fade/scale in
    const pageTween = gsap.fromTo(
      page,
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 1.3, ease: 'power2.out' }
    )

    return () => {
      // cleanup timeline and page tween
      if (tlRef.current) {
        tlRef.current.kill()
        tlRef.current = null
      }
      if (pageTween && pageTween.kill) pageTween.kill()
    }
  }, [currentPath])

  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full fixed z-20 top-0">
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black" />
          <div className="stair h-full w-1/5 bg-black" />
          <div className="stair h-full w-1/5 bg-black" />
          <div className="stair h-full w-1/5 bg-black" />
          <div className="stair h-full w-1/5 bg-black" />
        </div>
      </div>

      <div ref={pageRef} style={{ opacity: 1 }}>
        {props.children}
      </div>
    </div>
  )
}

export default Stairs
