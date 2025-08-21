
'use client'

import { useState } from 'react'
import { Users, Award, Briefcase, Phone, MessageCircle } from 'lucide-react'
import ShortLeadModal from './short-lead-modal'

const AboutTeam = () => {
  const [isShortModalOpen, setIsShortModalOpen] = useState(false)
  const [questionForm, setQuestionForm] = useState({ name: '', phone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!questionForm.name || !questionForm.phone) return
    
    setIsSubmitting(true)
    try {
      if (typeof window !== 'undefined' && (window as any).LEGION) {
        await (window as any).LEGION.sendLead('short', {
          ...questionForm,
          source: 'about_question_form'
        })
        setQuestionForm({ name: '', phone: '' })
      }
    } catch (error) {
      console.error('Error submitting question form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const leadership = [
    {
      name: 'Александр Петров',
      position: 'Генеральный директор',
      experience: '12 лет в HR',
      photo: 'A',
      description: 'Основатель компании с многолетним опытом в сфере управления персоналом. Эксперт по развитию HR-бизнеса.',
      achievements: [
        'MBA по управлению персоналом',
        'Сертифицированный HR-директор',
        'Спикер отраслевых конференций'
      ]
    },
    {
      name: 'Елена Волкова',
      position: 'Директор по персоналу',
      experience: '10 лет в рекрутменте',
      photo: 'E',
      description: 'Отвечает за подбор и развитие персонала. Создала уникальную систему отбора и обучения сотрудников.',
      achievements: [
        'Эксперт по массовому рекрутменту',
        'Разработчик системы оценки персонала',
        'Автор корпоративных стандартов'
      ]
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Коммерческий директор',
      experience: '8 лет в B2B продажах',
      photo: 'D',
      description: 'Руководит отделом продаж и развития клиентской базы. Эксперт по работе с крупными корпоративными клиентами.',
      achievements: [
        'Увеличил клиентскую базу в 5 раз',
        'Сертифицированный тренер по продажам',
        'Лучший коммерческий директор 2023'
      ]
    }
  ]

  const departments = [
    {
      icon: <Users className="w-8 h-8" />,
      name: 'Рекрутмент',
      count: 15,
      description: 'Специалисты по подбору персонала с опытом работы в различных отраслях'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      name: 'Операционный отдел',
      count: 8,
      description: 'Контроль качества работы персонала и координация проектов'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      name: 'Клиентский сервис',
      count: 6,
      description: 'Поддержка клиентов 24/7 и оперативное решение вопросов'
    },
    {
      icon: <Award className="w-8 h-8" />,
      name: 'Обучение и развитие',
      count: 4,
      description: 'Подготовка персонала и повышение квалификации сотрудников'
    }
  ]

  return (
    <>
      <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
            Команда{' '}
            <span className="text-[#FF6600]">LegioN</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональная команда экспертов, которая обеспечивает высокое качество 
            услуг и индивидуальный подход к каждому клиенту
          </p>
        </div>

        {/* Leadership */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#0A1F44] text-center mb-12">
            Руководящий состав
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 card-shadow text-center hover:scale-105 transition-transform">
                <div className="w-24 h-24 bg-[#FF6600] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {leader.photo}
                </div>
                <h4 className="text-xl font-bold text-[#0A1F44] mb-2">
                  {leader.name}
                </h4>
                <div className="text-[#FF6600] font-semibold mb-2">
                  {leader.position}
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  {leader.experience}
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {leader.description}
                </p>
                <ul className="space-y-2">
                  {leader.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-[#FF6600] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-xs text-gray-600 text-left">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#0A1F44] text-center mb-12">
            Структура компании
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 card-shadow text-center">
                <div className="w-16 h-16 bg-[#FF6600] rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {dept.icon}
                </div>
                <h4 className="text-lg font-bold text-[#0A1F44] mb-2">
                  {dept.name}
                </h4>
                <div className="text-2xl font-bold text-[#FF6600] mb-3">
                  {dept.count} чел.
                </div>
                <p className="text-gray-600 text-sm">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow">
          <h3 className="text-2xl font-bold text-[#0A1F44] text-center mb-12">
            Наша команда в цифрах
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF6600] mb-2">33</div>
              <div className="text-sm text-gray-600">Штатных сотрудника</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF6600] mb-2">200+</div>
              <div className="text-sm text-gray-600">Внештатных специалистов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF6600] mb-2">85%</div>
              <div className="text-sm text-gray-600">Имеют профильное образование</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF6600] mb-2">7.2</div>
              <div className="text-sm text-gray-600">Средний опыт работы (лет)</div>
            </div>
          </div>
        </div>

        {/* Career */}
        <div className="mt-16 bg-gradient-to-r from-[#0A1F44] to-[#1a3a6b] rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">
            Присоединяйтесь к команде LegioN!
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Мы постоянно растем и ищем талантливых специалистов в области HR, 
            продаж и операционной деятельности
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-[#FF6600] mb-2">Рост и развитие</h4>
              <p className="text-sm opacity-90">Карьерные возможности и обучение</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-[#FF6600] mb-2">Достойная зарплата</h4>
              <p className="text-sm opacity-90">Конкурентные условия оплаты</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-[#FF6600] mb-2">Дружная команда</h4>
              <p className="text-sm opacity-90">Комфортная рабочая атмосфера</p>
            </div>
          </div>
          <button
            onClick={() => window.open('mailto:hr@legion-staff.ru', '_blank')}
            className="btn-primary text-lg px-8 py-4"
          >
            Отправить резюме: hr@legion-staff.ru
          </button>
        </div>

        {/* Question Form */}
        <div className="mt-16 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Задайте вопрос — перезвоним за 10 минут
            </h3>
            <p className="text-gray-600 mb-8">
              Хотите узнать больше о нашей команде или способах сотрудничества? 
              Оставьте свои контакты, и наш менеджер свяжется с вами
            </p>
            
            <form onSubmit={handleQuestionSubmit} className="max-w-md mx-auto">
              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={questionForm.name}
                  onChange={(e) => setQuestionForm({...questionForm, name: e.target.value})}
                  className="input w-full"
                  required
                />
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={questionForm.phone}
                  onChange={(e) => setQuestionForm({...questionForm, phone: e.target.value})}
                  className="input w-full"
                  inputMode="tel"
                  required
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary py-3"
                >
                  {isSubmitting ? 'Отправляется...' : 'Задать вопрос'}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
      </section>

      <ShortLeadModal 
        isOpen={isShortModalOpen}
        onClose={() => setIsShortModalOpen(false)}
      />
    </>
  )
}

export default AboutTeam
