// Itera em um array
const numero = ["Maick", 2,29,31]

let dobro = []
numero.forEach(function (elemento, indice, array) {
    if (typeof elemento === "number"){
        dobro.push(elemento * 2) 
        console.log(indice, array)  
    }   
})
console.log(dobro)


