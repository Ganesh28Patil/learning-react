import React from "react";

const Image = (props) => {
    return (
        <>
            <img src={props.imgscr} alt="myPic" className="card_img"/>
        </>
    )
}

export default Image;