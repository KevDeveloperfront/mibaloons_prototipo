# 🎨 Guía de Estilo Visual - MiBaloons

Esta guía define los estándares visuales para asegurar que el prototipo de MiBaloons mantenga una estética premium, moderna y coherente.

---

## 🖌️ Paleta de Colores (Referencia)

El proyecto utiliza una combinación de colores suaves con acentos vibrantes, enfocados en la categoría de eventos y celebraciones.

- **Primario (Pink/Rose)**: El color de la marca, usado en botones, iconos destacados y estados activos.
  - Clase sugerida: `text-pink-500` / `bg-pink-500`.
  - Nota: Si usas la clase `text-primary`, asegúrate de que esté configurada en el tema de Tailwind CSS.
- **Grises (Neutrales)**: Usados para textos secundarios, bordes y fondos sutiles.
  - Fondo de página: `bg-white` o `bg-gray-50`.
  - Texto principal: `text-gray-800`.
  - Texto secundario: `text-gray-500` / `text-gray-400`.
- **Gradients**: Se utilizan en banners y efectos de hover para dar profundidad. 
  - Ejemplo: `bg-linear-to-r from-pink-500 to-rose-400`.

---

## 🅰️ Tipografía

- **Fuentes Base**: Actualmente se utilizan fuentes sans-serif del sistema (Inter/Roboto según disponibilidad del navegador).
- **Fuentes Especiales** (Disponibles vía clase o Tailwind):
  - **Meow Script** (`font-meow` / `.meow-script-regular`): Fuente cursiva para acentos y palabras específicas.
  - **Alumni Sans Pinstripe** (`font-alumni` / `.alumni-sans-pinstripe-regular` / `.alumni-sans-pinstripe-regular-italic`): Fuente estilizada elegante.
- **Jerarquía**:
  - H1 (Bienvenida): `text-3xl font-semibold`.
  - H2 (Secciones): `text-2xl font-extrabold text-gray-800`.
  - Cuerpo: `text-[14px]` o `text-sm` para descripciones.

---

## ✨ Estética de UI

- **Bordes Redondeados (Borderradius)**:
  - Tarjetas grandes: `rounded-3xl` (Suave y amigable).
  - Componentes pequeños (botones, chips): `rounded-xl` o `rounded-2xl`.
- **Sombras (Shadows)**:
  - Usamos sombras difusas y sutiles para elevar elementos.
  - Tarjetas: `shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]`.
  - Hover: `shadow-xl`.
- **Micro-interacciones**: 
  - Todos los botones y enlaces deben tener estados de hover: `transition-all duration-300 transform active:scale-95`.
  - Escala en hover para tarjetas: `hover:scale-[1.02]`.

---

## 🖼️ Iconografía y Gráficos

- **Iconos**: Utiliza **FontAwesome 6.x** siempre que sea posible.
- **Imágenes**: 
  - Las imágenes del catálogo deben tener siempre la misma relación de aspecto (`aspect-square` es preferible para productos).
  - Usa `object-cover` para evitar distorsiones.

---

## 📏 Layout y Grid

- **Mobile First**: El diseño principal está optimizado para dispositivos móviles con una columna principal.
- **Grid de categorías**:
  - Desktop (lg): 5 columnas (`lg:grid-cols-5`).
  - Tablet (md): 3 columnas (`md:grid-cols-3`).
  - Mobile: 2 columnas (`grid-cols-2`).
- **Contenedor**: Se utiliza un `max-w-5xl mx-auto` para asegurar que el contenido se vea centrado y balanceado en pantallas grandes.
