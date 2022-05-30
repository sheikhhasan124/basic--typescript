import React from 'react';

import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';


/* let people = 'hasan';
    people = 23 */

 /*    let student:string = 'hasan';
    let age:number = 24;
    let isSmart:boolean = false; */

    /* let students:string[] = ['hob','biden','hariiy','chapline']
    let fees:number[] = [12,32,423,12,23] */

    ///interface , unione |, optional chaine?

      interface Person {
        name:string;
         age:number;
          job?:string;
          location?: string | number

        } 

     const person:Person= {
       name: 'sagla',
       age:23,
       location:30
     }

     // function 
     const handleType =(name:string, age:number, job:string):number =>{
       const total:number= 23;
       console.log(name,age,job)
       return total;
     }

function App() {
  return (
    <div className="App">
      <Counter/>
      <Users/>
    </div>
  );
}

export default App;
