import React, { useState } from "react";
import {PropTypes} from 'prop-types';
export const App = () => {
  const [text, setText] = useState("");
  const handleChange = (value) => {
    setText(value);
  };
  const [mouse, setMouse] = useState({});
  const handleMouse = (event) => {
    console.log(event.clientX, event.clientY);
    setMouse({ x: event.clientX, y: event.clientY });
  };
  return (
    <>
      <input type="text" onChange={(e) => handleChange(e.target.value)} />
      <Element text={text}></Element>
      <div style={{ height: "100vh" }} onMouseMove={(e) => handleMouse(e)}>
        the mouse position is {mouse.x} and {mouse.y}
      </div>
    </>
  );
    
};
const Element = ({ text = '123' }) => {
    return <div>{text}</div>;
    
};
Element.propTypes = {
    text: PropTypes.string.isRequired,
};