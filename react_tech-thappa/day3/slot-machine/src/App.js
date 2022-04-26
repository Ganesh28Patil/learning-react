// import logo from './logo.svg';
import './App.css';

import React from 'react';
import SlotM  from './SlotMachine';

 
const App = () =>{
  return (
    <>
      <h1 className='heading_style'>
       🎰 Wellcome to <span style={{backgroundColor : "rgb(225, 220, 220)"}}> Slote Machine</span> 🎰 
       </h1>
       <div className='slotmachine'>
             <SlotM x = "😃" y = "😃" z = "😃" />
             <SlotM x = "😃" y = "🐵" z = "😃" />
             {/* <SlotM x = "🍊" y = "🍊" z = "🍊" /> */}
             <SlotM x = "🍺" y = "🍺" z = "🍺" />
       </div>
     
    </>

  )
}




export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header"></header>


//     </div>
//   );
// }

