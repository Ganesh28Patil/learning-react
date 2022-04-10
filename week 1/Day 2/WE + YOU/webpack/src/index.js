import {add, product} from "./calc";

import React from "react";
import ReactDOM from "react-dom";
import logo from "./file.png";

import("./index.css");
console.log(add(10,9));
console.log(product(5,6));
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
const img = React.createElement("img",{src:"./src/file.png",alt:"ReactImg"})
const image = React.createElement("img",{width:"500px",height:"300px",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGMFjiKISnkW40QqO2C5zxKWLFs-L-9RTCg&usqp=CAU"})
const h2 = React.createElement("h2",{id:"text"},"Hello Ganesh");
const p = React.createElement("p",{className:"blueText"},h2,img,"Wellcome to React Class",image);
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

