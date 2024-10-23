const data = new Date()
const umaHora = 60 * 60 * 1 * 1000
console.log(data)
console.log(data.toString()) //Usar assim para melhor compreensão
console.log(new Date(umaHora).toString())
console.log(new Date(2024, 0, 17, 18, 30, 30, 50)) //ano, mês, dia, hora, minuto, segundo, milésimos de segundo
console.log(new Date(2024, 0, 17)) //mês começa do 0 até 11
console.log(new Date('2024-01-17 18:30:30'))
console.log(new Date('2024-01-17 18:30:30').toString())

console.log()

console.log('dia', data.getDate())
console.log('mes', data.getMonth() + 1)
console.log('ano', data.getFullYear())
console.log('hora', data.getHours())
console.log('minuto', data.getMinutes())
console.log('segundos', data.getSeconds())
console.log('milesimos de segundos', data.getMilliseconds())
console.log('dia da semana', data.getDay() + 1)
console.log(Date.now()) //mostra do marco 0 até a data atual em milésimos de segundo

console.log()

console.log(new Date(Date.now()).toString())


const zeroEsquerda = function (numero) {
    return numero >= 10 ? numero : `0${numero}`
}

function obtemData(data) {
    const dia = zeroEsquerda(data.getDate())
    const mes = zeroEsquerda(data.getMonth() + 1)
    const ano = zeroEsquerda(data.getFullYear())
    const hora = zeroEsquerda(data.getHours())
    const minuto = zeroEsquerda(data.getMinutes())
    const segundo = zeroEsquerda(data.getSeconds())
    //const milisegundos = zeroEsquerda(data.getMilliseconds())

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
}
const dataAtual = new Date()
console.log(obtemData(dataAtual))


console.log()
console.log(Date())