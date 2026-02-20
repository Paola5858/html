// ===== JAVASCRIPT PRINCIPAL =====

// Configurações globais
const CONFIG = {
  animationDuration: 300,
  debounceDelay: 300,
  successMessageDuration: 3000,
  errorMessageDuration: 5000
};

// Utilitários
const Utils = {
  // Debounce function
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Validação de email
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Validação de telefone
  isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },

  // Formatação de data
  formatDate(date) {
    return new Date(date).toLocaleDateString('pt-BR');
  },

  // Formatação de telefone
  formatPhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  },

  // Animação suave para scroll
  smoothScrollTo(element, duration = 1000) {
    const targetPosition = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
};

// Gerenciador de Animações
const AnimationManager = {
  // Observador de interseção para animações
  observer: null,

  init() {
    this.setupIntersectionObserver();
    this.setupScrollAnimations();
    this.setupHoverEffects();
  },

  setupIntersectionObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          this.observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observar elementos que devem ser animados
    document.querySelectorAll('.form-card, .page-header').forEach(el => {
      this.observer.observe(el);
    });
  },

  setupScrollAnimations() {
    const handleScroll = Utils.throttle(() => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    }, 16);

    window.addEventListener('scroll', handleScroll);
  },

  setupHoverEffects() {
    // Efeito de hover para cards
    document.querySelectorAll('.form-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Efeito de hover para botões
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        btn.classList.add('hover-lift');
      });

      btn.addEventListener('mouseleave', () => {
        btn.classList.remove('hover-lift');
      });
    });
  },

  // Animação de entrada para elementos
  animateIn(element, animationClass = 'animate-fadeInUp', delay = 0) {
    setTimeout(() => {
      element.classList.add(animationClass);
    }, delay);
  },

  // Animação de saída para elementos
  animateOut(element, callback) {
    element.classList.add('fade-out');
    setTimeout(() => {
      if (callback) callback();
    }, 500);
  }
};

// Gerenciador de Formulários
const FormManager = {
  forms: new Map(),

  init() {
    this.setupFormValidation();
    this.setupFormSubmission();
    this.setupFileInputs();
    this.setupRealTimeValidation();
  },

  setupFormValidation() {
    document.querySelectorAll('form').forEach(form => {
      const formId = form.id || `form-${Date.now()}`;
      this.forms.set(formId, {
        element: form,
        isValid: false,
        fields: new Map()
      });

      // Configurar validação para cada campo
      form.querySelectorAll('input, select, textarea').forEach(field => {
        this.setupFieldValidation(formId, field);
      });
    });
  },

  setupFieldValidation(formId, field) {
    const formData = this.forms.get(formId);
    const fieldName = field.name || field.id;

    formData.fields.set(fieldName, {
      element: field,
      isValid: false,
      rules: this.getValidationRules(field)
    });

    // Eventos de validação
    field.addEventListener('blur', () => this.validateField(formId, fieldName));
    field.addEventListener('input', Utils.debounce(() => {
      this.validateField(formId, fieldName);
    }, CONFIG.debounceDelay));
  },

  getValidationRules(field) {
    const rules = [];

    if (field.required) {
      rules.push({
        type: 'required',
        message: 'Este campo é obrigatório'
      });
    }

    if (field.type === 'email') {
      rules.push({
        type: 'email',
        message: 'Digite um email válido'
      });
    }

    if (field.type === 'number') {
      if (field.min) {
        rules.push({
          type: 'min',
          value: field.min,
          message: `Valor mínimo: ${field.min}`
        });
      }
      if (field.max) {
        rules.push({
          type: 'max',
          value: field.max,
          message: `Valor máximo: ${field.max}`
        });
      }
    }

    if (field.minLength) {
      rules.push({
        type: 'minLength',
        value: field.minLength,
        message: `Mínimo de ${field.minLength} caracteres`
      });
    }

    return rules;
  },

  validateField(formId, fieldName) {
    const formData = this.forms.get(formId);
    const fieldData = formData.fields.get(fieldName);
    const field = fieldData.element;
    const value = field.value.trim();

    let isValid = true;
    let errorMessage = '';

    // Aplicar regras de validação
    for (const rule of fieldData.rules) {
      switch (rule.type) {
        case 'required':
          if (!value) {
            isValid = false;
            errorMessage = rule.message;
          }
          break;
        case 'email':
          if (value && !Utils.isValidEmail(value)) {
            isValid = false;
            errorMessage = rule.message;
          }
          break;
        case 'min':
          if (value && parseFloat(value) < parseFloat(rule.value)) {
            isValid = false;
            errorMessage = rule.message;
          }
          break;
        case 'max':
          if (value && parseFloat(value) > parseFloat(rule.value)) {
            isValid = false;
            errorMessage = rule.message;
          }
          break;
        case 'minLength':
          if (value && value.length < rule.value) {
            isValid = false;
            errorMessage = rule.message;
          }
          break;
      }

      if (!isValid) break;
    }

    // Atualizar estado visual do campo
    this.updateFieldVisualState(field, isValid, errorMessage);
    
    // Atualizar estado do campo
    fieldData.isValid = isValid;
    
    // Verificar se o formulário inteiro é válido
    this.updateFormValidState(formId);

    return isValid;
  },

  updateFieldVisualState(field, isValid, errorMessage) {
    const fieldGroup = field.closest('.form-group');
    let errorElement = fieldGroup.querySelector('.field-error');

    // Remover classes anteriores
    field.classList.remove('valid', 'invalid');

    if (isValid) {
      field.classList.add('valid');
      if (errorElement) {
        errorElement.classList.remove('show');
      }
    } else {
      field.classList.add('invalid');
      
      // Criar ou atualizar elemento de erro
      if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        fieldGroup.appendChild(errorElement);
      }
      
      errorElement.textContent = errorMessage;
      errorElement.classList.add('show');
    }
  },

  updateFormValidState(formId) {
    const formData = this.forms.get(formId);
    const submitBtn = formData.element.querySelector('button[type="submit"]');
    
    let isFormValid = true;
    for (const [, fieldData] of formData.fields) {
      if (!fieldData.isValid) {
        isFormValid = false;
        break;
      }
    }

    formData.isValid = isFormValid;
    
    if (submitBtn) {
      submitBtn.disabled = !isFormValid;
    }
  },

  setupFormSubmission() {
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmit(form);
      });
    });
  },

  async handleFormSubmit(form) {
    const formId = form.id;
    const formData = this.forms.get(formId);
    const submitBtn = form.querySelector('button[type="submit"]');
    const successElement = form.querySelector('.form-success');
    const errorElement = form.querySelector('.form-error');

    // Validar todos os campos antes do envio
    let isFormValid = true;
    for (const [fieldName] of formData.fields) {
      if (!this.validateField(formId, fieldName)) {
        isFormValid = false;
      }
    }

    if (!isFormValid) {
      this.showMessage(errorElement, 'Por favor, corrija os erros antes de enviar.');
      return;
    }

    // Mostrar estado de carregamento
    this.setLoadingState(submitBtn, true);

    try {
      // Simular envio do formulário
      await this.simulateFormSubmission(form);
      
      // Mostrar mensagem de sucesso
      this.showMessage(successElement, 'Formulário enviado com sucesso!');
      
      // Limpar formulário após sucesso
      setTimeout(() => {
        form.reset();
        this.clearFormValidation(formId);
      }, 1000);

    } catch (error) {
      this.showMessage(errorElement, 'Erro ao enviar formulário. Tente novamente.');
    } finally {
      this.setLoadingState(submitBtn, false);
    }
  },

  async simulateFormSubmission(form) {
    // Simular delay de rede
    return new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });
  },

  setLoadingState(button, isLoading) {
    if (isLoading) {
      button.classList.add('loading');
      button.disabled = true;
    } else {
      button.classList.remove('loading');
      button.disabled = false;
    }
  },

  showMessage(element, message) {
    if (!element) return;

    element.textContent = message;
    element.classList.add('show');

    const duration = element.classList.contains('form-error') 
      ? CONFIG.errorMessageDuration 
      : CONFIG.successMessageDuration;

    setTimeout(() => {
      element.classList.remove('show');
    }, duration);
  },

  clearFormValidation(formId) {
    const formData = this.forms.get(formId);
    
    // Limpar estado dos campos
    for (const [, fieldData] of formData.fields) {
      fieldData.element.classList.remove('valid', 'invalid');
      fieldData.isValid = false;
    }

    // Limpar mensagens de erro
    formData.element.querySelectorAll('.field-error').forEach(error => {
      error.classList.remove('show');
    });
  },

  setupFileInputs() {
    document.querySelectorAll('.file-input').forEach(input => {
      input.addEventListener('change', function() {
        const label = this.nextElementSibling;
        const fileName = this.files[0]?.name || 'Clique para selecionar arquivo';
        const textElement = label.querySelector('span');
        if (textElement) {
          textElement.textContent = fileName;
        }
      });
    });
  },

  setupRealTimeValidation() {
    // Validação em tempo real para campos específicos
    document.querySelectorAll('input[type="email"]').forEach(input => {
      input.addEventListener('input', Utils.debounce(() => {
        const isValid = Utils.isValidEmail(input.value);
        input.classList.toggle('valid', isValid && input.value.length > 0);
        input.classList.toggle('invalid', !isValid && input.value.length > 0);
      }, 300));
    });

    // Formatação automática para telefone
    document.querySelectorAll('input[type="tel"]').forEach(input => {
      input.addEventListener('input', function() {
        this.value = Utils.formatPhone(this.value);
      });
    });
  }
};

// Gerenciador de Tema
const ThemeManager = {
  init() {
    this.setupThemeToggle();
    this.loadSavedTheme();
  },

  setupThemeToggle() {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.toggleTheme();
      });
    }
  },

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  },

  loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
};

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar todos os gerenciadores
  AnimationManager.init();
  FormManager.init();
  ThemeManager.init();

  // Configurar elementos flutuantes
  createFloatingElements();

  // Configurar navegação suave
  setupSmoothNavigation();

  console.log('🚀 Sistema de formulários profissionais inicializado!');
});

// Criar elementos flutuantes no fundo
function createFloatingElements() {
  const container = document.querySelector('.floating-elements');
  if (!container) return;

  for (let i = 0; i < 6; i++) {
    const element = document.createElement('div');
    element.className = 'floating-element';
    element.style.left = Math.random() * 100 + '%';
    element.style.top = Math.random() * 100 + '%';
    element.style.animationDelay = Math.random() * 6 + 's';
    container.appendChild(element);
  }
}

// Configurar navegação suave
function setupSmoothNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        Utils.smoothScrollTo(target);
      }
    });
  });
}

// Exportar para uso global
window.FormManager = FormManager;
window.AnimationManager = AnimationManager;
window.Utils = Utils;
