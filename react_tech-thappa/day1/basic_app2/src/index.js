import React from 'react';
import ReactDOM from 'react-dom';
// import Heading from './Heading';
// import Para from './Para';
// import List from './List';
// import Note from './Note';

import App from './App';
import './index.css';

ReactDOM.render(
<>
<div>
<dd> Using basic react </dd>
<h1>My Name is Ganesh</h1>
<p>My friends are</p>
<ol>
  <li>Sachin</li>
  <li>Wahid</li>
  <li>Rahul</li>
  <li>Ayaz</li>
  <li>Akash</li>
  <li>Hemanth</li>
</ol>
</div>
</>
,document.getElementById('basicReact'));

ReactDOM.render(
<>
{/* <Note />
<Heading />
<Para />
<List /> */}
<App />
</>

,document.getElementById('componentReact'))

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
 

// );


