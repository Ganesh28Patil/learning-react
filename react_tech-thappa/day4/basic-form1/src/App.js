import React,{ useState } from 'react';
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

// for practice of baisc form concept
const App2 = () =>{
  const [name, setName] = useState();
  const [fullname,setFullName] = useState();
  const addText = (e) => {
    setName(e.target.value);
  }
  const send = () =>{
    setFullName(name);
  }
return (

  <>
    <div>
      <h1> hello {fullname}</h1>
      <input type="text" placeholder="Enter Name" onChange={addText} />
      <button onClick={ send}>Send</button>
    </div>
  </>
)

}

export {App, App2};


