import React, { useState, useEffect } from "react";

export const State = (props) => {
  const tickState = useState(0);
  const tick = tickState[0];
  const setTick = tickState[1];
  const [newTick, setNewTick] = useState(0);
  const [thirdTick,setThirdTick] = useState(0);
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
  console.log("after rerender", tick, newTick);
  console.log('thirdTick after rerender',thirdTick);
  return (
    <>
      <h1>old tick{tick}</h1>
      <h1>new tick{newTick}</h1>

      <button
        onClick={() => {
          console.log("before update", tick, newTick);
          setTick(tick + 1);
          console.log("after first state update", tick, newTick);
          setNewTick((prevTick) => {
            return prevTick + 1;
          });
          console.log("after second state update", tick, newTick);
        }}
      >
        +tick
      </button>
      <button onClick={() => {
        console.log('0/3',thirdTick);
        setThirdTick(thirdTick + 1)
        console.log('1/3',thirdTick);
        setThirdTick((prevTick) => prevTick + 1)
         console.log("2/3", thirdTick);
        setThirdTick(thirdTick + 1)
         console.log("3/3", thirdTick);
      }}>Few setStates  </button>
      <h2>thirdTick {thirdTick}</h2>
    </>
  );
};
