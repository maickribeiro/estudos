function obtemImc(peso, altura) {
    this.peso = peso
    this.altura = altura
    let resultado = peso / (altura * altura)
    let imcIndice = ["Muito abaixo do peso", "Abaixo do peso", "Peso normal", "Acima do peso", "Obesidade Grau I", "Obesidade Grau II", "Obesidade Grau III"]

    if (typeof peso !== "number" || typeof altura !== "number") {
        throw new Error("Digite uma altura válida")
    }

    if (resultado < 16.9) return `Seu imc é ${resultado.toFixed(2)}. ${imcIndice[0]}`
    if (resultado < 18.9) return `Seu imc é ${resultado.toFixed(2)}. ${imcIndice[1]}`
    if (resultado < 24, 9) return `Seu imc é ${resultado.toFixed(2)}. ${imcIndice[2]}`
    if (resultado < 29.9) return `Seu imc é ${resultado.toFixed(2)}. ${imcIndice[3]}`
    if (resultado < 34.9) return `Seu imc é ${resultado.toFixed(2)}. ${imcIndice[4]}`
    if (resultado < 40) return `Seu imc é ${resultado.toFixed(2)}. ${imcIndice[5]}`
    if (resultado > 40) return `Seu imc é ${resultado.toFixed(2)}. ${imcIndice[6]}`
}

let resultadoImc = obtemImc(84, 1.79)
console.log(resultadoImc)