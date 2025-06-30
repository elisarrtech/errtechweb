document.addEventListener("DOMContentLoaded", () => {
  // ——— BACK TO TOP ———
  const btnTop = document.getElementById("btnVolverArriba");
  window.addEventListener("scroll", () => {
    if (btnTop) {
      btnTop.style.display = window.scrollY > 300 ? "block" : "none";
    }
    // También añadimos aquí el cambio de clase para la navbar
    document.querySelector(".navbar")?.classList.toggle("scrolled", window.scrollY > 50);
  });
  if (btnTop) {
    btnTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ——— NAV LINK ACTIVE ON SCROLL ———
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
      link.classList.toggle("activo", current && link.getAttribute("href").includes(`#${current}`));
    });
  });

  // ——— FILTER CATEGORIES ———
  const botones = document.querySelectorAll(".filtro-btn");
  const tarjetas = document.querySelectorAll(".recurso-card");
  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      botones.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.categoria;
      tarjetas.forEach(card => {
        const match = card.dataset.categoria === cat || cat === "todos";
        card.style.display = match ? "" : "none";
      });
    });
  });

  // ——— THEME TOGGLE ———
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;
  // Inicializar tema
  const saved = localStorage.getItem("theme");
  if (saved) {
    root.setAttribute("data-theme", saved);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.setAttribute("data-theme", "dark");
  }
  // Actualizar icono
  const updateIcon = () => {
    if (!themeToggle) return;
    themeToggle.textContent = root.getAttribute("data-theme") === "dark" ? "🌞" : "🌙";
  };
  updateIcon();
  // Toggle al hacer click
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateIcon();
    });
  }
});

