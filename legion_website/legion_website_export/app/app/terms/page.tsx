
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Условия использования | LegioN',
  description: 'Условия использования сайта legion-staff.ru',
}

const TermsPage = () => {
  return (
    <div className="pt-20 section-padding">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-8">
          Условия использования
        </h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Настоящие условия регулируют использование сайта legion-staff.ru 
            и получение услуг компании LegioN.
          </p>

          <h2 className="text-xl font-bold text-[#0A1F44] mb-4">1. Общие условия</h2>
          <p className="text-gray-700 mb-6">
            Используя наш сайт, вы соглашаетесь с настоящими условиями использования.
          </p>

          <h2 className="text-xl font-bold text-[#0A1F44] mb-4">2. Услуги</h2>
          <p className="text-gray-700 mb-6">
            LegioN предоставляет услуги аутсорсинга персонала в соответствии 
            с заключенными договорами.
          </p>

          <h2 className="text-xl font-bold text-[#0A1F44] mb-4">3. Ответственность</h2>
          <p className="text-gray-700 mb-6">
            Компания несет ответственность в рамках заключенных договоров 
            и действующего законодательства РФ.
          </p>

          <h2 className="text-xl font-bold text-[#0A1F44] mb-4">4. Контакты</h2>
          <p className="text-gray-700">
            По всем вопросам обращайтесь: info@legion-staff.ru, 8-800-123-45-67
          </p>
        </div>
      </div>
    </div>
  )
}

export default TermsPage
