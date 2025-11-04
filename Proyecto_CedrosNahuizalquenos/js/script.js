// ================================
// INICIALIZACIÓN
// ================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Cedros Nahuizalqueños - Sitio Web Cargado');
    
    // Inicializar funciones
    initNavbar();
    initGalleryFilters();
    initContactForm();
    initScrollAnimations();
    initTooltips();
});

// ================================
// NAVBAR - Scroll Effect
// ================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg');
            } else {
                navbar.classList.remove('shadow-lg');
            }
        });
    }
    
    // Cerrar navbar en móvil al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
}

// ================================
// FILTROS DE GALERÍA
// ================================
function initGalleryFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-outline-primary');
            });
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            this.classList.remove('btn-outline-primary');
            this.classList.add('btn-primary');
            
            // Obtener el filtro seleccionado
            const filter = this.getAttribute('data-filter');
            
            // Filtrar items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all') {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else if (category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
            
            // Scroll suave hacia la galería
            const galleryContainer = document.getElementById('gallery-container');
            if (galleryContainer) {
                setTimeout(() => {
                    galleryContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    });
    
    // Aplicar transición CSS a los items de galería
    galleryItems.forEach(item => {
        item.style.transition = 'all 0.3s ease';
    });
}

// ================================
// FORMULARIO DE CONTACTO
// ================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validación de Bootstrap
        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add('was-validated');
            
            // Scroll al primer campo inválido
            const firstInvalid = form.querySelector(':invalid');
            if (firstInvalid) {
                firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstInvalid.focus();
            }
            return;
        }
        
        form.classList.add('was-validated');
        
        // Obtener datos del formulario
        const formData = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            telefono: document.getElementById('telefono').value,
            departamento: document.getElementById('departamento').value,
            tipoProducto: document.getElementById('tipoProducto').value,
            color: document.querySelector('input[name="color"]:checked')?.value || 'No especificado',
            mensaje: document.getElementById('mensaje').value
        };
        
        // Simular envío del formulario
        submitForm(formData);
    });
    
    // Validación en tiempo real
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (form.classList.contains('was-validated')) {
                this.classList.toggle('is-invalid', !this.checkValidity());
                this.classList.toggle('is-valid', this.checkValidity());
            }
        });
        
        input.addEventListener('input', function() {
            if (form.classList.contains('was-validated')) {
                this.classList.toggle('is-invalid', !this.checkValidity());
                this.classList.toggle('is-valid', this.checkValidity());
            }
        });
    });
}

function submitForm(data) {
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('button[type="submit"]');
    const successMessage = document.getElementById('successMessage');
    
    // Deshabilitar botón y mostrar loading
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';
    
    // Simular envío (en producción, aquí iría la petición AJAX)
    setTimeout(() => {
        console.log('Datos del formulario:', data);
        
        // Mostrar mensaje de éxito
        successMessage.style.display = 'block';
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Resetear formulario
        form.reset();
        form.classList.remove('was-validated');
        
        // Restaurar botón
        submitButton.disabled = false;
        submitButton.innerHTML = '<i class="fas fa-paper-plane me-2"></i>Enviar Consulta';
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
        
        // En producción, aquí enviarías los datos a un servidor
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Manejar respuesta
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        // });
        
    }, 2000);
}

// ================================
// ANIMACIONES DE SCROLL
// ================================
function initScrollAnimations() {
    // Observer para animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos con clase .card
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// ================================
// TOOLTIPS DE BOOTSTRAP
// ================================
function initTooltips() {
    // Inicializar tooltips si Bootstrap está disponible
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
}

// ================================
// SMOOTH SCROLL PARA NAVEGACIÓN
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ================================
// BOTÓN VOLVER ARRIBA (Opcional)
// ================================
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ================================
// VALIDACIÓN DE TELÉFONO
// ================================
const telefonoInput = document.getElementById('telefono');
if (telefonoInput) {
    telefonoInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        // Formato XXXX-XXXX
        if (value.length > 4) {
            value = value.slice(0, 4) + '-' + value.slice(4, 8);
        }
        
        e.target.value = value;
    });
}

// ================================
// PREVENIR ENVÍO MÚLTIPLE DEL FORMULARIO
// ================================
let formSubmitting = false;

document.addEventListener('submit', function(e) {
    if (formSubmitting) {
        e.preventDefault();
        return false;
    }
    
    const form = e.target;
    if (form.id === 'contactForm') {
        formSubmitting = true;
        setTimeout(() => {
            formSubmitting = false;
        }, 3000);
    }
});

// ================================
// RESPONSIVE UTILITIES
// ================================
function isMobile() {
    return window.innerWidth <= 768;
}

function isTablet() {
    return window.innerWidth > 768 && window.innerWidth <= 1024;
}

function isDesktop() {
    return window.innerWidth > 1024;
}

// ================================
// LAZY LOADING PARA IMÁGENES (Opcional)
// ================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ================================
// CONSOLE LOG DE BIENVENIDA
// ================================
console.log('%c🪵 Cedros Nahuizalqueños 🪵', 'font-size: 20px; font-weight: bold; color: #8B4513;');
console.log('%cMuebles artesanales de madera desde 2020', 'font-size: 12px; color: #666;');
console.log('%cDesarrollado por: Diego Castillo, Adriana Fuentes, Kevin Grande, Michelle Zelada', 'font-size: 10px; color: #999;');
console.log('%cUniversidad de El Salvador - Comercio Electrónico T.E.D', 'font-size: 10px; color: #999;');

// ================================
// EXPORT PARA REUTILIZACIÓN
// ================================
// Si usas módulos, puedes exportar funciones
// export { initContactForm, initGalleryFilters, isMobile, isTablet, isDesktop };
