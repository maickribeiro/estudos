const frutas = ['uva', 'laranja', 'goiaba', 'melância']
const novoFrutas = frutas // Passado por refêrencia
const restFrutas = [...frutas] // Rest operator
const restFrutas2 = [...novoFrutas] // Rest operator

novoFrutas.pop() // Remove o ultimo elemento do array

console.log(frutas)
console.log(novoFrutas)
console.log(restFrutas)
console.log(restFrutas2)