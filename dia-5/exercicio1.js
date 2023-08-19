let numeroUm = Number(prompt('Insira o primeiro número:'))
let numeroDois = Number(prompt('Insira o segundo número:'))
let operacao = prompt('Escolha a operação desejada: digite 1 para somar, 2 para subtrair, 3 para dividir ou 4 para multiplicar.')
let resultado = 0

switch (operacao) {
    case '1':
        resultado = numeroUm + numeroDois
        console.log(numeroUm + ' + ' + numeroDois + ' = ' + resultado)
        break;

    case '2':
        resultado = numeroUm - numeroDois
        console.log(numeroUm + ' - ' + numeroDois + ' = ' + resultado)
        break;

    case '3':
        resultado = numeroUm / numeroDois
        console.log(numeroUm + ' / ' + numeroDois + ' = ' + resultado)
        break;

    case '4':
        resultado = numeroUm * numeroDois
        console.log(numeroUm + ' * ' + numeroDois + ' = ' + resultado)
        break;
}