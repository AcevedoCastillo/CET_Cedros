# 🪵 Cedros Nahuizalqueños - Sitio Web

## 📋 Descripción del Proyecto
Sitio web de comercio electrónico desarrollado para Cedros Nahuizalqueños, una microempresa salvadoreña dedicada a la fabricación y comercialización de muebles de madera personalizados.

**Universidad:** Universidad de El Salvador  
**Facultad:** Ingeniería y Arquitectura  
**Escuela:** Ingeniería en Sistemas Informáticos  
**Materia:** Comercio Electrónico T.E.D  
**Ciclo:** II-2025

---

## 👥 Equipo de Desarrollo

| Nombre | Carnet | Rol |
|--------|--------|-----|
| Diego Pablo Castillo Acevedo | CA21016 | Desarrollador Frontend |
| Adriana Estefany Fuentes Olmedo | FO21001 | Analista de Negocio |
| Kevin Armando Grande Chavez | GC20029 | Desarrollador Backend |
| Michelle Alexandra Zelada Flores | ZF21001 | Gestora de Proyecto |

**Catedrática:** Licda. Patricia Azucena Rivas Opico

---

## 📁 Estructura de Archivos y Carpetas

```
cedros-nahuizalquenos/
│
├── index.html              # Página principal
├── galeria.html            # Página de galería de productos
├── creadores.html          # Página del equipo de desarrollo
├── contacto.html           # Página de contacto con formulario
│
├── css/
│   └── styles.css          # Estilos CSS personalizados
│
├── js/
│   └── script.js           # JavaScript para interactividad
│
├── images/                 # 📸 CREAR ESTA CARPETA
│   ├── productos/          # Imágenes de comedores
│   ├── equipo/             # Fotos de los miembros del equipo
│   └── otros/              # Otras imágenes del sitio
│
└── README.md               # Este archivo
```

---

## 🚀 Instrucciones de Instalación

### Paso 1: Organizar los Archivos
1. Crea una carpeta principal llamada `cedros-nahuizalquenos`
2. Coloca todos los archivos HTML en la raíz de esta carpeta
3. Crea las subcarpetas `css`, `js` e `images`
4. Coloca los archivos correspondientes en cada carpeta

### Paso 2: Estructura Completa
```
cedros-nahuizalquenos/
│
├── index.html
├── galeria.html
├── creadores.html
├── contacto.html
├── README.md
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
└── images/
    ├── productos/
    │   ├── comedor-4-sillas-cafe.jpg
    │   ├── comedor-4-sillas-natural.jpg
    │   ├── comedor-4-sillas-negro.jpg
    │   ├── comedor-6-sillas-cafe.jpg
    │   ├── comedor-6-sillas-natural.jpg
    │   ├── comedor-6-sillas-negro.jpg
    │   ├── comedor-8-sillas-cafe.jpg
    │   ├── comedor-8-sillas-natural.jpg
    │   ├── comedor-8-sillas-negro.jpg
    │   ├── closet.jpg
    │   ├── pantry.jpg
    │   └── otros-muebles.jpg
    │
    ├── equipo/
    │   ├── diego-castillo.jpg
    │   ├── adriana-fuentes.jpg
    │   ├── kevin-grande.jpg
    │   └── michelle-zelada.jpg
    │
    └── otros/
        ├── logo.png
        └── hero-bg.jpg
```

### Paso 3: Abrir el Sitio Web
1. **Opción 1 (Recomendada):** Usa un servidor local
   - Instala Live Server en VS Code
   - Click derecho en `index.html` → "Open with Live Server"
   
2. **Opción 2:** Abre directamente en el navegador
   - Doble click en `index.html`
   - El sitio se abrirá en tu navegador predeterminado

---

## ⚙️ Funcionalidades Implementadas

### ✅ Requisitos Cumplidos

1. **✔️ Diseño del Sitio Web**
   - Diseño moderno y profesional
   - Colores corporativos de la empresa
   - Interfaz intuitiva y fácil de usar

2. **✔️ Menú de Navegación**
   - Menú superior fijo
   - Responsive con menú hamburguesa en móviles
   - Enlaces funcionales a todas las páginas

3. **✔️ Galería de Imágenes**
   - 12 productos mostrados
   - Filtros por categoría (4, 6, 8 sillas, otros)
   - Diseño tipo tarjetas con información
   - Efectos hover y animaciones

4. **✔️ Página de Creadores**
   - Información de 4 miembros del equipo
   - Foto, nombre, carnet y rol de cada uno
   - Datos del proyecto académico
   - Enlaces a redes sociales

5. **✔️ Página de Contacto**
   - Formulario completo con validación
   - Campos: nombre, email, teléfono, departamento, tipo de producto, mensaje
   - Validación en tiempo real
   - Diseño responsive

6. **✔️ Uso de Responsive**
   - Adaptable a PC (1920px+)
   - Adaptable a Tablet (768px - 1024px)
   - Adaptable a Smartphone (320px - 767px)
   - Probado en múltiples dispositivos

7. **✔️ Uso Adecuado de Elementos**
   - Menús de navegación
   - Imágenes con placeholders
   - Textos optimizados
   - Iconos de Font Awesome
   - Animaciones CSS
   - Bootstrap 5.3

---

## 🎨 Personalización

### Agregar Imágenes Reales

#### 1. Productos (Galería)
Reemplaza los placeholders en `galeria.html`:
```html
<!-- ANTES (placeholder) -->
<div class="placeholder-img-gallery">
    <i class="fas fa-chair fa-4x text-white"></i>
</div>

<!-- DESPUÉS (imagen real) -->
<img src="images/productos/comedor-4-sillas-cafe.jpg" 
     class="img-fluid" 
     alt="Comedor 4 Sillas Café">
```

#### 2. Equipo (Creadores)
Reemplaza los placeholders en `creadores.html`:
```html
<!-- ANTES (placeholder) -->
<div class="placeholder-team-img">
    <i class="fas fa-user fa-5x text-white"></i>
</div>

<!-- DESPUÉS (imagen real) -->
<img src="images/equipo/diego-castillo.jpg" 
     class="img-fluid" 
     alt="Diego Pablo Castillo">
```

### Agregar Mapa en Contacto

En `contacto.html`, busca la sección del mapa y reemplaza:
```html
<!-- Busca esta sección -->
<div class="placeholder-map">
    <!-- contenido del placeholder -->
</div>

<!-- Reemplaza con un iframe de Google Maps -->
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." 
    width="100%" 
    height="400" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

### Actualizar Información de Contacto

En todos los archivos HTML, busca y reemplaza:
- `+503 XXXX-XXXX` → Número de teléfono real
- `info@cedrosnahuizalquenos.com` → Email real
- Enlaces de redes sociales (Facebook, Instagram, WhatsApp)

---

## 🌐 Tecnologías Utilizadas

- **HTML5:** Estructura semántica
- **CSS3:** Estilos personalizados y animaciones
- **Bootstrap 5.3:** Framework CSS responsive
- **JavaScript (Vanilla):** Interactividad
- **Font Awesome 6.4:** Iconos
- **Google Fonts:** Tipografías (opcional)

---

## 📱 Responsive Breakpoints

| Dispositivo | Ancho | Características |
|-------------|-------|-----------------|
| **Desktop** | > 1200px | Layout completo, 3-4 columnas |
| **Laptop** | 992px - 1199px | 2-3 columnas |
| **Tablet** | 768px - 991px | 2 columnas, menú colapsable |
| **Móvil** | < 768px | 1 columna, menú hamburguesa |

---

## 🔧 Funcionalidades JavaScript

1. **Navegación:**
   - Menú responsive con efecto scroll
   - Cierre automático del menú en móvil

2. **Galería:**
   - Filtros de productos por categoría
   - Animaciones de transición
   - Scroll automático al contenido

3. **Formulario de Contacto:**
   - Validación HTML5 + JavaScript
   - Validación en tiempo real
   - Formato automático de teléfono
   - Prevención de envíos múltiples
   - Mensajes de éxito/error

4. **Animaciones:**
   - Scroll animations con Intersection Observer
   - Efectos hover en tarjetas
   - Transiciones suaves

---

## 🎯 Características Destacadas

### ✨ Diseño
- ✅ Paleta de colores profesional basada en madera
- ✅ Tipografía legible y moderna
- ✅ Espaciado y márgenes consistentes
- ✅ Imágenes con aspect ratio correcto

### 🚀 Performance
- ✅ CSS optimizado
- ✅ JavaScript modular
- ✅ Lazy loading preparado
- ✅ Código limpio y comentado

### ♿ Accesibilidad
- ✅ Etiquetas semánticas HTML5
- ✅ Alt text en imágenes
- ✅ Contraste de colores adecuado
- ✅ Navegación por teclado

### 📱 Mobile First
- ✅ Diseño responsive completo
- ✅ Touch-friendly buttons
- ✅ Menú hamburguesa funcional
- ✅ Optimizado para pantallas pequeñas

---

## 📝 Notas Importantes

### ⚠️ RECORDATORIOS:

1. **Imágenes:**
   - Las imágenes actuales son PLACEHOLDERS
   - Debes reemplazarlas con fotos reales de los productos
   - Usa imágenes de alta calidad (mínimo 800x600px)
   - Optimiza el peso de las imágenes (máximo 500KB por imagen)

2. **Información de Contacto:**
   - Actualiza todos los números de teléfono
   - Actualiza correos electrónicos
   - Actualiza enlaces de redes sociales

3. **Fotos del Equipo:**
   - Agrega las fotos reales de cada miembro
   - Mantén un formato consistente (preferible cuadrado)
   - Usa fondo neutro para profesionalismo

4. **Mapa:**
   - Agrega la ubicación real en Google Maps
   - Obtén el código embed de Google Maps
   - Reemplaza el placeholder en contacto.html

---

## 🔗 Enlaces Útiles

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Maps Embed](https://www.google.com/maps)
- [Optimizador de Imágenes](https://tinypng.com/)

---

## 📧 Soporte

Para soporte o consultas sobre el proyecto:
- **Email Académico:** [Correo de contacto del equipo]
- **Universidad:** Universidad de El Salvador
- **Materia:** Comercio Electrónico T.E.D

---

## 📜 Licencia

Este proyecto es académico y fue desarrollado como parte del curso de Comercio Electrónico T.E.D en la Universidad de El Salvador.

**Derechos reservados © 2025 - Cedros Nahuizalqueños, S.A. de C.V.**

---

## ✅ Checklist de Implementación

Antes de entregar el proyecto, verifica:

- [ ] Todos los archivos están organizados correctamente
- [ ] Las imágenes de productos están reemplazadas
- [ ] Las fotos del equipo están actualizadas
- [ ] La información de contacto está completa
- [ ] El formulario funciona correctamente
- [ ] Los filtros de galería funcionan
- [ ] El sitio es responsive en todos los dispositivos
- [ ] Los enlaces de navegación funcionan
- [ ] No hay errores en la consola del navegador
- [ ] El código está limpio y comentado
- [ ] Se probó en Chrome, Firefox y Safari
- [ ] Se probó en móvil, tablet y desktop

---

**🎉 ¡Éxito con tu proyecto!**

Desarrollado con ❤️ por el equipo de Cedros Nahuizalqueños  
Universidad de El Salvador - 2025
