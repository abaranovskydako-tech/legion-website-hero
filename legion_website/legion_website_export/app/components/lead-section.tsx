
'use client'

import { useState } from 'react'

const LeadSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    task: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      setFormData({ name: '', phone: '', task: '' })
    } catch (error) {
      alert('Ошибка отправки заявки. Попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const benefits = [
    'Юридическая чистота и официальные договоры',
    'Подбор и обучение персонала',
    'Координатор на объекте'
  ]

  return (
    <section id="lead" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
              Получите предложение за 10 минут
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Опишите объект и требуемые роли — мы быстро рассчитаем бюджет и сроки вывода персонала.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FF6600] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Lead Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
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
              <textarea
                name="task"
                placeholder="Опишите задачу"
                rows={4}
                value={formData.task}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF6600] focus:border-transparent outline-none resize-vertical"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF6600] hover:bg-[#e55a00] disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                {isSubmitting ? 'Отправляется...' : 'Получить предложение'}
              </button>
              <p className="text-sm text-gray-500 text-center">
                Мы перезвоним в течение 10 минут
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadSection
