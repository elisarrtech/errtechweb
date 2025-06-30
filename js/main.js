document.addEventListener("DOMContentLoaded", () => {
  // ——— BACK TO TOP & NAVBAR SCROLL ———
  const btnTop = document.getElementById("btnVolverArriba");
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    // Mostrar/ocultar botón volver arriba
    if (btnTop) {
      btnTop.style.display = window.scrollY > 300 ? "block" : "none";
    }
    // Cambiar fondo de la navbar al hacer scroll
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    }
  });

  if (btnTop) {
    btnTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ——— SECCIÓN ACTIVA EN NAVBAR ———
  const secciones = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a[href*='#'], nav a[href$='.html']");

  window.addEventListener("scroll", () => {
    let current = "";
    secciones.forEach(sec => {
      const offset = sec.offsetTop - 60;
      if (window.scrollY >= offset && window.scrollY < offset + sec.offsetHeight) {
        current = sec.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle(
        "activo",
        current && link.getAttribute("href").includes(`#${current}`)
      );
    });
  });

  // ——— FILTRADO DE CATEGORÍAS ———
  const botones = document.querySelectorAll(".filtro-btn");
  const tarjetas = document.querySelectorAll(".recurso-card");

  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      // Marcar botón activo
      botones.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Mostrar/ocultar tarjetas
      const cat = btn.dataset.categoria;
      tarjetas.forEach(card => {
        const match = cat === "todos" || card.dataset.categoria === cat;
        card.style.display = match ? "" : "none";
      });
    });
  });

  // ——— TOGGLE DE TEMA ———
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;

  // Inicializar tema guardado o según preferencia del sistema
  const saved = localStorage.getItem("theme");
  if (saved) {
    root.setAttribute("data-theme", saved);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.setAttribute("data-theme", "dark");
  }

  // Función para actualizar el icono del toggle
  const updateIcon = () => {
    if (!themeToggle) return;
    const isDark = root.getAttribute("data-theme") === "dark";
    themeToggle.textContent = isDark ? "🌞" : "🌙";
  };
  updateIcon();

  // Listener para cambiar tema al hacer click
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateIcon();
    });
  }
});


