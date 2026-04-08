# 🏗️ Guía del Desarrollador - MiBaloons

Esta guía explica los patrones de diseño y arquitectura utilizados en el prototipo de MiBaloons para mantener la consistencia y escalabilidad del código.

---

## 🧩 Sistema de Componentes

Aunque el proyecto no utiliza un framework como React o Vue, seguimos un patrón de **Componentes Funcionales Basados en Strings**.

### Estructura de un Componente
Cada componente debe exportar una función que devuelva un `template string` con HTML.

```javascript
// src/components/MiComponente.js
export function MiComponente({ titulo, descripcion }) {
  return `
    <div class="p-4 bg-white rounded-xl shadow-sm">
      <h2 class="text-xl font-bold text-primary">${titulo}</h2>
      <p class="text-gray-600">${descripcion}</p>
    </div>
  `;
}
```

### Renderizado Dinámico
Para listas de datos, utilizamos `.map()` y `.join("")` para generar e inyectar el HTML:

```javascript
const items_html = items.map(item => MiComponente(item)).join("");
```

---

## 📂 Gestión de Datos

Los datos que alimentan la interfaz se encuentran en la carpeta `src/data/`. 
- **Separación de responsabilidades**: Nunca escribas datos directamente en el componente si estos pueden cambiar (ej. precios, nombres de categorías).
- **Importación**: Importa los datos en la página (`src/pages/*.js`) y pásalos a los componentes como parámetros.

---

## ⚡ Interactividad y Eventos

Dado que el HTML se genera dinámicamente, los eventos de JavaScript (click, hover, etc.) deben manejarse cuidadosamente:

1. **Scripts en `src/utiles/`**: Crea funciones que busquen elementos en el DOM después de que el HTML haya sido inyectado.
2. **Inicialización**: Llama a estas funciones en el `init()` de `main.js` o justo después de renderizar una página.

Ejemplo del Sidebar:
```javascript
// src/utiles/sidebarToggle.js
export function initSidebar() {
  const btn = document.getElementById('toggle-btn');
  btn?.addEventListener('click', () => { /* ... */ });
}
```

---

## 🎨 Estilos y Diseño

- **Tailwind CSS v4**: Utilizamos utilidades de Tailwind para el 99% de los estilos. Evita escribir CSS personalizado en `style.css` a menos que sea estrictamente necesario.
- **Iconos**: Usamos **Font Awesome**. Busca los iconos en su [sitio oficial](https://fontawesome.com/icons) e insértalos usando clases como `<i class="fa-solid fa-balloon"></i>`.
- **Animaciones**: Usamos **AOS**. Para que funcionen en contenido inyectado dinámicamente, recuerda llamar a `AOS.refresh()` tras el renderizado.

---

## 🚀 Mejores Prácticas

1. **Nombres de Clases**: Sigue el orden de Tailwind (Layout > Espaciado > Tipografía > Colores).
2. **Responsividad**: Diseña siempre pensando en *Mobile First* usando los prefijos `md:`, `lg:`, etc.
3. **Limpieza**: Si un componente se vuelve muy largo (más de 100 líneas), divídelo en subcontextos.
