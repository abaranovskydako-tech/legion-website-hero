
'use client'

import { Check, Phone, Star } from 'lucide-react'

const ServicePricing = () => {
  const packages = [
    {
      name: 'Пакет "Старт"',
      description: 'Идеально для начинающих проектов',
      minPeople: '5-10 человек',
      price: 'от 350 ₽/час',
      features: [
        'Подача персонала в день обращения',
        'Замена в случае неявки',
        'Базовая поддержка в рабочее время',
        'Стандартные требования к персоналу',
        'Оплата по факту отработанных часов'
      ],
      discount: null,
      popular: false
    },
    {
      name: 'Пакет "Пик-сезон"',
      description: 'Для крупных проектов и сезонных загрузок',
      minPeople: '20-50 человек',
      price: 'от 320 ₽/час',
      features: [
        'Приоритетная подача персонала за 2 часа',
        'Персональный менеджер проекта',
        'Поддержка 24/7',
        'Предварительный отбор кандидатов',
        'Гибкие условия оплаты',
        'Возможность предоплаты со скидкой'
      ],
      discount: '15% скидка',
      popular: true
    },
    {
      name: 'Пакет "Постоянный поток"',
      description: 'Для долгосрочного сотрудничества',
      minPeople: '10+ человек',
      price: 'от 300 ₽/час',
      features: [
        'Фиксированная команда сотрудников',
        'Индивидуальные условия и цены',
        'Максимальные скидки до 25%',
        'Гарантия замены в течение 1 часа',
        'Ежемесячная отчетность',
        'Возможность работы по договору'
      ],
      discount: 'до 25% скидка',
      popular: false
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
            Пакеты{' '}
            <span className="text-[#FF6600]">услуг</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите оптимальный пакет для ваших задач. 
            Чем больше персонала — тем выгоднее цена!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 card-shadow ${
                pkg.popular ? 'ring-2 ring-[#FF6600] transform scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#FF6600] text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Популярный</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#0A1F44] mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {pkg.description}
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  {pkg.minPeople}
                </div>
                <div className="text-3xl font-bold text-[#FF6600] mb-2">
                  {pkg.price}
                </div>
                {pkg.discount && (
                  <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.discount}
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => window.open('tel:+78001234567', '_self')}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  pkg.popular
                    ? 'bg-[#FF6600] text-white hover:bg-[#FF8533]'
                    : 'bg-gray-100 text-[#0A1F44] hover:bg-gray-200'
                }`}
              >
                Выбрать пакет
              </button>
            </div>
          ))}
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-2xl p-8 card-shadow">
          <h3 className="text-2xl font-bold text-[#0A1F44] text-center mb-8">
            Прайс-лист по типам персонала
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-[#0A1F44] font-bold">Тип персонала</th>
                  <th className="text-center py-4 px-4 text-[#0A1F44] font-bold">Базовая ставка</th>
                  <th className="text-center py-4 px-4 text-[#0A1F44] font-bold">Пик-сезон</th>
                  <th className="text-center py-4 px-4 text-[#0A1F44] font-bold">Постоянный</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-semibold">Упаковщики-фасовщики</td>
                  <td className="py-4 px-4 text-center">350 ₽/час</td>
                  <td className="py-4 px-4 text-center text-[#FF6600] font-semibold">320 ₽/час</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">300 ₽/час</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-semibold">Грузчики</td>
                  <td className="py-4 px-4 text-center">400 ₽/час</td>
                  <td className="py-4 px-4 text-center text-[#FF6600] font-semibold">370 ₽/час</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">350 ₽/час</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-semibold">Разнорабочие</td>
                  <td className="py-4 px-4 text-center">350 ₽/час</td>
                  <td className="py-4 px-4 text-center text-[#FF6600] font-semibold">320 ₽/час</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">300 ₽/час</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-semibold">Мойщики</td>
                  <td className="py-4 px-4 text-center">380 ₽/час</td>
                  <td className="py-4 px-4 text-center text-[#FF6600] font-semibold">350 ₽/час</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">330 ₽/час</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-semibold">Стикеровщики</td>
                  <td className="py-4 px-4 text-center">350 ₽/час</td>
                  <td className="py-4 px-4 text-center text-[#FF6600] font-semibold">320 ₽/час</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">300 ₽/час</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold">Уборщики</td>
                  <td className="py-4 px-4 text-center">320 ₽/час</td>
                  <td className="py-4 px-4 text-center text-[#FF6600] font-semibold">290 ₽/час</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">270 ₽/час</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">
            Нужен индивидуальный расчет?
          </h3>
          <p className="text-gray-600 mb-6">
            Позвоните нам, и мы подберем оптимальные условия именно для вашего проекта
          </p>
          <button
            onClick={() => window.open('tel:+78001234567', '_self')}
            className="btn-primary text-lg px-8 py-4 pulse-animation flex items-center space-x-2 mx-auto"
          >
            <Phone className="w-5 h-5" />
            <span>Получить персональное предложение</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicePricing
