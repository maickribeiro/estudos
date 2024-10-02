const pessoa = {
    nome: 'Maick',
    idade: 31,

    fala(){
        console.log(`${this.nome} tem ${this.idade}`)
    }
}

console.log(pessoa)
pessoa.fala()