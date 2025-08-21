
'use client'

import { Phone, MessageCircle, Calculator } from 'lucide-react'

const CTA = () => {
  const handleCallClick = () => {
    window.open('tel:+78001234567', '_self')
  }

  const handleCalculatorClick = () => {
    const calculatorSection = document.getElementById('calculator')
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/78001234567', '_blank')
  }

  return (
    <section className="section-padding bg-gradient-to-r from-[#0A1F44] to-[#1a3a6b] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Готовы получить{' '}
            <span className="text-[#FF6600]">персонал сегодня?</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Не теряйте время на поиски! Позвоните сейчас и получите квалифицированный персонал 
            уже через несколько часов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Phone Call */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors">
            <div className="w-16 h-16 bg-[#FF6600] rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Позвонить сейчас</h3>
            <p className="opacity-90 mb-6">Получите консультацию и персонал в день обращения</p>
            <button 
              onClick={handleCallClick}
              className="btn-primary w-full pulse-animation"
            >
              8-800-123-45-67
            </button>
          </div>

          {/* WhatsApp */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Написать в WhatsApp</h3>
            <p className="opacity-90 mb-6">Удобное общение в любое время суток</p>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full"
            >
              Написать сейчас
            </button>
          </div>

          {/* Calculator */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors">
            <div className="w-16 h-16 bg-[#FF6600] rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Рассчитать стоимость</h3>
            <p className="opacity-90 mb-6">Узнайте точную стоимость персонала для ваших задач</p>
            <button 
              onClick={handleCalculatorClick}
              className="btn-secondary w-full"
            >
              Открыть калькулятор
            </button>
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-[#FF6600] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            🎯 Наша гарантия
          </h3>
          <p className="text-lg mb-4">
            Если не подадим персонал в согласованное время — 
            <span className="font-bold"> скидка 20% на весь заказ!</span>
          </p>
          <p className="opacity-90">
            Мы настолько уверены в своей скорости и качестве, что готовы нести финансовую ответственность
          </p>
        </div>

        {/* Quick Facts */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-[#FF6600] mb-1">3 часа</div>
            <div className="text-sm opacity-75">Подача персонала</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#FF6600] mb-1">24/7</div>
            <div className="text-sm opacity-75">Поддержка</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#FF6600] mb-1">350₽</div>
            <div className="text-sm opacity-75">Стоимость от</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#FF6600] mb-1">5000+</div>
            <div className="text-sm opacity-75">Клиентов</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
