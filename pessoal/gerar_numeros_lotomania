let resultado = [4, 11, 22, 24, 33, 34, 37, 39, 44, 50, 56, 57, 62, 66, 72, 79, 80, 82, 84, 97,]
const gerarAleatorio = Math.round(Math.random() * (100 - 0) + 0)
const numerosNaoListados = [1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 27,
    28, 29, 30, 31, 32, 35, 36, 38, 40, 41, 42, 43, 45, 46, 47, 48, 49, 51, 52, 53, 54, 55, 58,
    59, 60, 61, 63, 64, 65, 67, 68, 69, 70, 71, 73, 74, 75, 76, 77, 78, 81, 83, 85, 86, 87, 88,
    89, 90, 91, 92, 93, 94, 95, 96, 98, 99]

let aleatorio = []
let resultado2 = []
let contador = 0

for (let e = 0; e < 20; e++) {
    if (resultado[e] < 10) {
        resultado2.push("0" + resultado[e])
    }
    else {
        resultado2.push(resultado[e])
    }
    resultado2 = resultado2.toSorted()
}

for (let i = 0; aleatorio.length < 20; i++) {
    const gerarAleatorio = Math.round(Math.random() * (99 - 0) + 0)
    if (aleatorio.indexOf(gerarAleatorio) == -1) {
        if (gerarAleatorio < 10) {
            aleatorio.push("0" + gerarAleatorio)
        }
        else {
            aleatorio.push(gerarAleatorio)
        }
    }
}
aleatorio = aleatorio.toSorted()


console.log(aleatorio)
console.log(resultado2)

