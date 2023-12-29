import React, { Component } from "react";
import "../index.css";

class Calculator extends Component {
  state = {
    inputValue: "",
    operator: "",
    result: "",
  };

  render() {
    return (
      <React.Fragment>
        <div className="neon-mist">
          <div className="calculator">
              <div className="screen">
                <input type="text" value={this.state.inputValue} disabled />
              </div>
              <div className="keys">
                <button
                  className="danger btn "
                  id="danger"
                  onClick={() => this.handleClear()}
                >
                  C
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => this.handleOperator("-")}
                >
                  -
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => this.handleOperator("X")}
                >
                  X
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => this.handleOperator("%")}
                >
                  %
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => this.handleOperator("/")}
                >
                  /
                </button>
                <button onClick={() => this.handleNumber(1)}>1</button>
                <button onClick={() => this.handleNumber(2)}>2</button>
                <button onClick={() => this.handleNumber(3)}>3</button>
                <button
                  className="btn btn-primary"
                  onClick={() => this.handleOperator("+")}
                >
                  +
                </button>
                <button onClick={() => this.handleNumber(4)}>4</button>
                <button onClick={() => this.handleNumber(5)}>5</button>
                <button onClick={() => this.handleNumber(6)}>6</button>
                <button className="visibility-none"></button>
                <button onClick={() => this.handleNumber(7)}>7</button>
                <button onClick={() => this.handleNumber(8)}>8</button>
                <button onClick={() => this.handleNumber(9)}>9</button>
                <button className="visibility-none"></button>
                <button onClick={() => this.handleDecimal(".")}>.</button>
                <button
                  className="zero"
                  id="zero"
                  onClick={() => this.handleNumber(0)}
                >
                  0
                </button>
                <button
                  className="equalto badge-warning"
                  id="equalto"
                  onClick={() => this.handleEqual()}
                >
                  =
                </button>
              </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  handleClear = () => {
    this.setState((prevState) => {
      const inputValueArray = prevState.inputValue.split(" ");
      inputValueArray.pop(); // Remove the last word
      const newInputValue = inputValueArray.join(" ");
      return {
        inputValue: newInputValue,
      };
    });
  };

  handleNumber = (number) => {
    this.setState((prevState) => ({
      inputValue: prevState.inputValue + number,
    }));
  };

  handleOperator = (operator) => {
    this.setState((prevState) => ({
      inputValue: "",
      operator: operator,
      result: prevState.inputValue,
    }));
  };

  handleDecimal = () => {
    if (!this.state.inputValue.includes(".")) {
      this.setState((prevState) => ({
        inputValue: prevState.inputValue + ".",
      }));
    }
  };

  handleEqual = () => {
    const { inputValue, operator, result } = this.state;

    if (operator && result) {
      let calculatedResult;

      switch (operator) {
        case "X":
          calculatedResult = parseFloat(result) * parseFloat(inputValue);
          break;
        case "%":
          calculatedResult =
            (parseFloat(result) / 100) * parseFloat(inputValue);
          break;
        case "/":
          calculatedResult = parseFloat(result) / parseFloat(inputValue);
          break;
        case "-":
          calculatedResult = parseFloat(result) - parseFloat(inputValue);
          break;
        case "+":
          calculatedResult = parseFloat(result) + parseFloat(inputValue);
          break;
        // Add more cases for other operators if needed

        default:
          break;
      }

      this.setState({
        inputValue: String(calculatedResult),
        operator: "",
        result: "",
      });
    }
  };
}

export default Calculator;
