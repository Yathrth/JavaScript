let score ="33"
// let score ="33ab"
// let score =null
// let score =undefined
// let score =true
// let score =false
// let score ="string"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber =Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

console.log("-------------------");

// let isLoggedIn = 1
// let isLoggedIn = ""
let isLoggedIn = "string"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "string" => true

console.log("-------------------");

let someNumber = 33

let stringNumber =String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
