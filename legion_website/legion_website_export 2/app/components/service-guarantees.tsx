
'use client'

import { Shield, Clock, Award, FileCheck, Users, Headphones } from 'lucide-react'

const ServiceGuarantees = () => {
  const guarantees = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'SLA 99.5% по времени',
      description: 'Гарантируем подачу персонала в согласованное время. При нарушении сроков — скидка 20% на заказ.',
      details: ['Подача в день обращения', 'Уведомление за 30 минут до прибытия', 'Компенсация за опоздание']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Юридическая защита',
      description: 'Все сотрудники официально трудоустроены в LegioN. Полная юридическая ответственность за их действия.',
      details: ['Официальные трудовые договоры', 'Страхование ответственности', 'Замена в случае проблем']
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Полный пакет документов',
      description: 'Предоставляем все необходимые документы: справки, медкнижки, разрешения на работу.',
      details: ['Медицинские справки', 'Справки о несудимости', 'Трудовые книжки']
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Контроль качества',
      description: 'Регулярно проверяем качество работы персонала. Система рейтингов и обратной связи.',
      details: ['Ежедневные проверки', 'Оценка клиентов', 'Постоянное обучение персонала']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Гарантия замены',
      description: 'Если сотрудник не подходит или не явился — заменим в течение 1-2 часов, без доплат.',
      details: ['Замена за 1-2 часа', 'Без дополнительных платежей', 'Резервный персонал всегда готов']
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Поддержка 24/7',
      description: 'Круглосуточная техническая поддержка и оперативное решение любых вопросов.',
      details: ['Горячая линия 24/7', 'Персональный менеджер', 'Оперативное решение проблем']
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
            Наши{' '}
            <span className="text-[#FF6600]">гарантии</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы настолько уверены в качестве своих услуг, что готовы дать письменные гарантии
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 card-shadow hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-[#FF6600] rounded-2xl flex items-center justify-center text-white mb-6">
                {guarantee.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-4">
                {guarantee.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {guarantee.description}
              </p>
              <ul className="space-y-2">
                {guarantee.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-[#FF6600] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Main Guarantee */}
        <div className="bg-[#FF6600] rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              🎯 Главная гарантия LegioN
            </h3>
            <p className="text-xl mb-8">
              Если мы не подадим персонал в согласованное время или качество работы 
              не будет соответствовать заявленному — 
              <span className="font-bold"> возвращаем 100% стоимости заказа!</span>
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">99.5%</div>
                <div className="text-sm opacity-90">Выполнение SLA</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5000+</div>
                <div className="text-sm opacity-90">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5 лет</div>
                <div className="text-sm opacity-90">Опыт работы</div>
              </div>
            </div>
          </div>
        </div>

        {/* SLA Table */}
        <div className="mt-16 bg-white rounded-2xl p-8 card-shadow">
          <h3 className="text-2xl font-bold text-[#0A1F44] text-center mb-8">
            Уровни обслуживания (SLA)
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-[#0A1F44] font-bold">Показатель</th>
                  <th className="text-center py-4 px-4 text-[#0A1F44] font-bold">Обычный режим</th>
                  <th className="text-center py-4 px-4 text-[#0A1F44] font-bold">Пик-сезон</th>
                  <th className="text-center py-4 px-4 text-[#0A1F44] font-bold">Постоянный поток</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-semibold">Время подачи персонала</td>
                  <td className="py-4 px-4 text-center">До 24 часов</td>
                  <td className="py-4 px-4 text-center text-[#FF6600] font-semibold">До 2 часов</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">До 1 часа</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-semibold">Гарантия замены</td>
                  <td className="py-4 px-4 text-center">До 4 часов</td>
                  <td className="py-4 px-4 text-center text-[#FF6600] font-semibold">До 2 часов</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">До 1 часа</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-semibold">Время отклика поддержки</td>
                  <td className="py-4 px-4 text-center">До 30 минут</td>
                  <td className="py-4 px-4 text-center text-[#FF6600] font-semibold">До 15 минут</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">До 5 минут</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold">Штраф за нарушение SLA</td>
                  <td className="py-4 px-4 text-center">10% от заказа</td>
                  <td className="py-4 px-4 text-center text-[#FF6600] font-semibold">15% от заказа</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">20% от заказа</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceGuarantees
