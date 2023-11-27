const score=100
console.log(score);

const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

console.log("-----------------------------------------------");

const hundreds =1000000
console.log(hundreds.toLocaleString('en'));
console.log(hundreds.toLocaleString('en-IN'));

console.log("-------------------------Math------------------------");

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));

console.log(Math.round(5.4));
console.log(Math.ceil(6.2));
console.log(Math.floor(7.8));

console.log(Math.random());        //gives values btwn 0 and 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

console.log("-----------------------------------------------");

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min +1))+min);
