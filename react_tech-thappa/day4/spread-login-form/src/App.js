import './App.css';
import React,{useState} from 'react';


const App = () =>{

  let[ fullName,setFullName] = useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
  })


  const getData = (e) => {
    let{ name, value } = e.target;
    setFullName((preValue)=>{
      console.log(preValue);
      return(
        {
          ...preValue,
          [name]:value,
        }
      )


      /*
      if(name === 'fname'){
        return(
          {
            fname:value,
            lname: preValue.lname,
            email:preValue.email,
            phone:preValue.phone,
          }
        )       
      }else if(name === 'lname'){
        return(
          {
            fname:preValue.fname,
            lname:value,
            email:preValue.email,
            phone:preValue.phone,
          }
        )
      }else if(name === 'email'){
        return(
          {
            fname:preValue.fname,
            lname:preValue.lname,
            email:value,
            phone:preValue.phone
          }
        )
      }else if(name === 'phone'){
        return(
          {
            fname:preValue.fname,
            lname:preValue.lname,
            email:preValue.email,
            phone:value,
          }
        )
      }
      */
    })


  }
  

  const submitForm = (e) =>{
    e.preventDefault();
    alert("Form Submited");
  }
  return (    
      <>
      
      <form onSubmit={submitForm}> 
            <div>
            <h1>Spread in React | Login-Form</h1>
            <p><span>{fullName.fname}</span> <span>{fullName.lname}</span></p>
            <p><span>{fullName.email}</span> <span>{fullName.phone}</span></p>
                <h1>Form</h1>
                   <input type = "text" placeholder="Enter Name" name="fname" value={fullName.fname} onChange={getData} />
                   <input type = "text" placeholder="Enter password" name="lname" value={fullName.lname} onChange={getData} />
                   <input type = "text" placeholder="Enter email" name="email" value={fullName.email} onChange={getData} />
                   <input type = "text" placeholder="Enter phone" name="phone" value={fullName.phone} onChange={getData} />
                   <button type= "submit">Submit</button>
            </div>
      </form>
      
      
      
      
      
      
      
      
      
      </>
    
  )
}

export default App;
