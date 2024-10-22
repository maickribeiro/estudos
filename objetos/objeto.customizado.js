const pessoa = {
    nome: "Laís",
    sobrenome: "Ribeiro",
    idade: 31,
    criadoEm: new Date(),
    
    mudaNome:  function(novoNome){
        console.log(this)
        return this.nome = novoNome 
        
    }
}

pessoa.mudaNome("Maick")
console.log(pessoa)
