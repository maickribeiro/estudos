// Filtra os valores dependo da checagem feita
const frutas = ["Maick", 2,29,31]

let temNumeros = frutas.filter(function (elemento, indice, array) {
    console.log(indice, array, elemento)
    return typeof elemento === "number"
})
console.log(temNumeros, frutas)

const obj = [
    { nome: 'Maick', idade: 31 },
    { nome: 'Lais', idade: 2 },
    { nome: 'Ana', idade: 55 },
    { nome: 'Milton', idade: 61 },
    { nome: 'Bruna', idade: 32 },
]

for (let i = 0; i < obj.length; i++) {
    console.log(obj[i].nome.slice())
    if (obj[i].nome.slice(-1) === 's') {
        console.log(obj[i])
    }
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14]
const numerosPares = numeros.filter(function (valor) {
    return valor % 2 === 0
})

console.log(numerosPares)

