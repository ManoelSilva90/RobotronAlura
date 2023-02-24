/* ----------------- Braço --------------------------

{
   <label for="" class="peca-titulo">Braços</label>
      <div class="controle">
         <buttom class="controle-ajuste" id="subtrair">-</buttom>
         <input type="text" class="controle-contador" value="00" id="braco">
         <buttom class="controle-ajuste" id="somar">+</buttom>
      </div>
}

const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")  //valor do braço

// clique de somar e subtrair pontos
somar.addEventListener("click", (evento) => {  //funcao anonima de seta
   braco.value = parseInt(braco.value) + 1
});

subtrair.addEventListener("click", (evento) => {  //funcao anonima de seta
   braco.value = parseInt(braco.value) - 1
});

------------------------------------- ou

// clique de somar e subtrair pontos
somar.addEventListener("click", () => {  //funcao anonima de seta
   manipulaDados("somar")
});

subtrair.addEventListener("click", () => {  //funcao anonima de seta
   manipulaDados("subtrair")
});

function manipulaDados(operacao) {
   if (operacao === "subtrair") {
      braco.value = parseInt(braco.value) - 1
   } else {
      braco.value = parseInt(braco.value) + 1
   }
}

*/

// ---------------- Dados Geral ------------ class = controle-ajuste atualizado para data-controle

const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
   "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
   },

   "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
   },
   "nucleos": {
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
   },
   "pernas": {
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
   },
   "foguetes": {
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
   }
}

controle.forEach((elemento) => {
   elemento.addEventListener("click", (evento) => {
      manipulaDados(evento.target.dataset.controle, evento.target.parentNode) //paramentros +ou- e caminho do pai
      atualizaEstatistica(evento.target.dataset.peca)
   })
})

// clique de somar e subtrair pontos
function manipulaDados(operacao, controle) {

   const peca = controle.querySelector("[data-contador]")  //valor do input de cada equipamento

   if (operacao === "-") {
      peca.value = parseInt(peca.value) - 1
   } else {
      peca.value = parseInt(peca.value) + 1
   }
}

//funcao de atualizar as estatisticas
function atualizaEstatistica(peca) {
   estatisticas.forEach((elemento) => {
      elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]

   })
}

