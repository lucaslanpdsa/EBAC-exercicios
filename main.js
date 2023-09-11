//classe principal
const Funcionario = function(nome, idade){
  this.nome = nome
  this.idade = idade
  this.oi = function(){
    console.log("oi")
  }
}

//classe herdeira
const Analista = function(nome, cargo ,idade){
  this.cargo = cargo
  Funcionario.call(this, nome, idade)
}

//classe herdeira
const Desenvolvedor = function(nome, cargo ,idade, tech){
  this.tech = tech
  Analista.call(this, cargo)
  Funcionario.call(this, nome, idade)
}

//três instâncias
const analista1 = new Analista("lucas" , "analista", 25)
const desenvolvedor1 = new Desenvolvedor("ronald" , "desenvolvedor", 23, "java")
const funcionario1 = new Funcionario("lucas", 21)

console.log(desenvolvedor1 instanceof Desenvolvedor)
console.log(analista1 instanceof Analista)
console.log(funcionario1 instanceof Funcionario)
