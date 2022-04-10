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

const h2 = React.createElement("h2",{id:"text"},"Hello Ganesh");
const p = React.createElement("p",{className:"blueText"},h2,"Wellcome to React Class");
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

