$(document).ready(function(evento){

  let tarefa = $('input').val()
  let lista = $(".lista")
  let item = `<li>${tarefa}</li>`

  $('form').on('submit', function(evento){
    evento.preventDefault();
    let tarefa = $('input').val()
    let lista = $(".lista")
    let item = `<li>${tarefa}</li>`
    $(item).appendTo(lista)

    $('input').val("") 

    $('li').on('click', function(){
    $(this).addClass('concluido')
    });

  });

})


