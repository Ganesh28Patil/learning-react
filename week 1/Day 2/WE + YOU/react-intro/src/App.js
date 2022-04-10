// import logo from './logo.svg';
import './App.css';

function App() {
  const food = "Pizza";
  const age = 12;
  const skills = ["MERN","DSA","Design","Animations","Java","C#"];
  const hobby = ["Cycling","Walking","Trecking","Swiming","Movie Time"];
  return (
    <div className="App">
       <input />
      <button>Search</button>
     
     
      <img src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt='ImageMissing' />
  

     <p>Your fav Food is {food} , you are {age} year old.</p>

     <h1>You are {age > 18 ? " Eligible " : " Not Eligible "} for license</h1>

     <div>
       Your skills : 
       <ul>
         {
           skills.map((e) =>{
             return <li>{e}</li>;
           })
         }
       </ul>
     </div>
     <div>
       {skills.map((e) =>{
        //  return <p className='redText'>Skill : {e}</p>
          return <Skill  skill ={e} />;
       })}
     </div>

     <span>
       {
         hobby.map((ele)=>{
           return <Parameter value ={ele}/>
         })
       }
     </span>
    </div>
  );
}

function Skill({skill}){
  return <p className = 'redText'>Skill : {skill}</p>
}

function Parameter({value}){
  return <p className = 'blueWord'>Hobby : {value} </p>
}
export default App;
