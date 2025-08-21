
'use client'

import { useState } from 'react'
import { ArrowRight, Users, Clock, TrendingUp, CheckCircle, Award, Building } from 'lucide-react'
import ShortLeadModal from '@/components/short-lead-modal'

export default function CasesPage() {
  const [isShortModalOpen, setIsShortModalOpen] = useState(false)
  const [topFormData, setTopFormData] = useState({ name: '', phone: '' })
  const [bottomFormData, setBottomFormData] = useState({ name: '', phone: '' })

  const cases = [
    {
      title: 'Склад интернет-магазина одежды',
      company: 'Крупный ретейлер',
      challenge: 'Нужно было в короткие сроки укомплектовать склад 45 сотрудниками для обработки новогодних заказов',
      solution: '72 часа на полное укомплектование штата: грузчики, комплектовщики, упаковщики',
      results: [
        'Обработано 150% больше заказов',
        'Нулевые задержки по отгрузкам',
        '100% выполнение плана продаж'
      ],
      stats: {
        people: 45,
        hours: 72,
        efficiency: '+150%'
      },
      icon: Building
    },
    {
      title: 'Логистический центр торговой сети',
      company: 'Федеральная сеть супермаркетов',
      challenge: 'Экстренная замена персонала в связи с массовыми больничными в период пандемии',
      solution: 'Подача квалифицированного персонала за 3 часа с полным соблюдением санитарных требований',
      results: [
        'Бесперебойная работа склада',
        'Все магазины получили товар вовремя',
        'Соблюдение всех норм безопасности'
      ],
      stats: {
        people: 28,
        hours: 3,
        efficiency: '100%'
      },
      icon: Users
    },
    {
      title: 'Производственное предприятие',
      company: 'Завод по производству упаковки',
      challenge: 'Сезонный пик производства требовал увеличения штата в 2 раза на 3 месяца',
      solution: 'Поэтапное масштабирование команды с обучением и адаптацией на производстве',
      results: [
        'Превышение плана на 120%',
        'Нулевой брак продукции',
        'Продление сотрудничества на год'
      ],
      stats: {
        people: 60,
        hours: 48,
        efficiency: '+120%'
      },
      icon: TrendingUp
    },
    {
      title: 'Международная выставка',
      company: 'Организатор крупных мероприятий',
      challenge: 'Нужна была команда для монтажа и демонтажа павильонов выставки за 2 дня',
      solution: 'Мобильная команда опытных монтажников с собственным инструментом',
      results: [
        'Выставка открылась точно в срок',
        'Демонтаж завершен за рекордное время',
        'Клиент продлил контракт на 5 лет'
      ],
      stats: {
        people: 35,
        hours: 24,
        efficiency: '+200%'
      },
      icon: Award
    }
  ]

  const handleTopFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!topFormData.name || !topFormData.phone) return

    try {
      if (typeof window !== 'undefined' && (window as any).LEGION) {
        await (window as any).LEGION.sendLead('short', {
          ...topFormData,
          source: 'cases_top_form'
        })
        setTopFormData({ name: '', phone: '' })
      }
    } catch (error) {
      console.error('Error submitting top form:', error)
    }
  }

  const handleBottomFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!bottomFormData.name || !bottomFormData.phone) return

    try {
      if (typeof window !== 'undefined' && (window as any).LEGION) {
        await (window as any).LEGION.sendLead('short', {
          ...bottomFormData,
          source: 'cases_bottom_form'
        })
        setBottomFormData({ name: '', phone: '' })
      }
    } catch (error) {
      console.error('Error submitting bottom form:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Кейсы наших клиентов
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Реальные истории успеха компаний, которые доверили нам решение кадровых вопросов. 
              Узнайте, как мы помогаем бизнесу расти и развиваться.
            </p>

            {/* Top Lead Form */}
            <div className="max-w-md mx-auto">
              <div className="card p-6">
                <h2 className="text-lg font-semibold mb-4">Обсудить ваш проект</h2>
                <form onSubmit={handleTopFormSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={topFormData.name}
                    onChange={(e) => setTopFormData({...topFormData, name: e.target.value})}
                    className="input w-full"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={topFormData.phone}
                    onChange={(e) => setTopFormData({...topFormData, phone: e.target.value})}
                    className="input w-full"
                    inputMode="tel"
                    required
                  />
                  <button type="submit" className="btn-primary w-full">
                    Оставить заявку
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            {cases.map((caseItem, index) => {
              const IconComponent = caseItem.icon
              return (
                <div key={index} className="card p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Case Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="bg-emerald-100 p-3 rounded-lg">
                          <IconComponent className="w-8 h-8 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{caseItem.title}</h3>
                          <p className="text-gray-600 font-medium">{caseItem.company}</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Задача:</h4>
                          <p className="text-gray-700">{caseItem.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Решение:</h4>
                          <p className="text-gray-700">{caseItem.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Результаты:</h4>
                          <ul className="space-y-2">
                            {caseItem.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                <span className="text-gray-700">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl">
                      <h4 className="font-bold text-gray-900 mb-4">Ключевые показатели</h4>
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-emerald-600">{caseItem.stats.people}</div>
                          <div className="text-sm text-gray-600">сотрудников</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600">{caseItem.stats.hours}ч</div>
                          <div className="text-sm text-gray-600">на запуск</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-purple-600">{caseItem.stats.efficiency}</div>
                          <div className="text-sm text-gray-600">эффективность</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши достижения в цифрах</h2>
            <p className="text-gray-600">За время работы мы помогли сотням компаний</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-gray-600">Успешных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2000+</div>
              <div className="text-gray-600">Сотрудников трудоустроено</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Клиентов продлевают контракт</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Поддержка и контроль</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Готовы стать следующим кейсом успеха?
              </h2>
              <p className="text-xl opacity-90 mb-6">
                Расскажите о своей задаче, и мы найдём решение, которое превзойдёт ваши ожидания
              </p>
              <button 
                onClick={() => setIsShortModalOpen(true)}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
              >
                Начать проект <ArrowRight size={20} />
              </button>
            </div>

            <div className="card p-6 !bg-white/10 !border-white/20">
              <h3 className="text-xl font-bold mb-4">Или оставьте заявку прямо сейчас</h3>
              <form onSubmit={handleBottomFormSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={bottomFormData.name}
                  onChange={(e) => setBottomFormData({...bottomFormData, name: e.target.value})}
                  className="input w-full !bg-white/90 !text-gray-900 placeholder-gray-600"
                  required
                />
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={bottomFormData.phone}
                  onChange={(e) => setBottomFormData({...bottomFormData, phone: e.target.value})}
                  className="input w-full !bg-white/90 !text-gray-900 placeholder-gray-600"
                  inputMode="tel"
                  required
                />
                <button type="submit" className="bg-white text-gray-900 hover:bg-gray-100 w-full py-3 rounded-lg font-semibold transition-colors">
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ShortLeadModal 
        isOpen={isShortModalOpen}
        onClose={() => setIsShortModalOpen(false)}
      />
    </div>
  )
}
