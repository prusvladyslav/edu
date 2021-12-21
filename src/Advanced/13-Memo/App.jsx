import React, { Component,useState } from "react";
import ReactDOM from "react-dom";


const NotMemo = (props) => <div>{props.message}</div>;
const Memo = React.memo(NotMemo);
const MemoSecond = React.memo(NotMemo);
const Counter = ({count}) => <strong>{count}</strong>;
export const App = () => {
  const [count,setCount] = useState(0)
  const [value,setValue] = useState('message')
    return (
   
          <div className="container">
            <h1 className="title">
              React.memo(): <Counter count={count} />
            </h1>

            <button
              type="button"
              onClick={(()=>setCount(count+1))}
            >
              Increase Count
            </button>

            <input
              type="text"
              className="input"
              value={value}
              onChange={((e)=>setValue(e.target.value))}
              style={{ marginTop: "30px", marginBottom: "30px" }}
            />

            <div >
              <div >
                <NotMemo message={value} />
              </div>
              <div >
                <Memo message={value} />
              </div>
            </div>
          </div>
     
    );
  }


