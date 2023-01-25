const controler = document.querySelectorAll("[data-controler]")
const estatisticas = document.querySelectorAll("[data-estatistica]")

//console.log(estatisticas)
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
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}




controler.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) =>{
       somanandoDados(evento.target.dataset.controler, evento.target.parentNode)
       atualziarestatisticas(evento.target.dataset.peca)
    })
})

//console.log(controler)

function somanandoDados(operacao, controler){

    const braco = controler.querySelector("[data-contador]")

    if(operacao === "-"){
        braco.value = parseInt(braco.value) - 1;
        } else {
            braco.value = parseInt(braco.value) + 1; 
        }
    }

function atualziarestatisticas(peca) {
    console.log(pecas[peca])

    estatisticas.forEach(   (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}