class User {
  constructor(username, password) {
    (this.username = username), (this.password = password);
  }

  get username() {
    return this._username.toUpperCase();
  }
  set username(value) {
    this._username = value;
  }
  get password() {
    return this._password.toString();
  }
  set password(value) {
    this._password = value;
  }
}
const kusal = new User("kusal", 123);
console.log(kusal.username, kusal.password);
