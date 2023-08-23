let nome = prompt('Digite o seu nome:')
let idade = Number(prompt('Digite a sua idade:'))
let peso = Number(prompt('Digite o seu peso:'))
let altura = Number(prompt('Insira a sua altura:'))
let profissao = prompt('Insira a sua profissão:')

console.log('Olá ' + nome + ', você tem ' + idade + ' anos de idade, pesa ' + peso + ' Kg, possui ' + altura + ' metros de altura e trabalha como ' + profissao)

if(idade >= 18){
    console.log('Está liberado para tomar umas geladas.')
}else{
    console.log('Sem geladas para você.')
}

let idadeMeses = idade * 12
let idadeSemanas = idade * 52
let idadeDias = idade * 365

console.log('Sua idade em meses: ' + idadeMeses + ' meses.')
console.log('Sua idade em semanas: ' + idadeSemanas + ' semanas.')
console.log('Sua idade em dias: ' + idadeDias + ' dias.')

let imc = peso / (altura * altura)

if(imc < 18.5){
    console.log( imc + ' Kg/m²' + ' imc: Magreza.')
}else if(imc > 18.5 && imc < 24,9){
    console.log(imc + ' Kg/m²' + ' imc: Normal.')
}else if(imc < 24.9 && imc < 30){
    console.log(imc + ' Kg/m²' + ' imc: Sobrepeso.')
} else if(imc > 30){
    console.log(imc + ' Kg/m²' + ' imc: Obesidade.')
}

let anoAtual = 2023
let anoNasc = anoAtual - idade
let idadeAtual = 0
console.log('Ano de nascimento: ' + anoNasc)

for (let contador = anoNasc; contador <= anoAtual ; contador++) {
    console.log(contador + ' - ' + idadeAtual + ' anos de idade.')
    idadeAtual++
}

do {
    let cadastro = prompt('Você deseja cadastrar novos dados? (Digite s para sim ou n para não')
} while (cadastro === 's');