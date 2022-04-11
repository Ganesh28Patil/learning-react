// import logo from './logo.svg';
import React from "react";
import './App.css';

function App() {
  const [counter,setCounter] = React.useState(0);
// destructuring
// REact.useState = > [ value , setValue ]
  const handleIncrement = (value) =>{
    setCounter(counter + value);
    // console.log('counter:', counter);
  // React needs you to use setCounter
  // so that it knows that the state is upatded
  }
  return (
    <div className="App">
      <p>hello masai</p>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleIncrement(1)}>ADD</button>
      <button onClick={() => handleIncrement(-1)}>REDUCE</button>
    </div>
  );
}

export default App;

// state,
// props
// hooks

// state is something that the component remembers
