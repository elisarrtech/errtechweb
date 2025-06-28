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
