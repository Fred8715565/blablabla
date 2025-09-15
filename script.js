
const historia = {
  inicio: {
    texto: "Você é o Jotaro.",
    imagem: "jojo2.jpeg",
    opcoes: [
      { texto: "apostar a alma da sua mãe", proximo: "apostou" },
      { texto: "ou perde o jogo", proximo: "BETA" }
    ]
  },
  apostou: {
    texto: "ficaram asustado",
    imagem: "jojo1.jpeg",
    opcoes: [
      { texto: "botar preção no adiversário", proximo: "boa" },
      { texto: "ou Não", proximo: "BETA" }
    ]
  },
  boa: {
    texto: "seu jogo ta uma merda!",
    imagem: "jojo4.jpg",
    opcoes: [
      { texto: "continuar", proximo: "boa1" },
      { texto: "ou não", proximo: "BETA" }
    ]
  },
  boa1: {
    texto: "pensar o q fazer",
    imagem: "jojo5.jpg",
    opcoes: [
        {texto: "beber um drink", proximo:"boa2"}
        
    ]
  },
  boa2: {
    texto: "a presão e tão grande que seu adiversário perde",
    imagem: "jojo6.jpg",
    opcoes: [
      { texto: "você gnhou", proximo: "boa3" }
    ]
  },
  boa3: {
    texto: "parabéns!",
    imagem: "jojo7.jpeg",
    opcoes: [
     
    ]
  },
  BETA: {
    texto: "recomeçe agora",
    imagem: "hq720.jpg",
    opcoes: [
      { texto: "Recomeçar", proximo: "inicio" }
    ]
  }
};


const textoEl = document.getElementById("texto");
const imagemEl = document.getElementById("imagem");
const opcoesEl = document.getElementById("opcoes");


function mostrarCena(cena) {
  let atual = historia[cena];
  textoEl.textContent = atual.texto;
  imagemEl.src = atual.imagem;
  opcoesEl.innerHTML = "";

  atual.opcoes.forEach(op => {
    let btn = document.createElement("button");
    btn.textContent = op.texto;
    btn.onclick = () => mostrarCena(op.proximo);
    opcoesEl.appendChild(btn);
  });
}


mostrarCena("inicio");
