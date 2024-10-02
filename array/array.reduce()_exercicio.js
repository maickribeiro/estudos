const numeros = [1, 2, 1, 2, 3, 4, 5, 8, 7, 5, 4, 1, 2, 36, 6, 5, 32, 8, 10, 11, 12, 12, 11, 13]
let numeros_filtrados = numeros.reduce(function (elementos, numero_atual) {
    if (elementos.indexOf(numero_atual) < 0){
        elementos.push(numero_atual)
    }
    return elementos

}, [])
console.log(numeros_filtrados)
