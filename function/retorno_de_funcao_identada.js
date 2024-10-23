function multiplicador(n) {
    return function outraFuncao(n2) {
        return `n = ${n} & n2 = ${n2} & ${n * n2}`
    }
}

const multiplica = multiplicador(10)
console.log(multiplica(5))

function retornaNome(nome) {
    return function (sobrenome) {
        return `${nome} ${sobrenome}`
    }
}

console.log(retornaNome('Maick')('Ribeiro'))
