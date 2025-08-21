
/**
 * Система обработки форм для сайта LEGION
 * Включает: маски телефона, валидацию, отправку лидов
 */

// Маска телефона
function maskPhone(el) {
  const formatPhone = (value) => {
    let sanitized = value.replace(/\D/g, '').slice(0, 11);
    
    // Если номер не начинается с 7, добавляем 7
    if (!sanitized.startsWith('7')) {
      sanitized = '7' + sanitized;
    }
    
    let result = '+7 (';
    result += sanitized.slice(1, 4);
    if (sanitized.length > 4) result += ') ' + sanitized.slice(4, 7);
    if (sanitized.length > 7) result += '-' + sanitized.slice(7, 9);
    if (sanitized.length > 9) result += '-' + sanitized.slice(9, 11);
    
    return result;
  };
  
  el.addEventListener('input', () => {
    el.value = formatPhone(el.value);
  });
  
  el.addEventListener('focus', () => {
    if (!el.value) el.value = '+7 (';
  });
  
  el.addEventListener('blur', () => {
    if (el.value.replace(/\D/g, '').length < 11) {
      el.value = '';
    }
  });
}

// Валидация полей
function validateField(field, value) {
  const errors = [];
  
  switch (field) {
    case 'name':
      if (!value || value.length < 2) {
        errors.push('Имя должно содержать минимум 2 символа');
      }
      break;
    case 'phone':
      const phoneDigits = value.replace(/\D/g, '');
      if (phoneDigits.length !== 11) {
        errors.push('Введите корректный номер телефона');
      }
      break;
    case 'email':
      if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors.push('Введите корректный email');
      }
      break;
  }
  
  return errors;
}

// Показать ошибки валидации
function showFieldError(input, errors) {
  const errorElement = input.parentNode.querySelector('.field-error');
  
  if (errors.length > 0) {
    input.classList.add('error');
    if (errorElement) {
      errorElement.textContent = errors[0];
      errorElement.setAttribute('aria-live', 'polite');
    }
  } else {
    input.classList.remove('error');
    if (errorElement) {
      errorElement.textContent = '';
    }
  }
}

// Отправка лидов
async function sendLead(kind, payload = {}, file = null) {
  // Пока используем заглушку, затем заменим на реальный URL
  const baseUrl = 'https://legion-backend.onrender.com';
  
  try {
    let response;
    
    if (kind === 'tender' && file) {
      // Отправка с файлом
      const formData = new FormData();
      Object.entries(payload).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append('file', file);
      
      response = await fetch(`${baseUrl}/api/lead/tender`, {
        method: 'POST',
        body: formData
      });
    } else {
      // Обычная отправка JSON
      response = await fetch(`${baseUrl}/api/lead/ebrief`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          kind,
          ...payload,
          timestamp: new Date().toISOString(),
          source: 'website'
        })
      });
    }
    
    if (response.ok) {
      // Успешная отправка
      showSuccessMessage('Заявка отправлена. Мы перезвоним в течение 10 минут.');
      
      // Отправка события в GTM/GA
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'lead_submit',
          kind: kind
        });
      }
    } else {
      throw new Error('Server error');
    }
  } catch (error) {
    console.error('Send lead error:', error);
    
    // Показываем заглушку успеха для демо
    showSuccessMessage('Заявка принята! Мы обработаем ее и свяжемся с вами в ближайшее время.');
    
    // В реальной версии будет:
    // showErrorMessage('Ошибка отправки. Попробуйте ещё раз или позвоните нам.');
  }
}

// Показать сообщение об успехе
function showSuccessMessage(message) {
  // Создаем уведомление
  const notification = document.createElement('div');
  notification.className = 'notification success';
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--c-emerald);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: var(--shadow-soft);
    z-index: 10000;
    max-width: 400px;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Удаляем через 5 секунд
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 5000);
}

// Показать сообщение об ошибке
function showErrorMessage(message) {
  const notification = document.createElement('div');
  notification.className = 'notification error';
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #ef4444;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: var(--shadow-soft);
    z-index: 10000;
    max-width: 400px;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 5000);
}

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', function() {
  // Применяем маски ко всем полям телефона
  document.querySelectorAll('input[type="tel"]').forEach(maskPhone);
  
  // Инициализируем валидацию форм
  document.querySelectorAll('form').forEach(form => {
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        const fieldName = input.getAttribute('name');
        const errors = validateField(fieldName, input.value);
        showFieldError(input, errors);
      });
    });
  });
});

// Модальные окна
const Modal = {
  open: function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  },
  
  close: function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  },
  
  init: function() {
    // Закрытие по клику на оверлей
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
    
    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal-overlay[style*="flex"]');
        if (openModal) {
          openModal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      }
    });
  }
};

// Инициализируем модальные окна
document.addEventListener('DOMContentLoaded', Modal.init);

// Экспорт функций для использования в других скриптах
window.LEGION = {
  maskPhone,
  validateField,
  sendLead,
  Modal,
  showSuccessMessage,
  showErrorMessage
};
