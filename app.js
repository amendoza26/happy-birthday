// Configuración de particles.js
particlesJS("fireworks", {
  particles: {
    number: {
      value: 50, // Cantidad de partículas
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff", // Color de las partículas
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    size: {
      value: 2, // Tamaño de las partículas
      random: true,
    },
    move: {
      enable: true,
      speed: 2, // Velocidad de movimiento de las partículas
      direction: "bottom",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
    line_linked: {
      enable: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
    },
  },
});

// Animación del mensaje
const message = document.getElementById("message");
setTimeout(() => {
  message.style.opacity = "1";
}, 3000); // Mostrar el mensaje después de 3 segundos
