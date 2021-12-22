import React, { useEffect, useRef,useState } from "react";

// const UseRefHook = (props) => {
//   const userNameRef = useRef(null);
//   const passwordRef = useRef(null);

//   const submitBtnRef = useRef(null);

//   useEffect(() => {
//     userNameRef.current.focus();
//   }, []);

//   const handleKeyPress = (e, inputType) => {
//     if (e.key === "Enter") {
//       switch (inputType) {
//         case "username":
//           passwordRef.current.focus();
//           break;

//         case "password":
//           submitBtnRef.current.focus();
//           e.preventDefault();
//           break;
//         default:
//           break;
//       }
//     }
//   };

//   const handleSubmit = () => {
//     alert("submitted");
//   };

//   const { style } = props;
//   return (
//     <div style={style}>
//       <h2>Example for using useRef Hook</h2>
//       <h3>Login</h3>

//       <Input
//         type="text"
//         name="username"
//         ref={userNameRef}
//         onKeyDown={(e) => handleKeyPress(e, "username")}
//       />

//       <Input
//         type="password"
//         name="password"
//         ref={passwordRef}
//         onKeyDown={(e) => handleKeyPress(e, "password")}
//       />
//       <button ref={submitBtnRef} onClick={handleSubmit}>
//         Login
//       </button>
//     </div>
//   );
// };

export function ExchangeRate({ rate }) {
  const rateRef = useRef(null);
  const [color, setColor] = useState("gray");
 
  useEffect(() => {
    const oldRate = rateRef.current;

    if (rate > oldRate) {
      setColor("green");
    } else if (rate < oldRate) {
      setColor("red");
    } 


    rateRef.current = rate;
  }, [rate]);

  return <div style={{ color }}>{rate}</div>;
}
export const App = () => {
  const [rate, setRate] = useState(0)
   const input = useRef(null);
   const handleClick = () => {
     input.current.focus();
   };
  return (
    <>
      <button onClick={(() => setRate(rate+1) )}>increase</button>
      <ExchangeRate rate={rate} />
      <button onClick={(() => setRate(rate - 1))}>decrease</button>
      <input type="text" ref={input} onClick={handleClick} />
      
    </>
  );
}