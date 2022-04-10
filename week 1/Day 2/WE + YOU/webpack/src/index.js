import {add, product} from "./calc";

import logo from "./file.png";

import("./index.css");
console.log(add(10,9));
console.log(product(5,6));

const h1 = document.createElement("h1");
h1.innerText = "wellcome to web pack";
h1.classList.add("redText");

document.getElementById("root").append(h1);

const image = document.createElement("img");
console.log(logo);
image.src = logo;
image.alt="ReactIcon";
document.getElementById("banner").append(image);