
'use client'

import { useState } from 'react'
import { Send, FileText, Phone, Mail } from 'lucide-react'

const TenderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    tenderType: '',
    deadline: '',
    budget: '',
    message: '',
    agreement: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Заявка отправлена! Мы свяжемся с вами в течение часа.')
    
    setIsSubmitting(false)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      tenderType: '',
      deadline: '',
      budget: '',
      message: '',
      agreement: false
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
            Заявка на участие в{' '}
            <span className="text-[#FF6600]">тендере</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Оставьте заявку, и наши эксперты проконсультируют вас по всем вопросам 
            участия в тендерах
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#0A1F44] mb-8">
              Связаться с нами
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#FF6600] rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#0A1F44]">Телефон</div>
                  <div className="text-gray-600">8-800-123-45-67 (бесплатно)</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#FF6600] rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#0A1F44]">Email для тендеров</div>
                  <div className="text-gray-600">tender@legion-staff.ru</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#FF6600] rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#0A1F44]">Режим работы</div>
                  <div className="text-gray-600">24/7 поддержка тендеров</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 card-shadow">
              <h4 className="text-lg font-bold text-[#0A1F44] mb-4">
                Что мы предоставим:
              </h4>
              <ul className="space-y-3">
                {[
                  'Бесплатную консультацию по тендеру',
                  'Анализ конкурентоспособности',
                  'Полный пакет документов',
                  'Расчет стоимости участия',
                  'Сопровождение до заключения контракта'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#FF6600] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 card-shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label">Ваше имя *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Иван Петров"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="ivan@company.ru"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label">Телефон *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Компания</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="ООО «Компания»"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label">Тип тендера</label>
                  <select
                    name="tenderType"
                    value={formData.tenderType}
                    onChange={handleChange}
                    className="form-input form-select"
                  >
                    <option value="">Выберите тип</option>
                    <option value="44fz">44-ФЗ (государственные закупки)</option>
                    <option value="223fz">223-ФЗ (корпоративные закупки)</option>
                    <option value="commercial">Коммерческий тендер</option>
                    <option value="other">Другое</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Дедлайн подачи</label>
                  <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Бюджет тендера</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="form-input form-select"
                >
                  <option value="">Выберите диапазон</option>
                  <option value="under-1m">До 1 млн рублей</option>
                  <option value="1m-5m">1-5 млн рублей</option>
                  <option value="5m-10m">5-10 млн рублей</option>
                  <option value="10m-50m">10-50 млн рублей</option>
                  <option value="over-50m">Свыше 50 млн рублей</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Описание тендера и требования</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  rows={4}
                  placeholder="Опишите специфику тендера, требования к персоналу, особые условия..."
                />
              </div>

              <div className="form-group">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agreement"
                    checked={formData.agreement}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                  <span className="text-sm text-gray-600">
                    Я согласен на обработку персональных данных и с{' '}
                    <a href="#" className="text-[#FF6600] hover:underline">
                      политикой конфиденциальности
                    </a>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full text-lg py-4 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="loader"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Отправить заявку</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-[#FF6600] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ⚡ Срочный тендер?
            </h3>
            <p className="text-lg mb-6">
              Если до дедлайна осталось меньше 24 часов — звоните прямо сейчас!
            </p>
            <button
              onClick={() => window.open('tel:+78001234567', '_self')}
              className="bg-white text-[#FF6600] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Позвонить: 8-800-123-45-67
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TenderForm
