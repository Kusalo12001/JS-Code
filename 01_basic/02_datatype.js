"use strict"; //treat all JS code as newer version
//JS enging are already present in browser
//alert(3+2)// we are using nodejs, not browser

//kis tarika sa data ko memory may rak sakta ha or access kar sakta ha ush ka basis par 2 type ha

//1. Premative
// premative datatype 7 type: String, Number, Boolean, null =>  it's empty  not zero, Bigint, undefined,Symbol

let age = 22;
//console.log("age: ", age, "type: ", typeof age);
//bigint
//string => ""
//boolean => true/false
//null => standalone value
//undefined =>value not asinge
//symbol =>unique
const userEmail = "kusal@gmail.com";
const isLogIn = true;
const temprature = null;
let city;
const id = Symbol("123");
const userId = Symbol("123");
console.log(id == userId); //false because values are same but in symbol it's unic
const bigNumber = 124647533848748n;
console.log(typeof bigNumber);
console.log(typeof undefined); // undefined
console.log(typeof null); //object

//2. Reference (Non Premative)
//Array , Object, Function
const gods = ["mahadev", "krishna", " jaganath"]; //array

let god = {
  name: "krishna",
  place: "brindhaban",
  work: " right driction provied",
  age: "Infinity",
}; //object

let myFunction = function () {
  console.log("hello world");
};

//link : https://262.ecma-international.org/5.1/#sec-11.4.3
