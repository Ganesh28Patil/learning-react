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
,document.getElementById('challenge1'));




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

</>,document.getElementById('challenge2'));

// Challenge 3

let hour = new Date(2020,5,5,22);
 hour = hour.getHours();
 let text = "";

 let txtStyle = {};
 if(hour > 1 && hour < 12){
     text = "Morning";
     txtStyle.color="green"
 }else if(hour >= 12 && hour < 19){
     text = "Afternoon";
     txtStyle.color="red"
 }else{
     text = "Night";
     txtStyle.color="Blue"
 }
ReactDOM.render(
    <>
     <h4>Challenge 3</h4>
    <div className="box"> 
       
        <h1 className='headTxt'>Hello, Good <span style={txtStyle}> {text} </span></h1>
    </div>
    </>,document.getElementById('challenge3')
)


