
// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

// addTwoNumbers(3,"a")
// const result = addTwoNumbers(3,5)
// console.log(result);


function addTwoNumbers(number1, number2){
    let result = number1+number2
    return result       //or return number1+number2
    console.log("Can't print this console...");
}

const result = addTwoNumbers(3,5)
// console.log(result);
// console.log(typeof(result));

// --------------------------------------------------------------------

function loginUserMessage(username){
    return `${username} just loggedIn`
}

// console.log(loginUserMessage("Yatharth"));
// console.log(loginUserMessage());        //Undefined


// function loginUserMessage(username="sam")       //Default value
function loginUserMessage(username){
    if(username == undefined){
        console.log(`Please enter User name.`);
        return
    }
    return `${username} just loggedIn`
}

// console.log(loginUserMessage());  

// --------------------------------------------------------------------

function claculateCartPrice(...num1){
    return num1
}

// console.log(claculateCartPrice(500,200,400));

// --------------------------------------------------------------------

const user={
    username:"Yatharth",
    price:999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username:"sam",
//     price:999
// })