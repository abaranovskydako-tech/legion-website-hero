
'use client'

import { useState, useEffect } from 'react'

const CalculatorClassic = () => {
  const [formData, setFormData] = useState({
    people: 10,
    hours: 8,
    package: 'start'
  })
  const [result, setResult] = useState('—')

  const packages = {
    start: { name: 'Старт', multiplier: 1.0 },
    peak: { name: 'Пик‑сезон', multiplier: 1.2 },
    flow: { name: 'Постоянный поток', multiplier: 0.9 }
  }

  useEffect(() => {
    calculateCost()
  }, [formData])

  const calculateCost = () => {
    const baseRate = 350 // базовая ставка 350 руб/час
    const packageMultiplier = packages[formData.package as keyof typeof packages].multiplier
    const totalCost = formData.people * formData.hours * baseRate * packageMultiplier
    
    setResult(`${totalCost.toLocaleString('ru-RU')} ₽`)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'people' || name === 'hours' ? parseInt(value) || 0 : value
    }))
  }

  const handleGetCalculation = () => {
    const leadSection = document.getElementById('lead')
    if (leadSection) {
      leadSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCallback = () => {
    window.open('tel:+78007000000', '_self')
  }

  return (
    <section id="calc" className="section-padding bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] text-center mb-12">
          Мини‑калькулятор стоимости
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Сколько сотрудников требуется?
                </label>
                <input
                  type="number"
                  name="people"
                  min="1"
                  value={formData.people}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF6600] focus:border-transparent outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Сколько часов смена?
                </label>
                <input
                  type="number"
                  name="hours"
                  min="1"
                  value={formData.hours}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF6600] focus:border-transparent outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Пакет услуг
                </label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF6600] focus:border-transparent outline-none"
                >
                  <option value="start">Старт</option>
                  <option value="peak">Пик‑сезон</option>
                  <option value="flow">Постоянный поток</option>
                </select>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Оценка бюджета</h3>
            <p className="text-sm text-gray-600 mb-6">
              Базовая ставка: 350 ₽/час за сотрудника. Коэффициенты пакетов учтены.
            </p>
            
            <div className="mb-6">
              <p className="text-gray-700 mb-2">Итоговая оценка:</p>
              <p className="text-4xl font-bold text-[#FF6600]">{result}</p>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={handleGetCalculation}
                className="bg-[#FF6600] hover:bg-[#e55a00] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Получить точный расчёт
              </button>
              <button
                onClick={handleCallback}
                className="border-2 border-[#FF6600] text-[#FF6600] hover:bg-[#FF6600] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Обратный звонок
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CalculatorClassic
