
'use client'

import { useState } from 'react'
import { Phone } from 'lucide-react'

const HeroClassic = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

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
      return
    }
    
    setIsSubmitting(true)

    try {
      // Используем глобальную функцию sendLead из forms.js
      if (typeof window !== 'undefined' && (window as any).LEGION) {
        await (window as any).LEGION.sendLead('short', {
          name: formData.name,
          phone: formData.phone,
          workType: formData.role,
          source: 'hero_form'
        })
        
        // Очищаем форму
        setFormData({ name: '', phone: '', role: '' })
      } else {
        // Fallback если JS не загружен
        alert('Заявка принята! Мы перезвоним в течение 10 минут.')
        setFormData({ name: '', phone: '', role: '' })
      }
    } catch (error) {
      console.error('Error submitting hero form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCalculatorClick = () => {
    const calculatorSection = document.getElementById('calc')
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleServicesClick = () => {
    window.open('/services', '_self')
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
          Персонал от 350 ₽/час — на объект за 3 часа или 2 дня
        </h1>
        <p className="text-lg lg:text-xl mb-8">
          Новосибирск и область. Грузчики, комплектовщики, уборщики и другие роли. 
          Скорость, качество, юридическая чистота, масштабируемость.
        </p>
        
        {/* Badges */}
        <div className="badges">
          <span className="bg-[#FF6600] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            24/7
          </span>
          <span className="bg-[#FF6600] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            Медкнижки
          </span>
          <span className="bg-[#FF6600] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            Смена от 6 ч
          </span>
          <span className="bg-[#FF6600] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            72 часа запуск
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a 
            href="#calc" 
            className="btn-primary text-lg px-8 py-4"
          >
            Рассчитать стоимость
          </a>
          <a 
            href="#services"
            className="btn-ghost text-lg px-8 py-4 !text-white !border-white hover:!bg-white hover:!text-gray-900"
          >
            Смотреть услуги
          </a>
        </div>

        {/* Quick Order Form */}
        <form onSubmit={handleSubmit} id="lead-hero" className="card p-6 space-y-4 !bg-white !text-gray-900">
          <h3 className="text-xl font-bold mb-4 !text-gray-900">Быстрая заявка</h3>
          
          <div>
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleInputChange}
              className="input w-full"
              required
            />
            <div className="field-error text-sm text-red-500 mt-1"></div>
          </div>
          
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="+7 (___) ___-__-__"
              value={formData.phone}
              onChange={handleInputChange}
              className="input w-full"
              inputMode="tel"
              required
            />
            <div className="field-error text-sm text-red-500 mt-1"></div>
          </div>
          
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="select w-full"
          >
            <option value="">Тип работ</option>
            <option value="Грузчики">Грузчики</option>
            <option value="Комплектация">Комплектация</option>
            <option value="Упаковка">Упаковка</option>
            <option value="Уборка">Уборка</option>
            <option value="Разнорабочие">Разнорабочие</option>
          </select>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full py-3 text-lg"
          >
            {isSubmitting ? 'Отправляется...' : 'Отправить заявку'}
          </button>
          
          <p className="text-xs text-gray-500 text-center">
            Нажимая «Отправить», вы соглашаетесь с{' '}
            <a href="/privacy" className="text-blue-600 hover:text-blue-800">
              политикой обработки персональных данных
            </a>
          </p>
        </form>
      </div>
    </section>
  )
}

export default HeroClassic
