const nome = {
    nome: "Maick",
    Sobrenome: "Ribeiro",
    idade: 31
}

for (let propriedade in nome) {
    console.log(propriedade, nome[propriedade])
}
