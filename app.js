const next = document.getElementById("next");
setTimeout(() => {
  next.style.opacity = "1";
}, 2000);
function iniciarDespuesDeCerrarModal() {
  // Animación del mensaje 1
  const message1 = document.getElementById("message1");
  setTimeout(() => {
    message1.style.opacity = "1";
  }, 1000); // Mostrar el mensaje después de 0 segundos
  const img = document.getElementById("img");
  setTimeout(() => {
    img.style.opacity = "1";
  }, 4000); // Mostrar el mensaje después de 0 segundos

  // Animación del mensaje 2
  const message2 = document.getElementById("message2");
  setTimeout(() => {
    message2.style.opacity = "1";
  }, 6000); // Mostrar el mensaje después de 2 segundos

  const openModalButton = document.getElementById("openImage");
  setTimeout(() => {
    openModalButton.style.opacity = "1";
  }, 9000);

  // Reproducir música
  const cancion = document.getElementById("cancion");
  cancion.style.display = "none"; // Oculta los controles de reproducción
  cancion.play(); // Inicia la reproducción automáticamente
}

// Mostrar el modal al cargar la página
const modal = document.getElementById("myModal");
window.addEventListener("load", () => {
  modal.style.display = "block";
});

// Reproducir música y comenzar animaciones después de hacer clic en cualquier lugar de la ventana
window.addEventListener("click", () => {
  modal.style.display = "none"; // Cierra el modal
  iniciarDespuesDeCerrarModal(); // Llama a la función para iniciar todo
});

const frio = document.getElementById("frio");
const openImage = document.getElementById("openImage");

openImage.addEventListener("click", () => {
  frio.style.display = "block";
});

frio.addEventListener("click", () => {
  // Corrección aquí
  frio.style.display = "none";
});
