// import logo from './logo.svg';
import './App.css';
  const mos = ["Andriod","Blackberry","iPhone","Windows Phone"];
  const mm = ["Samsung","HTC","Micromax","Apple"];
  const array = ["Andriod","Blackberry","iPhone","Windows Phone"];

function App() {
  const headPoint = ["Operating System","Manufacturers"];

  // const mos = ["Andriod","Blackberry","iPhone","Windows Phone"];
  // const mm = ["Samsung","HTC","Micromax","Apple"];

  return (
    <div className="App">

      <div>
        {
            headPoint.map((e)=>{              
             return  <Heading value = {e} />      
              })
        }
      </div>
     
      {/* <div>
        {
          mos.map((e)=>{
            return  <Listmos d ={e} /> 
          })          
        }
      </div>
      
      <div>
        {
          mm.map((e)=>{
            return  <Listmm t ={e} /> 
          })          
        }
      </div> */}
      
    </div>
  );
}
function Heading({value}){
  return <p> <h1> Mobile {value}  </h1> 
  {
    array.map((e)=>{
      return <ul> <Listmos d ={e} /> </ul>
    })          
  }
</p>;
 
}
function Listmos({d}){
  return <li>{d}</li>
}
// function Listmm({t}){
//   return <li>{t}</li>
// }
export default App;
