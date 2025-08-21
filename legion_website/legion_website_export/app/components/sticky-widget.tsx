
'use client'

import { useState } from 'react'
import { Phone, MessageSquare, X } from 'lucide-react'

const StickyWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="sticky-cta">
      {isExpanded ? (
        <div className="bg-white rounded-lg shadow-xl p-4 w-80">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-[#0A1F44]">Нужна помощь?</h4>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-sm text-gray-600 mb-4">
            Свяжитесь с нами удобным способом
          </p>
          
          <div className="space-y-2">
            <button className="w-full flex items-center space-x-3 p-3 bg-[#FF6600] text-white rounded-lg hover:bg-[#ff8533] transition-colors">
              <Phone className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">Позвонить</div>
                <div className="text-xs opacity-80">+7 (XXX) XXX-XX-XX</div>
              </div>
            </button>
            
            <button className="w-full flex items-center space-x-3 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <MessageSquare className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">Telegram</div>
                <div className="text-xs opacity-80">Быстрая связь</div>
              </div>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-[#FF6600] text-white rounded-full p-4 shadow-lg hover:bg-[#ff8533] transition-all"
        >
          <Phone className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}

export default StickyWidget
