function fiz_buzz(numero) {
    if (typeof numero !== 'number') {
        return numero
    }
    if (numero % 3 === 0 && numero % 5 === 0) {
        return 'fiz_buzz'
    }
    else if (numero % 3 === 0) {
        return 'fiz'
    }
    else if (numero % 5 === 0) {
        return 'buzz'
    }
    return numero
}

console.log(fiz_buzz('a'))
for (let i = 0; i <= 100; i++) {
    console.log(i, fiz_buzz(i))
}