let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

console.log("---------------------------------------------------");

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date("01-14-2023")
let myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleDateString());
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleTimeString());

console.log("---------------------------------------------------");

let myTimeStamp = Date.now()

console.log(myTimeStamp);   //gives time in milliseconds from 1970
console.log(myCreatedDate.getTime());

console.log("---------------------------------------------------");

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth()+1);
