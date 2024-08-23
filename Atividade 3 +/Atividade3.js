function ex01() {
  let num1 = prompt("Digite 1 numero: ");
  let num2 = prompt("Digite outro numero: ");

  let resultado = parseInt(num1) + parseInt(num2);
  console.log(resultado);
}

function ex02() {
  let numPrimo = prompt("Digite um numero: ");
  let numPrimoConv = parseInt(numPrimo)

  if (numPrimoConv <= 0) {
    console.log("O numero " + numPrimo + " nao e primo pois e igual a 0 ou negativo");
  } else {
    if (numPrimoConv % 1 === 0 && numPrimoConv % numPrimoConv === 0) {
      console.log("O numero " + numPrimo + " e primo");
    } else {
      console.log("O numero " + numPrimo + " nao e primo");
    }
  }
}


function ex03() {
  //simbolos especiasi mais usados

  let simbolos = [
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=",
    "{", "}", "[", "]", "|", ";", ":", "'", "\"", ",", ".", "<", ">", "/",
    "?", "~", "`"
  ];

  let palavra = prompt("Digite uma palavra: ");

  for (let letra of palavra) {
    if (simbolos.includes(letra)) {
      console.log(letra);
    }
  }
}

function ex04() {
  let nota1 = prompt("Nota 1: ");
  let nota2 = prompt("Nota 2: ");
  let nota3 = prompt("Nota 3: ");
  let nota4 = prompt("Nota 4: ");


  let nota1conv = parseInt(nota1);
  let nota2conv = parseInt(nota2);
  let nota3conv = parseInt(nota3);
  let nota4conv = parseInt(nota4);

  let media = nota1conv + nota2conv + nota3conv + nota4conv / 4;

  if (media >= 7) {
    console.log("APROVADO");
  } else if (media >= 5 && media < 7) {
    console.log("EM RECUPERACAO");
  } else if (media < 5) {
    console.log("REPROVADO");
  }
}

function ex05() {
  let numeroSecreto = parseInt(Math.random() * 101); //usando 101 para quando arredondar colocar o numero em 100
  let tentativas = 1;

  while (chute != numeroSecreto) {
    let chute = prompt("Escolha um número entre 1 e 100: ");
    if (chute == numeroSecreto) {
      break;
    } else {
      if (chute > numeroSecreto) {
        console.log("O número secreto é menor");
      } else {
        console.log("O número secreto é maior");
      }
    }
    tentativas++
  }

  let palavraTentativa;

  if (tentativas > 1) {
    palavraTentativa = 'tentativas';
  } else {
    palavraTentativa = 'tentativa';
  }

  console.log("O número secreto era " + numeroSecreto + " e você acertou com " + tentativas + " " + palavraTentativa)
}

ex01();
ex02();
ex03();
ex04();
ex05();