import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  kuchbhi, {favProg,myName} from './App';
import * as anything from './App';

// ES6 Modules Import Export in React JS


ReactDOM.render(
<>
<ol>
  <li>Uisng kuchbhi at {kuchbhi}</li>
  <li>universal import concept by {anything.default}</li>
  <li>{favProg}</li>
  <li>this way we learned  {anything.sample} </li>
  <li>Importing a {myName()} or functions in jsx</li>
</ol>
</>
,document.getElementById('root'));


