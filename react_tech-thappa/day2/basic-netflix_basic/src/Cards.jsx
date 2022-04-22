import React from "react";
import Heading from "./Heading";
import Title from "./Title";
import Image from "./Image";
function Cards(props){
 return   ( 
    <>
        <div className="cards">
          <div className="card">
            <Image imgscr = {props.imgscr}  />            
            <div className="card_info">            
              <Title title = {props.title} />
              <Heading sname = {props.sname} />              
                <a href={props.links} target="_blank" rel='noreferrer'>
                 <button className="btn">Watch Now</button>
                </a>   
            </div>
          </div>
        </div>
    </>
    );

}
export default Cards;