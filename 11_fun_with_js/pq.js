const obj = {
  a: 2,
  b: 3,
  sum() {
    return this.a + this.b; //here loose context and this is undefined
    //console.log(this.a);
  },
};

const res = obj.sum;
// what is the result
console.log(res()); //NaN    because this is undefined

// how to result show
const k = obj.sum.bind(obj);
console.log(k()); //5
// const l = obj.sum();
// console.log(l);//5
