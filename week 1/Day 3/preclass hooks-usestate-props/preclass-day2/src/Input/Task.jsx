import React from "react";


function Task(){
 const [query, setQuery] = React.useState("");
    const handleChange = (e) =>{
        console.log('e:', e);    
      }
    return (
        <div>
             <h1>TASK..!!</h1>
            <div>
                <input onChange={handleChange} type="text" placeholder=" Type somthing" />
            </div>
        </div>
    )
}
export {Task}