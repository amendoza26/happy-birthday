// Animación del mensaje
const message = document.getElementById("message1");
setTimeout(() => {
  message1.style.opacity = "1";
}, 3000); // Mostrar el mensaje después de 3 segundos
const message2 = document.getElementById("message2");
setTimeout(() => {
  message2.style.opacity = "1";
}, 5000); // Mostrar el mensaje después de 3 segundos

window.addEventListener("click", () => {
  cancion.style.display = "none"; // Muestra los controles de reproducción
  cancion.play();
});
