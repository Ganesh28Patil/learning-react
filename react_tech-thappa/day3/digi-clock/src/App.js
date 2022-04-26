import  React, { useState } from 'react';
import './App.css';

const App = () => {
   
  let time = new Date().toLocaleTimeString();

  let [ctime,setCTime] = useState(time);
  const UpdateTime = () =>{
    time =  new Date().toLocaleTimeString();
    setCTime(time);
  }

  setInterval(UpdateTime,1000);


  return (
    <div className="App">
    <h1>Digital Clock</h1>
    <h1>{ctime}</h1>
    {/* <button onClick={UpdateTime}> get time</button> */}
    </div>
  );
}

export default App;
