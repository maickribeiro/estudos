const numeros = [1, 2, 3, 4, 5, 6, 7]

// Cria duas constantes baseadas no valor da array números
const [elemento, elemento2, elemento3, , ...resto] = numeros
console.log(elemento, elemento2, elemento3)
console.log(resto) // Retorna o restante dos valores da array   