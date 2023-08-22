//  Armazenar os players em variaveis
const addPlayers = document.getElementById("addPlayers");
let player1 = ""
let player2 = ""
const currentPlayer = document.getElementById("player")

addPlayers.addEventListener("click", function () {

  player1 = document.getElementById("nome1").value;
  player2 = document.getElementById("nome2").value;

  currentPlayer.innerHTML = "Jogador da vez: " + player1
  currentPlayer.dataset.value = player1
});

var marcaçãoAtual = "X"

function quadradoClick(event) {
  const quadrado = event.target
  if (!quadrado.dataset.value) {
    quadrado.dataset.value = marcaçãoAtual
    quadrado.textContent = marcaçãoAtual
    marcaçãoAtual = marcaçãoAtual === "X" ? "O" : "X";
    verificationWinner()

    if (currentPlayer.dataset.value === player1) {
      currentPlayer.innerHTML = "Jogador da vez: " + player2
      currentPlayer.dataset.value = player2
    } else {
      currentPlayer.innerHTML = "Jogador da vez: " + player1
      currentPlayer.dataset.value = player1
    }

  }
}

document.querySelectorAll(".charKey").forEach(function (quadrado) {
  quadrado.addEventListener("click", quadradoClick)
})

// Função para verificar se há um vencedor e declara-lo

function verificationWinner() {

  var id_11 = document.getElementById("11").dataset.value;
  var id_12 = document.getElementById("12").dataset.value;
  var id_13 = document.getElementById("13").dataset.value;
  var id_21 = document.getElementById("21").dataset.value;
  var id_22 = document.getElementById("22").dataset.value;
  var id_23 = document.getElementById("23").dataset.value;
  var id_31 = document.getElementById("31").dataset.value;
  var id_32 = document.getElementById("32").dataset.value;
  var id_33 = document.getElementById("33").dataset.value;

  if ((id_11 === id_12 && id_12 === id_13 && id_11 !== "") ||
    (id_21 === id_22 && id_22 === id_23 && id_21 !== "") ||
    (id_31 === id_32 && id_32 === id_33 && id_31 !== "") ||
    (id_11 === id_21 && id_21 === id_31 && id_11 !== "") ||
    (id_12 === id_22 && id_22 === id_32 && id_12 !== "") ||
    (id_13 === id_23 && id_23 === id_33 && id_13 !== "") ||
    (id_11 === id_22 && id_22 === id_33 && id_11 !== "") ||
    (id_13 === id_22 && id_22 === id_31 && id_13 !== "")) {

    document.getElementById("winner").innerHTML = "O vencedor é: " + currentPlayer.dataset.value;

    document.querySelectorAll(".charKey").forEach(function (quadrado) {
      quadrado.removeEventListener("click", quadradoClick);
    })
  }

}

const restartButton = document.getElementById("restart");

// Função para reiniciar os quadrados
function reiniciarQuadrados() {
  document.querySelectorAll(".charKey").forEach(function (quadrado) {
    quadrado.dataset.value = ""; // Limpa o valor do dataset
    quadrado.textContent = ""; // Limpa o texto dentro do quadrado
  });

  // Reinicia a marcação atual para "X"
  marcaçãoAtual = "X";

  // Atualiza o jogador da vez para o player1
  currentPlayer.innerHTML = "Jogador da vez: " + player1;
  currentPlayer.dataset.value = player1;

  document.querySelectorAll(".charKey").forEach(function (quadrado) {
    quadrado.addEventListener("click", quadradoClick)
  })

  document.getElementById("winner").innerHTML = ""

}

restartButton.addEventListener("click", function () {
  reiniciarQuadrados(); // Chama a função de reiniciar quadrados
});


