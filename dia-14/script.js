let nome
let salario 

function ColetarDados() {
    nome = prompt('Insira o seu nome:')
    salario = Number(prompt('Insira o seu salário:'))
    CalculoSalario(salario, nome)
}
    function CalculoSalario(salario, nome) {
        console.log('Vamos calcular o seu aumento salarial!')
        let taxaReajuste
        let salarioReajustado

        if(salario <= 1500){
            taxaReajuste = '20%'
           salarioReajustado = salario * 0.2
        }else if(salario >= 1501 && salario <= 2000){
            taxaReajuste = '15%'
            salarioReajustado = salario * 0.15
        }else if(salario >= 2001 && salario <= 3000){
            taxaReajuste = '10%'
            salarioReajustado = salario * 0.1
        }else if(salario >= 3000){
            taxaReajuste = '5%' 
            salarioReajustado = salario * 0.05
        }

        console.log('Nome do usuário: ' + nome)
        console.log('Salário inicial: ' + salario)
        console.log('Taxa de reajuste: ' + taxaReajuste)
        console.log('Salário reajustado: ' + salarioReajustado)

        CalcularNovamente();
    }
    
        function CalcularNovamente() {
            let resposta = prompt('Você deseja inserir e calcular novos dados? (sim/não)')
            if(resposta == 'sim'){
                ColetarDados();
            }else{
                console.log('programa encerrado.')
            }
        }

    
