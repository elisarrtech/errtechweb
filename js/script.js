
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
});
