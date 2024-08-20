// Escreva um programa que verifique se o numero e positivo, negativo ou zero

function plusleMnun(num) {
  if (num > 0) {
    console.log("O numero " + num + " e positivo");
  } else if (num < 0) {
    console.log("O numero " + num + " e negativo");
  } else {
    console.log("O numero e igual a 0");
  }
}

// Escreva um programa que determine se um numero e par ou impar

function oddEven(num) {
  if (num % 2 == 0) {
    console.log(num + " e par");
  } else {
    console.log(num + " e impar");
  }
}

// Escreva um programa que classifique a idade de uma pessoa em "Crianca", "Adolescente", "Adulto" ou "Idoso"

function idade(idd) {

  if (idd < 13 && idd > 0) {
    console.log("Pessoa com idade " + idd + " e uma crianca");
  } else if (idd >= 13 && idd < 18) {
    console.log("Pessoa com idade " + idd + " e um adolescente");
  } else if (idd >= 18 && idd < 60) {
    console.log("Pessoa com idade " + idd + " e um adulto");
  } else if (idd >= 60) {
    console.log("Pessoa com idade " + idd + " e um idoso");
  } else {
    console.log("Idade informada incorreta");
  }

}

// Escreva um programa que determine a classificacao de uma nota(A,B,C,D,E,F) com base em seu valor numerico

function notas(nota) {
  if (nota >= 9 && nota <= 10) {
    console.log("Nota " + nota + " equivale a um 'A'");
  } else if (nota >= 8 && nota <= 8.9) {
    console.log("Nota " + nota + " equivale a um 'B'");
  } else if (nota >= 7 && nota <= 7.9) {
    console.log("Nota " + nota + " equivale a um 'C'");
  } else if (nota >= 6 && nota <= 6.9) {
    console.log("Nota " + nota + " equivale a um 'D'");
  } else if (nota >= 0 && nota <= 5.9) {
    console.log("Nota " + nota + " equivale a um 'F'");
  } else {
    console.log("Nota invalida");
  }
}

// Escreva um programa que, dado um numero de 1 a 7, exiba o dia da semana correspondente

function diaSemana(dia) {
  switch (dia) {
    case 1:
      console.log("Dia " + dia + " e: Domingo");
      break;
    case 2:
      console.log("Dia " + dia + " e: Segunda");
      break;
    case 3:
      console.log("Dia " + dia + " e: Terca");
      break;
    case 4:
      console.log("Dia " + dia + " e: Quarta");
      break;
    case 5:
      console.log("Dia " + dia + " e: Quinta");
      break;
    case 6:
      console.log("Dia " + dia + " e: Sexta");
      break;
    case 7:
      console.log("Dia " + dia + " e: Sabado");
      break;
    default:
      console.log("Numero para dia da semana invalido");
      break;
  }
}

// Escreva um programa que calcule o bonus de um vendedor com base em seu faturamento mensal

function bonus(salario) {
  let salarioNovo;

  if (salario < 1000 && salario > 0) {
    console.log("Nao ha bonus disponiveis para voce :/");
  } else if (salario >= 1000 && salario <= 5000) {
    salarioNovo = salario + (salario * 0.05);
    console.log("Seu salario de " + salario + " ganhou um bonus de 5%, totalizando assim um novo salario de " + salarioNovo);
  } else if (salario > 5000) {
    salarioNovo = salario + (salario * 0.10);
    console.log("Seu salario de " + salario + " ganhou um bonus de 10%, totalizando assim um novo salario de " + salarioNovo);
  } else {
    console.log("Salario invalido");
  }
}


plusleMnun(1);
plusleMnun(0);
plusleMnun(-1);
oddEven(2345);
idade(1);
idade(13);
idade(18);
idade(60);
idade(0);
notas(9.9);
notas(8.5);
notas(7);
notas(6.9);
notas(4);
notas(-1);
diaSemana(1);
diaSemana(2);
diaSemana(3);
diaSemana(4);
diaSemana(5);
diaSemana(6);
diaSemana(7);
diaSemana(0);
bonus(999);
bonus(1250);
bonus(5001);
bonus(0);