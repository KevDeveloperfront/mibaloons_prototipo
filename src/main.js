import './style.css'

// Selección del contenedor principal
import { renderHome } from "./pages/home.js";

const app = document.getElementById("app");

function init() {
  renderHome(app);
}

init();