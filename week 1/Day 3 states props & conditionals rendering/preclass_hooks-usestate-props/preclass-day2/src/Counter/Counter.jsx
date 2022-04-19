
import React from "react";


function App() {
  const [counter,setCounter] = React.useState(0);
  const handleIncrement = (value) =>{
    setCounter(counter + value);  
  }
  return (
    <>
      <p>WellCome to Masai School</p>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleIncrement(1)}>ADD</button>
      <button onClick={() => handleIncrement(-1)}>REDUCE</button>
    </>
  );
}
export default App;

// state,
// props
// hooks

// state is something that the component remembers