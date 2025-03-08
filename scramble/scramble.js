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
const game = {
  sel: "",
  scramble: "",
};
// evento click del boton
btn.addEventListener("click", function (e) {
  myWords.sort(() => {
    return 0.5 - Math.random();
  }); // Ordenamos las palabras de forma aleatoria
  game.sel = myWords[0]; // Seleccionamos la primera palabra
  game.scramble = sorter(game.sel); // Llamamos a la funcion sorter
  output.textContent = `${game.sel} es la palabra seleccionada`; // Mostramos la palabra en el contenedor
  console.log(game.sel, game.scramble);
});

function sorter(word) {
  let temp = word.split(""); // Separamos la palabra en letras
  temp.sort(() => {
    return 0.5 - Math.random();
  }); // Ordenamos las letras de forma aleatoria
  temp = temp.join(""); // Unimos las letras
  console.log(temp); // Mostramos la palabra en consola
  if (word === temp) {
    console.log(word, temp);
    return sorter(word); // Si la palabra es igual a la palabra ordenada, llamamos a la funcion sorter
  }
  return temp; // Retornamos la palabra ordenada
}
