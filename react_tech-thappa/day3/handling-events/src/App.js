import React ,{useState} from 'react';
import './App.css';

function App() {
  const purple = "#8e44ad";

  

  const [bg, setBg] = useState(purple);
  const [name,setName] = useState('click Me');
  const bgChange = () =>{
    // console.log("clicked");
    let newBg = "#34495e";
    setBg(newBg);
    setName("Ouch..!!  😃");
  }
  const bgBack = ()=>{
    setBg(purple);
    setName("Ayeeo 👨 ")
  }
  return (
    <>
    <div style={{backgroundColor: bg}}>
        <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
    </div> 
    </>
 
  );
}

export default App;
