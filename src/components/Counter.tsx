import React, { ChangeEvent, FormEvent, useState } from 'react';
 
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
      // event for form
      const handleSetUser=(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const person = {
            name:'biden',
            age:83
        }
        setUser(person)
      }
      // event for input onchange
      const handleNameChange =(e:ChangeEvent<HTMLInputElement>)=>{

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