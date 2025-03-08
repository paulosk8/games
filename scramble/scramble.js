const gameArea = document.querySelector(".gameArea"); // Creamos el contenedor del area del juego
const btn = document.createElement("button"); // Creamos el boton de inicio del juego
const output = document.createElement("div"); // Creamos el contenedor de las palabras
btn.textContent = "Iniciar Juego"; // Texto del boton
output.textContent = "Clic en el boton"; // Texto del contenedor de las palabras
console.log(btn);

// Agregar a la pagina del HTML
gameArea.appendChild(output);
gameArea.appendChild(btn);

// Valores iniciales del juego
const myWords = ["perro", "gato", "raton"];

// evento click del boton
btn.addEventListener("click", function (e) {
  myWords.sort(() => {
    return 0.5 - Math.random();
  }); // Ordenamos las palabras de forma aleatoria
  let selWord = myWords[0]; // Seleccionamos la primera palabra
  output.textContent = `${selWord}`; // Mostramos la palabra en el contenedor
  console.log(myWords);
});
