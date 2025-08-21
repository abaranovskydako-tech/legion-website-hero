
'use client'

import { useState, useEffect } from 'react'
import { Calculator as CalcIcon, Users, Clock, MapPin, Phone } from 'lucide-react'

const Calculator = () => {
  const [formData, setFormData] = useState({
    serviceType: 'packer',
    peopleCount: 5,
    hoursPerDay: 8,
    workDays: 5,
    city: 'moscow'
  })

  const [result, setResult] = useState({
    dailyCost: 0,
    weeklyCost: 0,
    monthlyCost: 0,
    savings: 0
  })

  const serviceTypes = [
    { id: 'packer', name: 'Упаковщики-фасовщики', rate: 350 },
    { id: 'loader', name: 'Грузчики', rate: 400 },
    { id: 'worker', name: 'Разнорабочие', rate: 350 },
    { id: 'washer', name: 'Мойщики', rate: 380 },
    { id: 'sticker', name: 'Стикеровщики', rate: 350 },
    { id: 'cleaner', name: 'Уборщики', rate: 320 }
  ]

  const cities = [
    { id: 'moscow', name: 'Москва', multiplier: 1.0 },
    { id: 'spb', name: 'Санкт-Петербург', multiplier: 0.9 },
    { id: 'ekaterinburg', name: 'Екатеринбург', multiplier: 0.8 },
    { id: 'novosibirsk', name: 'Новосибирск', multiplier: 0.8 },
    { id: 'other', name: 'Другой город', multiplier: 0.7 }
  ]

  useEffect(() => {
    calculateCost()
  }, [formData])

  const calculateCost = () => {
    const service = serviceTypes.find(s => s.id === formData.serviceType)
    const city = cities.find(c => c.id === formData.city)
    
    if (!service || !city) return

    const hourlyRate = service.rate * city.multiplier
    const dailyCost = hourlyRate * formData.peopleCount * formData.hoursPerDay
    const weeklyCost = dailyCost * formData.workDays
    const monthlyCost = weeklyCost * 4.33 // average weeks per month
    
    // Calculate savings compared to hiring directly (assume 30% savings)
    const directHiringSavings = monthlyCost * 0.3

    setResult({
      dailyCost: Math.round(dailyCost),
      weeklyCost: Math.round(weeklyCost),
      monthlyCost: Math.round(monthlyCost),
      savings: Math.round(directHiringSavings)
    })
  }

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleCallClick = () => {
    window.open('tel:+78001234567', '_self')
  }

  return (
    <section id="calculator" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0A1F44] mb-6">
            Калькулятор{' '}
            <span className="text-[#FF6600]">стоимости</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Рассчитайте точную стоимость персонала для вашего проекта. 
            Прозрачное ценообразование без скрытых комиссий.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div>
              <h3 className="text-2xl font-bold text-[#0A1F44] mb-8 flex items-center">
                <CalcIcon className="w-6 h-6 mr-3 text-[#FF6600]" />
                Параметры расчета
              </h3>

              <div className="space-y-6">
                {/* Service Type */}
                <div className="form-group">
                  <label className="form-label flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Тип персонала
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => handleInputChange('serviceType', e.target.value)}
                    className="form-input form-select"
                  >
                    {serviceTypes.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name} - от {service.rate} ₽/час
                      </option>
                    ))}
                  </select>
                </div>

                {/* People Count */}
                <div className="form-group">
                  <label className="form-label">Количество человек</label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={formData.peopleCount}
                    onChange={(e) => handleInputChange('peopleCount', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>1</span>
                    <span className="font-bold text-[#FF6600]">{formData.peopleCount} человек</span>
                    <span>50</span>
                  </div>
                </div>

                {/* Hours per day */}
                <div className="form-group">
                  <label className="form-label flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Часов в день
                  </label>
                  <input
                    type="range"
                    min="4"
                    max="12"
                    value={formData.hoursPerDay}
                    onChange={(e) => handleInputChange('hoursPerDay', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>4</span>
                    <span className="font-bold text-[#FF6600]">{formData.hoursPerDay} часов</span>
                    <span>12</span>
                  </div>
                </div>

                {/* Work days per week */}
                <div className="form-group">
                  <label className="form-label">Рабочих дней в неделю</label>
                  <div className="flex space-x-2">
                    {[5, 6, 7].map(days => (
                      <button
                        key={days}
                        onClick={() => handleInputChange('workDays', days)}
                        className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                          formData.workDays === days
                            ? 'border-[#FF6600] bg-[#FF6600] text-white'
                            : 'border-gray-200 text-gray-700 hover:border-[#FF6600]'
                        }`}
                      >
                        {days} дней
                      </button>
                    ))}
                  </div>
                </div>

                {/* City */}
                <div className="form-group">
                  <label className="form-label flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Город
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="form-input form-select"
                  >
                    {cities.map(city => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-2xl font-bold text-[#0A1F44] mb-8">
                Результат расчета
              </h3>

              <div className="space-y-6">
                {/* Daily Cost */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Стоимость в день:</span>
                    <span className="text-2xl font-bold text-[#0A1F44]">
                      {result.dailyCost.toLocaleString()} ₽
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {formData.peopleCount} человек × {formData.hoursPerDay} часов
                  </div>
                </div>

                {/* Weekly Cost */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Стоимость в неделю:</span>
                    <span className="text-2xl font-bold text-[#0A1F44]">
                      {result.weeklyCost.toLocaleString()} ₽
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {formData.workDays} рабочих дней
                  </div>
                </div>

                {/* Monthly Cost */}
                <div className="calculator-result">
                  <div className="flex justify-between items-center mb-2">
                    <span>Стоимость в месяц:</span>
                    <span className="text-3xl font-bold">
                      {result.monthlyCost.toLocaleString()} ₽
                    </span>
                  </div>
                  <div className="text-sm opacity-80">
                    ~4.33 недели в месяце
                  </div>
                </div>

                {/* Savings */}
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-green-700 font-semibold">Экономия vs штат:</span>
                    <span className="text-2xl font-bold text-green-600">
                      {result.savings.toLocaleString()} ₽
                    </span>
                  </div>
                  <div className="text-sm text-green-600">
                    За счет отсутствия налогов и соцвзносов
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <button 
                    onClick={handleCallClick}
                    className="btn-primary w-full text-lg py-4 mb-4 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Получить коммерческое предложение</span>
                  </button>
                  <p className="text-center text-sm text-gray-500">
                    Расчет приблизительный. Точная стоимость зависит от требований к персоналу
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calculator
