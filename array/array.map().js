// Itera em um array
let numero = ["Maick", 2, 29, 31]

let triplo = []
let numero2 = numero.map(function (elemento, indice, array) {
    if (typeof elemento === "number") {
        triplo.push(elemento * 3)
    }
    console.log(indice)
    return elemento
})

let quadruplo = []
numero = numero.map(function (elemento) {
    if (typeof elemento === "number") {
        quadruplo.push(elemento * 4)
    }
})

console.log(numero2)
console.log(triplo)
console.log(quadruplo)
