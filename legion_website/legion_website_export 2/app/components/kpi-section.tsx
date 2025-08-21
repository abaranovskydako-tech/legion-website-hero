
'use client'

const KpiSection = () => {
  const kpis = [
    {
      number: '200+',
      description: 'Сотрудников в штате'
    },
    {
      number: '72 часа',
      description: 'Запуск объекта'
    },
    {
      number: '99%',
      description: 'Смен вовремя'
    },
    {
      number: '24/7',
      description: 'Поддержка'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {kpis.map((kpi, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#FF6600] mb-2">
                {kpi.number}
              </div>
              <div className="text-gray-700 font-medium">
                {kpi.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KpiSection
