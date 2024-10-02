function soma() {
    const numeros = [...arguments]
    return numeros.reduce(function (acumulador, atual){
       return acumulador + atual 
    }, 0)
}

function media() {
    return soma(...arguments) / arguments.length
}

const somar = soma(1, 2, 3, 4, 5)
console.log(somar)
console.log(media(1, 2, 3, 4, 5))

