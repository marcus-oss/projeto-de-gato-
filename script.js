// VARIÁVEIS
let likes = 0;

// FUNÇÃO
function giveLike() {
  likes++;
  updateLike();
}

// MANIPULAÇÃO DO DOM
function updateLike() {
  document.getElementById("likes").innerText = likes;
}

// CONDICIONAL
function checkDevLevel() {
  if (likes < 5) {
    alert("Você ainda é um Gato Júnior 😺");
  } else if (likes < 10) {
    alert("Você virou um Gato Pleno 😼");
  } else {
    alert("Agora você é um Gato Sênior 🐯");
  }
}

// ARRAY
const catsProgrammers = ["Gato Quebra Tudo", "Gato Dorme no Teclado", "Gato Apaga Código", "Gato Hacker"];

// LAÇO DE REPETIÇÃO
function listCats() {
  let lista = document.getElementById("lista-gatos");
  lista.innerHTML = "";

  for (let i = 0; i < catsProgrammers.length; i++) {
    let item = document.createElement("li");
    item.textContent = catsProgrammers[i];
    lista.appendChild(item);
  }
}

// EVENTO
document.getElementById("btn-like").addEventListener("click", giveLike);
document.getElementById("btn-nivel").addEventListener("click", checkDevLevel);

// EXECUÇÃO AUTOMÁTICA
listCats();
