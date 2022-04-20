import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  kuchbhi, {favProg,sample,myName} from './App';
import * as ques from './App' ;

// ES6 Modules Import Export in React JS


ReactDOM.render(
<>
<ol>
  <li>{kuchbhi}</li>
  <li>{ques.default}</li>
  <li>{favProg}</li>
  <li>{sample}</li>
  <li>{myName}</li>
</ol>
</>
,document.getElementById('root'));


