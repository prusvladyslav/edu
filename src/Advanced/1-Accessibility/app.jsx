import React, { Fragment } from "react";

export const App = () => {
  const data = ["1", "2", "3"];

  return (
    <div>
      <Fragment>
        <div>my app</div>
        <h2>fragment</h2>
        <label htmlFor="namedInput">Name:</label>
        <input id="namedInput" type="text" name="name" />
      </Fragment>

      {data.map((item) => {
        // return <key={item}>{item}</>; нельзя
        return <Fragment key={item}>{item}</Fragment>;
      })}
    </div>
  );
};
