
'use client'

import { Calendar, Users, Award, TrendingUp } from 'lucide-react'

const AboutHistory = () => {
  const milestones = [
    {
      year: '2019',
      icon: <Calendar className="w-6 h-6" />,
      title: 'Основание компании',
      description: 'Начали деятельность как небольшое агентство по подбору персонала для складских и производственных предприятий.'
    },
    {
      year: '2020',
      icon: <Users className="w-6 h-6" />,
      title: 'Первые 100 клиентов',
      description: 'Достигли отметки в 100 постоянных клиентов. Расширили штат до 50 сотрудников различных специальностей.'
    },
    {
      year: '2021',
      icon: <Award className="w-6 h-6" />,
      title: 'Система качества',
      description: 'Внедрили систему контроля качества и SLA-гарантии. Получили первые отраслевые награды.'
    },
    {
      year: '2022',
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Масштабирование',
      description: 'Открыли представительства в 5 крупных городах. Штат вырос до 150 человек.'
    },
    {
      year: '2023',
      icon: <Award className="w-6 h-6" />,
      title: '1000+ проектов',
      description: 'Выполнили более 1000 проектов различной сложности. Вошли в ТОП-10 компаний отрасли.'
    },
    {
      year: '2024',
      icon: <Users className="w-6 h-6" />,
      title: '5000+ клиентов',
      description: 'Достигли отметки в 5000 обслуженных клиентов. Штат превысил 200 квалифицированных сотрудников.'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
            История{' '}
            <span className="text-[#FF6600]">развития</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Путь от небольшого агентства до лидера отрасли — каждый этап нашего роста 
            был направлен на улучшение сервиса для клиентов
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
          
          {milestones.map((milestone, index) => (
            <div key={index} className="relative mb-12 lg:mb-16">
              <div className={`flex flex-col lg:flex-row items-start lg:items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Content */}
                <div className={`flex-1 ${
                  index % 2 === 0 
                    ? 'lg:text-right lg:pr-12' 
                    : 'lg:text-left lg:pl-12'
                }`}>
                  <div className="bg-gray-50 rounded-2xl p-8 card-shadow hover:scale-105 transition-transform">
                    <div className={`flex items-center mb-4 ${
                      index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                    }`}>
                      <div className="w-12 h-12 bg-[#FF6600] rounded-xl flex items-center justify-center text-white mr-4">
                        {milestone.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#FF6600]">
                          {milestone.year}
                        </div>
                        <h3 className="text-lg font-bold text-[#0A1F44]">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Year Circle */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-[#FF6600] rounded-full items-center justify-center z-10">
                  <div className="text-sm font-bold text-[#FF6600]">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current State */}
        <div className="mt-16 bg-gradient-to-r from-[#0A1F44] to-[#1a3a6b] rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">LegioN сегодня</h3>
          <p className="text-xl mb-8 opacity-90">
            Мы продолжаем расти и развиваться, оставаясь верными принципам качества, 
            надежности и клиентоориентированности
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold text-[#FF6600] mb-2">200+</div>
              <div className="text-sm">Сотрудников в штате</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold text-[#FF6600] mb-2">15</div>
              <div className="text-sm">Городов присутствия</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold text-[#FF6600] mb-2">50+</div>
              <div className="text-sm">Специальностей</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold text-[#FF6600] mb-2">24/7</div>
              <div className="text-sm">Режим работы</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHistory
