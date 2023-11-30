const mySym = Symbol("key1")

const JsUser={
    name: "yatharth",
    "full name": "Yatharth Goswami",       //this value can't be accessed using "."
    [mySym]: "mykey1",
    age: 21,
    location: "Meerut",
    email: "yatharth@google.com",
    isLoggedIn: false,
    lastLogininDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser["full name"]);
console.log(JsUser.mySym);                  //Will show undefined
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "yashu@google.com"
console.log(JsUser);
// Object.freeze(JsUser)
JsUser.email = "yeahshuuu...@google.com"
console.log(JsUser);

console.log("-------------------------------------------------------");

JsUser.greeting = function(){
    console.log("Hello!");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser);

console.log("-------------------------------------------------------");

const tinderUser = new Object()  
//const tinderUser ={}

tinderUser.id="123abc"
tinderUser.name="yatharth"
tinderUser.isLoggedIn=false

console.log(tinderUser);

console.log("-------------------------------------------------------");

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"yatharth",
            "lastname":"goswami"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

console.log("-------------------------------------------------------");

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 =Object.assign({},obj1, obj2)
// const obj3 =Object.assign(obj1, obj2)       //Object.assign(target,source)

const obj3 ={...obj1, ...obj2}

console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLogged"));


console.log("-------------------------------------------------------");
//Destructuring

const course={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor}=course
const {courseInstructor :instructor}=course
console.log(courseInstructor);
console.log(instructor);
