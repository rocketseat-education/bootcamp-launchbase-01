// Criar um programa que calcula a média 
// das notas entre os alunos e envia 
// mensagem do cálculo da média. 

const alunos = [
  {
    nome: "Mayk",
    nota: 9.8
  },
  {
    nome: "Diego",
    nota: 10
  },
  {
    nome: "Fulano",
    nota: 2
  }
]


const alunos2 = [
  {
    nome: "Cleiton",
    nota: 10
  },
  {
    nome: "Robson",
    nota: 10
  },
  {
    nome: "Jonh",
    nota: 2
  }
]

function calculateMedia(alunos) {
  const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;
  
  if (media > 5) {
    console.log(`A média foi de ${media} e está acima!`)
  }
  else {
    console.log(`A média foi de ${media} e está abaixo.`)
  }
}

calculateMedia(alunos)
calculateMedia(alunos2)



