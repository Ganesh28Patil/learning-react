import React from 'react';
function App(){
    let txtStyle = {};

let greeting = "";
let CurrentDate = new Date();
let hour = CurrentDate.getDate();
if(hour > 1 && hour < 12){
  greeting = "Morning";
  txtStyle.color ="Green";
}else if(hour >= 12 && hour < 19){
  greeting = "Afternoon";
  txtStyle.color ="Yellow";
}else if(hour >= 19 && hour <=24){
  greeting = "Night";
  txtStyle.color ='Blue';

}

    return(
<>
<div className='cssStyle'>
<h1 >
    hello, Good <span  style = {txtStyle}> {greeting} </span>
</h1>
</div>
</>

    );
}
export default App;