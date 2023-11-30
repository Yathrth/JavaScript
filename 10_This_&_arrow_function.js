// const user={
//     username:"Yatharth",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username},welcome to the website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()
// console.log(user);

// console.log(this);

// function chai(){
//     let username ="yatharth"
//     console.log(this.username);  //this does'nt works with fxns.
//     // console.log(this); 
// }

// chai()



// -------------------------Arrow fxn.---------------------------


// const chai = () =>{
//     let username ="Yatharth"
//     console.log(this);
//     console.log(this.username);
// }

// chai()
// chai(chai.username)

// const addTwo = (num1, num2)=>{
//     return num1+num2
// }

//Alternate way of writing arrow fxn. is:

// const addTwo = (num1, num2)=> (num1+num2)   //implicit return

// const addTwo = (num1, num2)=> num1+num2   //implicit return

//when returning ana object

// const addTwo = (num1, num2) => ({username:"Yatharth"})

// console.log(addTwo(2,3));



// ---------------Immediately Invoked Function Expressions (IIFE)-----------------------

// when we have to run the function Immediately as soon as the program
// starts and without getting it polluted by global scope variables,
// then we use IIFM

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

// (function chai(){           // (fxn. definition)(execution)
//     console.log(`DB CONNECTED`);
// })();                       //  ";" is added to end the running fxn.

// here(above) "chai" is an named IIFE

// ( ()=>{
//     console.log(`DB CONNECTED`);
// } )();

// ( (name)=>{
//     console.log(`DB CONNECTED ${name}`);
// } )("Yatharth");
