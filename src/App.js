import React, { useState, useEffect } from 'react';
import ReactDOM from 'react'
import './App.css';

function OutputHistory(props){
  return(
    <>
      <div id='expression'>{sessionStorage.expression}</div>
      <div id='evaluation'>{sessionStorage.evaluation}</div>
    </>
  );
}

function Output(props){
  const input = props.input;
//parseFloat makes initial 0 disappear! Hooray
  return(
    <>
      <div id='output'>{parseFloat(input, 10)}</div>
    </>
  );
}
//get utilities from props and render
function UtilityList(props){
  const utilities = props.utilities;
  const input = props.input;
  const setInput = props.setInput;
  const allClearButton =
    <button
      id='AC'
      key='AC'
      className='utilities'
      onClick={() => clickUtility('AC')}>
      AC
      </button>
  const clearButton =
    <button
      id="C"
      key='C'
      className='utilities'
      onClick={() => clickUtility('C')}>
      C
      </button>
  function clickUtility(utility){
    switch(utility){
      case 'AC':
        sessionStorage.expression = '';
        sessionStorage.evaluation = '';
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
      case '%':
        if(input == '0'){
          setInput('0.')
        }else{
          setInput((parseFloat(input, 10) * 0.01).toString())
        };
        break;
    }
  }
  const utilityButtons = utilities.map((utility, index) =>
  <button
    className='utilities'
    key={utility}
    id={'ut' + index}
    onClick={() => clickUtility(utility)}>
    {utility}
  </button>
  );
  return(
    <>
      {input !== '0' ? clearButton : allClearButton}
      {utilityButtons}
    </>
  );
}
//All clear, clear, negative/positive, percentage
function Utilities(props){
  const utilities = ['+/-', '%']
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
  function saveOrEvalExpression(operator){
    switch(operator){
      case '+':
        sessionStorage.expression = sessionStorage.expression + parseFloat(input, 10) + ' + ';
        setInput('0');
        break;
      case '-':
        sessionStorage.expression = sessionStorage.expression + parseFloat(input, 10) + ' - ';
        setInput('0');
        break;
      case 'x':
        sessionStorage.expression = sessionStorage.expression + parseFloat(input, 10) + ' * ';
        setInput('0');
        break;
      case String.fromCharCode('0x00F7'):
        sessionStorage.expression = sessionStorage.expression + parseFloat(input, 10) + ' / ';
        setInput('0');
        break;
      case '=':
        sessionStorage.expression = sessionStorage.expression + parseFloat(input, 10);
        sessionStorage.evaluation = eval(sessionStorage.expression);
        sessionStorage.expression = sessionStorage.expression  + ' = ';
        setInput('0');
        break;
    }
  }
  const operatorButtons = operators.map((operator, index) =>
    <button
      className='operators'
      key={operator}
      id={'op' + index}
      onClick={() => saveOrEvalExpression(operator)}>
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
  const numberButtons = numbers.map((number, index) =>
    <button
      className='numbers'
      key={number}
      id={'num' + index}
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
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
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
        <div id='appWrapper'>
          <OutputHistory />
          <Output input={input}/>
          <Numbers setInput={setInput} input={input}/>
          <Operators setInput={setInput} input={input}/>
          <Utilities setInput={setInput} input={input}/>
          <p id='footer'>this simple app was created by highdynamics</p>
        </div>
    </>
  );
}

export default App;
