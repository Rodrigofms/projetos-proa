class Funcionario {
  constructor(nome, idade, salario) {
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
  }

  trabalhar() {
    console.log(`${this.nome} está trabalhando.`);
  }

  receberAumento(valor) {
    if (valor > 0) {
      this.salario += valor;
      console.log(`${this.nome} recebeu um aumento de R$${valor}. Novo salário: R$${this.salario}`);
    }
  }
}

class Engenheiro extends Funcionario {
  constructor(nome, idade, salario, especialidade) {
    super(nome, idade, salario);
    this.especialidade = especialidade;
  }

  trabalhar() {
    console.log(`${this.nome} está desenvolvendo um projeto na area de ${this.especialidade}.`);
  }

  mudarEspecialidade(novaEspecialidade) {
    this.especialidade = novaEspecialidade;
    console.log(`${this.nome} agora e especialista em ${this.especialidade}.`);
  }
}

class Designer extends Funcionario {
  constructor(nome, idade, salario, ferramenta) {
    super(nome, idade, salario);
    this.ferramenta = ferramenta;
  }

  trabalhar() {
    console.log(`${this.nome} esta criando designs usando o ${this.ferramenta}.`);
  }

  mudarFerramenta(novaFerramenta) {
    this.ferramenta = novaFerramenta;
    console.log(`${this.nome} agora esta usando ${this.ferramenta} para criar designs.`);
  }
}

// Criando funcionários com funcoes
const joao = new Engenheiro("João", 30, 8000, "Banco de Dados");
const maria = new Designer("Maria", 25, 6000, "Figma");


joao.trabalhar();
maria.trabalhar();
joao.receberAumento(1000);


joao.mudarEspecialidade("Desenvolvimento Web");
maria.mudarFerramenta("Adobe XD");

joao.trabalhar();
maria.trabalhar();