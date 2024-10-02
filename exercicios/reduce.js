const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const teste = numeros.reduce((a, b, c, d, e) => {
    console.log(b)
}, 0) //valore indice 
console.log(teste)