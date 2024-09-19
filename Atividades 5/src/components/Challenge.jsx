import React, {useState} from "react";
import "./Challenge.css";

function Challenge() {
  const [valor1, setValor1] = useState(""); //Setando o valor padrao como vazio em valor1
  const [valor2, setValor2] = useState(""); //Setando o valor padrao como vazio em valor2

  //Funcao para pegar o nome do input e setar seu valor digitado pelo usuario
  function handleInputChange(event) {
    const {name, value} = event.target;
    if (name === "valor1") {
      setValor1(parseInt(value));
    } else if (name === "valor2") {
      setValor2(parseInt(value));
    }
  }

  function Adicao() {
    const valor3 = valor1 + valor2;
    return alert(`A soma dos valores resulta em ${valor3}`);
  }

  function Subtracao() {
    const valor3 = valor1 - valor2;
    return alert(`A subtração dos valores resulta em ${valor3}`);
  }

  function Multiplicacao() {
    const valor3 = valor1 * valor2;
    return alert(`A multiplicação dos valores resulta em ${valor3}`);
  }

  function Divisao() {
    if (valor2 === 0) {
      return alert("Não é possível dividir por zero!");
    } else {
      const valor3 = valor1 / valor2;
      return alert(`A divisão dos valores resulta em ${valor3}`);
    }
  }

  //Resta os valores pra vazio inves de precisar dar f5 na pgaina
  function Reiniciar() {
    setValor1("");
    setValor2("");
  }

  return (
    <div>
      {/* //input com valor da linha 4 ou o digitado pelo usuario e trocando o valor
      da constante pra esse valor */}
      <input
        type="number"
        name="valor1"
        value={valor1}
        onChange={handleInputChange}
        placeholder="Digite o primeiro valor"
      />

      {/* //input com valor da linha 5 ou o digitado pelo usuario e trocando o valor
      da constante pra esse valor */}
      <input
        type="number"
        name="valor2"
        value={valor2}
        onChange={handleInputChange}
        placeholder="Digite o segundo valor"
      />
      <br />

      <button onClick={Adicao}>Adição</button>
      <button onClick={Subtracao}>Subtração</button>
      <button onClick={Multiplicacao}>Multiplicação</button>
      <button onClick={Divisao}>Divisão</button>
      <button onClick={Reiniciar}>Reiniciar</button>
    </div>
  );
}

export default Challenge;
