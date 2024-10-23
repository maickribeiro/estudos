function diaSemanaTexto(dia) {
    switch (dia) {
        case 0:
            return 'Domingo'
        case 1:
            return 'Segunda'
        case 2:
            return 'Terça'
        case 3:
            return 'Quarta'
        default:
            return 'Não encontrado'
    }
}
const data = new Date()
const diaDaSemana = data.getDay()
console.log(diaSemanaTexto(diaDaSemana))

let nome = 'Laís'
let nomeCheque

switch (nome) {
    case 'Jessica':
        nomeCheque = 'Maick'
        break
    case 'Maick':
        nomeCheque = 'Jessica'
    default:
        nomeCheque = "Não encontrado"
        break;
        
}
console.log(nomeCheque)