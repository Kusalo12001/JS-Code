const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
//console.log(descriptor);
// console.log(Math.PI);
// Math.PI = 578;
// console.log(Math.PI);
// console.log(Math.floor(Math.PI));
// console.log(Math.ceil(Math.PI));

const kusal = {
  username: "kusal",
  email: "kusaL@gmail.com",
  password: 123,
  IsLogIn: function () {
    console.log(`${this.username} login`);
  },
};
//console.log(Object.getOwnPropertyDescriptor(kusal, "username"));
Object.defineProperty(kusal, "username", {
  writable: false,
  enumerable: false,
});
//console.log(Object.getOwnPropertyDescriptor(kusal, "username"));
for (let [key, value] of Object.entries(kusal)) {
  if (typeof value !== "function") {
    console.log(`${key}:${value}`);
  }
}
