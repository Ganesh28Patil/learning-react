import React,{useState} from 'react';
import './App.css';

function App() {
  const [email,setEmail] = useState("");
  const [pass,setPass] =useState("");
  return (
    <div className="App">
        <h1>Login- Form</h1>
        <form method='GET'>
            <label>Email</label>
            <input name="email" type="email" value= {email} onChange={(event) =>{setEmail(event.currentTarget.value)}} />
            <label>Password</label>
            <input name="pasword" type="password" value = {pass} onChange={(e)=>{setPass(e.currentTarget.value)}} />
            {/* <button type='submit'> Login</button> */}
            {/* <button onClick={(e)=>{console.log("button is working");e.preventDefault()}} type='submit'> Login</button> */}
            <button onClick={(e)=>{console.log("Email : ",email,"Password : ",pass);e.preventDefault()}} type='submit'> Login</button>
        </form>
        {/* <div>{email}</div><div>{pass}</div> */}
    </div>
  );
}

export default App;
