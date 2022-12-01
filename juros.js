const resultado1 = document.getElementById('result1')
const resultado2 = document.getElementById('result2')
const resultado3 = document.getElementById('result3')
const calcular = document.getElementById('calcular')

// funcao pra calcular o investimento-----------------

function calcularJuros(){
    let Capitalinicial = parseFloat(document.getElementById('capitalinicial').value)
    let valorMensal = parseFloat(document.getElementById('Valor-Mensal').value)
    let taxa = parseFloat(document.getElementById('Taxa-de-juros').value)
    let meses = parseFloat(document.getElementById('periodo').value)

    let montante = Capitalinicial + valorMensal * meses

    let jc = 0
    let jct = 0
    

    for (let i = 0; i < meses; i++){
        jc = (Capitalinicial * taxa) / 100
        jct += jc;
        Capitalinicial += jc + valorMensal
    }

    let valorTotal = montante + jct

    let m = new Intl .NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(montante)

    let juros = new Intl .NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(jct)


    let vt = new Intl .NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(valorTotal)




    resultado1.textContent = `${m}`
    resultado2.textContent = `${juros}`
    resultado3.textContent = `${vt}`

}
function capitalinicial(i) {
    var v = i.value.replace(/\D/g, '');
    v = (v / 100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    i.value = v;
  }

calcular.addEventListener("click", calcularJuros)


// adicionar a classe active quando clicar no botao-------------

calcular.addEventListener('click', () =>{
    let resultado = document.querySelectorAll('.container-resultado')
    resultado.forEach((item)=>{
        item.classList.add("active")
    })    

})

// limpar os inputs-------------------------------------------

let limpar = document.getElementById('limpar')

limpar.addEventListener('click', ()=>{
    let resultado = document.querySelectorAll('.container-resultado')
    resultado.forEach((item)=>{
        item.classList.remove("active")
    })
    let capitalinicial = document.getElementById('capital-inicial')
    let valorMensal = document.getElementById('Valor-Mensal')
    let taxa =  document.getElementById('Taxa-de-juros')
    let meses = document.getElementById('periodo')
    capitalinicial.value= ""
    valorMensal.value = ""
    taxa.value = ""
    meses.value = ""
})

// modal-------------------------------------------------------

let abrirModal = document.querySelector('.abrir-modal')
let fecharModal = document.querySelector('.fechar-modal')
let containerModal = document.querySelector('.container-modal')

abrirModal.addEventListener('click', ()=>{
    containerModal.classList.add("active")  
})

fecharModal.addEventListener('click', ()=>{
    containerModal.classList.remove("active")  
})
