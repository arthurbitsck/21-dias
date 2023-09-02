let arrayA = [13,20,10,22,24,20,27,17,19,14]
let arrayB = [24,22,23,11,15,17,29,14,16,21]
let arraySimilar = []

arrayA.forEach(function(element) {
    // Verifique se o elemento atual também está presente no segundo array
    if (arrayB.includes(element)) {
      // Adicione o elemento ao novo array (similarArray)
      arraySimilar.push(element);
    }
  });

  console.log(arraySimilar)