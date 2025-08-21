
'use client'

import { useState, useEffect } from 'react'
import { Clock, Shield, Users, ChevronRight, Phone, Calculator } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    { number: 5000, suffix: '+', label: 'Довольных клиентов' },
    { number: 99.5, suffix: '%', label: 'SLA выполнения заказов' },
    { number: 24, suffix: 'ч', label: 'Подача персонала' },
    { number: 350, suffix: '₽', label: 'Стоимость от' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  const handleCallClick = () => {
    window.open('tel:+78001234567', '_self')
  }

  const handleCalculatorClick = () => {
    const calculatorSection = document.getElementById('calculator')
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF6600] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FF6600] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        {/* Hero Image - Размещено выше текста и форм */}
        <div className="text-center mb-12">
          <div className="relative mx-auto max-w-4xl">
            <Image
              src="/hero_team_adapted.jpg"
              alt="Команда профессионалов Legion"
              width={800}
              height={400}
              className="rounded-2xl shadow-2xl mx-auto"
              priority
            />
            {/* Overlay with company name */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl flex items-end justify-center pb-8">
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-2">LEGION</h2>
                <p className="text-lg opacity-90">Профессиональный персонал для вашего бизнеса</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section - Текст и формы под изображением */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block bg-[#FF6600] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🔥 Персонал в день обращения
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Персонал от{' '}
                <span className="text-gradient bg-gradient-to-r from-[#FF6600] to-[#ff8533] bg-clip-text text-transparent">
                  350 ₽/час
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8">
                Грузчики • Упаковщики • Разнорабочие для вашего бизнеса с гарантией качества
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#FF6600] rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Подача в день</p>
                  <p className="text-sm text-gray-300">обращения</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#FF6600] rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">SLA 99.5%</p>
                  <p className="text-sm text-gray-300">гарантия</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#FF6600] rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">5000+</p>
                  <p className="text-sm text-gray-300">клиентов</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleCalculatorClick}
                className="btn-primary text-lg px-8 py-4 pulse-animation flex items-center justify-center space-x-2"
              >
                <Calculator className="w-5 h-5" />
                <span>Рассчитать стоимость</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={handleCallClick}
                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Получить консультацию</span>
              </button>
            </div>

            {/* SLA Promise */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="text-sm text-center">
                <span className="font-semibold text-[#FF6600]">Гарантируем:</span> Если не подадим персонал в срок — скидка 20% на весь заказ
              </p>
            </div>
          </div>

          {/* Right Content - Statistics & Visual */}
          <div className="relative">
            {/* Floating Stats */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center text-white">
                <div className="text-5xl font-bold mb-2">
                  {stats[currentStat]?.number}
                  <span className="text-[#FF6600]">{stats[currentStat]?.suffix}</span>
                </div>
                <p className="text-lg">{stats[currentStat]?.label}</p>
              </div>
              
              {/* Progress indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {stats.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentStat ? 'bg-[#FF6600]' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-[#FF6600] rounded-full p-4 floating-animation">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 floating-animation" style={{ animationDelay: '1s' }}>
              <Shield className="w-8 h-8 text-[#0A1F44]" />
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">Нам доверяют ведущие компании:</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {/* Placeholder for company logos */}
            <div className="w-24 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">AVITO</span>
            </div>
            <div className="w-24 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">OZON</span>
            </div>
            <div className="w-24 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">WB</span>
            </div>
            <div className="w-24 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">X5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
