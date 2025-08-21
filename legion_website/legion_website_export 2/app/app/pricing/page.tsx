
'use client'

import { useState } from 'react'
import { Check, ArrowRight, Users, Clock, Shield, Star, Calculator, FileText } from 'lucide-react'
import ShortLeadModal from '@/components/short-lead-modal'
import EBriefModal from '@/components/ebrief-modal'

export default function PricingPage() {
  const [isShortModalOpen, setIsShortModalOpen] = useState(false)
  const [isEBriefModalOpen, setIsEBriefModalOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '' })

  const packages = [
    {
      name: 'Старт',
      description: 'Идеально для разовых задач',
      price: '350',
      period: 'час',
      features: [
        'Минимум 1 человек',
        'Подача в течение 3 часов',
        'Медицинские книжки',
        'Базовая экипировка',
        'Контроль качества',
        'Техподдержка 24/7'
      ],
      popular: false,
      color: 'emerald'
    },
    {
      name: 'Пик-сезон',
      description: 'Для активных периодов работы',
      price: '320',
      period: 'час',
      features: [
        'От 5 человек в смену',
        'Подача за 2 часа',
        'Полная экипировка',
        'Опытные сотрудники',
        'Персональный менеджер',
        'Гибкий график смен',
        'Скидка при долгосрочном сотрудничестве'
      ],
      popular: true,
      color: 'blue'
    },
    {
      name: 'Постоянный поток',
      description: 'Для стабильной работы',
      price: '290',
      period: 'час',
      features: [
        'От 10 человек постоянно',
        'Подача за 72 часа',
        'Премиум экипировка',
        'Специализированные роли',
        'Dedicated-менеджер',
        'Индивидуальные условия',
        'Максимальные скидки',
        'Замены в течение часа'
      ],
      popular: false,
      color: 'purple'
    }
  ]

  const handleQuickFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return

    try {
      if (typeof window !== 'undefined' && (window as any).LEGION) {
        await (window as any).LEGION.sendLead('short', {
          ...formData,
          source: 'pricing_quick_form'
        })
        setFormData({ name: '', phone: '' })
      }
    } catch (error) {
      console.error('Error submitting quick form:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Прозрачные цены на персонал
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите подходящий пакет услуг для вашего бизнеса. Никаких скрытых платежей — только честные цены за качественный персонал.
            </p>
          </div>

          {/* Quick Lead Form */}
          <div className="max-w-lg mx-auto">
            <div className="card p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">Получить персональное предложение</h2>
              <form onSubmit={handleQuickFormSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="input w-full"
                    required
                  />
                  <div className="field-error text-sm text-red-500 mt-1"></div>
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="input w-full"
                    inputMode="tel"
                    required
                  />
                  <div className="field-error text-sm text-red-500 mt-1"></div>
                </div>
                <button type="submit" className="btn-primary w-full py-3">
                  Получить предложение
                </button>
              </form>
              <p className="text-xs text-gray-500 text-center mt-4">
                * Расчёт готовится индивидуально за 15 минут
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`card p-8 relative ${pkg.popular ? 'ring-2 ring-emerald-500' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Популярный
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">₽{pkg.price}</span>
                    <span className="text-gray-500">/{pkg.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setIsShortModalOpen(true)}
                  className={`btn-primary w-full py-3 ${pkg.popular ? '' : 'btn-ghost'}`}
                >
                  Запросить расчёт
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Calculator className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Калькулятор стоимости</h2>
            <p className="text-gray-600">
              Рассчитайте примерную стоимость для ваших задач
            </p>
          </div>
          
          <div className="card p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Количество человек</label>
                  <input type="number" min="1" defaultValue="3" className="input w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Часов в смену</label>
                  <input type="number" min="1" max="24" defaultValue="8" className="input w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Тип работ</label>
                  <select className="select w-full">
                    <option>Грузчики (350₽/час)</option>
                    <option>Комплектовщики (320₽/час)</option>
                    <option>Уборщики (290₽/час)</option>
                    <option>Упаковщики (310₽/час)</option>
                  </select>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Предварительный расчёт</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>3 человека × 8 часов:</span>
                    <span>8,400₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Медкнижки:</span>
                    <span>включено</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Экипировка:</span>
                    <span>включено</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Итого за смену:</span>
                    <span>8,400₽</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsShortModalOpen(true)}
                  className="btn-primary w-full mt-6"
                >
                  Получить точный расчёт
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Нужно что-то особенное?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Заполните подробный e-бриф и получите индивидуальное предложение с учётом всех ваших требований
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsEBriefModalOpen(true)}
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
            >
              <FileText size={20} />
              Заполнить E-бриф
            </button>
            <button 
              onClick={() => setIsShortModalOpen(true)}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Быстрая заявка
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ShortLeadModal 
        isOpen={isShortModalOpen}
        onClose={() => setIsShortModalOpen(false)}
      />
      <EBriefModal 
        isOpen={isEBriefModalOpen}
        onClose={() => setIsEBriefModalOpen(false)}
      />
    </div>
  )
}
