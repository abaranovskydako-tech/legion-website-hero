
'use client'

import { Award, Users, Star, Trophy, Target, Zap } from 'lucide-react'

const AboutAchievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'ТОП-10 агентств России',
      description: 'Входим в десятку лучших агентств по аутсорсингу персонала по версии отраслевого рейтинга 2024',
      stats: '2024 год'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Высокие рейтинги',
      description: 'Средний рейтинг 4.8/5 на всех площадках: Яндекс, 2ГИС, Avito',
      stats: '772+ отзыва'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Лучший работодатель',
      description: 'Признаны лучшим работодателем в сфере персональных услуг по версии HeadHunter',
      stats: 'HH.ru 2023'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Сертификат качества',
      description: 'Международный сертификат ISO 9001:2015 по системе менеджмента качества',
      stats: 'ISO 9001:2015'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'SLA-лидер',
      description: 'Лучший показатель выполнения SLA в отрасли — 99.5%',
      stats: '99.5% SLA'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Скорость подачи',
      description: 'Самое быстрое агентство по подаче персонала — в среднем 2.5 часа',
      stats: '2.5 часа'
    }
  ]

  const numbers = [
    { number: '5000+', label: 'Довольных клиентов', description: 'Работают с нами постоянно' },
    { number: '200+', label: 'Сотрудников в штате', description: 'Квалифицированные специалисты' },
    { number: '99.5%', label: 'SLA выполнения', description: 'Соблюдаем все обязательства' },
    { number: '15', label: 'Городов России', description: 'География нашей работы' },
    { number: '24/7', label: 'Режим работы', description: 'Поддержка в любое время' },
    { number: '72', label: 'Часа запуска', description: 'Максимальное время старта проекта' }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
            Наши{' '}
            <span className="text-[#FF6600]">достижения</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Результаты, которыми мы гордимся, и признание профессионального сообщества
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 card-shadow text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-[#FF6600] rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-4">
                {achievement.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {achievement.description}
              </p>
              <div className="inline-block bg-[#FF6600] text-white px-4 py-2 rounded-full text-sm font-bold">
                {achievement.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Numbers Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow">
          <h3 className="text-2xl font-bold text-[#0A1F44] text-center mb-12">
            LegioN в цифрах
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {numbers.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#FF6600] mb-2">
                  {item.number}
                </div>
                <h4 className="text-lg font-semibold text-[#0A1F44] mb-2">
                  {item.label}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-8 text-white text-center">
            <Trophy className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Золотой сертификат</h3>
            <p className="text-sm opacity-90">«Лучшее агентство 2024»</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl p-8 text-white text-center">
            <Award className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">ISO 9001:2015</h3>
            <p className="text-sm opacity-90">Международный стандарт качества</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 text-white text-center">
            <Star className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Премия "Выбор года"</h3>
            <p className="text-sm opacity-90">По версии клиентов</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutAchievements
