function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${this.nome} está falando sobre ${assunto} e ele tem ${this.peso}kg`
        },

        get nomeCompleto() {
            return `Meu nome é ${nome} ${sobrenome}`
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ')
            nome = valor.shift()
            sobrenome = valor.join(' ')
            return valor
        },

        peso: peso,
        altura: altura,

        imc() {
            return (this.peso / (this.altura ** 2)).toFixed(2)
        }
    }
}

const pessoa1 = criaPessoa('Maick', 'Ribeiro Martins', 85, 1.79)
console.log(pessoa1)
console.log(pessoa1.fala('javascript'))
console.log(pessoa1.imc())
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.nomeCompleto)