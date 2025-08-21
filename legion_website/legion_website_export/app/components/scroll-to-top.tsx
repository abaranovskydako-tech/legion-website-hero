
'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={scrollToTop}
            className="bg-[#FF6600] hover:bg-[#e55a00] text-white p-3 rounded-full shadow-lg transition-colors"
            aria-label="Наверх"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  )
}

export default ScrollToTop
