let numero = Number(prompt('Digite um número:'))

for (let contador = numero; contador <= numero + 2; contador++) {
    console.log('tabuada do numero: ' + contador)

    for (let contador2 = 0; contador2 <= 10; contador2++) {
        console.log(contador + ' x ' + contador2 + ' = ' + (contador * contador2))        
    }
}    