function multiplicador(n) {
    return function outraFuncao (n2) {
        return n * n2
    } 
}

const multiplica = multiplicador(10)
console.log(multiplica(5))

function retornoNome (nome) {
    return function(sobrenome){
        return `${nome} ${sobrenome}`
    }
}

console.log(retornoNome('Maick')('Ribeiro'))
