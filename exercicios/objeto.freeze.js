const nome = new Object()
nome.nome = 'Maick'
Object.freeze(nome)
nome.sobrenome = 'Ribeiro'
nome.idade = 31

console.log(nome.nome)
console.log(nome.sobrenome)
console.log(nome.idade)