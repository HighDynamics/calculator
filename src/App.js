import React, { useState, useEffect } from 'react';
import ReactDOM from 'react'
import './App.css';

function OutputHistory(props){
  return(
    <div>{sessionStorage.expression}</div>
  );
}

function Output(props){
  const input = props.input;
//parseFloat makes initial 0 disappear! Hooray
  return(
    <>
      {parseFloat(input, 10)}
    </>
  );
}
//get utilities from props and render
function UtilityList(props){
  const utilities = props.utilities;
  const input = props.input;
  const setInput = props.setInput;
  function clickUtility(utility){
    switch(utility){
      case 'AC':
        sessionStorage.expression = '';
        setInput('0');
        break;
      case 'C':
        setInput('0');
        break;
      case '+/-':
        if(input.charAt(0) !== '-'){
          setInput('-' + input);
        }else{
          setInput(input.substring(1));
        };
        break;
    }
  }
  const utilityButtons = utilities.map((utility) =>
  <button
    key={utility}
    id={utility}
    onClick={() => clickUtility(utility)}>
    {utility}
  </button>
  );
  return(
    <>
      {utilityButtons}
    </>
  );
}
//All clear, clear, negative/positive, percentage
function Utilities(props){
  const utilities = ['AC', 'C', '+/-', '%']
  const input = props.input;
  const setInput = props.setInput;
  return(
    <UtilityList
      utilities={utilities}
      input={input}
      setInput={setInput}
    />
  );
}
//get operators from props and render
function OperatorList(props){
  const operators = props.operators;
  const input = props.input;
  const setInput = props.setInput;
//Saves input, concatenates to previous input(if any); reset state
  function saveExpression(operator){
    switch(operator){
      case '+':
        sessionStorage.expression = sessionStorage.expression + input + ' + ';
        setInput('0');
        break;
      case '-':
        sessionStorage.expression = sessionStorage.expression + input + ' - ';
        setInput('0');
        break;
      case 'x':
        sessionStorage.expression = sessionStorage.expression + input + ' * ';
        setInput('0');
        break;
      case String.fromCharCode('0x00F7'):
        sessionStorage.expression = sessionStorage.expression + input + ' ' + String.fromCharCode('0x00F7') + ' ';
        setInput('0');
        break;
    }
  }
  const operatorButtons = operators.map((operator) =>
    <button
      key={operator}
      id={operator}
      onClick={() => saveExpression(operator)}>
        {operator}
    </button>
  );
  return(
    <>
      {operatorButtons}
    </>
  );
}
//operators on a calculator: + - * %
function Operators(props){
  const input = props.input;
  const setInput = props.setInput;
  const operators = ['+', '-', 'x', String.fromCharCode('0x00F7'), '=']
  return(
    <>
      <OperatorList
        operators={operators}
        input={input}
        setInput={setInput}
      />
    </>
  );
}

//Get numbers from props and render. Add functionality
function NumberList(props){
  const numbers = props.numbers;
  const input = props.input;
  const setInput = props.setInput;
  const numberButtons = numbers.map((number) =>
    <button
      key={number}
      id={number}
      onClick={() => setInput(input + number)}>
        {number}
    </button>
  );
  return(
    <>
      {numberButtons}
    </>
  )
}
//numbers on a calculator
function Numbers(props){
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
  const input = props.input;
  const setInput = props.setInput;
  return(
    <>
      <NumberList
        numbers={numbers}
        setInput={setInput}
        input={input}
      />
    </>
  );
}

function App(){
  const [input, setInput] = useState('0')
  return (
    <>
      <OutputHistory />
      <Output input={input}/>
      <Numbers setInput={setInput} input={input}/>
      <Operators setInput={setInput} input={input}/>
      <Utilities setInput={setInput} input={input}/>
    </>
  );
}

export default App;
