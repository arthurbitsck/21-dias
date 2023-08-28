let nomes = []
let notas = []
let contador = 0
let continuar = true

while (continuar) {
    let inserirNomes = prompt('Insira o nome do aluno:')
    let inserirNotas = Number(prompt('Insira a nota do aluno:'))
    nomes[contador] = inserirNomes
    notas[contador] = inserirNotas
    contador++
    let desejaContinuar = prompt('Você deseja cadastrar um novo nome? (sim/não)')
    if(desejaContinuar == 'não'){
        continuar = false
    }
}

for (let i = 0; i < nomes.length; i++) {
    console.log('Nota dos alunos:')
    console.log(nomes[i] + notas[i])
}

let somaNotas = 0

for (let i = 0; i < notas.length; i++) {
   somaNotas += notas[i]
}

let media = notas / nomes.length

console.log('SOMA DAS NOTAS: ' + somaNotas)
console.log('MÉDIA GERAL: ' + media)