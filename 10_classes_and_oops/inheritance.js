class User {
  constructor(username) {
    this.username = username;
  }
  LogMe() {
    console.log(`User name is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    (this.email = email), (this.password = password);
  }
  addCource() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const kusal = new Teacher("kusal", "kusal@gmail.com", 1234);
kusal.addCource();
kusal.LogMe();

const nilanjana = new User("nilanjana");
nilanjana.LogMe();
//not work
nilanjana.addCource();
