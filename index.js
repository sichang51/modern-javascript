var moment = require("moment");
var math = require("mathjs");

console.log("Hello from Modern Javascript!!!");
let date = moment().startOf("day").fromNow();
console.log(date);
let today = moment().calendar();
console.log(today);
let date_time = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(date_time);
let some_math = math.sqrt(-4);
console.log(some_math);

var firstName = "John";
var lastName = "Smith";

console.log(`Good morning ${firstName} ${lastName}.`);

function Car(model, make, year) {
  this.model = model;
  this.make = make;
  this.year = year;
  this.getInfo = function () {
    return this.model + make + year;
  };
}

var f150 = new Car("F150", "Ford", 2018);
console.log(f150);
console.log(f150.year);
console.log(f150.getInfo());

document.querySelector("h1").style.backgroundColor = "red";
