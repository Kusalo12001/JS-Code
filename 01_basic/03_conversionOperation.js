let score="33"

console.log(typeof score) //string 
let stringtoNumber=Number(score)
console.log(typeof stringtoNumber) // number 

let value="33abc"

console.log(typeof score) //string 
let valuetoNumber=Number(value)
console.log(typeof valuetoNumber) //number
console.log(valuetoNumber); //NaN

//"33" => 33
//"33ac" => NaN
//null => 0
//undefined => NaN
//true =>1; false=>0

let isLogIn=NaN
let userIsLogIn=Boolean(isLogIn)
console.log(typeof userIsLogIn , userIsLogIn);

//1=>true , 0=> false
// null => false
//""=> false
//"kusal"=> true
 let number=33
 let numbertoString=String(number)
 console.log(numbertoString, typeof numbertoString);
 //33=> "33"