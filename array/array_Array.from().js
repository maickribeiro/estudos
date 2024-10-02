// Copia os valores do array primário porém não o altera
// Usando no DOM, transforma em array de verdade
const array1 = new Array(1, 2, 3)
const array2 = Array.from(array1)
array2.push("novo valor", "novo valor 2")
console.log(array1, array2)

const array3 = [1, 2, 3]
const array4 = Array.from(array3)
array4.push(4, 5, 6)
console.log(array3, array4)