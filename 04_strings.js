const name="Yatharth"
const repoCount=50

// console.log(name + repoCount + "Value");  //this is old syntax

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

console.log("----------------------------------------------------------------------");

//Alternate method to declare a string

const gameName = new String("Yatharth")
console.log(`${gameName}`);
console.log(gameName);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

console.log("-----------------------------------------------------------");

const newStringOne = "     yatharth      "
console.log(newStringOne);
console.log(newStringOne.trim());

console.log("-----------------------------------------------------------");

const url ="https://yatharth.com/yatharth%20goswami"
console.log(url);
console.log(url.replace('%20','-'));

console.log(url.includes('goswami'));