# 🎈 MiBaloons - Prototipo Web

![MiBaloons Logo](../public/logo.svg) <!-- Ajustar si hay un logo real -->

Este repositorio contiene el prototipo de la plataforma **MiBaloons**, una aplicación web moderna diseñada para la gestión y visualización de globos y decoraciones. El proyecto está construido utilizando **Vite** para un desarrollo rápido y **Tailwind CSS** para un diseño responsivo y elegante.

---

## 🛠️ Tecnologías Utilizadas

- **[Vite](https://vitejs.dev/)**: Herramienta de compilación rápida para proyectos web modernos.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework de CSS centrado en utilidades para un diseño ágil y consistente.
- **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)**: Biblioteca para animaciones al hacer scroll.
- **JavaScript Moderno (ESM)**: Uso de módulos nativos de JavaScript.

---

## 📂 Estructura del Proyecto

La estructura actual sigue las mejores prácticas para proyectos basados en Vite:

```text
miBaloons/
├── docs/                   # Documentación y plantillas (este directorio)
├── public/                 # Archivos estáticos (imágenes, iconos, etc.)
├── src/                    # Código fuente de la aplicación
│   ├── assets/             # Recursos importables (imágenes, fuentes)
│   ├── components/         # Componentes de UI reutilizables (ej. Sidebar)
│   ├── data/               # Datos estáticos y configuraciones (ej. Categorías)
│   ├── pages/              # Módulos que representan secciones de la página
│   ├── utiles/             # Funciones de utilidad y scripts auxiliares
│   ├── main.js             # Punto de entrada de JavaScript
│   └── style.css           # Estilos base y directivas de Tailwind
├── index.html              # Plantilla HTML principal
├── package.json            # Dependencias y scripts del proyecto
├── vite.config.js          # Configuración de Vite y plugins
└── .gitignore              # Archivos excluidos del control de versiones
```

---

## 🚀 Guía de Inicio Rápido

Sigue estos pasos para poner en marcha el proyecto localmente:

### Pre-requisitos
- Tener instalado [Node.js](https://nodejs.org/) (versión LTS recomendada).

### Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/NJ-Kev/miBaloons.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd miBaloons
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

### Desarrollo
Para iniciar el servidor de desarrollo local con recarga en caliente:
```bash
npm run dev
```
Accede a `http://localhost:5173` (o el puerto que indique la terminal).

### Producción
Para generar el paquete de producción optimizado:
```bash
npm run build
```
Los archivos finales se generarán en la carpeta `dist/`.

---

## 🎨 Guía de Estilo

El proyecto utiliza **Tailwind CSS** para todo el diseño. Los estilos globales se encuentran en `src/style.css`, pero la mayor parte del diseño se define directamente en las clases de los componentes utilizando utilidades de Tailwind.

Para animaciones, asegúrate de inicializar **AOS** en tu script principal:
```javascript
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
```

---

## 📝 Contribución

Si deseas contribuir, consulta la plantilla de Pull Request en la carpeta `docs/` para asegurar que tu contribución siga los estándares del proyecto.
