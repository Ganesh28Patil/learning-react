import matchers from '@testing-library/jest-dom/matchers';
import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
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
ReactDOM.render(
<>
  <h1>My name is {firstName} Patil</h1>
  <p>Check here  Random Number is {Math.floor((Math.random()*100))}</p>
</>
,document.getElementById("txt"));


// jsx => javascript xml
// jsx => javascript extension