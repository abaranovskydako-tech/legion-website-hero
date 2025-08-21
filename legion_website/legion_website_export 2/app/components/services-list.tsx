
'use client'

import { Users, Package, Wrench, Droplets, Tag, Trash2, Phone } from 'lucide-react'

const ServicesList = () => {
  const services = [
    {
      icon: <Package className="w-12 h-12" />,
      title: 'Упаковщики-фасовщики',
      price: 'от 350 ₽/час',
      description: 'Профессиональная упаковка товаров, фасовка продукции, работа на автоматических и полуавтоматических линиях.',
      tasks: [
        'Упаковка товаров в тару',
        'Фасовка продукции по весу/объему',
        'Работа на конвейерных линиях',
        'Контроль качества упаковки',
        'Маркировка готовой продукции'
      ],
      requirements: [
        'Опыт работы от 6 месяцев',
        'Аккуратность и внимательность',
        'Умение работать с весами',
        'Скорость работы от 50 ед/час'
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Грузчики',
      price: 'от 400 ₽/час',
      description: 'Опытные грузчики для погрузочно-разгрузочных работ, перемещения товаров, работы на складе.',
      tasks: [
        'Погрузка/разгрузка автотранспорта',
        'Перемещение товаров по складу',
        'Работа с паллетами и тележками',
        'Комплектация заказов',
        'Инвентаризация товаров'
      ],
      requirements: [
        'Физическая подготовка',
        'Опыт работы на складе',
        'Умение работать с техникой',
        'Пунктуальность и ответственность'
      ]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Разнорабочие',
      price: 'от 350 ₽/час',
      description: 'Универсальные сотрудники для выполнения различных подсобных работ и вспомогательных задач.',
      tasks: [
        'Подсобные работы на производстве',
        'Уборка производственных помещений',
        'Сортировка материалов',
        'Помощь основному персоналу',
        'Поддержание порядка на территории'
      ],
      requirements: [
        'Готовность к физическому труду',
        'Обучаемость',
        'Ответственность',
        'Умение работать в команде'
      ]
    },
    {
      icon: <Droplets className="w-12 h-12" />,
      title: 'Мойщики',
      price: 'от 380 ₽/час',
      description: 'Специалисты по мойке и дезинфекции тары, оборудования, поддержанию санитарных норм.',
      tasks: [
        'Мойка производственной тары',
        'Дезинфекция оборудования',
        'Санитарная обработка помещений',
        'Контроль чистоты рабочих мест',
        'Подготовка моющих растворов'
      ],
      requirements: [
        'Санитарная книжка (обязательно)',
        'Опыт работы в пищевой промышленности',
        'Знание санитарных норм',
        'Аккуратность и внимательность'
      ]
    },
    {
      icon: <Tag className="w-12 h-12" />,
      title: 'Стикеровщики',
      price: 'от 350 ₽/час',
      description: 'Точное наклеивание этикеток, стикеров, штрих-кодов, маркировка товаров согласно требованиям.',
      tasks: [
        'Наклеивание ценников и этикеток',
        'Маркировка товаров штрих-кодами',
        'Размещение промо-стикеров',
        'Контроль качества маркировки',
        'Ведение учета промаркированных товаров'
      ],
      requirements: [
        'Точность и внимание к деталям',
        'Хорошее зрение',
        'Скорость работы от 200 ед/час',
        'Опыт работы с этикетировочным оборудованием'
      ]
    },
    {
      icon: <Trash2 className="w-12 h-12" />,
      title: 'Уборщики',
      price: 'от 320 ₽/час',
      description: 'Поддержание чистоты и порядка в производственных и офисных помещениях.',
      tasks: [
        'Ежедневная уборка помещений',
        'Мытье полов и окон',
        'Дезинфекция поверхностей',
        'Вынос мусора',
        'Поддержание порядка на территории'
      ],
      requirements: [
        'Санитарная книжка',
        'Опыт уборки помещений',
        'Знание моющих средств',
        'Физическая выносливость'
      ]
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#0A1F44] mb-6">
            Услуги{' '}
            <span className="text-[#FF6600]">аутсорсинга персонала</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Предоставляем квалифицированный персонал для всех видов работ. 
            Официальное трудоустройство, полный пакет документов, гарантия качества.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Service Info */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-20 h-20 bg-[#FF6600] rounded-2xl flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-[#0A1F44]">{service.title}</h2>
                    <div className="text-2xl font-bold text-[#FF6600] mt-2">{service.price}</div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-8">
                  {service.description}
                </p>

                {/* CTA Button */}
                <button
                  onClick={() => window.open('tel:+78001234567', '_self')}
                  className="btn-primary text-lg px-8 py-4 mb-8 flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Заказать персонал</span>
                </button>
              </div>

              {/* Tasks & Requirements */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Tasks */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-[#0A1F44] mb-4">Выполняемые задачи:</h3>
                    <ul className="space-y-2">
                      {service.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-[#FF6600] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div className="bg-[#FF6600] rounded-2xl p-6 text-white">
                    <h3 className="text-lg font-bold mb-4">Требования:</h3>
                    <ul className="space-y-2">
                      {service.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Order */}
        <div className="mt-20 bg-gradient-to-r from-[#0A1F44] to-[#1a3a6b] rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">
            Не нашли нужную услугу?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Мы работаем с индивидуальными заказами и подберем персонал под любые ваши задачи
          </p>
          <button
            onClick={() => window.open('tel:+78001234567', '_self')}
            className="btn-primary text-lg px-8 py-4 pulse-animation"
          >
            Обсудить индивидуальный заказ
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesList
