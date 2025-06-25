//DATE

let mydate = new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toDateString());

let myCreatedDate = new Date(2001, 9, 1);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
let createdDate = new Date("01-10-2001");
//console.log(createdDate.toLocaleDateString());

let newDate = new Date();
//console.log(newDate);

// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());
// console.log(newDate.getMinutes());

// console.log(
//   newDate.toLocaleDateString("deaufalt", {
//     weekday: "long",
//     minute: "2-digit",
//   })
// );

let cars = ["Benz", "Innova", "Breeza", "Etios", "Dzire"];
cars.splice(2, 0, "ambassedor", "BMW", "Audi");
console.log("cars :", cars);
console.log(cars[2]);
