import React, { useState, useEffect } from 'react';
import ReactDOM from 'react'
import './App.css';

function Output(){
  return(
    <>
    </>
  );
}

function UtilityButtons(){

}

function Operators(){

}
function NumberList(props){
  const numbers = props.numbers;
  const buttonNumbers = numbers.map((number) =>
    <button key={number.toString()}>{number}</button>
  );
  return(
    <div>{buttonNumbers}</div>
  )
}
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
    </>
  );
}

export default App;
