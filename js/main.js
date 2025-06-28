// Mostrar botón "Volver arriba"
window.addEventListener("scroll", () => {
  const boton = document.getElementById("btnVolverArriba");
  if (boton) {
    boton.style.display = window.scrollY > 300 ? "block" : "none";
  }
});

// Acción del botón "Volver arriba"
function volverArriba() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Activar sección actual en navbar (resalta enlace activo)
const secciones = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a[href^='#'], nav a[href*='.html']");

window.addEventListener("scroll", () => {
  let actual = "";

  secciones.forEach((seccion) => {
    const offset = seccion.offsetTop - 60;
    const height = seccion.offsetHeight;
    if (window.scrollY >= offset && window.scrollY < offset + height) {
      actual = seccion.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("activo");

    if (actual && link.getAttribute("href").includes(`#${actual}`)) {
      link.classList.add("activo");
    }
  });
});

<!-- Botones de categorías -->
<div class="text-center mb-4" id="filtros-categorias">
  <button class="btn btn-outline-light mx-2 filtro-btn active" data-categoria="todos">Todos</button>
  <button class="btn btn-outline-primary mx-2 filtro-btn" data-categoria="ia">🤖 IA</button>
  <button class="btn btn-outline-success mx-2 filtro-btn" data-categoria="diseno">🎨 Diseño</button>
  <button class="btn btn-outline-warning mx-2 filtro-btn" data-categoria="productividad">📁 Productividad</button>
  <button class="btn btn-outline-info mx-2 filtro-btn" data-categoria="programacion">💻 Programación</button>
  <button class="btn btn-outline-danger mx-2 filtro-btn" data-categoria="visualizacion">📊 Visualización</button>
</div>

<!-- Tarjetas con categorías incluidas -->
<div class="recursos-grid">
  <div class="recurso-card" data-categoria="ia">
    <img src="img/kits-ai.png" alt="Kits AI" />
    <h3>Kits.AI</h3>
    <p>Convierte tu voz en otra voz o personaje usando inteligencia artificial.</p>
    <a href="https://www.kits.ai/" target="_blank">Visitar</a>
  </div>

  <div class="recurso-card" data-categoria="diseno">
    <img src="img/figma.png" alt="Figma" />
    <h3>Figma</h3>
    <p>Diseña interfaces web, apps o presentaciones de forma colaborativa.</p>
    <a href="https://figma.com" target="_blank">Visitar</a>
  </div>

  <div class="recurso-card" data-categoria="productividad">
    <img src="https://img.icons8.com/color/48/trello.png" alt="Trello">
    <h3>Trello</h3>
    <p>Organiza proyectos con tableros, listas y tarjetas en un entorno visual.</p>
    <a href="https://trello.com" target="_blank">Visitar</a>
  </div>

  <div class="recurso-card" data-categoria="programacion">
    <img src="https://img.icons8.com/fluency/48/laptop-coding.png" alt="Replit">
    <h3>Replit</h3>
    <p>Entorno online para programar en múltiples lenguajes directamente desde el navegador.</p>
    <a href="https://replit.com/" target="_blank">Visitar</a>
  </div>

  <div class="recurso-card" data-categoria="visualizacion">
    <img src="https://img.icons8.com/fluency/48/combo-chart.png" alt="Flourish" />
    <h3>Flourish</h3>
    <p>Herramienta para crear visualizaciones de datos interactivas sin programar.</p>
    <a href="https://flourish.studio/" target="_blank">Visitar</a>
  </div>
</div>

<!-- Script de filtrado -->
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".filtro-btn");
    const tarjetas = document.querySelectorAll(".recurso-card");

    botones.forEach(boton => {
      boton.addEventListener("click", () => {
        // Cambiar clase activa
        botones.forEach(btn => btn.classList.remove("active"));
        boton.classList.add("active");

        const categoria = boton.dataset.categoria;

        tarjetas.forEach(card => {
          const cat = card.dataset.categoria;
          if (categoria === "todos" || cat === categoria) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });
</script>

