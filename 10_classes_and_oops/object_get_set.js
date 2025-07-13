let User = {
  _username: "kusal",
  _password: 123,

  get username() {
    return this._username.toUpperCase();
  },
  set username(value) {
    this._username = value;
  },
  get password() {
    return this._password.toString();
  },
  set password(value) {
    this._password = value;
  },
};
const kusal = Object.create(User);
console.log(kusal.username);
console.log(kusal.password);
