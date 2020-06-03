import React, { useState, useEffect } from 'react';
import ReactDOM from 'react'
import './App.css';

function Output(props){
  const input = props.input;
  return(
    <>
      {parseFloat(input, 10)}
    </>
  );
}
//get utilities from props and render
function UtilityButtons(props){
  const utilities = props.utilities;
  const utilityButtons = utilities.map((utility) =>
  <button key={utility} id={utility}>
    {utility}
  </button>
  );
  return(
    <>
      {utilityButtons}
    </>
  );
}
//All Clear, negative/positive, percentage
function Utilities(props){
  const utilities = ['AC', '+/-', '%']
  return(
    <UtilityButtons utilities={utilities} />
  );
}
//get operators from props and render
function OperatorList(props){
  const operators = props.operators;
  const operatorButtons = operators.map((operator) =>
    <button key={operator} id={operator}>
      {operator}
    </button>
  )
  return(
    <>
      {operatorButtons}
    </>
  );
}
//operators on a calculator: + - * %
function Operators(props){
  const operators = ['+', '-', 'x', '%', '=']
  return(
    <>
      <OperatorList operators={operators} />
    </>
  );
}

//get numbers from props and render
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
      <NumberList numbers={numbers} setInput={setInput} input={input}/>
    </>
  );
}
//MOST RECENT ----- ATTEMPTING TO PASS PROPS FOR DISPLAY
function App(){
  const [input, setInput] = useState('0')
  return (
    <>
      <Output input={input}/>
      <Numbers setInput={setInput} input={input}/>
      <Operators setInput={setInput}/>
      <Utilities setInput={setInput}/>
    </>
  );
}

export default App;
