const numero = [9, 7, 5, 6, 2, 1, 8, 7, 4, 3, -8]
const nome = ['maick', 'lais', 'jessica', 'bruna', 'ana', 'matheus']
console.log(numero.toReversed()) // Não muda o array original
numero.sort() // Organiza o array do maior para o menor (letra ou numero) porém muda o array original
numero.reverse() // Reverte o array atual de trás para frente, porém muda o array original
nome.sort()
console.log(numero)
console.log(nome)
console.log(Math.max.apply(null,))

/*
Array length
Array toString()
Array at()
Array join()
Array pop()
Array push()

See Also:
Search Methods
Sort Methods
Iteration Methods	Array shift()
Array unshift()
Array delete()
Array concat()
Array copyWithin()
Array flat()
Array splice()
Array toSpliced()
Array slice()*/



const points = [40, 100, 1, 5, 25, 10];

function myArrayMin(arr) {
    let len = arr.length;
    let min = -Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}

console.log(myArrayMin(points))

console.log(points[points.length] = "Maick")
console.log(points)