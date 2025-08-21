
'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface CallbackModalProps {
  isOpen: boolean
  onClose: () => void
}

const CallbackModal = ({ isOpen, onClose }: CallbackModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) {
      alert('Пожалуйста, заполните имя и телефон')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert('Заявка отправлена! Мы перезвоним в течение 10 минут.')
      setFormData({ name: '', phone: '' })
      onClose()
    } catch (error) {
      alert('Ошибка отправки заявки. Попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h3 className="text-2xl font-bold text-[#0A1F44] mb-6">Обратный звонок</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF6600] focus:border-transparent outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF6600] focus:border-transparent outline-none"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#FF6600] hover:bg-[#e55a00] disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            {isSubmitting ? 'Отправляется...' : 'Жду звонка'}
          </button>
          <p className="text-sm text-gray-500 text-center">
            Круглосуточно, без выходных
          </p>
        </form>
      </div>
    </div>
  )
}

export default CallbackModal
