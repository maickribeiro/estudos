// Retorna indice de primeiro elemento referenciado na checagem
let numeros = [1, 10, 20, 31, 50, 60, 2, 8, 9]
let numero2 = numeros.findIndex(function (elemento){
    return elemento > 20
})
console.log(numero2)