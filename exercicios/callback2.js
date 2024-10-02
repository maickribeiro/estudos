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

f1(function () {
    f2(function () {
        f3(function () {
            console.log('funcionou')
        });
    });
});
