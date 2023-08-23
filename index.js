// Armazenar os players em variáveis
const addPlayers = document.getElementById("addPlayers");
let player1 = "";
let player2 = "";
const currentPlayer = document.getElementById("player");

// Event listener para adicionar jogadores
addPlayers.addEventListener("click", function () {
  // Captura os nomes dos jogadores a partir dos inputs
  player1 = document.getElementById("nome1").value;
  player2 = document.getElementById("nome2").value;

  // Define o jogador da vez como o player1
  currentPlayer.innerHTML = "Jogador da vez: " + player1;
  currentPlayer.dataset.value = player1;
});

// Variável para acompanhar a marcação atual (X ou O)
var marcaçãoAtual = "X";

// Função para marcar um quadrado ao ser clicado
function quadradoClick(event) {
  const quadrado = event.target;
  // Verifica se o quadrado já foi marcado
  if (!quadrado.dataset.value) {
    // Define a marcação no quadrado e alterna a marcaçãoAtual entre X e O
    quadrado.dataset.value = marcaçãoAtual;
    quadrado.textContent = marcaçãoAtual;
    marcaçãoAtual = marcaçãoAtual === "X" ? "O" : "X";
    // Chama a função para verificar se há um vencedor
    verificationWinner();

    // Atualiza o jogador da vez
    if (currentPlayer.dataset.value === player1) {
      currentPlayer.innerHTML = "Jogador da vez: " + player2;
      currentPlayer.dataset.value = player2;
    } else {
      currentPlayer.innerHTML = "Jogador da vez: " + player1;
      currentPlayer.dataset.value = player1;
    }
  }
}

// Adiciona o event listener de clique a todos os quadrados
document.querySelectorAll(".charKey").forEach(function (quadrado) {
  quadrado.addEventListener("click", quadradoClick);
});

// Função para verificar se há um vencedor e declará-lo
function verificationWinner() {
  // Captura os valores dos quadrados
  var id_11 = document.getElementById("11").dataset.value;
  var id_12 = document.getElementById("12").dataset.value;
  var id_13 = document.getElementById("13").dataset.value;
  var id_21 = document.getElementById("21").dataset.value;
  var id_22 = document.getElementById("22").dataset.value;
  var id_23 = document.getElementById("23").dataset.value;
  var id_31 = document.getElementById("31").dataset.value;
  var id_32 = document.getElementById("32").dataset.value;
  var id_33 = document.getElementById("33").dataset.value;

  // Verifica se há um padrão de vitória em linhas, colunas ou diagonais
  if (
    (id_11 === id_12 && id_12 === id_13 && id_11 !== "") ||
    (id_21 === id_22 && id_22 === id_23 && id_21 !== "") ||
    (id_31 === id_32 && id_32 === id_33 && id_31 !== "") ||
    (id_11 === id_21 && id_21 === id_31 && id_11 !== "") ||
    (id_12 === id_22 && id_22 === id_32 && id_12 !== "") ||
    (id_13 === id_23 && id_23 === id_33 && id_13 !== "") ||
    (id_11 === id_22 && id_22 === id_33 && id_11 !== "") ||
    (id_13 === id_22 && id_22 === id_31 && id_13 !== "")) {
    // Declara o vencedor
    document.getElementById("winner").innerHTML =
      "O vencedor é: " + currentPlayer.dataset.value;

    // Remove event listener de clique de todos os quadrados
    document.querySelectorAll(".charKey").forEach(function (quadrado) {
      quadrado.removeEventListener("click", quadradoClick);
    });
  }
}

// Captura o botão de reiniciar
const restartButton = document.getElementById("restart");

// Função para reiniciar os quadrados e o jogo
function reiniciarQuadrados() {
  // Limpa os valores dos quadrados e o texto
  document.querySelectorAll(".charKey").forEach(function (quadrado) {
    quadrado.dataset.value = "";
    quadrado.textContent = "";
  });

  // Reinicia a marcação atual para "X"
  marcaçãoAtual = "X";

  // Atualiza o jogador da vez para o player1
  currentPlayer.innerHTML = "Jogador da vez: " + player1;
  currentPlayer.dataset.value = player1;

  // Adiciona event listener de clique a todos os quadrados novamente
  document.querySelectorAll(".charKey").forEach(function (quadrado) {
    quadrado.addEventListener("click", quadradoClick);
  });

  // Limpa a mensagem de vencedor
  document.getElementById("winner").innerHTML = "";
}

// Adiciona event listener ao botão de reiniciar
restartButton.addEventListener("click", function () {
  reiniciarQuadrados(); // Chama a função de reiniciar quadrados
});
