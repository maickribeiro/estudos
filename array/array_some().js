// Checagem retorna Boolean
// Pelo menos um valor precisa ser verdadeiro para retornar true
const frutas = ["maça", "banana", "uva", "melancia"]
const numeros = [1, 2, 4, 16, "nome"]

let temNumeros = frutas.some(function (elemento) {
    return typeof elemento !== "number"
})
console.log(temNumeros)

let temNumeros2 = numeros.some(function(elemento){
    return elemento >= 15
})
console.log(temNumeros2)

let string = frutas.some(function(elemento){
    return typeof elemento === "string"
})
console.log(string)
