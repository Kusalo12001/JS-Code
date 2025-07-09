//ES6

// class User {
//   constructor(username, email, password) {
//     (this.username = username),
//       (this.email = email),
//       (this.password = password);
//   }

//   encriptedPassword() {
//     return `${this.password}abc`;
//   }
//   changeUserName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const kusal = new User("kusal", "kusal@123gmail.com", 123);
// console.log(kusal);
// console.log(kusal.encriptedPassword());
// console.log(kusal.changeUserName());

//Behind the seen using function

function myUser(username, email, password) {
  (this.username = username), (this.email = email), (this.password = password);
}
myUser.prototype.enPassword = () => {
  return `${this.password}abc`;
};
myUser.prototype.chanUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const kusal = new myUser("kusal", "kusal@123gmail.com", 123);
console.log(kusal.enPassword());
console.log(kusal.chanUsername());
