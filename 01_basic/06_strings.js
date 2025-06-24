let name = "kusal";
let age = 23;

//console.log(name + " " + age); //worst method

//console.log(`Hello, My name is ${name}. My age ${age}.`);  //best method
//String decleration another method

const gameName = new String("kusal");
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf("u"));

const newString = gameName.slice(0, 2);
//console.log(newString);

let country = "İstanbul";
//console.log(country.toLocaleLowerCase());

let csv = "apple,banana,orange";
//console.log(csv.split(","));

let csv1 = "apple banana orange";
//console.log(csv1.split(" "));

let csv2 = "apple";
//console.log(csv2.split(""));

let nameOne = "   kusal   ";
// console.log(nameOne);
// console.log(nameOne.trim());  //remove space
