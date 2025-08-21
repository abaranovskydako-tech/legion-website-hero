
'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface EBriefModalProps {
  isOpen: boolean
  onClose: () => void
}

const EBriefModal = ({ isOpen, onClose }: EBriefModalProps) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    // Шаг 1: Контакты
    name: '',
    phone: '',
    email: '',
    
    // Шаг 2: Объект/задача
    workType: '',
    volume: '',
    schedule: '',
    location: '',
    
    // Шаг 3: Сроки/условия
    startDate: '',
    duration: '',
    specialRequirements: '',
    budget: ''
  })

  const totalSteps = 3

  const workTypes = [
    'Грузчики',
    'Комплектовщики',
    'Упаковщики',
    'Уборщики',
    'Разнорабочие',
    'Кладовщики',
    'Операторы линии',
    'Другое'
  ]

  const schedules = [
    'Дневная смена (8-17)',
    'Ночная смена (20-8)',
    'Сменный график 2/2',
    'Сменный график 3/1',
    'Почасовая работа',
    'Выходные дни',
    'Другое'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return formData.name && formData.phone
      case 2:
        return formData.workType && formData.volume
      case 3:
        return formData.startDate && formData.duration
      default:
        return true
    }
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    } else {
      alert('Пожалуйста, заполните обязательные поля')
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateStep(currentStep)) {
      alert('Пожалуйста, заполните обязательные поля')
      return
    }

    setIsSubmitting(true)
    
    try {
      if (typeof window !== 'undefined' && (window as any).LEGION) {
        await (window as any).LEGION.sendLead('ebrief', formData)
        
        // Показываем страницу благодарности
        setCurrentStep(4) // Шаг "Спасибо"
        
        setTimeout(() => {
          setFormData({
            name: '', phone: '', email: '',
            workType: '', volume: '', schedule: '', location: '',
            startDate: '', duration: '', specialRequirements: '', budget: ''
          })
          setCurrentStep(1)
          onClose()
        }, 3000)
      }
    } catch (error) {
      console.error('Error submitting e-brief:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Контактная информация</h3>
            
            <div>
              <label htmlFor="ebrief-name" className="block text-sm font-medium mb-2">
                Ваше имя *
              </label>
              <input
                type="text"
                id="ebrief-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input w-full"
                placeholder="Введите ваше имя"
                required
              />
            </div>

            <div>
              <label htmlFor="ebrief-phone" className="block text-sm font-medium mb-2">
                Телефон *
              </label>
              <input
                type="tel"
                id="ebrief-phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="input w-full"
                placeholder="+7 (___) ___-__-__"
                inputMode="tel"
                required
              />
            </div>

            <div>
              <label htmlFor="ebrief-email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="ebrief-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input w-full"
                placeholder="your@email.com"
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Описание задачи</h3>
            
            <div>
              <label htmlFor="ebrief-workType" className="block text-sm font-medium mb-2">
                Тип работ *
              </label>
              <select
                id="ebrief-workType"
                name="workType"
                value={formData.workType}
                onChange={handleInputChange}
                className="select w-full"
                required
              >
                <option value="">Выберите тип работ</option>
                {workTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="ebrief-volume" className="block text-sm font-medium mb-2">
                Объём работ *
              </label>
              <input
                type="text"
                id="ebrief-volume"
                name="volume"
                value={formData.volume}
                onChange={handleInputChange}
                className="input w-full"
                placeholder="Например: 10 человек, 500 коробок, 1000 м²"
                required
              />
            </div>

            <div>
              <label htmlFor="ebrief-schedule" className="block text-sm font-medium mb-2">
                График работы
              </label>
              <select
                id="ebrief-schedule"
                name="schedule"
                value={formData.schedule}
                onChange={handleInputChange}
                className="select w-full"
              >
                <option value="">Выберите график</option>
                {schedules.map(schedule => (
                  <option key={schedule} value={schedule}>{schedule}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="ebrief-location" className="block text-sm font-medium mb-2">
                Адрес объекта
              </label>
              <input
                type="text"
                id="ebrief-location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="input w-full"
                placeholder="Укажите район или адрес"
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Сроки и условия</h3>
            
            <div>
              <label htmlFor="ebrief-startDate" className="block text-sm font-medium mb-2">
                Дата начала работ *
              </label>
              <input
                type="date"
                id="ebrief-startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="input w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="ebrief-duration" className="block text-sm font-medium mb-2">
                Продолжительность *
              </label>
              <input
                type="text"
                id="ebrief-duration"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                className="input w-full"
                placeholder="Например: 3 дня, 2 недели, 1 месяц"
                required
              />
            </div>

            <div>
              <label htmlFor="ebrief-specialRequirements" className="block text-sm font-medium mb-2">
                Особые требования
              </label>
              <textarea
                id="ebrief-specialRequirements"
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleInputChange}
                className="textarea w-full"
                rows={3}
                placeholder="Опыт работы, медкнижки, униформа и т.д."
              />
            </div>

            <div>
              <label htmlFor="ebrief-budget" className="block text-sm font-medium mb-2">
                Бюджет
              </label>
              <input
                type="text"
                id="ebrief-budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="input w-full"
                placeholder="Укажите примерный бюджет"
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold mb-4 text-green-600">Спасибо!</h3>
            <p className="text-lg mb-4">
              Ваш e-бриф отправлен успешно
            </p>
            <p className="text-gray-600">
              Мы пришлём подробный расчёт в течение 24 часов
            </p>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="modal-overlay" style={{ display: 'flex' }}>
      <div className="modal-content" style={{ maxWidth: '600px' }}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">E-бриф для подбора персонала</h2>
              {currentStep <= 3 && (
                <div className="text-sm text-gray-500 mt-1">
                  Шаг {currentStep} из {totalSteps}
                </div>
              )}
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Закрыть"
            >
              <X size={24} />
            </button>
          </div>

          {/* Progress bar */}
          {currentStep <= 3 && (
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {Array.from({ length: totalSteps }, (_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      i + 1 <= currentStep 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          )}

          <form onSubmit={currentStep === 3 ? handleSubmit : (e) => e.preventDefault()}>
            {renderStep()}

            {currentStep <= 3 && (
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`btn-ghost flex items-center gap-2 ${
                    currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <ChevronLeft size={20} />
                  Назад
                </button>

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary flex items-center gap-2"
                  >
                    Далее
                    <ChevronRight size={20} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary px-8"
                  >
                    {isSubmitting ? 'Отправляется...' : 'Отправить e-бриф'}
                  </button>
                )}
              </div>
            )}
          </form>

          {currentStep <= 3 && (
            <p className="text-xs text-gray-500 text-center mt-4">
              * — обязательные поля
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default EBriefModal
