function randomico(min = 1000, max = 3000) {
    const numeroRandomico = Math.random() * (max - min) + min
    return Math.round(numeroRandomico)
}

function f1(callback) {
    setTimeout(function () {
        console.log('f1')
        callback()
    }, randomico())
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2')
        callback()
        
    }, randomico())
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3')
        callback()
        
    }, randomico())
}

f1(f1callback)

function f1callback (){
    f2(f2callback)
}

function f2callback(){
    f3(f3callback)
}
function f3callback(){
    console.log('finalizado')
}


