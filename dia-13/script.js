class Carro{
  nome 
  potencia
  velocidadeMaxima
  aceleracao

  constructor(nome, potencia, velocidadeMaxima, aceleracao){
    this.nome = nome
    this.potencia = potencia
    this.velocidadeMaxima = velocidadeMaxima
    this.aceleracao = aceleracao
  } 

  Calcular(distancia, resultado) {
    distancia = Number(prompt('Insira uma distância em metros:'))
    resultado = distancia / (this.velocidadeMaxima / this.aceleracao)
    return resultado;
  }
}

let carros = []
let carro1 = new Carro('Lamborghini', 400, 320, 5)
let carro2 = new Carro('Ferrari', 295, 280, 6)
let carro3 = new Carro('Buggati', 400, 340, 4)

carros[0] = carro1
carros[1] = carro2
carros[2] = carro3

class Corrida{
  nomeCorrida
  tipo
  distancia
  vencedor

  constructor(nomeCorrida, tipo, distancia, vencedor){
    this.nomeCorrida = nomeCorrida
    this.tipo = tipo
    this.distancia = distancia
    this.vencedor = vencedor
  }

}