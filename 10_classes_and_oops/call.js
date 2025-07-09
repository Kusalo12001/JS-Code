function setuser(username) {
  this.username = username;
  console.log("called");
}

function createuser(username, email, password) {
  setuser.call(this, username);

  (this.email = email), (this.password = password);
}

const kusal = new createuser("kusal", "kusal@gmail.com", 123);
console.log(kusal);
const nilanjana = new createuser("nilanjana", "nil@132.com", 12353);
console.log(nilanjana);
