
// Mostrar botón "Volver arriba"
window.addEventListener("scroll", () => {
  const boton = document.getElementById("btnVolverArriba");
  if (window.scrollY > 300) {
    boton.style.display = "block";
  } else {
    boton.style.display = "none";
  }
});

// Acción del botón "Volver arriba"
function volverArriba() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Activar sección actual en navbar (opcional)
const secciones = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let actual = "";
  secciones.forEach(seccion => {
    const top = window.scrollY;
    const offset = seccion.offsetTop - 60;
    const height = seccion.offsetHeight;
    if (top >= offset && top < offset + height) {
      actual = seccion.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("activo");
    if (link.getAttribute("href").includes(actual)) {
      link.classList.add("activo");
    }
  });
});
