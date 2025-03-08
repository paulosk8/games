const gameArea = document.querySelector(".gameArea"); // Creamos el contenedor del area del juego
const btn = document.createElement("button"); // Creamos el boton de inicio del juego
btn.textContent = "Iniciar Juego"; // Texto del boton
console.log(btn);

// Agregar a la pagina del HTML
gameArea.appendChild(btn);

// Valores iniciales del juego
const myWords = ["perro", "gato", "raton"];

// evento click del boton
btn.addEventListener("click", function (e) {
  console.log(e);
});
