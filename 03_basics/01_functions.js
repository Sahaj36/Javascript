
function MyName() {
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("A");
    console.log("J");
}

// MyName()


// function addToNumber(number1, number2) {
//     console.log(number1 + number2);
// }
function addToNumber(number1, number2) {
    // let result = (number1 + number2)
    // return result
    return number1 + number2
}
const result = addToNumber(3,6)

// console.log("result :", result);


function loginUserMessage(username = "Priyang"){
    if(!username) {
        console.log("Please enter your name");
        return
    }
    return `${username} Just Logged In`
}

// console.log(loginUserMessage("Sahaj"));
console.log(loginUserMessage("Sahaj"));