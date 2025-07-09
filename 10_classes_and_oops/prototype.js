let myHero = ["Thor", "Spyderman"];

let herosPower = {
  Thor: "Hammer",
  Spyderman: "siling",

  getHerosPower: function () {
    console.log(`spriyd power is ${this.Spyderman}`);
  },
};

let heros = " I am fine";

Object.prototype.kusal = function () {
  console.log("kusal are present all heros");
};
Array.prototype.heykusal = function () {
  console.log("kusal say hello");
};

String.prototype.saykusal = function () {
  console.log("how are you?");
};

// herosPower.kusal();
//myHero.kusal();

//myHero.heykusal();

//not working
//herosPower.heykusal();

//myHero.saykusal();

//herosPower.saykusal();
//heros.saykusal();
//heros.heykusal();
//heros.kusal();

let userName = "kusal     ";
Object.prototype.trueLength = function () {
  console.log(this);

  console.log(`Length is : ${this.trim().length}`);
};

userName.trueLength();
"nulanjana".trueLength();
"nilasha".trueLength();
