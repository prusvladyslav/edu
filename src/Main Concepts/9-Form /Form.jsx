import React, { useState } from "react";

export const Form = () => {
  const [choosed, setChoosed] = useState();
  const [value, setValue] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValue((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  return (
    <form>
      <label>
        text
        <input name="text" type="text" />
      </label>
      <select onChange={handleChange}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      <input name="email" type="text" onChange={handleChange} />
      <input name="password" type="password" onChange={handleChange} />
    </form>
  );
};
