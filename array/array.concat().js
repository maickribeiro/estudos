const numero = [1, 2, 3, 4, 5]
const numero2 = [6, 7, 8, 9, 10]

console.log(numero.concat(numero2, 11, 12, 13, 14, 15).join(" - "))

const numero3 = numero2.concat(...numero)
console.log(numero3)

const numero4 = [].concat(numero, numero2, numero3)
console.log(numero4)