
'use client'

import { FileText, Download, Shield, Building, Award, DollarSign } from 'lucide-react'

const TenderDocuments = () => {
  const documentCategories = [
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Учредительные документы',
      description: 'Официальные документы компании для подтверждения правового статуса',
      documents: [
        'Свидетельство о государственной регистрации',
        'Устав организации',
        'Свидетельство о постановке на налоговый учет',
        'Лист записи ЕГРЮЛ',
        'Справка из Росстата'
      ],
      downloadLink: '#'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Лицензии и сертификаты',
      description: 'Документы, подтверждающие право на оказание услуг',
      documents: [
        'Сертификат ISO 9001:2015',
        'Лицензия на оказание услуг по трудоустройству',
        'Сертификат соответствия услуг',
        'Разрешения на работу с персональными данными',
        'Санитарно-эпидемиологические заключения'
      ],
      downloadLink: '#'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Финансовая отчетность',
      description: 'Документы, подтверждающие финансовую состоятельность',
      documents: [
        'Бухгалтерский баланс за последние 3 года',
        'Отчет о финансовых результатах',
        'Справка о состоянии расчетов с бюджетом',
        'Справка об исполнении налогоплательщиком обязанности',
        'Аудиторское заключение'
      ],
      downloadLink: '#'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Квалификационные документы',
      description: 'Подтверждение опыта и квалификации персонала',
      documents: [
        'Справки о выполненных работах',
        'Дипломы и сертификаты сотрудников',
        'Трудовые книжки ключевых специалистов',
        'Документы о повышении квалификации',
        'Рекомендательные письма от клиентов'
      ],
      downloadLink: '#'
    }
  ]

  const additionalDocs = [
    { name: 'Справка о несудимости руководства', size: '2.1 MB', format: 'PDF' },
    { name: 'Выписка из реестра МСП', size: '1.8 MB', format: 'PDF' },
    { name: 'Справка о банкротстве', size: '0.9 MB', format: 'PDF' },
    { name: 'Документы СРО (при необходимости)', size: '3.2 MB', format: 'PDF' },
    { name: 'Полис страхования ответственности', size: '1.5 MB', format: 'PDF' },
    { name: 'Справка о размере задолженности', size: '1.2 MB', format: 'PDF' }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
            Пакет{' '}
            <span className="text-[#FF6600]">документов</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный комплект документов для участия в тендерах любого уровня сложности. 
            Все документы актуальны и соответствуют требованиям законодательства.
          </p>
        </div>

        {/* Document Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {documentCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#FF6600] rounded-2xl flex items-center justify-center text-white mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-4">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {category.description}
              </p>
              <ul className="space-y-2 mb-6">
                {category.documents.map((doc, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-[#FF6600] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => alert('Для получения документов свяжитесь с нами по телефону 8-800-123-45-67')}
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Скачать пакет</span>
              </button>
            </div>
          ))}
        </div>

        {/* Additional Documents */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[#0A1F44] text-center mb-8">
            Дополнительные документы
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalDocs.map((doc, index) => (
              <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#FF6600] rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#0A1F44] line-clamp-2">
                      {doc.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {doc.size} • {doc.format}
                    </div>
                  </div>
                </div>
                <button className="text-[#FF6600] hover:text-[#FF8533] transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Download All */}
        <div className="mt-12 text-center">
          <div className="bg-[#FF6600] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Скачайте весь пакет одним файлом
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Полный архив всех документов LegioN для участия в тендерах (ZIP, 45.8 MB)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => window.open('tel:+78001234567', '_self')}
                className="bg-white text-[#FF6600] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Скачать все документы</span>
              </button>
              <div className="text-sm opacity-80">
                Обновлено: {new Date().toLocaleDateString('ru-RU')}
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 card-shadow">
            <h3 className="text-xl font-bold text-[#0A1F44] mb-4">
              Нужна помощь с документами?
            </h3>
            <p className="text-gray-600 mb-6">
              Наши специалисты помогут подготовить индивидуальный пакет документов 
              для конкретного тендера
            </p>
            <button
              onClick={() => window.open('tel:+78001234567', '_self')}
              className="btn-primary w-full"
            >
              Получить консультацию
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 card-shadow">
            <h3 className="text-xl font-bold text-[#0A1F44] mb-4">
              Участие в тендерах под ключ
            </h3>
            <p className="text-gray-600 mb-6">
              Полное сопровождение от подготовки документов до выполнения контракта
            </p>
            <button
              onClick={() => window.open('mailto:tender@legion-staff.ru', '_blank')}
              className="btn-secondary w-full"
            >
              tender@legion-staff.ru
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TenderDocuments
