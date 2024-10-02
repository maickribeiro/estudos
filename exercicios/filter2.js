const obj = [
    { nome: 'Maick', idade: 31 },
    { nome: 'Lais', idade: 2 },
    { nome: 'Ana', idade: 55 },
    { nome: 'Milton', idade: 61 },
    { nome: 'Bruna', idade: 32 },
]
for (let i = 0; i < obj.length; i++) {
    //Nome com mais de 4 letras
    //if (obj[i].nome.length >= 4) {
    // console.log(obj[i])
    //}

    //Maior que 30 anos
    //if (obj[i].idade >= 30) {
    //  console.log(obj[i].idade, 'Esse')
    //}

    //Termina com A

    console.log(obj[i].nome.slice())
    if (obj[i].nome.slice(-1) === 's') {
        console.log(obj[i])
    }

}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14]
const numerosPares = numeros.filter(function (valor) {
    return valor % 2 === 0
})
console.log(numerosPares)

console.log(intervalo)
