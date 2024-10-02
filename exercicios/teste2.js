function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let fatorial = factorial(5)
console.log(fatorial)


let num = 1
for (let i = 5; i >= 1; i--) {
    num = num * i
}
console.log(num)

const obj = {}
obj.x = 3;
console.log(obj.x)


const nome = setInterval(
    function() {
        console.log(new Date())
}, 1000)

setTimeout(function () {
    clearInterval(nome)
},5000)


const arrow = msg => {
    return msg
}

console.log(arrow('Isso é uma arrow function'))
