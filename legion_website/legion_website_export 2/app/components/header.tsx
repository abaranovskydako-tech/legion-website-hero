
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, FileText, Award } from 'lucide-react'
import ShortLeadModal from './short-lead-modal'
import EBriefModal from './ebrief-modal'
import TenderModal from './tender-modal'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isShortLeadModalOpen, setIsShortLeadModalOpen] = useState(false)
  const [isEBriefModalOpen, setIsEBriefModalOpen] = useState(false)
  const [isTenderModalOpen, setIsTenderModalOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleCallClick = () => {
    window.open('tel:+78007000000', '_self')
  }

  const openModal = (modalType: 'short' | 'ebrief' | 'tender') => {
    setIsMenuOpen(false)
    switch (modalType) {
      case 'short':
        setIsShortLeadModalOpen(true)
        break
      case 'ebrief':
        setIsEBriefModalOpen(true)
        break
      case 'tender':
        setIsTenderModalOpen(true)
        break
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                L
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-gray-900">LegioN</span>
                <p className="text-sm text-gray-600">Персонал от 350 ₽/час</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Главная
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Услуги
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Цены
              </Link>
              <Link href="/cases" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Кейсы
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                О нас
              </Link>
              <Link href="/contacts" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Контакты
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden xl:flex items-center space-x-3">
              <button
                onClick={() => openModal('ebrief')}
                className="btn-ghost text-sm flex items-center gap-2"
              >
                <FileText size={16} />
                E-бриф
              </button>
              <button
                onClick={() => openModal('tender')}
                className="btn-ghost text-sm flex items-center gap-2"
              >
                <Award size={16} />
                Тендер
              </button>
              <button
                onClick={() => openModal('short')}
                className="btn-primary text-sm"
              >
                Заказать звонок
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-emerald-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4 pt-4">
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Главная
                </Link>
                <Link 
                  href="/services" 
                  className="text-gray-700 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Услуги
                </Link>
                <Link 
                  href="/pricing" 
                  className="text-gray-700 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Цены
                </Link>
                <Link 
                  href="/cases" 
                  className="text-gray-700 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Кейсы
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-700 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  О нас
                </Link>
                <Link 
                  href="/contacts" 
                  className="text-gray-700 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Контакты
                </Link>
                
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <button
                    onClick={() => openModal('ebrief')}
                    className="btn-ghost w-full flex items-center justify-center gap-2"
                  >
                    <FileText size={16} />
                    Заполнить E-бриф
                  </button>
                  <button
                    onClick={() => openModal('tender')}
                    className="btn-ghost w-full flex items-center justify-center gap-2"
                  >
                    <Award size={16} />
                    Участие в тендере
                  </button>
                  <button
                    onClick={() => openModal('short')}
                    className="btn-primary w-full"
                  >
                    Заказать звонок
                  </button>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <button 
                    onClick={handleCallClick}
                    className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>8-800-700-00-00 (24/7)</span>
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Modal Components */}
      <ShortLeadModal 
        isOpen={isShortLeadModalOpen}
        onClose={() => setIsShortLeadModalOpen(false)}
      />
      <EBriefModal 
        isOpen={isEBriefModalOpen}
        onClose={() => setIsEBriefModalOpen(false)}
      />
      <TenderModal 
        isOpen={isTenderModalOpen}
        onClose={() => setIsTenderModalOpen(false)}
      />
    </>
  )
}

export default Header
