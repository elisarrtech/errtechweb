document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('toggle-theme');

  if (!toggleBtn) {
    console.warn("Botón de cambio de tema no encontrado");
    return;
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  toggleBtn.addEventListener('click', () => {
    let currentTheme = document.documentElement.getAttribute('data-theme');
if (!currentTheme) {
  currentTheme = 'dark'; // o 'dark' según prefieras el valor por defecto
}

    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
});
