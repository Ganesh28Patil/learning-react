import React, { useState } from 'react';
import './App.css';

// let count = 1;


const  App = ()=> {
  // const state = useState();
  // console.log(state);  ['undefined',function]

  let [count,setCount] = useState(0);

  const IncNum =() =>{  
    setCount(count + 1);
    // console.log("Clicked",count);

  }
  const DecNum = () =>{
    setCount(count - 1);
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1> Count Box </h1>
       <h1>{count}</h1>
       <button onClick={IncNum}> Increment</button>
       <button onClick={DecNum}> Decrement</button>
      </header>
    </div>
  );
}

export default App;
