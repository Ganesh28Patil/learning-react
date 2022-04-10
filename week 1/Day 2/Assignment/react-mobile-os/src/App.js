// import logo from './logo.svg';
import './App.css';

function App() {
  const headPoint = ["Operating System","Manufacturers"];
  // const mos = ["Andriod","Blackberry","iPhone","Windows Phone"];
  // const mm = ["Samsung","HTC","Micromax","Apple"];

  return (
    <div className="App">

      <div>
        {
            headPoint.map((e)=>{ 
             return <Heading value = {e}/>      
              })
        }
      </div>
     
    
      
    </div>
  );
}
function Heading({d}){
  return <h1>Mobile {d}</h1>
}

export default App;
