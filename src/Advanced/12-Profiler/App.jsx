import React, { unstable_Profiler as Profiler,useState } from "react";
export const ComponentWithProfiling = () => {
  const [count,setCount] = useState(0)
 const logProfile = (id, phase, actualTime, baseTime, startTime, commitTime) => {
    console.log(`${id}'s ${phase} phase:`);
    console.log(`Actual time: ${actualTime}`);
    console.log(`Base time: ${baseTime}`);
    console.log(`Start time: ${startTime}`);
    console.log(`Commit time: ${commitTime}`);
  };
    const go = (direction) => {
    direction === 'up' ? setCount(count+1) : setCount(count-1)
}
 
      return (
        <>
      {/* <Profiler id="app" onRender={this.logProfile}> */}
        <button onClick={(()=>go("up"))}>☝️</button>
        <div>The count is {count}</div>
        <button onClick={(()=>go("down"))}>👇</button>
      {/* </Profiler> */}
              </>
    );

}
