
'use client'

import { Clock, Shield, Users, Zap, Award, HeadphonesIcon } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Скорость',
      description: 'Подача персонала в день обращения. Запуск объекта за 72 часа.',
      feature: 'Персонал за 3 часа'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Качество',
      description: 'Все сотрудники проходят тщательный отбор и обучение.',
      feature: 'SLA 99.5%'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Юридическая чистота',
      description: 'Официальное трудоустройство, все документы и справки.',
      feature: 'Полный пакет документов'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Масштабируемость',
      description: 'От 1 до 100+ человек под любые задачи и объемы.',
      feature: 'Любые объемы'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Опытный персонал',
      description: 'В штате более 200 проверенных сотрудников.',
      feature: '200+ сотрудников'
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: 'Поддержка 24/7',
      description: 'Круглосуточная поддержка и оперативное решение вопросов.',
      feature: 'Поддержка 24/7'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0A1F44] mb-6">
            Почему выбирают{' '}
            <span className="text-[#FF6600]">LegioN</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы обеспечиваем качественным персоналом быстро, надежно и с гарантией результата
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 text-center card-shadow hover:scale-105 transition-transform"
            >
              <div className="benefits-icon">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {benefit.description}
              </p>
              <div className="inline-block bg-[#FF6600] text-white px-4 py-2 rounded-full text-sm font-semibold">
                {benefit.feature}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 card-shadow">
            <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">
              Готовы начать работу?
            </h3>
            <p className="text-gray-600 mb-6">
              Получите персонал уже сегодня — просто позвоните нам!
            </p>
            <button 
              onClick={() => window.open('tel:+78001234567', '_self')}
              className="btn-primary text-lg px-8 py-4 pulse-animation"
            >
              Позвонить сейчас: 8-800-123-45-67
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
