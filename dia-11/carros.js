//criando arrays
let modelos = []
let anos = []
let valores = []
let contador = 0
let continuar = true

while (continuar) {
    let cadastroModelos = prompt('Cadastre um modelo de carro:')
    let cadastroAnos = Number(prompt('Cadastre o ano do modelo inserido:'))
    let cadastroValores = Number(prompt('Cadastre o valor do modelo inserido:'))

    let desejaContinuar = prompt('Você deseja cadastrar novos dados? (sim/não)')
    if(desejaContinuar == 'não'){
        continuar = false
    }

    modelos[contador] = cadastroModelos
    anos[contador] = cadastroAnos
    valores[contador] = cadastroValores
    contador++
}

for (let i = 0; i < modelos.length; i++) {
    console.log(modelos[i] + ' - ' + anos[i] + ' - ' + valores[i] + 'R$')
}

valores.sort((a, b) => a - b)
console.log('Valores ordenados: ' + valores + 'R$')