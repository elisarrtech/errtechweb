
document.getElementById('menuBtn').addEventListener('click', function () {
  document.getElementById('menu').classList.toggle('hidden');
});

// Envío AJAX del formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const successMsg = document.createElement("div");
  successMsg.className = "mt-4 text-green-400 font-semibold";
  successMsg.textContent = "✅ ¡Mensaje enviado correctamente!";
  successMsg.style.display = "none";
  form.parentElement.appendChild(successMsg);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validación simple
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();
    if (!name || !email || !message) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/elisarrtech@gmail.com", {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: formData
    })
      .then(response => {
        if (response.ok) {
          successMsg.style.display = "block";
          form.reset();
        } else {
          alert("❌ Hubo un error al enviar el formulario.");
        }
      })
      .catch(() => alert("❌ No se pudo enviar. Verifica tu conexión."));
  });

  // Botón para volver arriba
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "⬆️";
  scrollBtn.className = "fixed bottom-20 right-5 bg-[#18e191] text-black p-3 rounded-full shadow-lg hover:scale-110 transition z-50";
  scrollBtn.style.display = "none";
  scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
});
