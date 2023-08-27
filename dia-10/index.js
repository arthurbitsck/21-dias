//criando os arrays necessários
let array = []
let arrayInvertido = []
let escolhaQuantidade = Number(prompt('Quantos números você deseja inserir no array? (Digite em algarismos)'))

for (let i = 0; i < escolhaQuantidade; i++) {
    let numeros = Number(prompt('Insira o ' + (i + 1) + '° número:'))
    array[i] = numeros
}

console.log('Array inicial: ' + array)

let contadorInvertido = escolhaQuantidade - 1
for (let i = 0; i < escolhaQuantidade; i++) {
    arrayInvertido[i] = array[contadorInvertido]
    contadorInvertido--
}

console.log('Array invertido: ' + arrayInvertido)