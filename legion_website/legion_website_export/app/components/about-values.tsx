
'use client'

import { Heart, Shield, Zap, Users, Target, Award } from 'lucide-react'

const AboutValues = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Забота о людях',
      description: 'Каждый сотрудник — это человек с семьей и потребностями. Мы создаем достойные условия труда и справедливую оплату.',
      principles: [
        'Официальное трудоустройство',
        'Своевременная выплата зарплат',
        'Социальный пакет и страхование'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Честность и надежность',
      description: 'Выполняем все обещания, не скрываем проблем и всегда ищем решения в пользу клиента.',
      principles: [
        'Прозрачные условия сотрудничества',
        'Честная отчетность по проектам',
        'Открытое обсуждение сложностей'
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Скорость и эффективность',
      description: 'Время — самый ценный ресурс бизнеса. Мы работаем быстро, не жертвуя качеством.',
      principles: [
        'Подача персонала в день обращения',
        'Автоматизированные процессы',
        'Оперативное решение проблем'
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Командная работа',
      description: 'Успех клиента — это результат слаженной работы всей команды: от рекрутеров до сотрудников на объекте.',
      principles: [
        'Постоянное обучение персонала',
        'Корпоративная культура',
        'Взаимопомощь и поддержка'
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Результативность',
      description: 'Каждое действие должно приносить пользу клиенту. Мы измеряем результаты и постоянно улучшаем процессы.',
      principles: [
        'KPI для каждого сотрудника',
        'Система контроля качества',
        'Постоянное улучшение процессов'
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Стремление к совершенству',
      description: 'Мы никогда не останавливаемся на достигнутом, постоянно развиваемся и внедряем новые технологии.',
      principles: [
        'Инвестиции в технологии',
        'Изучение лучших практик',
        'Инновационные решения'
      ]
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
            Наши{' '}
            <span className="text-[#FF6600]">ценности</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Принципы, которыми мы руководствуемся в работе и которые помогают нам 
            быть лучшими в своей области
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#FF6600] rounded-2xl flex items-center justify-center text-white mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {value.description}
              </p>
              <ul className="space-y-2">
                {value.principles.map((principle, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-[#FF6600] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-[#0A1F44] to-[#1a3a6b] rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Наша миссия</h3>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Мы создаем мост между талантливыми людьми и растущим бизнесом, 
            помогая компаниям достигать целей, а сотрудникам — находить достойную работу. 
            Наша цель — сделать рынок труда более справедливым и эффективным.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-bold text-[#FF6600] mb-2">Для клиентов</h4>
              <p className="text-sm opacity-90">Быстрый доступ к качественному персоналу без лишних хлопот</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-bold text-[#FF6600] mb-2">Для сотрудников</h4>
              <p className="text-sm opacity-90">Достойные условия труда и стабильный заработок</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-bold text-[#FF6600] mb-2">Для общества</h4>
              <p className="text-sm opacity-90">Снижение безработицы и развитие экономики</p>
            </div>
          </div>
        </div>

        {/* Culture */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#0A1F44] mb-6">
              Корпоративная культура
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              В LegioN мы создали особую атмосферу, где каждый чувствует себя частью большой команды. 
              Наша культура основана на взаимном уважении, открытости и стремлении к общему успеху.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#FF6600] rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-700">Регулярные корпоративные мероприятия и тимбилдинги</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#FF6600] rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-700">Программы обучения и развития персонала</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#FF6600] rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-700">Система поощрений и карьерного роста</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#FF6600] rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-700">Открытое общение и обратная связь</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#FF6600] rounded-2xl p-8 text-white text-center">
            <h4 className="text-xl font-bold mb-6">Наши принципы работы</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-xs opacity-90">Честность</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-xs opacity-90">Поддержка</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">0</div>
                <div className="text-xs opacity-90">Компромиссов в качестве</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">∞</div>
                <div className="text-xs opacity-90">Стремление к совершенству</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutValues
