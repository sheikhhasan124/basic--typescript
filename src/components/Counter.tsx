import React, { useState } from 'react';
 
  interface User {
      name:string,
      age:number
  }

const Counter = () => {
    const [counter, setCounter] = useState<number>(0)
    const [user, setUser] = useState<User | null>(null)
      const inc=()=>{
          setCounter(counter + 1)
      }
      const dec=()=>{
          setCounter(counter - 1)
      }
      const handleSetUser=()=>{
       
        const person = {
            name:'biden',
            age:83
        }
        setUser(person)
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