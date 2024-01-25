import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  //  this state to store input value
  const [input, setInput] = useState("");
  //  this state for store the result
  const [result, setResult] = useState("");

  //  this handler for
  const handleBtnClick = (value) => {
    setInput((prev) => prev + value);
  };
  //     this handle for caluclating the values
  const handleCaluculation = () => {
    try {
      setResult(eval(input).toString());
    } catch (e) {
      setResult("Error");
    }
  };
  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const buttons = [
    [7, 8, 9, "+"],
    [4, 5, 6, "-"],
    [1, 2, 3, "*"],
    [0, "C", "=", "/"],
  ];

  return (
    <div className="container">
      <h1>Calculator App</h1>
      <div >
      <input type="text" value={input}  readOnly />
      <br/>
      <div className="result">{result}</div>
      <div className="btn">
        {buttons.map((row, rowIndex) => (
          <div key={rowIndex} className="button-row">
            {row.map((button, index) => (
              <button
                key={index}
                className="calc-btn"
                onClick={() =>
                  button === "C"
                    ? handleClear()
                    : button === "="
                    ? handleCaluculation()
                    : handleBtnClick(button)
                }
              >
                {button}
              </button>
            ))}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
export default Calculator;
