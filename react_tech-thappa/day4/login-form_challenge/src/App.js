import './App.css';
import React , {useState} from "react";
const App = () =>{

  let [fullName,setfullName] = useState({
    fname: "",
    lname: "",
  })

  const getData = (e) =>{
    console.log(e.target.value);
    // const name = e.target.name;
    // const value = e.target.value;
    const {name,value} = e.target;

    // setfullName(e.target.value);
    setfullName((preValue) => {

      if(name == "fName"){
        return(
          {
            fname : value,
            lname : preValue.lname,
            email : preValue.email,
            phone:  preValue.phone,
  
          }
        )

      }else if(name == "lName"){
        return(
          {
            fname : preValue.fname,
            lname : value, 
            email : preValue.email,
            phone:  preValue.phone,
          }
        )
      }else  if(name == "email"){
        return(
          {
            fname : preValue.fname,
            lname : preValue.lname,
            email : value,
            phone:  preValue.phone,
  
          }
        )

      }else if(name == "phone"){
        return(
          {
            fname : preValue.fname,
            lname : preValue.lname, 
            email : preValue.email,
            phone:  value,
          }
        )
      }
    })
  }
  const submitForm = (e) =>{
    e.preventDefault();
    alert("form submited");
  }
  
  return(
    <>
     <form onSubmit={submitForm}>
          <div>
          <h1> Form | {fullName.fname} {fullName.lname} </h1>
          <p>{fullName.email}</p> <span>{fullName.phone}</span>
          <input type = "text" placeholder ="Enter Name"      name="fName" value={fullName.fname}  onChange={getData} />
          <input type = "text" placeholder = "Enter Password" name="lName" value={fullName.lname} onChange={getData}   />
          <input type = "email" placeholder ="Enter email"      name="email" value={fullName.email}  onChange={getData} />
          <input type = "number" placeholder = "Moobile Number" name="phone" value={fullName.phone} onChange={getData}   />
           <button type="submit"> Submit </button>
          </div>
     </form>

    </>
  )
}
export default App;
