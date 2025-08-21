
'use client'

import { Users, Package, Wrench, Droplets, Tag, Trash2 } from 'lucide-react'
import Link from 'next/link'

const Services = () => {
  const services = [
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Упаковщики-фасовщики',
      price: '350 ₽/час',
      description: 'Упаковка товаров, фасовка продукции, работа на конвейере',
      features: ['Опыт работы от 1 года', 'Аккуратность', 'Быстрая адаптация']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Грузчики',
      price: '400 ₽/час',
      description: 'Погрузочно-разгрузочные работы, перемещение товаров',
      features: ['Физическая подготовка', 'Опыт работы', 'Пунктуальность']
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Разнорабочие',
      price: '350 ₽/час',
      description: 'Подсобные работы, уборка территорий, вспомогательные задачи',
      features: ['Универсальность', 'Ответственность', 'Обучаемость']
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Мойщики',
      price: '380 ₽/час',
      description: 'Мойка тары, оборудования, поддержание чистоты',
      features: ['Опыт работы', 'Внимательность', 'Санитарная книжка']
    },
    {
      icon: <Tag className="w-8 h-8" />,
      title: 'Стикеровщики',
      price: '350 ₽/час',
      description: 'Наклеивание этикеток, стикеров, маркировка товаров',
      features: ['Точность', 'Скорость работы', 'Внимание к деталям']
    },
    {
      icon: <Trash2 className="w-8 h-8" />,
      title: 'Уборщики',
      price: '320 ₽/час',
      description: 'Уборка помещений, поддержание порядка на объекте',
      features: ['Санитарная книжка', 'Опыт работы', 'Аккуратность']
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0A1F44] mb-6">
            Наши{' '}
            <span className="text-[#FF6600]">услуги</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предоставляем квалифицированный персонал для любых задач вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card"
            >
              <div className="w-16 h-16 bg-[#FF6600] rounded-lg flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">
                {service.title}
              </h3>
              <div className="text-2xl font-bold text-[#FF6600] mb-4">
                {service.price}
              </div>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-[#FF6600] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-[#0A1F44] mb-4">
              Пакет "Старт"
            </h3>
            <div className="text-3xl font-bold text-[#FF6600] mb-4">
              от 5 человек
            </div>
            <p className="text-gray-600 mb-6">
              Идеально для начинающих проектов и разовых задач
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Подача персонала в день обращения</li>
              <li>• Замена в случае неявки</li>
              <li>• Базовая поддержка</li>
            </ul>
          </div>

          <div className="bg-[#FF6600] rounded-2xl p-8 text-center text-white transform scale-105">
            <h3 className="text-xl font-bold mb-4">
              Пакет "Пик-сезон"
            </h3>
            <div className="text-3xl font-bold mb-4">
              от 20 человек
            </div>
            <p className="opacity-90 mb-6">
              Для крупных проектов и сезонных загрузок
            </p>
            <ul className="space-y-2 text-sm opacity-90 mb-6">
              <li>• Приоритетная подача персонала</li>
              <li>• Персональный менеджер</li>
              <li>• Расширенная поддержка 24/7</li>
              <li>• Скидка 15%</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-[#0A1F44] mb-4">
              Пакет "Постоянный поток"
            </h3>
            <div className="text-3xl font-bold text-[#FF6600] mb-4">
              от 10 человек
            </div>
            <p className="text-gray-600 mb-6">
              Для долгосрочного сотрудничества и постоянных задач
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Фиксированная команда</li>
              <li>• Индивидуальные условия</li>
              <li>• Максимальные скидки</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">
            Не нашли подходящую услугу?
          </h3>
          <p className="text-gray-600 mb-8">
            Мы работаем с индивидуальными запросами и подберем персонал под ваши задачи
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-primary text-lg px-8 py-4">
              Все услуги
            </Link>
            <button 
              onClick={() => window.open('tel:+78001234567', '_self')}
              className="btn-secondary text-lg px-8 py-4"
            >
              Консультация специалиста
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
