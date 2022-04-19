import {add, product} from "./calc";

import React from "react";
import ReactDOM from "react-dom";

import logo from "./file.png";

import("./index.css");

console.log(add(10,9));
console.log(product(5,6));
// basic way to write DOM code

/*
const h1 = document.createElement("h1");
h1.innerText = "wellcome to web pack";
h1.classList.add("redText");

document.getElementById("root").append(h1);

const image = document.createElement("img");
console.log(logo);
image.src = logo;
image.alt="ReactIcon";
document.getElementById("banner").append(image);
*/
// basic React way to write ReactDOM code

/*
// const flag = false;

const flag = true;
const br = React.createElement("br",{},);
const img = React.createElement("img",{src:"./src/file.png",alt:"ReactImg"})
const image = React.createElement("img",{width:"500px",height:"300px",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGMFjiKISnkW40QqO2C5zxKWLFs-L-9RTCg&usqp=CAU"})
const h2 = React.createElement("h2",{id:"text"},"Hello Ganesh");
const p = React.createElement("p",{className:"blueText"},h2,img,"Wellcome to React Class",br,flag ? image: null);


ReactDOM.render(p,document.getElementById("txt1"));

const h1 = React.createElement("h1",{className:"redText"},"Hello React .....!");

ReactDOM.render(h1, // what
    document.getElementById("txt")  // where
    );

const root = document.getElementById("root");

ReactDOM.render(
    "Hello React", // what
    root // whaere
);

const th = React.createElement("th",{className:"cell"})
const tr = React.createElement("tr",{className:"row"},th,th,th,th);
const table = React.createElement("table",{},tr,tr,tr);
ReactDOM.render(table,document.getElementById("tBody"));
*/

// anternate way to write ReactDOM code using jsx

 
ReactDOM.render(
    <div>
        <h1>Hello React </h1>
        <img src="https://docs.microsoft.com/en-us/windows/images/react-native-android-emulator.png" height="500px" width="300px"/>
    </div>, // What: JSX
    document.getElementById("newRoot") // where
);


