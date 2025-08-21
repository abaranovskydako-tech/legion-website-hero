
'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Users, Package, Truck, Zap, ShieldCheck, Clock, FileText, CheckCircle } from 'lucide-react'
import ShortLeadModal from '@/components/short-lead-modal'
import EBriefModal from '@/components/ebrief-modal'

const ServicesPage = () => {
  const [isShortModalOpen, setIsShortModalOpen] = useState(false)
  const [isEBriefModalOpen, setIsEBriefModalOpen] = useState(false)
  const [quickForm, setQuickForm] = useState({ name: '', phone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    {
      icon: Truck,
      title: 'Грузчики',
      price: 'от 350₽/час',
      description: 'Опытные грузчики для складов, переездов, разгрузки фур',
      features: [
        'Погрузка/разгрузка товаров',
        'Переноска мебели',
        'Работа на складах',
        'Разгрузка фур и вагонов',
        'Упаковка и распаковка'
      ],
      popular: true
    },
    {
      icon: Package,
      title: 'Комплектовщики',
      price: 'от 320₽/час',
      description: 'Сборка заказов, работа с системами учёта, контроль качества',
      features: [
        'Сборка интернет-заказов',
        'Работа с ТСД/WMS',
        'Контроль качества',
        'Инвентаризация',
        'Маркировка товаров'
      ],
      popular: false
    },
    {
      icon: Users,
      title: 'Упаковщики',
      price: 'от 310₽/час',
      description: 'Профессиональная упаковка товаров различных категорий',
      features: [
        'Упаковка хрупких товаров',
        'Блистерная упаковка',
        'Подарочная упаковка',
        'Работа с пищевыми продуктами',
        'Контроль герметичности'
      ],
      popular: false
    },
    {
      icon: Zap,
      title: 'Уборщики',
      price: 'от 290₽/час',
      description: 'Поддержание чистоты в офисах, складах, производственных помещениях',
      features: [
        'Ежедневная уборка',
        'Генеральная уборка',
        'Мытье окон',
        'Дезинфекция помещений',
        'Уборка после ремонта'
      ],
      popular: false
    },
    {
      icon: Users,
      title: 'Разнорабочие',
      price: 'от 300₽/час',
      description: 'Универсальные сотрудники для различных хозяйственных работ',
      features: [
        'Мелкий ремонт',
        'Благоустройство территории',
        'Подсобные работы',
        'Мытьё транспорта',
        'Сезонные работы'
      ],
      popular: false
    },
    {
      icon: ShieldCheck,
      title: 'Специализированные роли',
      price: 'договорная',
      description: 'Узкоспециализированный персонал под ваши задачи',
      features: [
        'Операторы линий',
        'Контролёры ОТК',
        'Кладовщики',
        'Мерчендайзеры',
        'Промоутеры'
      ],
      popular: false
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Заявка',
      description: 'Оставляете заявку или звоните нам',
      time: '1 минута'
    },
    {
      step: '02', 
      title: 'Консультация',
      description: 'Обсуждаем ваши требования и задачи',
      time: '15 минут'
    },
    {
      step: '03',
      title: 'Подбор',
      description: 'Находим подходящий персонал из нашей базы',
      time: '1-3 часа'
    },
    {
      step: '04',
      title: 'Выход на объект',
      description: 'Сотрудники приезжают и начинают работу',
      time: 'в срок'
    }
  ]

  const guarantees = [
    {
      icon: CheckCircle,
      title: '100% замена',
      description: 'Если сотрудник не подходит - заменим бесплатно'
    },
    {
      icon: ShieldCheck,
      title: 'Полное страхование',
      description: 'Все сотрудники застрахованы от несчастных случаев'
    },
    {
      icon: Clock,
      title: '24/7 поддержка',
      description: 'Круглосуточная связь с менеджерами проекта'
    }
  ]

  const handleQuickFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!quickForm.name || !quickForm.phone) return
    
    setIsSubmitting(true)
    try {
      if (typeof window !== 'undefined' && (window as any).LEGION) {
        await (window as any).LEGION.sendLead('short', {
          ...quickForm,
          source: 'services_quick_form'
        })
        setQuickForm({ name: '', phone: '' })
      }
    } catch (error) {
      console.error('Error submitting quick form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Услуги аутсорсинга персонала
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Предоставляем квалифицированный персонал для любых задач. 
              От разовых работ до долгосрочных проектов. Все документы, страхование, контроль качества включены.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className={`card p-8 relative ${service.popular ? 'ring-2 ring-emerald-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Популярно
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <div className="text-emerald-600 font-bold text-lg mb-3">{service.price}</div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => setIsShortModalOpen(true)}
                    className="btn-primary w-full"
                  >
                    Заказать
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Team Selection */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Подберём команду за 10 минут
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Расскажите о ваших задачах, и мы предложим оптимальный состав команды с учётом всех требований
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Быстрый подбор</div>
                  <div className="opacity-90">Оперативное решение ваших задач</div>
                </div>
              </div>
              <button 
                onClick={() => setIsEBriefModalOpen(true)}
                className="btn-ghost !text-white !border-white hover:!bg-white hover:!text-gray-900 flex items-center gap-2"
              >
                <FileText size={20} />
                Заполнить подробный E-бриф
              </button>
            </div>

            <div className="card p-6 !bg-white/10 !border-white/20">
              <h3 className="text-xl font-bold mb-4">Оставить заявку</h3>
              <form onSubmit={handleQuickFormSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={quickForm.name}
                  onChange={(e) => setQuickForm({...quickForm, name: e.target.value})}
                  className="input w-full !bg-white/90 !text-gray-900 placeholder-gray-600"
                  required
                />
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={quickForm.phone}
                  onChange={(e) => setQuickForm({...quickForm, phone: e.target.value})}
                  className="input w-full !bg-white/90 !text-gray-900 placeholder-gray-600"
                  inputMode="tel"
                  required
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-white text-gray-900 hover:bg-gray-100 w-full py-3 rounded-lg font-semibold transition-colors"
                >
                  {isSubmitting ? 'Отправляется...' : 'Подобрать команду'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-gray-600">Простой процесс от заявки до выхода персонала на объект</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <div className="text-emerald-600 font-medium text-sm">{step.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Наши гарантии</h2>
            <p className="text-gray-600">Мы берём на себя все риски и ответственность</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon
              return (
                <div key={index} className="card p-8 text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{guarantee.title}</h3>
                  <p className="text-gray-600">{guarantee.description}</p>
                </div>
              )
            })}
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

export default ServicesPage
