import React, { useState, useEffect } from "react";
const Page = ({ name, number }) => (
  <div>
    <h2>{name}</h2>
    <h3>{number}</h3>
  </div>
);

const numberAddOne =
  (Component) =>
  ({ number, ...props }) =>
    <Component {...props} number={number + 1} />;

const greetingWithName =
  (greeting) =>
  (Component) =>
  ({ name, ...props }) =>
    <Component {...props} name={`${greeting}, ${name}`} />;

const addATitle = (Component) => (props) =>
  (
    <React.Fragment>
      <h1>I'm Title</h1>
      <Component {...props} />
    </React.Fragment>
  );

export const App = addATitle(greetingWithName("Hello")(numberAddOne(Page)));
