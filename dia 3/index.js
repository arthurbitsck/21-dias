let nome = prompt('Insira o seu nome:')
let idade = parseInt(prompt('Insira a sua idade:'))
let altura = Number = prompt('Insira a sua altura:')
let peso = Number = prompt('Insira o seu peso:')

var anoNasc = 2023 - idade
var imc = peso / (altura * altura)

console.log('olá ' + nome + ', você tem ' + idade + ' anos de idade, possui ' + altura + ' metros de altura e pesa ' + peso + ' Kg. Você nasceu no ano de ' + anoNasc + ' e seu imc é de ' + imc + ' kg/m²')