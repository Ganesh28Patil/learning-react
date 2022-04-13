// import logo from './logo.svg';
import './App.css';
  const mos = ["Andriod","Blackberry","iPhone","Windows Phone"];
  const mm = ["Samsung","HTC","Micromax","Apple"];
  const arr = [mos,mm];
 
function arrFun(i){
  // i++;
  return arr[i];
}
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
    </div>
  );
}
var k = -1;
function Heading({value}){
  return <p> <h1> Mobile {value}  </h1> 
  {      
    // arr[i]
    (k+1 === 0) ? arrFun(k+1).map((e)=>{  
      return  <ul>  <Listmos d ={e} /></ul>;        
    }) :  arrFun(k+2).map((e)=>{  
      return  <ul>  <Listmos d ={e} /></ul>;        
    })  
            
  }
</p>;
 
}
function Listmos({d}){  
  return <li>{d}</li>
}

// function Listmm({t}){
//   return <li>{t}</li>
//  }
export default App;

     /* <div>
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
      </div> */