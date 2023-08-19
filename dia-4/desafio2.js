let nome = prompt('Qual é o seu nome?')
let idade = Number(prompt('Qual a sua idade?'))
let carteira = prompt('Você tem carteira de motorista?')
let carro = prompt('Você tem um carro?')

if(idade < 18 && carteira === 'não'){
    console.log(nome + ', você não pode dirigir.')
} 

if(idade >= 18 && carteira === 'sim' && carro === 'não'){
    console.log(nome + ', você pode dirigir mas não tem carro.')
}

if(idade >= 18 && carteira === 'sim' && carro === 'sim'){
    console.log(nome + ', você será o motorista!')
}