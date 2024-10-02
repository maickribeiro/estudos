let tabuada = document.querySelector('#tabuada')

function gerarTabuada() {
    let numero = prompt("Digite qual a tabuada que você deseja saber: ")
    numero = parseInt(numero)

    let contaTabuada = ""
    for (let i = 1; i <= 10; i++) {
        contaTabuada += `${numero} x ${i} = ${numero * i}<br>`
    }
    tabuada.innerHTML = contaTabuada
}

function apagar() {
    tabuada.innerHTML = ""
}