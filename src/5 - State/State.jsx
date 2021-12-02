import React, { useState,useEffect } from 'react'

export const State = (props) => {
  const tickState = useState(0);
  const tick = tickState[0];
    const setTick = tickState[1];
    useEffect(() => {
      document.title = `You clicked ${tick} times`;
    });
    useEffect(() => {
     console.log(`component did mount`);
    },[]);
    useEffect(() => {
     console.log(`component did update`);
    },[tick]);
    useEffect(() => {
      return () => {
        console.log(`component did unmount`);
        setTick(0)
      }
    },[]);
    return (
      <>
        <h1>{tick}</h1>
        <button
          onClick={() => {
            setTick(tick + 1);
          }}
        >
          +tick
        </button>
        <button  onClick={(()=>{setTick(prevTick => prevTick + 1)})}  >tick  </button>
      </>
    );
}
