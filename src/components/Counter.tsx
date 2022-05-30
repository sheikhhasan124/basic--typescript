import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState<number>(0)
      const inc=()=>{
          setCounter(counter + 1)
      }
      const dec=()=>{
          setCounter(counter - 1)
      }
    return (
        <div>
            <h2>this is counter</h2>
            <p>{counter}</p>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    );
};

export default Counter;