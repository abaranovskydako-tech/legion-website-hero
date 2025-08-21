
'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import ShortLeadModal from './short-lead-modal'

const StickyCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Оставить заявку"
      >
        <MessageCircle size={24} />
      </button>

      <ShortLeadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default StickyCTA
