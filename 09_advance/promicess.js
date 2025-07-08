// const promiseOne = new Promise(function (resolve, reject) {
//Do an async task
// DB calls, cryptography, network

//   setTimeout(() => {
//     console.log("async task is done");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("promice done");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async task 2 done");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve({ userName: "kusal", Email: "kusal@pal.com" });
//   }, 1000);
// });
// promiseThree.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ userName: "kusal", Email: "kusal@pal.com" });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });
// promiseFour
//   .then(function (user) {
//     console.log(user);
//     return user.Email;
//   })
//   .then(function (Email) {
//     console.log(Email);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("work is resolve or reject");
//   });

// const promiceFive = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ userName: "js", password: "123" });
//     } else {
//       reject("ERROR: js went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiceFive() {
//   try {
//     const responce = await promiceFive;
//     console.log(responce.userName);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiceFive();

//using async
// async function getAllUser() {
//   try {
//     const responce = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await responce.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUser();

//using then , catch

fetch("https://jsonplaceholder.typicode.com/users")
  .then((responce) => {
    return responce.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// promise.all
// yes this is also available, kuch reading aap b kro.
