//Stack (Primitive) , Heap (Non-Primitive)

//stack (copy of value)
let userEmail = "kusal@gmail.com";
let userEmail2 = userEmail;

userEmail2 = "kusal@google.com";

// console.log(userEmail);
// console.log(userEmail2);

//heap (referance of value)
let userOne = {
  name: "kusal",
  email: "kusal@gmail.com",
};
let userTwo = userOne;
//console.log(userTwo);
userTwo.email = "kusal@google.com";
console.log(userOne);
console.log(userTwo);
