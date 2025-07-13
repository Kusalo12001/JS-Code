function User(username, password) {
  this._username = username;
  this._password = password;
  Object.defineProperty(this, "username", {
    get: function () {
      return this._username.toUpperCase();
    },
    set: function (value) {
      this._username = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toString();
    },
    set: function (value) {
      this._password = value;
    },
  });
}
const kusal = new User("kusal", 12345);
console.log(kusal.username);
