// Criar um programa que calcula a média 
// das notas entre os alunos e envia 
// mensagem do cálculo da média. 

const aluno01 = {
  nome: "Mayk",
  nota: 9.8
}
const aluno02 = {
  nome: "Diego",
  nota: 10
}
const aluno03 = {
  nome: "Fulano",
  nota: 2
}

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3;


if (media > 5) {
  console.log(`A média foi de ${media} e está acima!`)
}
else {
  console.log(`A média foi de ${media} e está abaixo.`)
}