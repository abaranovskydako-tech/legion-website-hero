
'use client'

import { Search, FileText, Users, CheckCircle, Award, Phone } from 'lucide-react'

const TenderProcess = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Поиск и анализ тендеров',
      description: 'Мониторим площадки ЕИС, коммерческие платформы и находим подходящие тендеры',
      details: [
        'Ежедневный мониторинг 15+ площадок',
        'Анализ технических требований',
        'Оценка конкурентоспособности',
        'Расчет стоимости участия'
      ],
      time: 'Ежедневно'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Подготовка документов',
      description: 'Готовим полный пакет документов в соответствии с требованиями тендера',
      details: [
        'Техническое предложение',
        'Ценовое предложение',
        'Квалификационная документация',
        'Обеспечения заявки'
      ],
      time: '1-3 дня'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Подбор и подготовка персонала',
      description: 'Формируем команду специалистов под требования конкретного тендера',
      details: [
        'Подбор квалифицированного персонала',
        'Проверка документов и допусков',
        'Дополнительное обучение при необходимости',
        'Подготовка резервного состава'
      ],
      time: '2-5 дней'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Подача заявки',
      description: 'Подаем заявку на электронной площадке с соблюдением всех формальностей',
      details: [
        'Загрузка документов на площадку',
        'Проверка соответствия требованиям',
        'Своевременная подача до дедлайна',
        'Мониторинг статуса заявки'
      ],
      time: 'В день дедлайна'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Исполнение контракта',
      description: 'После победы обеспечиваем качественное выполнение всех обязательств',
      details: [
        'Заключение государственного контракта',
        'Выход персонала на объект',
        'Контроль качества выполнения работ',
        'Своевременная отчетность'
      ],
      time: 'Согласно контракту'
    }
  ]

  const advantages = [
    {
      title: 'Высокий процент побед',
      value: '85%',
      description: 'Из всех поданных заявок'
    },
    {
      title: 'Средний объем контракта',
      value: '5.8 млн ₽',
      description: 'По итогам 2024 года'
    },
    {
      title: 'Скорость подготовки',
      value: '24 часа',
      description: 'От запроса до готовой заявки'
    },
    {
      title: 'География участия',
      value: '47 регионов',
      description: 'Работаем по всей России'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
            Процесс участия в{' '}
            <span className="text-[#FF6600]">тендерах</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полное сопровождение от поиска подходящего тендера до исполнения контракта
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative mb-12 lg:mb-20">
              <div className={`flex flex-col lg:flex-row items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Content */}
                <div className={`flex-1 ${
                  index % 2 === 0 
                    ? 'lg:text-right lg:pr-16' 
                    : 'lg:text-left lg:pl-16'
                }`}>
                  <div className="bg-gray-50 rounded-2xl p-8 card-shadow">
                    <div className={`flex items-center mb-6 ${
                      index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                    }`}>
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
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-[#FF6600] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Step Number */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#FF6600] rounded-full items-center justify-center text-white font-bold text-2xl z-10">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold text-[#0A1F44] text-center mb-12">
            Почему выбирают LegioN для участия в тендерах
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#FF6600] mb-2">
                  {advantage.value}
                </div>
                <h4 className="text-lg font-semibold text-[#0A1F44] mb-2">
                  {advantage.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Types of Tenders */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 card-shadow">
            <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
              Типы тендеров, в которых мы участвуем
            </h3>
            <ul className="space-y-3">
              {[
                'Аутсорсинг персонала для государственных учреждений',
                'Клининговые услуги для бюджетных организаций',
                'Складские и логистические услуги',
                'Услуги по уборке территорий',
                'Погрузочно-разгрузочные работы',
                'Сезонные работы и мероприятия'
              ].map((type, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{type}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 card-shadow">
            <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
              Площадки, на которых мы работаем
            </h3>
            <ul className="space-y-3">
              {[
                'Единая информационная система (ЕИС)',
                'Сбер-АСТ (РТС-Тендер)',
                'ТЭК-Торг',
                'Газпромбанк',
                'Росэлторг',
                'Коммерческие корпоративные площадки'
              ].map((platform, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{platform}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0A1F44] to-[#1a3a6b] rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">
            Готовы участвовать в тендерах с LegioN?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Наши эксперты проконсультируют по всем вопросам участия в государственных 
            и коммерческих тендерах
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('tel:+78001234567', '_self')}
              className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Получить консультацию</span>
            </button>
            <button
              onClick={() => window.open('mailto:tender@legion-staff.ru', '_blank')}
              className="btn-secondary text-lg px-8 py-4"
            >
              tender@legion-staff.ru
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TenderProcess
