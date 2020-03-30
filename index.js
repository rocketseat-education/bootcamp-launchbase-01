const classA = [
  {
      name: "Mayk",
      score: 9.8
  },
  {
      name: "Diego",
      score: 10
  },
  {
      name: "Fulano",
      score: 2
  },
  {
      name: 'Mais um student',
      score: 10
  }
]

const classB = [
  {
      name: "Cleiton",
      score: 10
  },
  {
      name: "Robson",
      score: 10
  },
  {
      name: "Siclano",
      score: 0
  },
  {
      name: 'Novo Aluno',
      score: 5
  }
]

function calculateAverage(students) {
  let sum = 0
  
  for (let i = 0; i < students.length; i++) {
      sum = sum + students[i].score
  }

  const average = sum / students.length
  return average
}

function sendMessage(average, turma) {
  if (average > 5) {
      console.log(`${turma} average: ${average}. Congrats!`)
  } else {
      console.log(`${turma} average is bad!`)
  }
}

function markAsFlunked(student) {
  student.flunked = false
  
  if (student.score < 5) {
      student.flunked = true
  }
}

function sendFlunkedMessage(student) {
  if (student.flunked) {
      console.log(`${student.name} is flunked!`)
  }
}

function studentsFlunked(students) {
  for (let student of students) {
      markAsFlunked(student)
      sendFlunkedMessage(student)
  }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsFlunked(classA)
studentsFlunked(classB)
console.log('Hello World')