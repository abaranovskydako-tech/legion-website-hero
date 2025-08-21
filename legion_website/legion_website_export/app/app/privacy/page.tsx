
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | LegioN',
  description: 'Политика конфиденциальности компании LegioN по обработке персональных данных',
}

const PrivacyPage = () => {
  return (
    <div className="pt-20 section-padding">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-8">
          Политика конфиденциальности
        </h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Настоящая политика конфиденциальности определяет порядок обработки и защиты 
            персональных данных пользователей сайта legion-staff.ru
          </p>

          <h2 className="text-xl font-bold text-[#0A1F44] mb-4">1. Общие положения</h2>
          <p className="text-gray-700 mb-6">
            LegioN обязуется соблюдать конфиденциальность персональных данных пользователей 
            и обеспечивать их защиту в соответствии с требованиями законодательства РФ.
          </p>

          <h2 className="text-xl font-bold text-[#0A1F44] mb-4">2. Сбор персональных данных</h2>
          <p className="text-gray-700 mb-6">
            Мы собираем только те данные, которые необходимы для предоставления наших услуг:
            имя, телефон, email, название компании.
          </p>

          <h2 className="text-xl font-bold text-[#0A1F44] mb-4">3. Использование данных</h2>
          <p className="text-gray-700 mb-6">
            Персональные данные используются исключительно для связи с вами и предоставления 
            информации о наших услугах.
          </p>

          <h2 className="text-xl font-bold text-[#0A1F44] mb-4">4. Контактная информация</h2>
          <p className="text-gray-700">
            По вопросам обработки персональных данных обращайтесь: info@legion-staff.ru
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPage
