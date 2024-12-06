import { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultat, setResultat] = useState("");
  function räkna() {}
  return (
    <div>
      <h1>Calculator</h1>
      <label htmlFor="num1">Tal 1 : </label>
      <input
        type="number"
        id="num1"
        value={num1}
        onChange={(e) => setNum1(e.value.target)}
      />
      <label htmlFor="num1">Tal 2 : </label>
      <input
        type="number"
        id="num2"
        value={num2}
        onChange={(e) => setNum2(e.value.target)}
      />
      {}
      <div className="operation">
        <button onClick={() => räkna("+")}>+ </button>

        <button onClick={() => räkna("-")}>-</button>

        <button onClick={() => räkna("x")}>x </button>

        <button onClick={() => räkna("/")}> /</button>
      </div>
    </div>
  );
};

export default Calculator;
