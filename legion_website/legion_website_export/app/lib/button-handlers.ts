
'use client'

// Utility functions for button click handlers

export const handlePhoneCall = () => {
  if (typeof window !== 'undefined') {
    window.open('tel:+7XXXXXXXXXX', '_self')
  }
}

export const handleTelegramContact = () => {
  if (typeof window !== 'undefined') {
    window.open('https://t.me/legion_staff_bot', '_blank')
  }
}

export const handleEmailContact = () => {
  if (typeof window !== 'undefined') {
    window.open('mailto:info@legion-staff.ru?subject=Запрос информации&body=Здравствуйте! Меня интересует ваши услуги по аутсорсингу персонала.', '_self')
  }
}

export const handleServiceRequest = (serviceType: string) => {
  if (typeof window !== 'undefined') {
    // In a real app, this would open a service request form
    const message = `Здравствуйте! Меня интересует услуга: ${serviceType}. Прошу связаться со мной для обсуждения деталей.`
    window.open(`mailto:info@legion-staff.ru?subject=Заказ услуги: ${serviceType}&body=${encodeURIComponent(message)}`, '_self')
  }
}

export const handlePricingTier = (tierName: string) => {
  if (typeof window !== 'undefined') {
    const message = `Здравствуйте! Меня интересует тарифный план: ${tierName}. Прошу подготовить коммерческое предложение.`
    window.open(`mailto:info@legion-staff.ru?subject=Интерес к тарифу: ${tierName}&body=${encodeURIComponent(message)}`, '_self')
  }
}

export const handleConsultationRequest = () => {
  if (typeof window !== 'undefined') {
    const message = `Здравствуйте! Хотел бы получить консультацию по вашим услугам аутсорсинга персонала. Прошу связаться со мной.`
    window.open(`mailto:info@legion-staff.ru?subject=Запрос консультации&body=${encodeURIComponent(message)}`, '_self')
  }
}

export const handleTenderDocumentRequest = () => {
  if (typeof window !== 'undefined') {
    const message = `Здравствуйте! Прошу предоставить дополнительные тендерные документы для участия в конкурсе.`
    window.open(`mailto:tender@legion-staff.ru?subject=Запрос тендерных документов&body=${encodeURIComponent(message)}`, '_self')
  }
}

export const handleDocumentDownload = (documentName: string) => {
  if (typeof window !== 'undefined') {
    // In a real app, this would trigger actual file download
    alert(`Скачивание документа: ${documentName}. В реальном приложении здесь был бы файл для загрузки.`)
  }
}

export const handleVacancyView = () => {
  if (typeof window !== 'undefined') {
    const message = `Здравствуйте! Интересуюсь вакансиями в вашей компании. Прошу прислать актуальный список открытых позиций.`
    window.open(`mailto:hr@legion-staff.ru?subject=Интерес к вакансиям&body=${encodeURIComponent(message)}`, '_self')
  }
}

export const handleGenericButtonClick = (buttonText: string) => {
  if (typeof window !== 'undefined') {
    // Generic handler for buttons that need basic functionality
    const message = `Здравствуйте! Меня интересует: ${buttonText}. Прошу связаться со мной для получения подробной информации.`
    window.open(`mailto:info@legion-staff.ru?subject=${encodeURIComponent(buttonText)}&body=${encodeURIComponent(message)}`, '_self')
  }
}
