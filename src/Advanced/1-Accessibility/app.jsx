import React, { Fragment } from "react";

export const App = () => {
  return (
    <Fragment>
      <div>my app</div>
      <h2>fragment</h2>
      <label htmlFor="namedInput">Name:</label>
      <input id="namedInput" type="text" name="name" />
    </Fragment>
  );
};
