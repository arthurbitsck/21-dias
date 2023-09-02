let nomes = []
let senhas = []
let contadorNomes = 0
let contadorSenhas = 0
let continuar = true

while (continuar) {
let opcao = prompt('O que você deseja fazer? (Digite 1 para cadastro, 2 para login, 3 para excluir cadastro ou 4 para encerrar o programa)')

    switch (opcao) {
        case '1':
        nomes[contadorNomes] = prompt('Insira o nome para cadastro:')
        senhas[contadorSenhas] = Number(prompt('Insira a senha para cadastro:'))
        contadorNomes++
        contadorSenhas++
        break;

        case '2':
         let nome = prompt('Insira o nome de login:')
         let senha = Number(prompt('Insira sua senha:'))
        let loginValido = false

        for (let i = 0; i < contadorNomes; i++) {
            if(nome === nomes[i] && senha === senhas[i]){
                loginValido = true
            }
            
            if(loginValido){
                console.log('Login efetuado com sucesso!')
            }else{
                console.log('Login inválido...')
            }
        }

        break;

        case '3':
          let nomeAux = []
          let senhaAux = []
          let contadorAux = 0
            nome = prompt('Digite um nome para excluir:')

            for (let i = 0; i < nomes.length; i++) {
                if(nome == nomes[i]){
                    console.log('Nome excluido com sucesso')
                }else{
                    nomes[contadorAux] = nomes[i]
                    senhas[contadorAux] = senhas[i]
                    contadorAux++
                }
                
                
            }


        break;

        case '4':
            console.log('operação encerrada.')
        continuar = false
        break;

        default:
            console.log('opcão invalida')
        break;
    }
}