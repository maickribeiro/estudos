(function calculaMedia() {
    let contador = 0
    let inicializador = 0

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            console.log("Aceita apenas numeros")
        }
        contador += arguments[i]
        inicializador++
    }
    console.log(contador / inicializador)
    return (contador / inicializador) || 0
})(5, 10, 15, 5, 10, 15)
