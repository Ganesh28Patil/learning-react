import React,{ useState } from 'react';
import './App.css';

const  App = () =>{

  // useState returning object 
  let [fullName,setfullName] = useState({
    fname:'',
    lname:'',
  });
  // console.log('fullName:', fullName);
  
  const getInput =(e)=>{
    // console.log(e.target.value); // whatever we write on the i/p it reflects on console screen
    // console.log(e.target.name);  // this say's wheather it is fname or lname
    const name = e.target.name;    // this store In which i/p box (fname wala or lname wala)
    const value = e.target.value;  // this store whaterver we write on i/p box

    setfullName((prevValue) =>{
      console.log("p",prevValue.lname,prevValue.fname);
      if(name === "fName"){
        return(
          { 
            fname:value,
            lname:prevValue.lname,
          }
        )
      }else if(name === "lName"){
        return(
          {
            fname:prevValue.fname,
            lname:value,
          }
        )
      }

    })
  }
  const submitForm = (e)=>{
    e.preventDefault();
    alert("Form Submited");
  }
  return(
    <>
      <form onSubmit={submitForm}>
      <div>
        <h1>Form {fullName.fname}  {fullName.lname} </h1>
        <input type="text" name="fName" placeholder='Enter first' onChange={getInput} />
        <input type="text" name="lName" placeholder='Enter last'  onChange={getInput} />
        {/* <input type="text" placeholder='Enter email' onChange={getInput} />         */}
        <button type='submit'>Submit</button>


      </div>

      </form>
    </>
  )

}

export default App;
