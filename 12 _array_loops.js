// []
// [{},{},{}]

// ------------------------------------FOROF LOOP ->----------------------------------------

const arr =[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings="Hello World!"

for (const greet of greetings) {
    // console.log(greet);    
}

// ----------------------------------MAPS ->---------------------------------------------
// Similar to Array but holds unique value as key-pair 

// const map =new Map
// map.set("IN","INDIA")
// map.set("USA","UNITED STATES OF AMERICA")
// map.set("FR","FRANCE")
// map.set("IN","INDIA")

// console.log(map);

// for (const [key,value] of map) {
    // console.log(key);
    // console.log(value);
// }

// const myObject={
//     game1:'NFS',
//     game2:'Spiderman'
// }
            //forof does not works for objects

// for (const {key:value} of {myObject}) {
//     console.log(key);
// }

//--------------------------FORIN LOOP -> used mainly for objects------------------------------ 

// const myObject={
//     js: "javascript",
//     cpp: "C++",
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
// //    console.log(key);
// //    console.log(myObject[key]);
// //    console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming =["js","rb","py","java","cpp"]

// for (const key in programming) {
//   console.log(key);
//   console.log(programming[key]);
// }

// const map =new Map
// map.set("IN","INDIA")
// map.set("USA","UNITED STATES OF AMERICA")
// map.set("FR","FRANCE")
// map.set("IN","INDIA")

// for (const key in map) {
//    console.log(map[key]);
// }

//MAP's are not iteratable

//-------------------------------------FOREACH LOOP ->------------------------------------------------

const coding =["js","ruby","java","python","cpp"]

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((val, index, arr)=>{
//     console.log(val, index, arr);
// })

// const myCoding=[
//     {
//         languageName:"javascript",
//         languageFileName:"js"
//     },
//     {
//         languageName:"java",
//         languageFileName:"java"
//     },
//     {
//         languageName:"python",
//         languageFileName:"py"
//     }
// ]

// myCoding.forEach((item)=>{
//     console.log(item.languageName);
//     console.log(item.languageFileName);
// })

// foreach does'nt returns value so we use filter instd of it

//-------------------------------FILTER ->-----------------------------------

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=> num>5) //this will return implicitly

// const newNums = myNums.filter((num)=> {
//     return num>5
// })

// const newNums =[]

// myNums.forEach((num)=>{
//     if(num>5){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

// const myCoding=[
//         {
//            title:"Book One",
//            genre:"Fiction",
//            published:"1987",
//            edition:"2010"
//         },
//         {
//            title:"Book Two",
//            genre:"History",
//            published:"1986",
//            edition:"1996"
//         },
//         {
//            title:"Book Three",
//            genre:"Science",
//            published:"2011",
//            edition:"2016"
//         },
// ]

// const userBooks = myCoding.filter((bk)=>bk.genre==="History")

// const userBooks = myCoding.filter((bk)=>{
//      return bk.published>2010 && bk.genre=="Science"
// })

// console.log(userBooks);

// -------------------------------MAP->------------------------------------------
// It automatically returns the values unlike foreach

// const myNumers =[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumers.map((num)=> num + 10)
// const newNums = myNumers.map((num)=> { return num + 10})

//chaining in Map ->

// const newNums = myNumers.map((num)=>num*10).map((num)=>num+1)
// Here in the second map, the value of num will be after applying 
// the changes or first condition i.e [1*10, 2*10, 3*10,...] 

// const newNums = myNumers
//                 .map((num)=>num*10)
//                 .map((num)=>num+1)
//                 .filter((num)=>num>44)

// console.log(newNums);


//--------------------------------------REDUCE ->--------------------------------------------------

// const myNums = [1,2,3,4,5]

// const myTotal = myNums.reduce(function (accumulator, currentVal){
//     console.log(`accumulator: ${accumulator} & currentVal:${currentVal}`);
//     return accumulator + currentVal
// },0)
// here, accumulator = 0 + currentVal, accumulator = accumulator + currentVal, accumulator = accumulator + currentVal,... 

// const myTotal = myNums.reduce((acc, curr)=>acc + curr,0) 

// console.log(myTotal);


// const shoppingCart = [
//     {
//         itemName:"js course",
//         price: 2999
//     },
//     {
//         itemName:"py course",
//         price: 999
//     },
//     {
//         itemName:"mobile dev course",
//         price: 5999
//     },
// ]

// const total = shoppingCart.reduce((acc, item)=>acc + item.price,0)

// console.log(total);
