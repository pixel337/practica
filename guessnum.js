const targetnum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function startnewgame() {
  targetnum = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("output").textContent = "";
}

function guessnum() {
  const uguess = parseInt(document.getElementById("guess").value);
  attempts++;
  if (uguess === targetnum) {
    document.getElementById("output").textContent = `Поздравляем! Вы угадали число ${targetnum} за ${attempts} попыток.`;
  } else if (uguess < targetnum) {
    document.getElementById("output").textContent = "Попробуйте число больше.";
  } else {
    document.getElementById("output").textContent = "Попробуйте число меньше.";
  }
}