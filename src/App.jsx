import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Clock = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString())
 setInterval(() => {
    setDate(new Date().toLocaleTimeString())
  },1000)
  return (
    <>
    <h1>clock</h1>
    <h2>{date}</h2>
    </>
   )  
}

function App(props) {
  const tickState = useState(0)
  const tick = tickState[0]
  const setTick = tickState[1]
  const element = <h1>hi</h1>
  // const date = () => {
  //   const dateEl = (
  //       <h1> {Date().toLocaleString()}</h1>
  //   )
  //  
  // }
  // setInterval(date,1000)
  if (tick % 2 === 0) {
    return (
      <button
        onClick={() => {
          setTick(tick + 1);
        }}
      >
        +tick
      </button>
    );
}
 else return (
    <>
      {element}
      {props.name}
      <Clock/>
    <h1>{tick}</h1>
      <button onClick={(()=>{setTick(tick+1)})}>+tick</button>
      </>
  );
}

export default App;
