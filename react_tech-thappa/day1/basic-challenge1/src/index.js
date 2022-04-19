import React from 'react';
import ReactDOM from 'react-dom'; // /client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';



// Challenge 1

ReactDOM.render(
 <>
 <h4>Challenge 1</h4>
 <h1>Thappa Technical Netflix Pick List</h1>
 <p>List of 5 Best Series :-</p>
 <ol>
 <li>Dark</li>
 <li>Break Bad</li>
 <li>Narcos</li>
 <li>Lost in Space</li>
 <li>Picky Binder</li>
 </ol>
 </>
,document.getElementById('task1'));




// Challenge 2
const fName = "Ganesh";
const lName = "Patil"
let date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();


ReactDOM.render(
<>
 <h4>Challenge 2</h4>
 <h1>{` My Name is ${fName} ${lName} `}</h1>
 <p>todays Date is {date}</p>
 <p>Current Time is {time}</p>

</>,document.getElementById('task2'));