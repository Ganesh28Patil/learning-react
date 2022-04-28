import React,{useState} from 'react';
import './App.css';

// we are rendering 2 names on the console.
const App = () =>{
  let [name,setName] = useState("");
  let [firstName,setFirstname]=useState("");

  let [secondName,setSecondName] = useState("");
  let [lastName,setlastName]= useState("");


  const getInput = (e)=>{
    console.log('e:', e.target.value);  
    setName(e.target.value);
  }
  const getInput2 = (e)=>{
    console.log('e:', e.target.value);  
    setSecondName(e.target.value);
  }

  const submitForm =(e) =>{
    e.preventDefault();
    setFirstname(name);
    setlastName(secondName);
  }
  return(
    <>
    <form onSubmit={submitForm}>
      <div>
        <h1>
          Wellcome {firstName} {lastName}
        </h1>
        <input type="text" placeholder="Enter First Name" onChange={getInput} />
        <input type="text" placeholder="Enter last Name"  onChange={getInput2} />

        <button type='submit'> Submit 😃</button>
      </div>
    </form>

    </>
  )
}

export default App;