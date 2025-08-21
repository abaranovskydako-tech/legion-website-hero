
'use client'

import { useState } from 'react'
import { X, Upload, FileText, AlertCircle } from 'lucide-react'

interface TenderModalProps {
  isOpen: boolean
  onClose: () => void
}

const TenderModal = ({ isOpen, onClose }: TenderModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    comment: ''
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [dragOver, setDragOver] = useState(false)

  const maxFileSize = 25 * 1024 * 1024 // 25MB
  const allowedTypes = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.txt', '.rtf']

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      validateAndSetFile(file)
    }
  }

  const validateAndSetFile = (file: File) => {
    // Проверка размера
    if (file.size > maxFileSize) {
      alert('Размер файла не должен превышать 25MB')
      return
    }

    // Проверка типа файла
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase()
    if (!allowedTypes.includes(fileExtension)) {
      alert(`Разрешены только файлы: ${allowedTypes.join(', ')}`)
      return
    }

    setSelectedFile(file)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    
    const file = e.dataTransfer.files[0]
    if (file) {
      validateAndSetFile(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
  }

  const removeFile = () => {
    setSelectedFile(null)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.phone) {
      alert('Пожалуйста, заполните имя и телефон')
      return
    }

    setIsSubmitting(true)
    
    try {
      if (typeof window !== 'undefined' && (window as any).LEGION) {
        await (window as any).LEGION.sendLead('tender', formData, selectedFile)
        
        // Очищаем форму
        setFormData({ name: '', phone: '', email: '', company: '', comment: '' })
        setSelectedFile(null)
        onClose()
      }
    } catch (error) {
      console.error('Error submitting tender form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" style={{ display: 'flex' }}>
      <div className="modal-content" style={{ maxWidth: '600px' }}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">Участие в тендере</h2>
              <p className="text-gray-600 text-sm mt-1">
                Загрузите техническое задание или опишите требования
              </p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Закрыть"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Основная информация */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="tender-name" className="block text-sm font-medium mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="tender-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input w-full"
                  placeholder="Введите ваше имя"
                  required
                />
              </div>

              <div>
                <label htmlFor="tender-phone" className="block text-sm font-medium mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="tender-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input w-full"
                  placeholder="+7 (___) ___-__-__"
                  inputMode="tel"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="tender-email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="tender-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input w-full"
                  placeholder="your@company.com"
                />
              </div>

              <div>
                <label htmlFor="tender-company" className="block text-sm font-medium mb-2">
                  Компания
                </label>
                <input
                  type="text"
                  id="tender-company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="input w-full"
                  placeholder="Название компании"
                />
              </div>
            </div>

            {/* Загрузка файла */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Техническое задание
              </label>
              
              {!selectedFile ? (
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                    dragOver 
                      ? 'border-emerald-500 bg-emerald-50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                >
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-600 mb-2">
                    Перетащите файл сюда или{' '}
                    <label className="text-emerald-600 hover:text-emerald-700 cursor-pointer font-medium">
                      выберите файл
                      <input
                        type="file"
                        className="hidden"
                        accept={allowedTypes.join(',')}
                        onChange={handleFileSelect}
                      />
                    </label>
                  </p>
                  <p className="text-xs text-gray-500">
                    Поддерживаемые форматы: PDF, DOC, DOCX, XLS, XLSX
                  </p>
                  <p className="text-xs text-gray-500">
                    Максимальный размер: 25MB
                  </p>
                </div>
              ) : (
                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-blue-500" />
                      <div>
                        <p className="font-medium text-gray-900">{selectedFile.name}</p>
                        <p className="text-sm text-gray-500">{formatFileSize(selectedFile.size)}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="text-red-500 hover:text-red-700 p-1"
                      aria-label="Удалить файл"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Комментарий */}
            <div>
              <label htmlFor="tender-comment" className="block text-sm font-medium mb-2">
                Комментарий к заявке
              </label>
              <textarea
                id="tender-comment"
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                className="textarea w-full"
                rows={3}
                placeholder="Кратко опишите ваши требования и особенности тендера"
              />
            </div>

            {/* Предупреждение */}
            <div className="flex space-x-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-blue-900">Обработка заявки</p>
                <p className="text-blue-700 mt-1">
                  Мы рассмотрим вашу заявку и свяжемся с вами в течение 24 часов для обсуждения условий участия в тендере.
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full py-3 text-lg"
            >
              {isSubmitting ? 'Отправляется...' : 'Подать заявку на тендер'}
            </button>

            <p className="text-sm text-gray-500 text-center">
              Нажимая «Подать заявку», вы соглашаетесь с{' '}
              <a href="/privacy" className="text-blue-600 hover:text-blue-800">
                политикой обработки персональных данных
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TenderModal
