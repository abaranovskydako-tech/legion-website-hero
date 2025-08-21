
'use client'

import { Users, Award, Clock, Shield } from 'lucide-react'

const AboutHero = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-[#0A1F44] to-[#1a3a6b] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              О компании{' '}
              <span className="text-[#FF6600]">LegioN</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8">
              Ведущая компания по аутсорсингу линейного персонала для среднего бизнеса. 
              Работаем с 2019 года, помогли более чем 5000 компаний решить кадровые задачи.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6600] mb-2">5+</div>
                <div className="text-sm text-gray-300">лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6600] mb-2">5000+</div>
                <div className="text-sm text-gray-300">клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6600] mb-2">200+</div>
                <div className="text-sm text-gray-300">сотрудников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6600] mb-2">99.5%</div>
                <div className="text-sm text-gray-300">SLA выполнения</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Наша миссия</h3>
              <p className="text-lg text-center mb-8">
                Обеспечить каждый бизнес качественным персоналом быстро, надежно и без лишних хлопот
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#FF6600] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm">Скорость</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#FF6600] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm">Надежность</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#FF6600] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm">Качество</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#FF6600] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm">Профессионализм</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-[#FF6600] rounded-full p-4 floating-animation">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 floating-animation" style={{ animationDelay: '1s' }}>
              <Users className="w-8 h-8 text-[#0A1F44]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
