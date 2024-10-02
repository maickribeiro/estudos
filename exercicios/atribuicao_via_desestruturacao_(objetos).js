const pessoa =  {
    nome: 'Maick',
    sobrenome: 'Ribeiro',
    idade: 31,
    endereco: {
        rua: 'Cesar Augusto de Castro Rios',
        numero: 332
    }
}

const {nome, endereco, ...rest} = pessoa
console.log(nome, endereco.rua, endereco["rua"])
console.log(rest)
