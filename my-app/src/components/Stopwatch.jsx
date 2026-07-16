import React, { useEffect, useState } from "react";

function Stopwatch() {

 const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("screen refreshed");
    // checkCount();
    //  setCount(1);

    setTimeout(() => {
      setCount((pv) => { return pv + 1 })
    }, 2000);

  }, []);

  function checkCount() {
     if(count > 10) {
        setCount(1);
     }
  }


  function updateCount() {
    setCount((preCount) => {
      return preCount + 1;
    });
  }

  return (
    <>
      <h1>I have rendered {count} times!!!</h1>

      <button onClick={updateCount}>Increase count</button>
    </>
  );
}

export default Stopwatch;
