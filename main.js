$(document).ready(function () {
  $("#e-mail").mask("00000-000", {placeholder : "00000-000"})
  $("#telefone").mask("(00) 0 0000-0000", {placeholder : "(00) 0 0000-0000"})
  $("#cpf").mask('000.000.000-00', {reverse: true})
  $("#cep").mask("00000-000", {placeholder : "00000-000"})
})