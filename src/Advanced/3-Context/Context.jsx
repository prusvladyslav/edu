import { Content } from "./Content";
import React from "react";

const themes = {
  light: "white",
  dark: "black",
};

export const ThemeContext = React.createContext(themes.light);

export const Context = () => {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Content />
    </ThemeContext.Provider>
  );
};
