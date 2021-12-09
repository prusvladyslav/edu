import React, { useContext } from "react";
import { ThemeContext } from "./Context";
export const Button = () => {
  const value = useContext(ThemeContext);
  console.log(value);
  return <button style={{ color: value }}>Button</button>;
};

export const Content = () => {
  return (
    <div>
      <Button />
    </div>
  );
};
