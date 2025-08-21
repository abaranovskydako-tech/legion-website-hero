
'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Award, FileText } from 'lucide-react'
import ShortLeadModal from '@/components/short-lead-modal'
import TenderModal from '@/components/tender-modal'

export default function ContactsPage() {
  const [isShortModalOpen, setIsShortModalOpen] = useState(false)
  const [isTenderModalOpen, setIsTenderModalOpen] = useState(false)
  const [callbackForm, setCallbackForm] = useState({ name: '', phone: '' })
  const [mainForm, setMainForm] = useState({ 
    name: '', 
    phone: '', 
    email: '', 
    company: '', 
    message: '' 
  })
  
  const [isCallbackSubmitting, setIsCallbackSubmitting] = useState(false)
  const [isMainSubmitting, setIsMainSubmitting] = useState(false)

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!callbackForm.name || !callbackForm.phone) return
    
    setIsCallbackSubmitting(true)
    try {
      if (typeof window !== 'undefined' && (window as any).LEGION) {
        await (window as any).LEGION.sendLead('short', {
          ...callbackForm,
          source: 'contacts_callback'
        })
        setCallbackForm({ name: '', phone: '' })
      }
    } catch (error) {
      console.error('Error submitting callback form:', error)
    } finally {
      setIsCallbackSubmitting(false)
    }
  }

  const handleMainFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!mainForm.name || !mainForm.phone) return
    
    setIsMainSubmitting(true)
    try {
      if (typeof window !== 'undefined' && (window as any).LEGION) {
        await (window as any).LEGION.sendLead('contact', mainForm)
        setMainForm({ name: '', phone: '', email: '', company: '', message: '' })
      }
    } catch (error) {
      console.error('Error submitting main form:', error)
    } finally {
      setIsMainSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      content: '8-800-700-00-00',
      description: 'Круглосуточно, звонок бесплатный',
      link: 'tel:+78007000000'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@legion-staff.ru',
      description: 'Ответим в течение часа',
      link: 'mailto:info@legion-staff.ru'
    },
    {
      icon: MapPin,
      title: 'Офис',
      content: 'г. Новосибирск, ул. Красный проспект, 99',
      description: 'Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-18:00',
      link: 'https://yandex.ru/maps'
    },
    {
      icon: Clock,
      title: 'Режим работы',
      content: '24/7',
      description: 'Подача персонала в любое время',
      link: null
    }
  ]

  const offices = [
    {
      city: 'Новосибирск',
      address: 'ул. Красный проспект, 99, офис 15',
      phone: '+7 (383) 200-70-00',
      hours: 'Пн-Пт: 8:00-20:00'
    },
    {
      city: 'Новосибирск (склад)',
      address: 'ул. Промышленная, 5/2',
      phone: '+7 (383) 200-70-01',
      hours: 'Круглосуточно'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готовы обсудить ваши задачи по подбору персонала? Мы работаем 24/7 и всегда готовы помочь.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <div key={index} className="card p-6 text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{contact.title}</h3>
                  {contact.link ? (
                    <a 
                      href={contact.link} 
                      className="text-emerald-600 font-medium hover:text-emerald-700 block mb-1"
                    >
                      {contact.content}
                    </a>
                  ) : (
                    <p className="text-emerald-600 font-medium mb-1">{contact.content}</p>
                  )}
                  <p className="text-sm text-gray-500">{contact.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Callback Form */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Нужна консультация прямо сейчас?
              </h2>
              <p className="text-xl opacity-90 mb-6">
                Заполните форму, и мы перезвоним вам через 30 секунд
              </p>
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-6 h-6" />
                <span>Бесплатная консультация по всем вопросам</span>
              </div>
            </div>

            <div className="card p-6 !bg-white/10 !border-white/20">
              <h3 className="text-xl font-bold mb-4">Перезвоните мне за 30 секунд</h3>
              <form onSubmit={handleCallbackSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={callbackForm.name}
                  onChange={(e) => setCallbackForm({...callbackForm, name: e.target.value})}
                  className="input w-full !bg-white/90 !text-gray-900 placeholder-gray-600"
                  required
                />
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={callbackForm.phone}
                  onChange={(e) => setCallbackForm({...callbackForm, phone: e.target.value})}
                  className="input w-full !bg-white/90 !text-gray-900 placeholder-gray-600"
                  inputMode="tel"
                  required
                />
                <button 
                  type="submit" 
                  disabled={isCallbackSubmitting}
                  className="bg-white text-gray-900 hover:bg-gray-100 w-full py-3 rounded-lg font-semibold transition-colors"
                >
                  {isCallbackSubmitting ? 'Отправляется...' : 'Перезвоните мне'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Напишите нам</h2>
              <p className="text-gray-600 mb-8">
                Опишите ваши требования к персоналу, и мы подготовим персональное предложение
              </p>

              <form onSubmit={handleMainFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя *"
                      value={mainForm.name}
                      onChange={(e) => setMainForm({...mainForm, name: e.target.value})}
                      className="input w-full"
                      required
                    />
                    <div className="field-error text-sm text-red-500 mt-1"></div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Телефон *"
                      value={mainForm.phone}
                      onChange={(e) => setMainForm({...mainForm, phone: e.target.value})}
                      className="input w-full"
                      inputMode="tel"
                      required
                    />
                    <div className="field-error text-sm text-red-500 mt-1"></div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={mainForm.email}
                    onChange={(e) => setMainForm({...mainForm, email: e.target.value})}
                    className="input w-full"
                  />
                  <input
                    type="text"
                    placeholder="Компания"
                    value={mainForm.company}
                    onChange={(e) => setMainForm({...mainForm, company: e.target.value})}
                    className="input w-full"
                  />
                </div>

                <textarea
                  placeholder="Опишите ваши требования к персоналу..."
                  value={mainForm.message}
                  onChange={(e) => setMainForm({...mainForm, message: e.target.value})}
                  className="textarea w-full"
                  rows={5}
                />

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    type="submit" 
                    disabled={isMainSubmitting}
                    className="btn-primary flex items-center gap-2 px-8 py-3"
                  >
                    <Send size={20} />
                    {isMainSubmitting ? 'Отправляется...' : 'Отправить сообщение'}
                  </button>
                  
                  <button 
                    type="button"
                    onClick={() => setIsTenderModalOpen(true)}
                    className="btn-ghost flex items-center gap-2 px-8 py-3"
                  >
                    <Award size={20} />
                    Пригласить на тендер
                  </button>
                </div>

                <p className="text-sm text-gray-500">
                  * обязательные поля. Нажимая «Отправить», вы соглашаетесь с{' '}
                  <a href="/privacy" className="text-blue-600 hover:text-blue-800">
                    политикой обработки персональных данных
                  </a>
                </p>
              </form>
            </div>

            {/* Offices Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Наши офисы</h2>
              
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="card p-6">
                    <h3 className="text-xl font-semibold mb-3">{office.city}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-emerald-500" />
                        <span className="text-gray-700">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-emerald-500" />
                        <a 
                          href={`tel:${office.phone}`} 
                          className="text-emerald-600 hover:text-emerald-700"
                        >
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-emerald-500" />
                        <span className="text-gray-700">{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional CTA */}
              <div className="card p-6 bg-gradient-to-br from-blue-50 to-emerald-50 mt-8">
                <h3 className="text-xl font-bold mb-3">Нужно решение под ключ?</h3>
                <p className="text-gray-600 mb-4">
                  Заполните подробный бриф и получите комплексное предложение для вашего проекта
                </p>
                <button 
                  onClick={() => setIsShortModalOpen(true)}
                  className="btn-primary flex items-center gap-2"
                >
                  <FileText size={20} />
                  Заполнить бриф
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Найти нас на карте</h2>
          
          <div className="card p-8">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Интерактивная карта</p>
                <p className="text-sm">г. Новосибирск, ул. Красный проспект, 99</p>
                <a 
                  href="https://yandex.ru/maps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Открыть в Яндекс.Картах
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ShortLeadModal 
        isOpen={isShortModalOpen}
        onClose={() => setIsShortModalOpen(false)}
      />
      <TenderModal 
        isOpen={isTenderModalOpen}
        onClose={() => setIsTenderModalOpen(false)}
      />
    </div>
  )
}
