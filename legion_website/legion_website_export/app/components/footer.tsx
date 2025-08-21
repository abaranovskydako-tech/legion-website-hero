
'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A1F44] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#FF6600] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                L
              </div>
              <div>
                <div className="text-2xl font-bold">LegioN</div>
                <div className="text-sm opacity-75">Аутсорсинг персонала</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Аутсорсинг линейного персонала в Новосибирске и области. Вывод на объект за 3 часа или 2 дня.
            </p>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#FF6600]" />
                <span>Новосибирск, ул. Примерная, 1</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FF6600]" />
                <span>8-800-700-00-00</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FF6600]" />
                <span>sales@legion.ru</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-6">Навигация</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#FF6600] transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF6600] transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FF6600] transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/tender" className="hover:text-[#FF6600] transition-colors">
                  Тендеры и документы
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Контакты</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Новосибирск, ул. Примерная, 1</li>
              <li>
                <Link href="tel:+78007000000" className="hover:text-[#FF6600] transition-colors">
                  8-800-700-00-00
                </Link>
              </li>
              <li>
                <Link href="mailto:sales@legion.ru" className="hover:text-[#FF6600] transition-colors">
                  sales@legion.ru
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} LegioN. Все права защищены.
            </div>
            <div className="text-gray-400 text-sm md:text-right">
              <Link href="/privacy" className="hover:text-[#FF6600] transition-colors mr-6">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="hover:text-[#FF6600] transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#FF6600] rounded-2xl p-8 mt-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Нужен персонал прямо сейчас?</h3>
          <p className="mb-6">Звоните — подадим людей в течение 3 часов!</p>
          <button 
            onClick={() => window.open('tel:+78007000000', '_self')}
            className="bg-white text-[#FF6600] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Позвонить: 8-800-700-00-00
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
