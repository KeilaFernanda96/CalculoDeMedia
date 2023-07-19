
let estudantes = [
  {
    nome: "João",
    notaPrimeiraProva: 8.5,
    notaSegundaProva: 7.9
  },
  {
    nome: "Diego",
    notaPrimeiraProva: 9.2,
    notaSegundaProva: 8.7
  },
  {
    nome: "Leticia",
    notaPrimeiraProva: 7.8,
    notaSegundaProva: 6.5
  },
  {
    nome: "Julia",
    notaPrimeiraProva: 6.9,
    notaSegundaProva: 2.3
  }
];

function calcularMedia(estudante) {
  return (estudante.notaPrimeiraProva + estudante.notaSegundaProva) / 2;
}

const mediaMinima = 7;

for (let i = 0; i < estudantes.length; i++) {
  const estudante = estudantes[i];
  const media = calcularMedia(estudante);

  if (media >= mediaMinima) {

    alert(`A média do(a) aluno(a) ${estudante.nome} é: ${media}
    Parabéns ${estudante.nome}, você foi aprovado(a)!`)

  } else {
    alert(`A média do(a) aluno(a) ${estudante.nome} é: ${media}
    Não foi dessa vez ${estudante.nome}, Tente Novamente!`)
  }
}


 



