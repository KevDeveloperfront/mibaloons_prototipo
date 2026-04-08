import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { renderHome } from './pages/home.js'

// Inicializar AOS
AOS.init({
  duration: 1000,
  once: true,
})

// Punto de entrada
const app = document.getElementById("app")

function init() {
  renderHome(app)

  // IMPORTANTE: refrescar AOS después de render dinámico
  setTimeout(() => {
    AOS.refresh()
  }, 100)
}

init()