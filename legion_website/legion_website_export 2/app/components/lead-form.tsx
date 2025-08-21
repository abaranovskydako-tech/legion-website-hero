
'use client'

import { useState } from 'react'
import { X, User, Mail, Phone, Building, MessageSquare, Send, CheckCircle } from 'lucide-react'

interface LeadFormProps {
  isOpen: boolean
  onClose: () => void
  formType: string
  quizAnswers?: Record<string, string>
}

const LeadForm = ({ isOpen, onClose, formType, quizAnswers }: LeadFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const payload = {
        ...formData,
        formType,
        quizAnswers: quizAnswers || {},
        timestamp: new Date().toISOString(),
        source: 'website'
      }

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setIsSubmitted(true)
        
        // Send to Telegram bot (if configured)
        try {
          await fetch('/api/telegram-notify', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
          })
        } catch (error) {
          console.log('Telegram notification failed:', error)
        }

        // Track event in analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'lead_submit', {
            'form_type': formType,
            'value': 1
          })
        }
        
        if (typeof window !== 'undefined' && window.ym) {
          window.ym(123456789, 'reachGoal', 'lead_submit')
        }

      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Произошла ошибка при отправке формы. Попробуйте еще раз или свяжитесь с нами по телефону.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content max-w-lg" onClick={(e) => e.stopPropagation()}>
        {!isSubmitted ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#0A1F44]">
                Получить предложение
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-600">
                Оставьте заявку и наш менеджер свяжется с вами в течение 15 минут 
                с персональным предложением.
              </p>
              
              {formType === 'quiz_result' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                  <p className="text-green-700 text-sm">
                    ✅ Ваши ответы учтены. Подготовим предложение с учетом ваших потребностей.
                  </p>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-group">
                <label className="form-label flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Ваше имя *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="form-input"
                  placeholder="Введите ваше имя"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Телефон *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="form-input"
                  placeholder="+7 (XXX) XXX-XX-XX"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  Компания
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="form-input"
                  placeholder="Название вашей компании"
                />
              </div>

              <div className="form-group">
                <label className="form-label flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Комментарий
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="form-input form-textarea"
                  placeholder="Расскажите о ваших потребностях..."
                  rows={4}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full text-lg py-4 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="loader"></div>
                    <span>Отправляем...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Получить предложение</span>
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">
              Спасибо за заявку!
            </h3>
            
            <p className="text-gray-600 mb-6">
              Ваша заявка принята. Наш менеджер свяжется с вами в течение 15 минут 
              для уточнения деталей и подготовки персонального предложения.
            </p>

            <div className="bg-[#FF6600] text-white rounded-lg p-4 mb-6">
              <p className="font-semibold">
                📞 Ожидайте звонка с номера: +7 (XXX) XXX-XX-XX
              </p>
            </div>

            <button
              onClick={onClose}
              className="btn-primary px-8 py-3"
            >
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default LeadForm
