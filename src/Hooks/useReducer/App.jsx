import React, { useReducer,useContext } from 'react'
import { initialState, reducer } from './reducer'


const ReducerContext = React.createContext()
export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (

    <ReducerContext.Provider value={ state, dispatch } >
        <h1>Count: {state.count}</h1>
        <button
          onClick={() => dispatch({ type: "reset", payload: initialState })}
        >
          Reset
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <Show></Show>
      </ReducerContext.Provider>
  
  );
}

export const Show = () => {
  const { state, dispatch } = useContext(ReducerContext)
  
    return <h1>
      not local state  Count: {state.count}</h1>;

}