//dados iniciais
let nome = prompt('Insira seu nome:')
let idade = Number(prompt('Insira a sua idade:'))
let salario = Number(prompt('Insira o seu salário atual:'))

console.log('Olá ' + nome + ' você tem ' + idade + ' anos de idade e possui um salário atual de ' + salario + ' R$.')

// confirmação dos dados inseridos
let confirmacao = prompt('Confira se seus dados inseridos estão certos. Você inseriu seus dados corretamente? (sim/não)')
do {
    nome = prompt('Insira seu nome:')
    idade = Number(prompt('Insira a sua idade:'))
    salario = Number(prompt('Insira o seu salário atual:'))
    confirmacao = prompt('Confira se seus dados inseridos estão certos. Você inseriu seus dados corretamente? (sim/não)')
} while (confirmacao === 'não');

console.log('Olá ' + nome + ' você tem ' + idade + ' anos de idade e possui um salário atual de ' + salario + ' R$.')

// previsão de aumento salarial
