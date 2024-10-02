// Filtra os valores dependo da checagem feita
const frutas = ["Maick", 2,29,31]

let temNumeros = frutas.filter(function (elemento, indice, array) {
    console.log(indice, array, elemento)
    return typeof elemento === "number"
})
console.log(temNumeros, frutas)

