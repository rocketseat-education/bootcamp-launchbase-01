// Criar um programa que calcula a média 
// das notas entre os alunos e envia 
// mensagem do cálculo da média. 

const nomeAluno01 = "Mayk"
const notaAluno01 = 9.8

const nomeAluno02 = "Diego"
const notaAluno02 = 10

const nomeAluno03 = "Fulano"
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3;


if (media > 5) {
  console.log(`A média foi de ${media} e está acima!`)
}
else {
  console.log(`A média foi de ${media} e está abaixo.`)
}