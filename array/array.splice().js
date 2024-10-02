// Modifica a array original
var arr = [1, 2, 3, 4, 5, 6, 7, 8]
let arr2 = arr.splice(3) // Exclui os 3 primeiros indices e retorna-os
console.log(arr)
console.log(arr2)

console.log("--------")

var arr3 = [1, 2, 3, 4, 5, 6, 7, 8]
let arr4 = arr3.splice(3, 3) // A partir do indice 3 remove 3 elementos
console.log(arr3)
console.log(arr4) // Retorna elementos removidos

console.log("--------")

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8]
let arr6 = arr5.splice(1, 2, "Adicionado") // Remove os indices 2 e 3 e adciona a string "Adicionado"
console.log(arr5)
console.log(arr6)
