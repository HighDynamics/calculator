import React, { useState, useContext } from "react";
import "./App.css";

const ExpressionContext = React.createContext(null);
const EvaluationContext = React.createContext(null);
function OutputHistory(props) {
  return (
    <>
      <div id="expression">{props.expression}</div>
      <div id="evaluation">{props.evaluation}</div>
    </>
  );
}

function Output(props) {
  const input = props.input;
  //parseFloat makes initial 0 disappear! Hooray
  return (
    <>
      <div id="output">{parseFloat(input, 10)}</div>
    </>
  );
}
//get utilities from props and render
function UtilityList(props) {
  const [expression, setExpression] = useContext(ExpressionContext);
  const [evaluation, setEvaluation] = useContext(EvaluationContext);
  const utilities = props.utilities;
  const input = props.input;
  const setInput = props.setInput;
  const allClearButton = (
    <button
      id="AC"
      key="AC"
      className="utilities"
      onClick={() => clickUtility("AC")}
    >
      AC
    </button>
  );
  const clearButton = (
    <button
      id="C"
      key="C"
      className="utilities"
      onClick={() => clickUtility("C")}
    >
      C
    </button>
  );
  function clickUtility(utility) {
    switch (utility) {
      case "AC":
        setExpression("");
        setEvaluation("");
        setInput(0);
        break;
      case "C":
        setInput(0);
        break;
      case "+/-":
        if (input.charAt(0) !== "-") {
          setInput("-" + input);
        } else {
          setInput(input.substring(1));
        }
        break;
      case "%":
        if (input === 0) {
          setInput(0);
        } else {
          setInput((parseFloat(input, 10) * 0.01).toString());
        }
        break;
      default:
        break;
    }
  }
  const utilityButtons = utilities.map((utility, index) => (
    <button
      className="utilities"
      key={utility}
      id={"ut" + index}
      onClick={() => clickUtility(utility)}
    >
      {utility}
    </button>
  ));
  return (
    <>
      {input === 0 ? allClearButton : clearButton}
      {utilityButtons}
    </>
  );
}
//All clear, clear, negative/positive, percentage
function Utilities(props) {
  const utilities = ["+/-", "%"];
  const input = props.input;
  const setInput = props.setInput;
  return (
    <UtilityList utilities={utilities} input={input} setInput={setInput} />
  );
}
//get operators from props and render
function OperatorList(props) {
  const [expression, setExpression] = useContext(ExpressionContext);
  const [evaluation, setEvaluation] = useContext(EvaluationContext);
  const operators = props.operators;
  const input = props.input;
  const setInput = props.setInput;
  //Saves input, concatenates to previous input(if any); reset state
  function saveOrEvalExpression(operator) {
    switch (operator) {
      case "+":
        setExpression(expression + parseFloat(input, 10) + " + ");
        setInput(0);
        break;
      case "-":
        setExpression(expression + parseFloat(input, 10) + " - ");
        setInput(0);
        break;
      case "x":
        setExpression(expression + parseFloat(input, 10) + " * ");
        setInput(0);
        break;
      case String.fromCharCode("0x00F7"):
        setExpression(expression + parseFloat(input, 10) + " / ");
        setInput(0);
        break;
      case "=":
        setExpression(expression + parseFloat(input, 10) + " =");
        setEvaluation(eval(expression + parseFloat(input, 10)));
        setInput(0);
        break;
      default:
        break;
    }
  }
  const operatorButtons = operators.map((operator, index) => (
    <button
      className="operators"
      key={operator}
      id={"op" + index}
      onClick={() => saveOrEvalExpression(operator)}
    >
      {operator}
    </button>
  ));
  return <>{operatorButtons}</>;
}
//operators on a calculator: + - * %
function Operators(props) {
  const input = props.input;
  const setInput = props.setInput;
  const operators = ["+", "-", "x", String.fromCharCode("0x00F7"), "="];
  return (
    <>
      <OperatorList operators={operators} input={input} setInput={setInput} />
    </>
  );
}

//Get numbers from props and render. Add functionality
function NumberList(props) {
  const numbers = props.numbers;
  const input = props.input;
  const setInput = props.setInput;
  const numberButtons = numbers.map((number, index) => (
    <button
      className="numbers"
      key={number}
      id={"num" + index}
      onClick={() => setInput(`${input}${number}`)}
    >
      {number}
    </button>
  ));
  return <>{numberButtons}</>;
}
//numbers on a calculator
function Numbers(props) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];
  const input = props.input;
  const setInput = props.setInput;
  return (
    <>
      <NumberList numbers={numbers} setInput={setInput} input={input} />
    </>
  );
}

function App() {
  const [input, setInput] = useState(0);
  const [expression, setExpression] = useState("");
  const [evaluation, setEvaluation] = useState("");
  return (
    <>
      <div id="appWrapper">
        <OutputHistory expression={expression} evaluation={evaluation} />
        <Output input={input} />
        <Numbers setInput={setInput} input={input} />
        <ExpressionContext.Provider value={[expression, setExpression]}>
          <EvaluationContext.Provider value={[evaluation, setEvaluation]}>
            <Operators setInput={setInput} input={input} />
            <Utilities setInput={setInput} input={input} />
          </EvaluationContext.Provider>
        </ExpressionContext.Provider>
      </div>
    </>
  );
}

export default App;
