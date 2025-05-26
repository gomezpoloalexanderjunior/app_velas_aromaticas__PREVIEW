function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });

}
// Menú hamburguesa
function toggleMenu() {
  const nav = document.getElementById("mainNav");
  const overlay = document.getElementById("overlay");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
}
// Modal
const abrir = document.getElementById('abrirModal');
const cerrar = document.getElementById('cerrarModal');
const modal = document.getElementById('modalLogin');

abrir.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('mostrar');
});

cerrar.addEventListener('click', () => {
  modal.classList.remove('mostrar');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('mostrar');
  }
});



const track = document.getElementById('carouselTrack');
  const items = track.children;
  const totalItems = items.length;

  // Clona todos los productos y los añade al final
  for (let i = 0; i < totalItems; i++) {
    const clone = items[i].cloneNode(true);
    track.appendChild(clone);
  }
