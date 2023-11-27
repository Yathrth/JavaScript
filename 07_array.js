let myArr=[1,2,3,4,5]
// const myArr2 =new Array(1,2,3,4,5)

console.log(myArr.push(6));
console.log(myArr.push(7));
console.log(myArr.pop());
console.log(myArr);

console.log(myArr.unshift(9));   //Adds to the start of the array       
console.log(myArr.shift());      //Removes from the start of the array
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));    //-1
console.log(myArr.indexOf(3));

console.log("--------------------------------------------------------");

const newArr= myArr.join()

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

console.log("--------------------------------------------------------");

const myn1 = myArr.slice(1,3)     //Does'nt makes any changes in original array
console.log(myn1);
console.log(myArr);

const myn2 =myArr.splice(1,3)     //Changes the original array
console.log(myn2);
console.log(myArr);

console.log("--------------------------------------------------------");

const marvel_heros = ["Thor" ,"Ironman" ,"Spiderman"] 
const dc_heros = ["Superman" ,"Flash" ,"Batman"] 

marvel_heros.push(dc_heros)        //Array inside an array
const allHeros = marvel_heros.concat(dc_heros)      //Array inside an array
console.log(allHeros); 

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

console.log("--------------------------------------------------------");

const another_array = [1,2,3,4,[6,7,8],5,6,[5,6,7,[8,9]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log("--------------------------------------------------------");

console.log(Array.isArray("Yatharth"));
console.log(Array.from("Yatharth"));

console.log("--------------------------------------------------------");

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

