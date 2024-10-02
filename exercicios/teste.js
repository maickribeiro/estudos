/*const nome = function () {
    console.log(5 + 5)
}
*/
function nome() {
    console.log(5 + 5)
}


function executaFuncao(funcao) {
    funcao()
    return 'Executado pela funcao'
} 

console.log(executaFuncao(nome))

console.log("")

const obg = {
    falar(){
    console.log('Obrigado')}
}

obg.falar() //Método 


console.log('\\texto')
console.log("\"texto\"")
const meu_nome = "Maick"
console.log(meu_nome[3])
const concatenado = meu_nome.concat(" ", "Ribeiro", " ", "Martins")
const last = concatenado.replace('r', 12)
console.log(concatenado)
console.log(last)