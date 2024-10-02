function fala(inicio) {
    function fim(end) {
        return inicio + ' ' + end
    }
    return fim
}

const falar = fala('Olá')
console.log(falar('Mundo'))

function criaMultiplicador(multiplicador) {
    function numero1(numero) {
        return numero * multiplicador
    }
    return numero1
}
const duplicar = criaMultiplicador(2)
const triplicar = criaMultiplicador(3)
console.log(duplicar(5))
console.log(triplicar(5))

const add = (function () {
    let counter = 0
    return function () {
        counter += 1
        return counter
    }
    
}())
console.log(add())
console.log(add())
console.log(add())

function myDisplayer(some) {
    console.log(some)
} 

function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  myFirst();
  mySecond();