// singalton
// Object.create

//  object literals

const mysym = Symbol("key1")

const JsUser = {
    name: "Sahaj",
    "full name": "Sahaj Khalasi",
    age: 21,
    [mysym]: "myKey1",
    city: "Surat",
    email: "sahajkhalsi69@gmail.com",
    isLoggedIn: false,
    lastLogingDays: ["Sunday", "Monday"]
}

// console.log(JsUser.name);
// console.log(JsUser["city"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mysym]);

JsUser.email = "sahajkhalasi109@gmail.com"
// console.log(JsUser);
// Object.freeze(JsUser)
JsUser.email = "sahajkhalasi36@gmail.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function () {
    console.log(`Hello Js User ${this.name}`);
} 
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());