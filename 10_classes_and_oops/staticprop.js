class User {
  constructor(username) {
    this.username = username;
  }
  LogMe() {
    console.log(`Usernmae : ${this.username}`);
  }
  static createId() {
    return "123";
  }
}

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const kusal = new User("kusal");
kusal.LogMe();
//console.log(kusal.createId());
const nilanjana = new Teacher("nilanjana", "nil@gmail.com");
nilanjana.LogMe();
//console.log(nilanjana.createId());
