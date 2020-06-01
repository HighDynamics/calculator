import React, { useState, useEffect } from 'react';
import ReactDOM from 'react'
import './App.css';

function Output(){
  return(
    <>
    </>
  );
}
//get utilities from props and render
function UtilityButtons(props){
  const utilities = props.utilities;
  const utilityButtons = utilities.map((utility) =>
  <button key={utility.toString()} id={utility.toString()}>
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
function Utilities(){
  const utilities = ['AC', '+/-', '%']
  return(
    <UtilityButtons utilities={utilities} />
  );
}
//get operators from props and render
function OperatorList(props){
  const operators = props.operators;
  const operatorButtons = operators.map((operator) =>
    <button key={operator.toString()} id={operator.toString()}>
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
function Operators(){
  const operators = ['+', '-', 'x', '%']
  return(
    <>
      <OperatorList operators={operators} />
    </>
  );
}

//get numbers from props and render
function NumberList(props){
  const numbers = props.numbers;
  const numberButtons = numbers.map((number) =>
    <button key={number.toString()} id={number.toString()}>
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
function Numbers(){
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  return(
    <>
      <NumberList numbers={numbers}/>
    </>
  );
}

function App(){
  return (
    <>
      <Numbers />
      <Operators />
      <Utilities />
    </>
  );
}

export default App;
