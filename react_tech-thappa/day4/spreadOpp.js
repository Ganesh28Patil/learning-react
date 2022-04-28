
console.log("Spread Operator")


//  Using Sprad Operator in Arrays
let family = ["Zawru","Mangala","Rakesh","Ujwala","Deepali","Asmita","Ganesh"];
let [dad,mom,...siblings] = family;
console.log('mom:', mom)
console.log('dad:', dad)
console.log('siblings:', siblings)


let parents = ["Rakesh","Vaishali"];
let childeren = ["Bhumi","Yogi"];

let AiroliParty = [...parents,...childeren];
console.log('AiroliParty:', AiroliParty);

console.log(".............  Hande Family ------------");

let HandeFamily = [["Asha","shivaji"],"Shreed","vaibhav","Manoj","deeplai"];

let [handeParent,...HandePart2] = HandeFamily;
console.log('handeParent:', handeParent);

console.log('HandePart2:', HandePart2);


console.log(".............  Patil Parivar  ------------");

let [Parents,sisters,brothers]=[["Zawru","Mangala"],["Ujwala","Deeplai","Asmita"],["Rakesh","Ganesh"]];
console.log('Parents:', Parents)
console.log('sisters:', sisters)
console.log('brothers:', brothers)


let patilFamily = [Parents,sisters,brothers];
let [mmDad,...Siblings] = patilFamily;


console.log('mmDad:', mmDad)
console.log('Siblings:', Siblings)

// Using spread operator in object
const fullName = {
    fName:"Ganesh",
    lName:"Patil",
}
const bioData = {
    AdharNum: 448188267095,
    ...fullName,    
    Age:29,
    Gender:"Male",
    salary: 8+" LPA",
}

console.log('bioData:', bioData);
const masai = {
    name: {...fullName},
    batchCode: "fw13_"+109,
    unit:5,
}
console.log('masai:', masai);
