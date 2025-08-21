
'use client'

import { Phone, FileText, Users, CheckCircle, Headphones, Calendar } from 'lucide-react'

const ServiceProcess = () => {
  const steps = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Заявка',
      description: 'Звоните или оставляете заявку на сайте. Обсуждаем ваши потребности и требования к персоналу.',
      time: '5 минут'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Анализ задач',
      description: 'Анализируем специфику работы, определяем квалификацию и количество необходимых сотрудников.',
      time: '15 минут'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Подбор персонала',
      description: 'Подбираем подходящих кандидатов из нашей базы, проверяем документы и готовность к работе.',
      time: '1-3 часа'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Выход на объект',
      description: 'Персонал прибывает на ваш объект в согласованное время, готовый к немедленному началу работы.',
      time: 'В день обращения'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Контроль качества',
      description: 'Мониторим работу персонала, обеспечиваем замену при необходимости, решаем возникающие вопросы.',
      time: 'Постоянно'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
            Как мы{' '}
            <span className="text-[#FF6600]">работаем</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Простой и понятный процесс — от заявки до выхода персонала на объект
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              <div className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Content */}
                <div className={`flex-1 ${
                  index % 2 === 0 
                    ? 'md:text-right md:pr-12' 
                    : 'md:text-left md:pl-12'
                }`}>
                  <div className="bg-white rounded-2xl p-8 card-shadow">
                    <div className="flex items-center mb-4 md:justify-start">
                      <div className="w-16 h-16 bg-[#FF6600] rounded-2xl flex items-center justify-center text-white mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#0A1F44]">
                          {step.title}
                        </h3>
                        <div className="text-sm text-[#FF6600] font-semibold">
                          {step.time}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Number */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#FF6600] rounded-full items-center justify-center text-white font-bold text-lg z-10">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#FF6600] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0A1F44] mb-3">
              Максимум 24 часа
            </h3>
            <p className="text-gray-600">
              На подачу персонала с момента обращения
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#FF6600] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0A1F44] mb-3">
              Гарантия замены
            </h3>
            <p className="text-gray-600">
              Если сотрудник не подошел — заменим в течение 2 часов
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#FF6600] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Headphones className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0A1F44] mb-3">
              Поддержка 24/7
            </h3>
            <p className="text-gray-600">
              Всегда на связи для решения любых вопросов
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#0A1F44] to-[#1a3a6b] rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">
            Начнем работу прямо сейчас!
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Позвоните — и уже через несколько часов персонал будет на вашем объекте
          </p>
          <button
            onClick={() => window.open('tel:+78001234567', '_self')}
            className="btn-primary text-lg px-8 py-4 pulse-animation"
          >
            Позвонить: 8-800-123-45-67
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServiceProcess
