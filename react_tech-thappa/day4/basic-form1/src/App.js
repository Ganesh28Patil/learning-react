import { useState } from 'react';
import './App.css';

function App() {
  const [name,setName] = useState();
  const [fullName,setFullName] = useState();

  const inputData = (e) =>{
    console.log(e.target.value);
    setName(e.target.value);
  }
  const onSubmit = () =>{
    setFullName(name);
  }
  return (
     <>
      <div>
        <h1>HEllO {fullName}</h1>
        <input type="text" placeholder='Enetr your name' onChange={inputData}/>
        <button onClick={onSubmit} > CLick 👆 </button>
      </div>
    </>
  );
}

export default App;
