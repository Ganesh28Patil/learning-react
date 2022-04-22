import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
import Cards from './Cards';
import Sdata from './sData';
// console.log('Sdata:', Sdata,Sdata.length)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 
 <>
    <h1 className='heading_style'>List of Top 5 Netflix Series in 2020</h1>

    <Cards  
      imgscr= "https://wallpapercave.com/wp/wp4056410.jpg"
      sname = "DARK"
      title = "Netflix Original Series"
      links = "https://www.netflix.com/in/title/89990668?source=35" />
    <Cards 
      sname  =   "Extra Curricular"
      imgscr = "https://m.media-amazon.com/images/M/MV5BNGQxMDcyOTEtZWZkNi00NzgwLWEzNjQtZmFhMGY5ZGRlMTdiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
      title  =  "Netflix original Series"
      links  =  "https://www.netflix.com/search?q=extra%20curricular&jbv=80990668"/>
    <Cards 
      sname  = "Stranger Things" 
      imgscr = "https://i.pinimg.com/originals/95/64/cc/9564cc5d91b06c8705bb95ea22b9e940.png" 
      title  = "Netflix Original Series" 
      links  = "https://www.netflix.com/in/title/89990668?source=35"
    />
    <Cards sname ={Sdata[0].sname} imgscr = {Sdata[0].imgscr} 
           title = {Sdata[0].title} links = {Sdata[0].links}
     />
     <Cards sname ={Sdata[1].sname} imgscr = {Sdata[1].imgscr} 
           title = {Sdata[1].title} links = {Sdata[1].links}
     />
     <Cards sname ={Sdata[2].sname} imgscr = {Sdata[2].imgscr} 
           title = {Sdata[2].title} links = {Sdata[2].links}
     />
     <Cards sname ={Sdata[3].sname} imgscr = {Sdata[3].imgscr} 
           title = {Sdata[3].title} links = {Sdata[3].links}
     />  
  
 </>

 
);


reportWebVitals();
