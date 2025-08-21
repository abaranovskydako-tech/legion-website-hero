
'use client'

import { CheckCircle, Users, Shield, FileText, Award, Clock } from 'lucide-react'

const TenderRequirements = () => {
  const requirements = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Юридическая чистота',
      description: 'Соответствие всем требованиям законодательства РФ',
      items: [
        'Отсутствие задолженностей перед бюджетом',
        'Справки о несудимости руководства',
        'Соответствие требованиям к участникам закупки',
        'Отсутствие в реестре недобросовестных поставщиков'
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Квалификация персонала',
      description: 'Подготовленный персонал с необходимыми навыками и опытом',
      items: [
        'Профильное образование ключевых сотрудников',
        'Сертификаты и дипломы о повышении квалификации',
        'Опыт работы в аналогичных проектах',
        'Медицинские книжки и допуски к работе'
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Техническое соответствие',
      description: 'Соблюдение всех технических требований тендера',
      items: [
        'SLA-гарантии по уровню сервиса',
        'Система контроля качества',
        'Возможность предоставления отчетности',
        'Соответствие стандартам безопасности'
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Сертификация и лицензии',
      description: 'Все необходимые разрешения и сертификаты качества',
      items: [
        'ISO 9001:2015 - система менеджмента качества',
        'Лицензии на работу с персональными данными',
        'Разрешения на трудоустройство граждан',
        'Санитарно-эпидемиологические заключения'
      ]
    }
  ]

  const compliance = [
    {
      law: '44-ФЗ',
      title: 'Федеральный закон о контрактной системе',
      description: 'Полное соответствие требованиям государственных закупок',
      features: [
        'Единая информационная система',
        'Антидемпинговые меры',
        'Обеспечение исполнения контракта',
        'Банковские гарантии'
      ]
    },
    {
      law: '223-ФЗ',
      title: 'Закон о закупках отдельными видами юридических лиц',
      description: 'Соответствие требованиям корпоративных закупок',
      features: [
        'Положение о закупках',
        'Планы закупок',
        'Протоколы определения поставщиков',
        'Реестр договоров'
      ]
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
            Требования к{' '}
            <span className="text-[#FF6600]">участникам</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            LegioN полностью соответствует всем требованиям для участия в государственных 
            и коммерческих тендерах
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {requirements.map((req, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 card-shadow">
              <div className="w-16 h-16 bg-[#FF6600] rounded-2xl flex items-center justify-center text-white mb-6">
                {req.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-4">
                {req.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {req.description}
              </p>
              <ul className="space-y-3">
                {req.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Law Compliance */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#0A1F44] text-center mb-12">
            Соответствие законодательству
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {compliance.map((law, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 card-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#0A1F44] rounded-2xl flex items-center justify-center text-white text-lg font-bold mr-4">
                    {law.law}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A1F44]">
                      {law.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  {law.description}
                </p>
                <ul className="space-y-2">
                  {law.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-[#FF6600] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stats */}
        <div className="bg-[#FF6600] rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-8">
            Наша успешность в тендерах
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Участий в тендерах</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-sm opacity-90">Процент побед</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2.8 млрд</div>
              <div className="text-sm opacity-90">Рублей выиграно</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">0</div>
              <div className="text-sm opacity-90">Нарушений контрактов</div>
            </div>
          </div>
        </div>

        {/* Key Advantages */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 card-shadow text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-[#0A1F44] mb-4">
              100% соответствие
            </h3>
            <p className="text-gray-600">
              Все документы соответствуют актуальным требованиям законодательства
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 card-shadow text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-[#0A1F44] mb-4">
              Быстрая подготовка
            </h3>
            <p className="text-gray-600">
              Документы готовы к подаче в течение 24 часов с момента запроса
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 card-shadow text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-[#0A1F44] mb-4">
              Экспертная поддержка
            </h3>
            <p className="text-gray-600">
              Консультации опытных юристов на всех этапах участия в тендере
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TenderRequirements
