let form = document.querySelector("#form")
let campoA = document.querySelector("#campoA")
let campoB = document.querySelector("#campoB")
let textoCorreto = document.querySelector(".correto")
let textoIncorreto = document.querySelector(".incorreto")
let botao = document.querySelector("#btn")

function validaForm(){
  if(campoA.value > campoB.value){
    textoIncorreto.classlist.add('display-on')
  } else{console.log('else')}
}

form.addEventListener("submit",function(evento){
  evento.preventDefault()
  console.log('ub1')
  if(campoA.value > campoB.value){
    textoIncorreto.classList.add('display-on')
    textoCorreto.classList.remove('display-on')
    campoA.value = ""
    campoB.value = ""

  } else{
    textoCorreto.classList.add('display-on')
    textoIncorreto.classList.remove('display-on')
    campoA.value = ""
    campoB.value = ""
  }
}
)

