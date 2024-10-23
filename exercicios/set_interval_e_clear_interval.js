const intervalo = setInterval(function () {
   console.log('Imprime na tela depois de 1 segundo')
}, 1000)

setTimeout(() => clearInterval(intervalo), 5000)
