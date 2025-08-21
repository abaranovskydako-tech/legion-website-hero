
'use client'

import { FileText, Download, Shield, Award } from 'lucide-react'

const TenderHero = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-[#0A1F44] to-[#1a3a6b] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Тендерная{' '}
              <span className="text-[#FF6600]">документация</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8">
              Полный пакет документов для участия в государственных и коммерческих тендерах. 
              Соответствуем требованиям 44-ФЗ и 223-ФЗ.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <FileText className="w-8 h-8 text-[#FF6600] mx-auto mb-2" />
                <div className="text-sm font-semibold">50+ документов</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <Shield className="w-8 h-8 text-[#FF6600] mx-auto mb-2" />
                <div className="text-sm font-semibold">Полное соответствие 44-ФЗ</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <Award className="w-8 h-8 text-[#FF6600] mx-auto mb-2" />
                <div className="text-sm font-semibold">ISO сертификаты</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <Download className="w-8 h-8 text-[#FF6600] mx-auto mb-2" />
                <div className="text-sm font-semibold">Мгновенная загрузка</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => alert('Документы будут отправлены на ваш email после заполнения формы ниже')}
                className="btn-primary text-lg px-8 py-4 pulse-animation"
              >
                Скачать документы
              </button>
              <button
                onClick={() => window.open('tel:+78001234567', '_self')}
                className="btn-secondary text-lg px-8 py-4"
              >
                Консультация по тендеру
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Преимущества работы с LegioN</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#FF6600] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span>Опыт участия в 500+ тендерах</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#FF6600] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span>85% успешных побед в тендерах</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#FF6600] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span>Полное юридическое сопровождение</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#FF6600] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span>Подготовка персонала к требованиям</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-[#FF6600] rounded-full p-4 floating-animation">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 floating-animation" style={{ animationDelay: '1s' }}>
              <Award className="w-8 h-8 text-[#0A1F44]" />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FF6600] mb-2">500+</div>
            <div className="text-sm text-gray-300">Участий в тендерах</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FF6600] mb-2">85%</div>
            <div className="text-sm text-gray-300">Процент побед</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FF6600] mb-2">50+</div>
            <div className="text-sm text-gray-300">Документов в пакете</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FF6600] mb-2">24/7</div>
            <div className="text-sm text-gray-300">Поддержка тендеров</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TenderHero
