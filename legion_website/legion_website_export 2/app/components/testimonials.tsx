
'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Александр Петров',
      position: 'Директор логистического центра',
      company: 'ЛогистикПлюс',
      rating: 5,
      text: 'LegioN спасли нас в пиковый сезон! Нужно было срочно 15 грузчиков на неделю. Подали персонал в тот же день, все работали четко и ответственно. Рекомендую!',
      result: 'Решили проблему нехватки персонала за 1 день'
    },
    {
      name: 'Марина Сидорова',
      position: 'Менеджер по производству',
      company: 'Упаковочная компания "Стандарт"',
      rating: 5,
      text: 'Сотрудничаем с LegioN уже 2 года. Всегда качественный персонал, никаких проблем с документами. Особенно ценим оперативность — персонал появляется точно в срок.',
      result: 'Стабильная поставка качественного персонала 2 года'
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Владелец складского комплекса',
      company: 'СкладМастер',
      rating: 5,
      text: 'Перепробовал много агентств, но LegioN — лучшие. Цены адекватные, сотрудники проверенные, менеджеры всегда на связи. За год сотрудничества ни одного серьезного косяка.',
      result: 'Снизили затраты на персонал на 30% при улучшении качества'
    },
    {
      name: 'Елена Волкова',
      position: 'HR-директор',
      company: 'Торговая сеть "Фреш"',
      rating: 5,
      text: 'Когда понадобились упаковщики на 3 месяца, LegioN стали настоящим спасением. Быстро, качественно, с полным пакетом документов. Будем обращаться еще!',
      result: 'Закрыли потребность в сезонном персонале на 100%'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0A1F44] mb-6">
            Отзывы{' '}
            <span className="text-[#FF6600]">клиентов</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 5000 довольных клиентов доверяют нам свои задачи
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#FF6600] rounded-full flex items-center justify-center text-white font-bold">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-[#0A1F44]">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonials[currentTestimonial].position}
                      </div>
                      <div className="text-sm text-[#FF6600] font-semibold">
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="bg-[#FF6600] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Результат сотрудничества:
                </h3>
                <p className="text-lg">
                  {testimonials[currentTestimonial].result}
                </p>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-90">Выполнение обязательств</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0A1F44] hover:bg-[#FF6600] hover:text-white transition-colors card-shadow"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-[#FF6600]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0A1F44] hover:bg-[#FF6600] hover:text-white transition-colors card-shadow"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0A1F44] mb-2">5000+</div>
            <div className="text-gray-600">Довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0A1F44] mb-2">99.5%</div>
            <div className="text-gray-600">SLA выполнения</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0A1F44] mb-2">4.8</div>
            <div className="text-gray-600">Средний рейтинг</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0A1F44] mb-2">24ч</div>
            <div className="text-gray-600">Подача персонала</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
