function ex01() {
  let contador = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "Feliz Ano Novo!"]
  for (let i = 0; i < contador.length; i++) {
    console.log(contador[i]);
  }
}

function ex02() {
  let soma = 0;
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      soma += numeros[i]
    }
  }
  console.log(soma)

}

function ex03(num) {
  for (i = 1; i < 11; i++) {
    let conta = num * i;
    console.log(num + " * " + i + " = " + conta)
  }

}

function ex04(palavra) {
  let vogais = ["a", "e", "i", "o", "u"];
  for (let letra of palavra) {
    if (vogais.includes(letra)) {
      console.log(letra);
    }

  }
}

function ex05() {
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  let i = 0;
  while (i < numeros.length) {
    if (numeros[i] % 2 != 0) {
      console.log(numeros[i]);
    }
    i++;
  }
}

function ex06(num) {
  let soma = 0;

  let numConv = num.toString();

  for (digito of numConv) {
    soma += parseInt(digito);
  }
  console.log(soma);
}

function ex07() {
  let pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
  };

  // verifica se a propriedade tem valor nele
  for (let item in pessoa) {
    if (pessoa.hasOwnProperty(item)) {
      console.log(item + ":" + pessoa[item]);
    }
  }
}



ex01();
ex02();
ex03(2);
ex04("Jaca");
ex05();
ex06(1234);
ex07();