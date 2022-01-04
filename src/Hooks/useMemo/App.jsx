import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";

const App = ({ data }) => {
  const [state, setState] = useState(0);

  const sorted = useMemo(() => {
    console.log("memorized!");
    return data.sort((a, b) => a - b);
  }, [data]);

  console.log("component rendered!");

  return (
    <>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        update
      </button>
      <ul>
        {sorted.map((val, idx) => (
          <li key={idx}>{val}</li>
        ))}
      </ul>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App
    data={[
      7, 28, 82, 9, 3, 2, 44, 72, 8, 99, 5, 43, 32, 5, 2, 8, 2, 5, 7, 6, 0,
    ]}
  />,
  rootElement
);
