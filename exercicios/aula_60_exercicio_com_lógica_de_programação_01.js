function numeroMaior() {
    let a = Math.round(Math.random()*(100-1)+1)
    let b = Math.round(Math.random()*(100-1)+1)
    let maior = a > b ? a : b
    console.log(`Resultado a = ${a} - Resultado b = ${b} - Maior ${maior}`)
}
numeroMaior()

function maior (a, b) {
    return a > b ? a : b
}
console.log(maior( a = Math.round(Math.random()*(100-1)+1), b = Math.round(Math.random()*(100-1)+1)), a ,b)