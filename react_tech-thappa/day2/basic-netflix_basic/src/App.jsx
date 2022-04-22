import React from 'react';

import Cards from './Cards';
import Sdata from './sData';

// console.log('Sdata:', Sdata,Sdata.length)

// using simple function to pass component

// function ncard(val){
//   // console.log(val);
//   return(
//     <Cards 
//       imgscr = {val.imgscr} title = {val.title}
//       sname = {val.sname} links= {val.links}
//     />
//   );
// }

// array.map(function(currentValue,index,arr),thisValue);  // syntax for arrow function


const App = () =>{
    
    return(
         <>
            <h1 className='heading_style'>List of Top 5 Netflix Series in 2020</h1>
            {/* {Sdata.map(ncard)}   */}
            {/* using FAT ARROW Function to pass component */}

                 {Sdata.map((val,index) =>{
                   return (
                     <Cards
                         key = {val.id}
                         imgscr = {val.imgscr} title = {val.title}
                         sname = {val.sname} links= {val.links}
                     />
                   )
                 })}

          </>

 
);

}


export default App;
