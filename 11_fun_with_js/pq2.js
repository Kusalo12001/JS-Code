async function value() {
  return 42;
}
console.log(value()); //Promise { 42 }  //js async function not return resolve value, return promise
//how to return 42
value().then(console.log);

//another way
async function run() {
  let v = await value();
  console.log(v);
}
run();
