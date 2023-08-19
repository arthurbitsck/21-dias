let operaçãoDesejada = prompt('Oque você deseja? digite 1 para abastecer com gasolina, 2 para abastecer com alcool ou 3 para calibrar os pneus.')

switch (operaçãoDesejada) {
    case '1':
       let litroGas = Number(prompt('Quantos litros de gasolina você quer abastecer?'))
       let valorGas = litroGas * 5
       console.log('Para abastecer ' + litroGas + ' litros de gasolina, você vai gastar um total de ' + valorGas + ' R$')
       break;

     case '2':
        let litroAlcool = Number(prompt('Quantos litros de alcool você quer abastecer?'))
        let valorAlcool = litroAlcool * 3
        console.log('Para abastecer ' + litroAlcool + ' litros de alcool, você vai gastar um total de ' + valorAlcool + 'R$')
        break;

    case '3':
        console.log('Pneus calibrados com sucesso.')
        break;    
}