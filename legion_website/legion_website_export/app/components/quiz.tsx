
'use client'

import { useState } from 'react'
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react'
import LeadForm from './lead-form'

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isFormOpen, setIsFormOpen] = useState(false)

  const questions = [
    {
      id: 'business_type',
      title: 'Какой у вас тип бизнеса?',
      options: [
        { value: 'warehouse', label: 'Склад/Логистика' },
        { value: 'production', label: 'Пищевое производство' },
        { value: 'construction', label: 'Стройплощадка' },
        { value: 'retail', label: 'Розничная торговля' },
        { value: 'other', label: 'Другое' }
      ]
    },
    {
      id: 'staff_type',
      title: 'Какой персонал вам нужен?',
      options: [
        { value: 'packers', label: 'Упаковщики-фасовщики' },
        { value: 'loaders', label: 'Грузчики' },
        { value: 'workers', label: 'Разнорабочие' },
        { value: 'multiple', label: 'Несколько специальностей' },
        { value: 'not_sure', label: 'Затрудняюсь ответить' }
      ]
    },
    {
      id: 'people_count',
      title: 'Сколько человек нужно?',
      options: [
        { value: '1-5', label: '1-5 человек' },
        { value: '6-15', label: '6-15 человек' },
        { value: '16-30', label: '16-30 человек' },
        { value: '30+', label: 'Более 30 человек' }
      ]
    },
    {
      id: 'timeline',
      title: 'Когда нужен персонал?',
      options: [
        { value: 'today', label: 'Сегодня/завтра' },
        { value: 'this_week', label: 'На этой неделе' },
        { value: 'next_week', label: 'На следующей неделе' },
        { value: 'this_month', label: 'В этом месяце' },
        { value: 'planning', label: 'Планирую заранее' }
      ]
    },
    {
      id: 'duration',
      title: 'На какой срок?',
      options: [
        { value: '1-3_days', label: '1-3 дня' },
        { value: '1_week', label: '1 неделя' },
        { value: '1_month', label: '1 месяц' },
        { value: '3_months', label: '3+ месяца' },
        { value: 'permanent', label: 'На постоянной основе' }
      ]
    }
  ]

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const getRecommendation = () => {
    const businessType = answers.business_type
    const staffType = answers.staff_type
    const peopleCount = answers.people_count
    const timeline = answers.timeline

    let recommendation = "Отличный выбор! "

    if (timeline === 'today') {
      recommendation += "Мы можем подать персонал уже сегодня. "
    } else if (timeline === 'this_week') {
      recommendation += "Подадим персонал в течение 24 часов. "
    }

    if (peopleCount === '30+') {
      recommendation += "Для крупных проектов предоставляем дополнительные гарантии и скидки. "
    }

    recommendation += "Оставьте заявку для получения персонального предложения!"

    return recommendation
  }

  const progress = ((currentStep + 1) / questions.length) * 100

  if (currentStep >= questions.length) {
    return (
      <>
        <section className="section-padding bg-gradient-to-br from-[#0A1F44] to-[#1a3a6b]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <h2 className="text-3xl font-bold text-[#0A1F44] mb-6">
                Спасибо за ответы!
              </h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {getRecommendation()}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">
                  Ваши ответы:
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  {questions?.map((question, index) => {
                    const answer = answers[question.id]
                    const option = question.options?.find(opt => opt?.value === answer)
                    return (
                      <div key={index} className="bg-white border rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">{question.title}</div>
                        <div className="font-semibold text-[#0A1F44]">{option?.label}</div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <button
                onClick={() => setIsFormOpen(true)}
                className="btn-primary text-lg px-8 py-4 mb-4"
              >
                Получить персональное предложение
              </button>
              
              <p className="text-sm text-gray-500">
                Наш менеджер свяжется с вами в течение 15 минут
              </p>
            </div>
          </div>
        </section>

        {isFormOpen && (
          <LeadForm 
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
            formType="quiz_result"
            quizAnswers={answers}
          />
        )}
      </>
    )
  }

  return (
    <section className="section-padding bg-gradient-to-br from-[#0A1F44] to-[#1a3a6b]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Подберем{' '}
            <span className="text-[#FF6600]">персонал</span> за 2 минуты
          </h2>
          <p className="text-xl text-gray-300">
            Ответьте на несколько вопросов и получите персональное предложение
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-gray-600">
                Вопрос {currentStep + 1} из {questions.length}
              </span>
              <span className="text-sm font-medium text-[#FF6600]">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="quiz-progress">
              <div 
                className="quiz-progress-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Current Question */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#0A1F44] mb-8">
              {questions?.[currentStep]?.title}
            </h3>

            <div className="grid gap-4">
              {questions?.[currentStep]?.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(questions[currentStep]?.id || '', option.value)}
                  className="text-left p-4 border-2 border-gray-200 rounded-lg hover:border-[#FF6600] hover:bg-orange-50 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700 group-hover:text-[#0A1F44]">
                      {option.label}
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#FF6600]" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={goBack}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
                currentStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-[#FF6600] hover:bg-gray-50'
              }`}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Назад</span>
            </button>

            <div className="text-sm text-gray-500 self-center">
              Все данные конфиденциальны
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quiz
