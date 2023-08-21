let notaHomens = 0
let mulheresNotaAcima7 = 0

let cadastro = prompt('Você quer cadastrar uma nota? Digite s para sim ou n para não.')
while (cadastro === 's') {
    let nota = Number(prompt('Insira a nota do aluno:'))
    let sexo = prompt('Insira o sexo do aluno. Digite m para masculino ou f para feminino.')
    cadastro = prompt('Você quer cadastrar uma nota? Digite s para sim ou n para não.')

    if(cadastro === 'n'){
        console.log('Não há mais notas a serem registradas. Confira o registro geral:')
        cadastro = false
    }

    if(sexo === 'm'){
        notaHomens++
        }

    if(sexo === 'f' && nota > 7){
        mulheresNotaAcima7++
    }

}

console.log('Notas de alunos masculinos: ' + notaHomens)
console.log('Mulheres com notas acima de 7: ' + mulheresNotaAcima7)