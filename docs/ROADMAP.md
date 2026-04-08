# 🗺️ Hoja de Ruta (Roadmap) - MiBaloons

Este documento detalla las funcionalidades actuales del prototipo y las futuras mejoras recomendadas para convertirlo en una plataforma funcional completa.

---

## ✅ Fase 1: Prototipo Inicial (Actual)
*   [x] Estructura base con Vite y Tailwind v4.
*   [x] Menú lateral (Sidebar) y de navegación móvil (BottomNav).
*   [x] Sección de categorías responsiva (Grid 2/3/5).
*   [x] Integración de animaciones con AOS.
*   [x] Banner promocional.
*   [x] Listado de productos estáticos.

---

## 🏗️ Fase 2: Interactividad y UX (Siguiente)
*   [ ] **Filtrado de productos**: Hacer que al hacer clic en una categoría, se filtren los productos mostrados.
*   [ ] **Vista de detalles del producto**: Crear una página o modal con información detallada de cada globo/decoración.
*   [ ] **Buscador funcional**: Implementar la barra de búsqueda en el header para filtrar por nombre de producto.
*   [ ] **Carrito de compras (Simulado)**: Permitir añadir productos a un estado local y ver el total en una sección lateral.
*   [ ] **Notificaciones**: Añadir avisos tipo "toast" al agregar productos al carrito.

---

## 🛠️ Fase 3: Mejoras Técnicas y Backend (Largo Plazo)
*   [ ] **Persistencia de datos**: Conectar con una base de datos real (e.g. Firebase, Supabase) o una API REST.
*   [ ] **Autenticación**: Registro e inicio de sesión de clientes.
*   [ ] **Optimización SEO**: Asegurar que cada página dinámica tenga sus meta-etiquetas correctas.
*   [ ] **Modo Oscuro (Dark Mode)**: Implementar el switch de modo oscuro usando las capacidades de Tailwind.
*   [ ] **Testing**: Implementar pruebas unitarias para las funciones de utilidad en `src/utiles/`.

---

## 💡 Ideas de Funcionalidades Premium
- **Personalizador de Globos**: Una herramienta visual para elegir colores y mensajes personalizados en globos de helio.
- **Calculadora de Eventos**: Sugerir cantidad de globos según el tamaño del lugar ingresado por el usuario.
- **Galería de Instagram**: Feed integrado para mostrar decoraciones reales de clientes.

---

## 📝 Notas de Desarrollo
> [!TIP]
> Priorizar la **Fase 2** enfocándose en el filtrado de categorías, ya que es la funcionalidad más esperada en este tipo de plataformas de catálogo.
