const score = 400;
console.log(score);

const balence = new Number(150.65757);
console.log(balence);

console.log(balence.valueOf()); //[Number: 150.65757]
const string = balence.toString(); //150.65757
console.log(string, typeof string); //150.65757 string
console.log(balence.toFixed(2)); //150.66
console.log(balence.toPrecision(3)); //151

const hundred = 1000000;
console.log(hundred.toLocaleString("en-IN"));

***************************MATHS*************************/

console.log(Math.abs(-5));
console.log(Math.round(6.8));
console.log(Math.ceil(6.3));
console.log(Math.floor(6.5));
console.log(Math.min(3, 5, 2, 7));
console.log(Math.max(3, 5, 2, 7));

console.log(Math.random()); //value given between 0 or 1
console.log(Math.floor(Math.random() * 5 + 1));


