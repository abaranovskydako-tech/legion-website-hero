
'use client'

const SocialProof = () => {
  const proofs = [
    {
      platform: 'Яндекс',
      description: 'Рейтинг 4.8/5 — 120 отзывов',
      url: 'https://yandex.ru/maps'
    },
    {
      platform: 'Avito',
      description: '300+ завершённых заказов',
      url: 'https://avito.ru'
    },
    {
      platform: '2ГИС',
      description: 'Проверенный подрядчик',
      url: 'https://2gis.ru'
    }
  ]

  const handleViewReviews = () => {
    window.open('https://yandex.ru/maps', '_blank')
  }

  return (
    <section className="section-padding bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] text-center mb-12">
          Социальный пруф
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {proofs.map((proof, index) => (
            <div key={index} className="flex items-center space-x-4 bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#FF6600] rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {proof.platform.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-[#0A1F44] mb-1">
                  {proof.platform}
                </div>
                <div className="text-gray-600 text-sm">
                  {proof.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button
            onClick={handleViewReviews}
            className="border-2 border-[#FF6600] text-[#FF6600] hover:bg-[#FF6600] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Смотреть отзывы
          </button>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
