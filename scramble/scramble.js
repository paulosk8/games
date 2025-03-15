const gameArea = document.querySelector(".gameArea"); // Creamos el contenedor del area del juego
const btn = document.createElement("button"); // Creamos el boton de inicio del juego
const output = document.createElement("div"); // Creamos el contenedor de las palabras
const inWord = document.createElement("input"); // Creamos el input para ingresar la palabra
const scoreBoard = document.createElement("div"); // Creamos el contenedor del puntaje
scoreBoard.textContent = "Puntaje: 0"; // Texto del puntaje
scoreBoard.style.fontSize = "2em"; // Tamaño de la fuente
scoreBoard.style.color = "#4C048C"; // Color del texto
scoreBoard.style.backgroundColor = "#FFD700"; // Color de fondo
inWord.setAttribute("type", "text"); // Tipo de input
inWord.classList.add("myInput"); // Clase de bootstrap
output.style.textAlign = "center"; // Alineamos el texto al centro
output.style.marginBottom = "10px"; // Margen inferior
btn.textContent = "Iniciar Juego"; // Texto del boton
output.textContent = "Clic en el boton"; // Texto del contenedor de las palabras
console.log(btn);

// Agregar a la pagina del HTML
gameArea.appendChild(scoreBoard);
gameArea.appendChild(output);
gameArea.appendChild(btn);
gameArea.appendChild(inWord);

// Elementos ocultos
inWord.style.display = "none";
scoreBoard.style.display = "none";

// Valores iniciales del juego
const myWords = ["cocodrilo", "gato", "raton"];
const game = {
  sel: "",
  scramble: "",
  correct: 0,
  incorrect: 0,
};
// evento click del boton
btn.addEventListener("click", function (e) {
  btn.style.display = "none"; // Ocultamos el boton
  inWord.style.display = "inline"; // Mostramos el input
  scoreBoard.style.display = "block"; // Mostramos el puntaje
  myWords.sort(() => {
    return 0.5 - Math.random();
  }); // Ordenamos las palabras de forma aleatoria
  game.sel = myWords[0]; // Seleccionamos la primera palabra
  game.scramble = sorter(game.sel); // Llamamos a la funcion sorter
  output.style.fontSize = "3em"; // Tamaño de la fuente
  inWord.setAttribute("maxlength", game.sel.length); // Maximo de caracteres del input
  inWord.focus(); // Enfocamos el input
  output.textContent = game.scramble; // Mostramos la palabra ordenada
  console.log(game.sel, game.scramble);
});

inWord.addEventListener("keypress", (e) => {
  console.log(e);
  inWord.style.borderColor = "#4C048C";
  inWord.style.borderWidth = "1px";
  if (inWord.value.length === game.sel.length || e.code === "Enter") {
    console.log("verificando....");
    winChecker();
  }
});

function addScore() {
  let tempOutput = `Correctas: <b>${game.correct}</b> VS incorrectas: <b>${game.incorrect}</b>`;
  scoreBoard.innerHTML = tempOutput;
}

function winChecker(params) {
  inWord.style.borderWidth = "5px";
  if (inWord.value === game.sel) {
    console.log("Ganaste");
    inWord.style.borderColor = "green";
    game.correct++;
    addScore();
    inWord.disabled = true;
    btn.style.display = "inline";
    btn.textContent = "Siguiente Palabra";
    inWord.value = "";
  } else {
    inWord.style.borderColor = "red";
    console.log("Perdiste");
    inWord.value = "";
    inWord.focus();
    game.incorrect++;
    addScore();
  }
}

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
