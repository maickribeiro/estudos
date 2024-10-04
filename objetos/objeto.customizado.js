const pessoa = {
    nome: "Maick",
    sobrenome: "Ribeiro",
    idade: 31,
    mudaNome:  function(novoNome){
        return this.nome = novoNome 
    }
}

console.log(pessoa.mudaNome("Lais"))