
'use client'

const ServicePackages = () => {
  const packages = [
    {
      name: 'Старт',
      description: 'Разовые или пилотные задачи',
      features: [
        'Вывод от 5 сотрудников',
        'Смена от 6 часов',
        'Документы и медкнижки'
      ]
    },
    {
      name: 'Пик‑сезон',
      description: 'Быстрое масштабирование в сезон',
      features: [
        'Резерв до 150+ сотрудников',
        'Координатор на объекте',
        'Замены без простоев'
      ]
    },
    {
      name: 'Постоянный поток',
      description: 'Долгосрочная поддержка',
      features: [
        'SLA и KPI',
        'Гибкое ценообразование',
        'Отчётность и прозрачность'
      ]
    }
  ]

  const handleRequestCalculation = () => {
    window.open('/services', '_self')
  }

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] text-center mb-12">
          Пакеты услуг под ваши задачи
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#0A1F44] mb-3">
                {pkg.name}
              </h3>
              <p className="text-gray-600 mb-6">
                {pkg.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#FF6600] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={handleRequestCalculation}
                className="w-full bg-[#FF6600] hover:bg-[#e55a00] text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Запросить расчёт
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicePackages
