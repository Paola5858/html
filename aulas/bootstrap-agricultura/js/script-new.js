// ===== MODERN AGRICULTURAL BOOTSTRAP SITE - JAVASCRIPT ===== //

// Estado global
let currentTheme = 'light';
let isLoading = true;

// ===== INICIALIZAÇÃO ===== //
document.addEventListener('DOMContentLoaded', () => {
    initializeLoader();
    initializeScrollProgress();
    initializeThemeToggle();
    initializeColorBubbles();
    initializeComponentCards();
    initializeSidebar();
    initializeScrollAnimations();
    initializeEasterEggs();
});

// ===== LOADER ===== //
function initializeLoader() {
    const loader = document.getElementById('loader');
    
    // Simula carregamento com carinho
    setTimeout(() => {
        loader.classList.add('hidden');
        isLoading = false;
        
        // Remove loader do DOM após animação
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 2000);
}

// ===== SCROLL PROGRESS ===== //
function initializeScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = `${Math.min(scrolled, 100)}%`;
    });
}

// ===== THEME TOGGLE ===== //
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        // Animação morphing do ícone
        themeIcon.style.transform = 'scale(0)';
        
        setTimeout(() => {
            themeIcon.textContent = currentTheme === 'light' ? '🌞' : '🌙';
            themeIcon.style.transform = 'scale(1)';
        }, 200);
        
        // Feedback visual
        showToast(`tema ${currentTheme === 'light' ? 'claro' : 'escuro'} ativado! ✨`);
    });
}

// ===== PALETA DE CORES ORGÂNICA ===== //
function initializeColorBubbles() {
    const colorBubbles = document.querySelectorAll('.color-bubble');
    
    colorBubbles.forEach(bubble => {
        // Animação de entrada escalonada
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
                    entry.target.classList.add('animate-in');
                }
            });
        });
        
        observer.observe(bubble);
        
        // Click para copiar cor
        bubble.addEventListener('click', () => {
            const hex = bubble.dataset.hex;
            copyToClipboard(hex);
            
            // Animação de feedback
            bubble.style.transform = 'scale(0.95)';
            setTimeout(() => {
                bubble.style.transform = '';
            }, 150);
            
            showToast(`cor ${hex} copiada! 🎨`);
        });
        
        // Efeito parallax suave no mouse
        bubble.addEventListener('mousemove', (e) => {
            const rect = bubble.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            const moveX = (x - 0.5) * 10;
            const moveY = (y - 0.5) * 10;
            
            bubble.style.transform = `translateY(-10px) scale(1.05) rotateX(${moveY}deg) rotateY(${moveX}deg)`;
        });
        
        bubble.addEventListener('mouseleave', () => {
            bubble.style.transform = '';
        });
    });
}

// ===== COMPONENTES INTERATIVOS ===== //
function initializeComponentCards() {
    const componentCards = document.querySelectorAll('.component-card');
    
    componentCards.forEach(card => {
        // Animação de entrada
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
                    entry.target.classList.add('slide-up');
                }
            });
        });
        
        observer.observe(card);
        
        // Efeito hover com sombra colorida
        const color = card.dataset.color;
        card.addEventListener('mouseenter', () => {
            addColoredShadow(card, color);
        });
        
        card.addEventListener('mouseleave', () => {
            removeColoredShadow(card);
        });
    });
}

// ===== MOSTRAR COMPONENTE ===== //
function showComponent(componentName) {
    const demo = document.getElementById(`${componentName}-demo`);
    const allDemos = document.querySelectorAll('.component-demo');
    
    // Fecha outros demos
    allDemos.forEach(d => {
        if (d !== demo) {
            d.classList.remove('active');
        }
    });
    
    // Toggle do demo atual
    demo.classList.toggle('active');
    
    // Scroll suave para o demo se estiver abrindo
    if (demo.classList.contains('active')) {
        setTimeout(() => {
            demo.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }, 300);
    }
}

// ===== SIDEBAR ===== //
function initializeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.hamburger');
    
    // Overlay para fechar sidebar
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1001;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    `;
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', closeSidebar);
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.sidebar-overlay');
    
    sidebar.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    if (sidebar.classList.contains('active')) {
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
    } else {
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
        document.body.style.overflow = '';
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.sidebar-overlay');
    
    sidebar.classList.remove('active');
    hamburger.classList.remove('active');
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
    document.body.style.overflow = '';
}

// ===== SCROLL ANIMATIONS ===== //
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observa elementos para animação
    document.querySelectorAll('.section-header, .component-card, .color-bubble').forEach(el => {
        observer.observe(el);
    });
}

// ===== EASTER EGGS ===== //
function initializeEasterEggs() {
    const tractorEmoji = document.getElementById('tractor-emoji');
    let clickCount = 0;
    
    tractorEmoji.addEventListener('click', () => {
        clickCount++;
        
        if (clickCount === 5) {
            // Trator atravessa a tela
            createTractorAnimation();
            clickCount = 0;
        }
        
        // Animação de bounce no clique
        tractorEmoji.style.animation = 'none';
        setTimeout(() => {
            tractorEmoji.style.animation = 'tractorBounce 3s ease-in-out infinite';
        }, 100);
    });
    
    // Elementos flutuantes no hero
    createFloatingElements();
}

function createTractorAnimation() {
    const tractor = document.createElement('div');
    tractor.textContent = '🚜💨';
    tractor.style.cssText = `
        position: fixed;
        top: 50%;
        left: -100px;
        font-size: 3rem;
        z-index: 9999;
        animation: tractorDrive 3s linear;
        pointer-events: none;
    `;
    
    document.body.appendChild(tractor);
    
    setTimeout(() => {
        tractor.remove();
    }, 3000);
}

function createFloatingElements() {
    const hero = document.querySelector('.hero');
    const elements = ['🌱', '🌾', '🍃', '🌻', '🦋'];
    
    setInterval(() => {
        if (isLoading) return;
        
        const element = document.createElement('div');
        element.textContent = elements[Math.floor(Math.random() * elements.length)];
        element.style.cssText = `
            position: absolute;
            font-size: 1.5rem;
            opacity: 0.6;
            pointer-events: none;
            animation: floatUp 4s ease-out forwards;
            left: ${Math.random() * 100}%;
            bottom: 0;
        `;
        
        hero.appendChild(element);
        
        setTimeout(() => {
            element.remove();
        }, 4000);
    }, 3000);
}

// ===== UTILITÁRIOS ===== //
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback para navegadores antigos
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

function showToast(message) {
    const toast = document.getElementById('copyToast');
    const toastBody = toast.querySelector('.toast-body');
    
    toastBody.textContent = message;
    
    // Bootstrap toast
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
}

function addColoredShadow(element, color) {
    const colors = {
        success: '25, 135, 84',
        info: '13, 202, 240',
        warning: '255, 193, 7',
        terroso: '253, 126, 20',
        light: '108, 117, 125'
    };
    
    const rgb = colors[color] || colors.success;
    element.style.boxShadow = `0 20px 40px rgba(${rgb}, 0.3)`;
}

function removeColoredShadow(element) {
    element.style.boxShadow = '';
}

// ===== ANIMAÇÕES CSS DINÂMICAS ===== //
const style = document.createElement('style');
style.textContent = `
    @keyframes tractorDrive {
        0% { transform: translateX(-100px); }
        100% { transform: translateX(calc(100vw + 100px)); }
    }
    
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.6;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes animate-in {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-in {
        animation: animate-in 0.8s ease-out forwards;
    }
    
    .slide-up {
        animation: animate-in 0.6s ease-out forwards;
    }
`;
document.head.appendChild(style);

// ===== PERFORMANCE ===== //
// Throttle para scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplica throttle no scroll
window.addEventListener('scroll', throttle(() => {
    // Atualiza header no scroll
    const header = document.querySelector('.header-modern');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}, 16));

// ===== ACESSIBILIDADE ===== //
// Suporte a navegação por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSidebar();
        
        // Fecha demos abertos
        document.querySelectorAll('.component-demo.active').forEach(demo => {
            demo.classList.remove('active');
        });
    }
});

// Foco visível para navegação por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// ===== LAZY LOADING PARA PERFORMANCE ===== //
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

console.log('🌾 Site agrícola carregado com carinho! Feito por uma aluna criativa. 🚜');