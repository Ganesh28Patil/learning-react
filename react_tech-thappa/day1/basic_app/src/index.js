// import matchers from '@testing-library/jest-dom/matchers';
import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
// jsx => javascript xml
// jsx => javascript extension

root.render(
 <h1>Hello World</h1>,root
);
root2.render([<h1>hello React</h1>,<p>Learn & Apply</p>],root2);
// React.fragment
ReactDOM.render(
<>
<h1>React.fragment</h1>
<p>it is an alternate for array in jsx</p>
</>,document.getElementById("root3"));

// expressions in react 

const firstName = "Ganesh";
const middleName = "Zawru";
ReactDOM.render(
<>
  <h1>My name is {firstName} Patil</h1>
  <p>Check here  Random Number is {Math.floor((Math.random()*100))}</p>
{/* using  backticks `` in react */}
  <h2> {`My full name is ${firstName} ${middleName} Patil`}</h2>
</>
,document.getElementById("txt"));

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/200"
const img3 = "https://picsum.photos/400"

const frame = {
  height:"300px", width:"80%"
}
const data = {
  firstName:"Sachin",
  fontWeight:"bold",  
  marginLeft:"30px",
  color:"red"
}
ReactDOM.render(
<>
   <h1 className='txt' style={data}>{`My name is ${data.firstName}`}</h1>
  <div className = "imgBox" style={frame}>  
    <img src={img1} alt="random_image" />
    <img src={img2} alt="random_image" />
    <img src={img3} alt="random_image" />
  </div>
</>
,document.getElementById("attrbt"));



