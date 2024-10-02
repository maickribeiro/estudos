// Checagem retorna Boolean
// Todas as os valores precisam ser verdadeiros para retornar true
const frutas = ["maça", "banana", "uva", "melancia"]
const numeros = [1, 2, 4, 16, "nome"]

let temNumeros = frutas.every(function (elemento) {
    return typeof elemento !== "number"
})
console.log(temNumeros)

let temNumeros2 = numeros.every(function(elemento){
    return typeof elemento === "number"
})
console.log(temNumeros2)

let string = frutas.every(function(elemento){
    return typeof elemento === "string"
})
console.log(string)