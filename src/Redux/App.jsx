import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addManyTodo } from './actions'
import { fetchTodos } from './reducers/asyncActions'
import { addTask,deleteTask } from "./toolkit/toolkitReducer";

export const App = () => {
  const dispatch = useDispatch()
    // const [list, updateList] = useState([])
    const [input, setInput] = useState('')
    const handleButton = () => {
      setInput('')
      // dispatch({type:"ADD",payload: {name:input,id:reduxList.length} })
      dispatch(
        addTask({
          task: input,
        })
      );
    }
    const removeTodo = (id) => {
      // updateList(list.filter((item) => item.id !== id))
      dispatch(
        deleteTask({
          id: id,
        })
      );
    }
  // useEffect(() => {
  //     dispatch({ type: "UPDATE", payload: list });
  // }, [list])
  const reduxList  = useSelector((state)=>{
		return state.tasks;
	});

    return (
      <div>
        <button onClick={(()=>dispatch(fetchTodos()))}>
add many todo 
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
            <button onClick={handleButton}>Add</button>
            {reduxList?.length === 0 && <h1>No Items yet</h1>}
        <ul>
          {reduxList[0]?.length > 0 ?
            reduxList[0].map((item) => {
              return (
                <div>
                  <h1>{item.name}</h1>
                </div>
              )
            })
            
           : reduxList.map((item) => {
                
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