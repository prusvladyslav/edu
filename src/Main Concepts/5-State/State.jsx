import React, { useState, useEffect } from "react";

export const State = (props) => {
  const tickState = useState(0);
  const tick = tickState[0];
  const setTick = tickState[1];
  const [newTick, setNewTick] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${tick} times`;
  });
  useEffect(() => {
    console.log(`component did mount`);
  }, []);
  useEffect(() => {
    console.log(`component did update`);
  }, [tick]);
  useEffect(() => {
    return () => {
      console.log(`component did unmount`);
      setTick(0);
    };
  }, []);
  useEffect(() => {}, [tick]);
  console.log(tick !== newTick);
  console.log(newTick);
  return (
    <>
      <h1>old tick{tick}</h1>
      <h1>new tick{newTick}</h1>

      <button
        onClick={() => {
          setTick(tick + 1);
          setNewTick((prevTick) => prevTick + 1);
        }}
      >
        +tick
      </button>
    </>
  );
};
