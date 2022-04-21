import React from 'react';

import * as operation from './Calculation';

function App(){
 <>
  <ul>
    <li> Sum of two num is  { operation.add(10,2)       }</li>
    <li> Sub of two num is  { operation.minuse(10,2)    }</li>
    <li> Prod of two num is { operation.multi(10,2)     }</li>
    <li> Div of two num is  { operation.division(10,2)  }</li>
  </ul>
</>
}

export default App;