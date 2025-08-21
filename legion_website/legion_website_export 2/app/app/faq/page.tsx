
'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Clock } from 'lucide-react'
import ShortLeadModal from '@/components/short-lead-modal'

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [isShortModalOpen, setIsShortModalOpen] = useState(false)
  const [consultForm, setConsultForm] = useState({ name: '', phone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const faqs = [
    {
      category: 'Общие вопросы',
      questions: [
        {
          question: 'Как быстро вы можете предоставить персонал?',
          answer: 'Стандартное время подачи персонала составляет от 3 часов до 2 рабочих дней. Экстренная подача возможна в течение 1-3 часов при наличии свободных сотрудников подходящей квалификации.'
        },
        {
          question: 'Какие документы есть у ваших сотрудников?',
          answer: 'Все наши сотрудники имеют действующие медицинские книжки, справки об отсутствии судимости, трудовые книжки. При необходимости предоставляем справки о прививках, допуски к работе с продуктами питания и другие специализированные документы.'
        },
        {
          question: 'Можно ли заказать персонал на выходные и праздники?',
          answer: 'Да, мы работаем круглосуточно 7 дней в неделю. Наши сотрудники готовы работать в выходные, праздничные дни и ночные смены. Тарифы в праздничные дни могут отличаться согласно трудовому законодательству.'
        },
        {
          question: 'Предоставляете ли вы замену сотрудников?',
          answer: 'Да, если сотрудник не вышел на смену или не справляется с задачами, мы предоставляем замену в кратчайшие сроки. В рамках долгосрочных контрактов замена предоставляется в течение 1-2 часов.'
        }
      ]
    },
    {
      category: 'Тарифы и оплата',
      questions: [
        {
          question: 'Какие у вас тарифы на различные виды работ?',
          answer: 'Базовые тарифы: грузчики от 350₽/час, комплектовщики от 320₽/час, уборщики от 290₽/час, упаковщики от 310₽/час. Точная стоимость зависит от объема заказа, срочности, сложности задач и продолжительности сотрудничества.'
        },
        {
          question: 'Есть ли скидки при долгосрочном сотрудничестве?',
          answer: 'Да, мы предоставляем существенные скидки для постоянных клиентов. При заказе от 10 человек на срок от месяца скидка составляет до 15%. Индивидуальные тарифы обсуждаются для крупных проектов.'
        },
        {
          question: 'Как происходит оплата услуг?',
          answer: 'Мы принимаем оплату по безналичному расчету, банковскими картами и наличными. Возможна отсрочка платежа для постоянных клиентов. Выставляем все необходимые документы для бухгалтерии.'
        },
        {
          question: 'Входят ли в стоимость дополнительные расходы?',
          answer: 'В базовую стоимость включены: медкнижки сотрудников, базовая экипировка, контроль качества. Дополнительно оплачиваются: специализированная экипировка, транспорт до удаленных объектов, сверхурочная работа.'
        }
      ]
    },
    {
      category: 'Качество и контроль',
      questions: [
        {
          question: 'Как вы контролируете качество работы персонала?',
          answer: 'У нас работают супервайзеры, которые регулярно посещают объекты и контролируют работу. Ведем рейтинг каждого сотрудника, проводим обучение и аттестацию. Получаем обратную связь от клиентов и корректируем работу.'
        },
        {
          question: 'Что делать, если сотрудник не справляется с задачами?',
          answer: 'Немедленно свяжитесь с нашим менеджером. Мы проведем разбор ситуации и предоставим замену в течение 1-2 часов. Все случаи фиксируются, и мы работаем над предотвращением подобных ситуаций.'
        },
        {
          question: 'Несете ли вы ответственность за действия сотрудников?',
          answer: 'Да, все наши сотрудники застрахованы. Мы несем полную ответственность за качество выполнения работ и возмещаем ущерб, если он возник по вине наших сотрудников.'
        }
      ]
    },
    {
      category: 'Специфические вопросы',
      questions: [
        {
          question: 'Можете ли вы предоставить персонал для работы с пищевыми продуктами?',
          answer: 'Да, у нас есть сотрудники с медкнижками для работы с пищевыми продуктами, справками о прививках и соответствующим опытом работы в пищевой промышленности.'
        },
        {
          question: 'Есть ли у вас сотрудники со знанием иностранных языков?',
          answer: 'Да, в нашей базе есть сотрудники со знанием английского, китайского, узбекского и других языков. Это особенно востребовано для работы на международных выставках и с иностранными грузами.'
        },
        {
          question: 'Можете ли работать в ночные смены и сменном графике?',
          answer: 'Конечно, многие наши сотрудники специализируются на ночной работе и сменных графиках 2/2, 3/1, 4/4. У нас есть отдельные команды для круглосуточных производств.'
        },
        {
          question: 'Предоставляете ли вы персонал для работы на высоте или с техникой?',
          answer: 'Да, у нас есть сотрудники с допусками для работы на высоте, с погрузочной техникой, в опасных условиях. Все необходимые сертификаты и допуски мы предоставляем до начала работ.'
        }
      ]
    }
  ]

  const handleFaqToggle = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleConsultFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consultForm.name || !consultForm.phone) return
    
    setIsSubmitting(true)
    try {
      if (typeof window !== 'undefined' && (window as any).LEGION) {
        await (window as any).LEGION.sendLead('short', {
          ...consultForm,
          source: 'faq_consultation'
        })
        setConsultForm({ name: '', phone: '' })
      }
    } catch (error) {
      console.error('Error submitting consultation form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <HelpCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Часто задаваемые вопросы
            </h1>
            <p className="text-xl text-gray-600">
              Собрали ответы на самые популярные вопросы о работе с персоналом. 
              Не нашли нужную информацию? Задайте вопрос нашим специалистам.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold mb-6 text-emerald-600">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 10 + questionIndex
                    const isOpen = openFaq === globalIndex
                    
                    return (
                      <div key={questionIndex} className="card overflow-hidden">
                        <button
                          onClick={() => handleFaqToggle(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <div className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                              {faq.answer}
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши показатели сервиса</h2>
            <p className="text-gray-600">Цифры, которые говорят о качестве нашей работы</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">15 мин</div>
              <div className="text-gray-600">среднее время ответа</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">поддержка клиентов</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">3 часа</div>
              <div className="text-gray-600">максимум до подачи</div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Не нашли ответ? Получите консультацию
              </h2>
              <p className="text-xl opacity-90 mb-6">
                Наши специалисты ответят на любые вопросы о подборе персонала и помогут найти оптимальное решение для вашего бизнеса
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Бесплатная консультация</div>
                  <div className="opacity-90">Перезвоним за 10 минут</div>
                </div>
              </div>
            </div>

            <div className="card p-6 !bg-white/10 !border-white/20">
              <h3 className="text-xl font-bold mb-4">Получить консультацию</h3>
              <form onSubmit={handleConsultFormSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={consultForm.name}
                  onChange={(e) => setConsultForm({...consultForm, name: e.target.value})}
                  className="input w-full !bg-white/90 !text-gray-900 placeholder-gray-600"
                  required
                />
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={consultForm.phone}
                  onChange={(e) => setConsultForm({...consultForm, phone: e.target.value})}
                  className="input w-full !bg-white/90 !text-gray-900 placeholder-gray-600"
                  inputMode="tel"
                  required
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-white text-gray-900 hover:bg-gray-100 w-full py-3 rounded-lg font-semibold transition-colors"
                >
                  {isSubmitting ? 'Отправляется...' : 'Получить консультацию'}
                </button>
              </form>
              <p className="text-sm opacity-75 mt-3">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Help */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Другие способы связи</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-semibold text-lg mb-2">Позвонить</h3>
              <p className="text-gray-600 mb-4">Прямая линия 24/7</p>
              <a 
                href="tel:+78007000000" 
                className="btn-primary"
              >
                8-800-700-00-00
              </a>
            </div>
            
            <div className="p-6">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-semibold text-lg mb-2">Написать</h3>
              <p className="text-gray-600 mb-4">Ответим в течение часа</p>
              <a 
                href="mailto:info@legion-staff.ru" 
                className="btn-ghost"
              >
                Отправить email
              </a>
            </div>
            
            <div className="p-6">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-semibold text-lg mb-2">Заявка</h3>
              <p className="text-gray-600 mb-4">Быстрая форма обратной связи</p>
              <button 
                onClick={() => setIsShortModalOpen(true)}
                className="btn-primary"
              >
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ShortLeadModal 
        isOpen={isShortModalOpen}
        onClose={() => setIsShortModalOpen(false)}
      />
    </div>
  )
}
