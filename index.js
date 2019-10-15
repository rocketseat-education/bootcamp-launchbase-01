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

  let media = 0;

  for (let i = 0; i < alunos.length; i++) {
    media = media + alunos[i].nota;
  }
  media = media / alunos.length;
  
  if (media > 5) {
    console.log(`A média foi de ${media} e está acima!`)
  }
  else {
    console.log(`A média foi de ${media} e está abaixo.`)
  }
}

calculateMedia(alunos)
calculateMedia(alunos2)



