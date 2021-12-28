import React, { useReducer } from 'react'
import { initialState, reducer } from './reducer'



export const Counter =  () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Count: {state.count}</h1>
      <button
        onClick={() => dispatch({ type: "reset", payload: initialState })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}

export const Show = () => {
     const [state, dispatch] = useReducer(reducer, initialState);
    return <h1>
      not local state  Count: {state.count}</h1>;
}