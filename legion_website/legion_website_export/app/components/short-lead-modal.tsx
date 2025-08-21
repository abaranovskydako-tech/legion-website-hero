
'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface ShortLeadModalProps {
  isOpen: boolean
  onClose: () => void
}

const ShortLeadModal = ({ isOpen, onClose }: ShortLeadModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    workType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const workTypes = [
    'Грузчики',
    'Комплектовщики',
    'Упаковщики',
    'Уборщики',
    'Разнорабочие',
    'Другое'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      // Используем глобальную функцию sendLead
      if (typeof window !== 'undefined' && (window as any).LEGION) {
        await (window as any).LEGION.sendLead('short', formData)
        
        // Очищаем форму и закрываем модалку
        setFormData({ name: '', phone: '', workType: '' })
        onClose()
      } else {
        // Fallback если JS не загружен
        alert('Заявка принята! Мы перезвоним в течение 10 минут.')
        onClose()
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" style={{ display: 'flex' }}>
      <div className="modal-content">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Быстрая заявка</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Закрыть"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Ваше имя *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input w-full"
                placeholder="Введите ваше имя"
                required
              />
              <div className="field-error text-sm text-red-500 mt-1"></div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Телефон *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="input w-full"
                placeholder="+7 (___) ___-__-__"
                inputMode="tel"
                required
              />
              <div className="field-error text-sm text-red-500 mt-1"></div>
            </div>

            <div>
              <label htmlFor="workType" className="block text-sm font-medium mb-2">
                Тип работ
              </label>
              <select
                id="workType"
                name="workType"
                value={formData.workType}
                onChange={handleInputChange}
                className="select w-full"
              >
                <option value="">Выберите тип работ</option>
                {workTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full py-3 text-lg"
            >
              {isSubmitting ? 'Отправляется...' : 'Отправить заявку'}
            </button>

            <p className="text-sm text-gray-500 text-center">
              Нажимая «Отправить», вы соглашаетесь с{' '}
              <a href="/privacy" className="text-blue-600 hover:text-blue-800">
                политикой обработки персональных данных
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ShortLeadModal
