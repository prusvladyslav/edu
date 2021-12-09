// import { calc } from './calc'
import React, { useState, lazy } from "react";
// const calc = lazy(() => import("./calc.jsx"));

export const App = () => {
  const firstName = "Vlad";
  const lastName = "Prus";
  const [fullName, setFullName] = useState("");
  // setFullName(calc(firstName, lastName));
  return (
    <>
      <h1>Hi,{fullName}</h1>
    </>
  );
};
