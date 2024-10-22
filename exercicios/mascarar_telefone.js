let numero = "39390-3939"
function marcararTelefone(n) {
    let posicaoHifem = numero.indexOf('-')
    let inicio = n.slice(0, posicaoHifem)
    let fim = n.slice(posicaoHifem + 1)
    let last2 = numero.slice(-2)
    console.log(posicaoHifem, inicio, fim)
    console.log(n[0].padEnd(inicio.length, "*"))
    console.log(last2.padStart(fim.length, "*"))
}
marcararTelefone(numero)
