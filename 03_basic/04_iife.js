// Immediately Invoked Function Expressions (IIFE)

//Global scope ki pollution sa bhi problem hoti ha kahi bar, so golbal scope ka variable or decleration ka pollution ko hatanay ka liya karta karta ha

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");
