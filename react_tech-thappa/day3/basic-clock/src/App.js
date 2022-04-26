import { useState } from 'react';
import './App.css';

const App = () => {
  let newTime = new Date().toLocaleTimeString();

  const [ctime,setCtime] = useState(newTime);

  const UpdateTime = () =>{
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  }
  return (
    <div className="App">
      <h1>{ctime}</h1>
      <button onClick={UpdateTime}> get time</button>
    </div>
  );
}

export default App;
