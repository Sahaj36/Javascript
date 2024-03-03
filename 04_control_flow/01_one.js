//  if
// const isUserloggedIn = true;
// const temperature = 36;

// if (temperature < 50) {
//   console.log("less then 50");
// } else {
//   console.log("temperture is greater than 50");
// }

//  <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test1");

// don't do this 
// if (balance > 500) console.log(test1) ,console.log("test2");

// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = true
const LoggedInFromEmail = false

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (LoggedInFromGoogle || LoggedInFromEmail) {
    console.log("User Logged In");
}