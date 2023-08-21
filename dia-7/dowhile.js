let nome = prompt('Digite o seu nome:')
let cpf = prompt('Digite o seu cpf:')
let continuar ='1'
let saldo = 0
let opcao 

do {
     saldo = Number(prompt('Insira um valor para definir seu saldo inicial.'))
     opcao = prompt('Você que sacar ou depositar? (sacar/depositar)')
    
    if(opcao === 'sacar'){
        let valorSaque = Number(prompt('Quanto você quer sacar?'))
        saldo = saldo - valorSaque 
        if(valorSaque > saldo){
            console.log('erro na operação.')
        }
    }

    if(opcao === 'depositar'){
        let valorDeposito = Number(prompt('Insira um valor para depositar'))
        saldo = valorDeposito + saldo
    }

   continuar = prompt('Você deseja continuar? 1-sim ou 2-não')
    
} while (continuar === '1');

console.log(nome + ' seu saldo atual é de ' + saldo)