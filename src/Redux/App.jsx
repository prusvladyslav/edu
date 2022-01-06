import React, {useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
export const App = () => {
  const dispatch = useDispatch()
    const [list, updateList] = useState([])
    const [input, setInput] = useState('')
    const handleButton = () => {
      setInput('')
      dispatch({type:"ADD",payload: {name:input,id:reduxList.length} })
    }
    const removeTodo = (id) => {
      updateList(list.filter((item) => item.id !== id))
    }
  useEffect(() => {
      dispatch({ type: "UPDATE", payload: list });
  }, [list])
  const reduxList = useSelector(state => state.allReducer.data) 
    return (
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
            <button onClick={handleButton}>Add</button>
            {reduxList?.length === 0 && <h1>No Items yet</h1>}
        <ul>
                {reduxList.map((item) => {

                    return (
                      <div key={item.id}>
                            <h1>{item.name}</h1>
                            <button onClick={(()=>removeTodo(item.id))}>remove todo</button>
                      </div>
                    ); 
                    })}
        </ul>
      </div>
    );
}