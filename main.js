class Aluno {
  constructor(nomeDoAluno,notaDoAluno){
    this.nome = nomeDoAluno;
    this.nota = notaDoAluno;
  }
}

const alunos = [""]

const aluno1 = new Aluno('Lucas', "10")
const aluno2 = new Aluno('Joao', "5")
const aluno3 = new Aluno('Natalia', "2")
const aluno4 = new Aluno('Maria', "4")
const aluno5 = new Aluno('Eduardo', "8.5")
const aluno6 = new Aluno('Igor', "6")
const aluno7 = new Aluno('Ana', "8.5")
const aluno8 = new Aluno('Leticia', "9")
const aluno9 = new Aluno('Carol', "1") 

alunos.push(aluno1,aluno2,aluno3,aluno4,aluno5,aluno6,aluno7,aluno8,aluno9)


function retornaAprovados(aluno){
  return aluno.nota >= 6
}

const aprovados = alunos.filter(retornaAprovados)

function Aprovados(){
    notaAluno = aprovados.forEach((aluno)=>{
      console.log(`o aluno ${aluno.nome} foi aprovado com a nota: ${aluno.nota}.`)
    })
}

Aprovados()
