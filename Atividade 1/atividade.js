// Calcule a média de 3 números

function media(num1, num2, num3) {

  let media = (num1 + num2 + num3) / 3;

  console.log("Media dos valores: " + media.toFixed(2));
}

// Calcule  a área do retângulo || base e altura

function areaRetangulo(base, altura) {

  let areaTotal = base * altura;
  console.log("Area do retangulo: " + areaTotal + "m²");
};

// Dado um número, incremente e decremente o seu valor

function maisOuMenos(numOrginal) {
  numOrginal++;
  console.log("Numero com incremento: " + numOrginal);
  numOrginal--;
  numOrginal--;
  console.log("Numero com decremento: " + numOrginal);
}

// Dado dois números, calcule o resto da divisão do primeiro pelo segundo

function restoDivisao(num1, num2) {
  let resto = num1 % num2;
  console.log("Resto da divisao: " + resto);
}

// Dado uma temperatura em Fahrenheit, converta-a para celsius.

function conversaoTemperatura(fahrenheit) {
  let conversor = (fahrenheit - 32) / 1.8;
  console.log("Temperatura convertida: " + conversor.toFixed(2) + "ºC");
}

// Dado um número, calcule o dobro e a metade desse número

function dobroMetade(num1) {
  let dobro = num1 * 2;
  console.log("Dobro de " + num1 + ": " + dobro);
  let metade = num1 / 2;
  console.log("Metade de " + num1 + ": " + metade);
}

// Dado dois números, calcule o resultadao da exponenciação do primeiro número elevado ao segundo

function potencia(num1, num2) {
  let elevado = num1 ** num2;
  console.log(num1 + " elevado a " + num2 + "º potencia: " + elevado);
}

media(32, 16, 8);
areaRetangulo(24, 12);
maisOuMenos(20);
restoDivisao(10, 3);
conversaoTemperatura(160);
dobroMetade(2);
potencia(2, 9);