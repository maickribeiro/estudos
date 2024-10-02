// Reduz os elementos do array a 1
let arr = [9, 8, 7, 6, 5]
let arr2 = arr.reduce(function (acumulador, valor_atual, indice, array) {
    console.log(indice, array)
    return acumulador + valor_atual
}, [])
console.log(arr2)

const frutas = ['uva', 'laranja', 'pera', 'maça', 'melancia']
let letra_frutas = frutas.reduce(function (elemento, valor_atual) {
    //let primeira_letra = valor_atual[0]
    if (elemento[valor_atual[0]]) {
        elemento[valor_atual[0]]++
    }
    else {
        elemento[valor_atual[0]] = 1
    }
    return elemento
}, {})
console.log(letra_frutas)

console.log('----------')
console.log()

